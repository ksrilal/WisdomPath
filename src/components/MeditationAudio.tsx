"use client";
import {forwardRef,useEffect,useImperativeHandle,useRef,useState} from "react";
import {Volume2,VolumeX,Check,CloudLightning,CloudRain,Wind,Waves} from "lucide-react";
import "./MeditationAudio.css";

export type MeditationAudioHandle={start:()=>Promise<void>};
type Sound={context:AudioContext;master:GainNode;stop:()=>void};
const presets=[
  {id:"thunder",en:"Thunder & Rain",si:"අකුණු ගිගුරුම් සහ වැස්ස",icon:CloudLightning},
  {id:"rain",en:"Rain Only",si:"වැස්ස පමණක්",icon:CloudRain},
  {id:"wind",en:"Wind",si:"සුළඟ",icon:Wind},
  {id:"sea",en:"Sea",si:"මුහුදු රළ",icon:Waves}
] as const;
type PresetId=typeof presets[number]["id"];
function buildSound(context:AudioContext,master:GainNode,id:PresetId):Sound{
  const sources:(AudioBufferSourceNode|OscillatorNode)[]=[];
  const nodes:AudioNode[]=[];
  const buffer=context.createBuffer(1,context.sampleRate*5,context.sampleRate);
  const data=buffer.getChannelData(0);
  for(let i=0;i<data.length;i++)data[i]=Math.random()*2-1;
  function noise(frequency:number,level:number,type:BiquadFilterType="lowpass"){
    const src=context.createBufferSource(),filter=context.createBiquadFilter(),gain=context.createGain();
    src.buffer=buffer;src.loop=true;filter.type=type;filter.frequency.value=frequency;gain.gain.value=level;
    src.connect(filter);filter.connect(gain);gain.connect(master);src.start();
    sources.push(src);nodes.push(filter,gain);return gain;
  }
  function modulation(gain:GainNode,rate:number,depth:number){
    const osc=context.createOscillator(),amount=context.createGain();
    osc.type="sine";osc.frequency.value=rate;amount.gain.value=depth;
    osc.connect(amount);amount.connect(gain.gain);osc.start();
    sources.push(osc);nodes.push(amount);
  }
  if(id==="rain"||id==="thunder"){
    noise(4200,0.14);noise(900,0.10,"bandpass");
    const patter=noise(2400,0.065,"highpass");
    modulation(patter,0.8,0.025);
  }
  if(id==="wind"){
    const gust=noise(620,0.12);modulation(gust,0.10,0.10);
    const air=noise(1400,0.04,"bandpass");modulation(air,0.18,0.025);
  }
  if(id==="sea"){
    const surf=noise(1500,0.13);modulation(surf,0.105,0.115);
    const foam=noise(3800,0.07,"highpass");modulation(foam,0.105,0.06);
    const undertow=noise(210,0.07);modulation(undertow,0.105,0.055);
  }
  if(id==="thunder"){
    // Low filtered noise with a slow envelope makes intermittent distant thunder.
    const thunderNoise=context.createBufferSource(),low=context.createBiquadFilter(),rumble=context.createGain();
    thunderNoise.buffer=buffer;thunderNoise.loop=true;low.type="lowpass";low.frequency.value=125;
    rumble.gain.value=0;thunderNoise.connect(low);low.connect(rumble);rumble.connect(master);thunderNoise.start();
    sources.push(thunderNoise);nodes.push(low,rumble);
    const interval=13.5;
    const schedule=()=>{
      const now=context.currentTime;
      for(let i=0;i<5;i++){
        const start=now+4+i*interval+(i%3)*2;
        rumble.gain.setValueAtTime(0,start);
        rumble.gain.linearRampToValueAtTime(0.24,start+0.7);
        rumble.gain.exponentialRampToValueAtTime(0.001,start+5.5);
        rumble.gain.setValueAtTime(0,start+5.6);
      }
    };
    schedule();
    // Refresh the envelope while active, without JS timers.
    const pulse=context.createOscillator(),pulseGain=context.createGain();
    pulse.type="sine";pulse.frequency.value=1/interval;pulseGain.gain.value=0.055;
    pulse.connect(pulseGain);pulseGain.connect(rumble.gain);pulse.start();
    sources.push(pulse);nodes.push(pulseGain);
  }
  return {context,master,stop:()=>{sources.forEach(src=>{try{src.stop();}catch{}src.disconnect();});nodes.forEach(node=>node.disconnect());}};
}
const MeditationAudio=forwardRef<MeditationAudioHandle,{running:boolean;locale:"en"|"si"}>(function MeditationAudio({running,locale},ref){
  const sound=useRef<Sound|null>(null);
  const [track,setTrack]=useState<PresetId>("rain"),[muted,setMuted]=useState(false),[volume,setVolume]=useState(30),[available,setAvailable]=useState(true);
  const t=(en:string,si:string)=>locale==="si"?si:en;
  useImperativeHandle(ref,()=>({async start(){
    try{
      if(!sound.current){const context=new AudioContext(),master=context.createGain();master.gain.value=0;master.connect(context.destination);sound.current=buildSound(context,master,track);}
      await sound.current.context.resume();setAvailable(true);
    }catch{setAvailable(false);}
  }}),[track]);
  useEffect(()=>{
    const current=sound.current;if(!current)return;
    current.master.gain.setTargetAtTime(running&&!muted?volume/100:0,current.context.currentTime,0.25);
  },[running,muted,volume]);
  useEffect(()=>{
    const current=sound.current;if(!current)return;
    const {context,master}=current;
    master.gain.setTargetAtTime(0,context.currentTime,0.08);
    current.stop();sound.current=buildSound(context,master,track);
    master.gain.setTargetAtTime(running&&!muted?volume/100:0,context.currentTime+0.15,0.3);
    // Switching presets should not interrupt the practice timer.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[track]);
  useEffect(()=>()=>{const current=sound.current;sound.current=null;if(current){current.stop();void current.context.close().catch(()=>{});}},[]);
  return <div className="meditation-audio">
    <div className="meditation-audio-heading"><Volume2 size={18}/><strong>{t("Nature sounds","ස්වභාවික හඬ")}</strong><span aria-live="polite">{!available?t("Audio unavailable · timer still works","හඬ ලබාගත නොහැක · වේලාව ක්‍රියා කරයි"):muted||volume===0?t("Muted","හඬ නිහඬයි"):running?t("Nature sound playing","ස්වභාවික හඬ වාදනය වේ"):t("Starts with your practice","පුහුණුව සමඟ ඇරඹේ")}</span></div>
    <div className="soundscape-title">{t("Choose a nature sound","ස්වභාවික හඬක් තෝරන්න")}</div>
    <div className="soundscape-grid" role="group" aria-label={t("Choose a nature sound","ස්වභාවික හඬක් තෝරන්න")}>{presets.map(item=>{const Icon=item.icon;return <button type="button" key={item.id} className={"soundscape-choice"+(track===item.id?" selected":"")} aria-pressed={track===item.id} onClick={()=>setTrack(item.id)}><Icon size={18} strokeWidth={1.6}/><span>{locale==="si"?item.si:item.en}</span>{track===item.id&&<Check size={15} className="soundscape-check"/>}</button>;})}</div>
    <div className="meditation-audio-controls"><button type="button" className="icon-button" aria-label={muted?t("Unmute nature sounds","හඬ සක්‍රිය කරන්න"):t("Mute nature sounds","හඬ නිහඬ කරන්න")} aria-pressed={muted} onClick={()=>setMuted(value=>!value)}>{muted||volume===0?<VolumeX size={20}/>:<Volume2 size={20}/>}</button><label htmlFor="meditation-volume">{t("Volume","හඬ මට්ටම")}</label><input id="meditation-volume" type="range" min="0" max="100" step="1" value={volume} onChange={event=>setVolume(Number(event.target.value))}/><output htmlFor="meditation-volume">{volume}%</output></div>
    <p>{t("Four nature-inspired soundscapes generated in your browser. No downloads or background music.","බ්‍රවුසරය තුළ ජනනය වන ස්වභාවික හඬ හතරක්. සංගීතයක් හෝ බාගැනීම් අවශ්‍ය නැත.")}</p>
  </div>;
});
export default MeditationAudio;
