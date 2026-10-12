"use client";
import {forwardRef,useEffect,useImperativeHandle,useRef,useState} from "react";
import {Volume2,VolumeX,Check,CloudLightning,CloudRain,Wind,Waves,Music2,Bird,Droplets} from "lucide-react";
import "./MeditationAudio.css";

export type MeditationAudioHandle={start:()=>Promise<void>};
type Sound={context:AudioContext;master:GainNode;stop:()=>void};
const presets=[
  {id:"thunder",en:"Thunder & Rain",si:"අකුණු ගිගුරුම් සහ වැස්ස",icon:CloudLightning},
  {id:"rain",en:"Rain Only",si:"වැස්ස පමණක්",icon:CloudRain},
  {id:"wind",en:"Wind",si:"සුළඟ",icon:Wind},
  {id:"sea",en:"Sea",si:"මුහුදු රළ",icon:Waves},
  {id:"serenity",en:"Serenity · Warm ambient",si:"සන්සුන් බව · මෘදු ස්වර",icon:Music2},
  {id:"deep",en:"Deep stillness · Low drone",si:"ගැඹුරු නිහඬතාව · පහත් ස්වර",icon:Music2},
  {id:"lotus",en:"Lotus garden · Gentle harmony",si:"නෙළුම් උයන · මෘදු සුසංයෝගය",icon:Music2},
  {id:"floating",en:"Floating light · Airy tones",si:"පාවෙන ආලෝකය · සැහැල්ලු ස්වර",icon:Music2},
  {id:"calm",en:"Calm breath · Soft breeze",si:"සන්සුන් හුස්ම · මඳ සුළඟ",icon:Music2},
  {id:"night",en:"Night meditation · Deep warmth",si:"රාත්‍රී භාවනාව · ගැඹුරු ස්වර",icon:Music2},
  {id:"dawn",en:"Morning clarity · Bright calm",si:"උදෑසන පැහැදිලිකම · සන්සුන් ස්වර",icon:Music2},
  {id:"birds",en:"Morning birds",si:"උදෑසන කුරුල්ලෝ",icon:Bird},
  {id:"drops",en:"Water drops",si:"දිය බිඳු",icon:Droplets},
  {id:"stream",en:"Forest stream",si:"වනාන්තර දිය පහර",icon:Waves},
  {id:"breeze",en:"Forest breeze",si:"වනාන්තර මඳ සුළඟ",icon:Wind}
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

  const music:Record<string,{notes:number[];breeze:number;speed:number}>={
    serenity:{notes:[130.81,164.81,196,261.63],breeze:.07,speed:.055},
    deep:{notes:[65.41,98,130.81,196],breeze:.10,speed:.025},
    lotus:{notes:[146.83,174.61,220,293.66],breeze:.08,speed:.065},
    floating:{notes:[174.61,220,261.63,349.23],breeze:.05,speed:.085},
    calm:{notes:[110,164.81,220,329.63],breeze:.16,speed:.04},
    night:{notes:[73.42,110,146.83,220],breeze:.12,speed:.035},
    dawn:{notes:[164.81,196,246.94,329.63],breeze:.06,speed:.075},
    birds:{notes:[196,261.63,329.63,392],breeze:.13,speed:.065},
    drops:{notes:[130.81,196,261.63,329.63],breeze:.11,speed:.045},
    stream:{notes:[110,164.81,220,293.66],breeze:.30,speed:.04},
    breeze:{notes:[130.81,164.81,196,261.63],breeze:.26,speed:.055}
  };
  const selected=music[id];
  if(selected){
    selected.notes.forEach((frequency,index)=>{
      const osc=context.createOscillator(),gain=context.createGain(),lfo=context.createOscillator(),depth=context.createGain();
      osc.type=index===0?"sine":"triangle";osc.frequency.value=frequency;
      gain.gain.value=[.16,.085,.055,.028][index];
      lfo.frequency.value=selected.speed*(1+index*.19);depth.gain.value=[.018,.012,.009,.006][index];
      osc.connect(gain);gain.connect(master);lfo.connect(depth);depth.connect(gain.gain);
      osc.start();lfo.start();sources.push(osc,lfo);nodes.push(gain,depth);
    });
    const ambience=noise(id==="stream"?1800:id==="breeze"?650:450,selected.breeze);
    modulation(ambience,id==="stream"?.19:.085,id==="stream"?.075:.035);
    if(id==="birds"||id==="drops"||id==="stream"){
      for(let i=0;i<(id==="birds"?3:2);i++){
        const chirp=context.createOscillator(),tone=context.createGain(),pulse=context.createOscillator(),shape=context.createGain();
        chirp.frequency.value=id==="birds"?[880,1174,1568][i]:[740,988][i];
        pulse.frequency.value=(id==="birds"?.42:.72)+i*.21;shape.gain.value=id==="birds"?.018:.026;tone.gain.value=.005;
        pulse.connect(shape);shape.connect(tone.gain);chirp.connect(tone);tone.connect(master);
        chirp.start();pulse.start();sources.push(chirp,pulse);nodes.push(tone,shape);
      }
    }
  }
  return {context,master,stop:()=>{sources.forEach(src=>{try{src.stop();}catch{}src.disconnect();});nodes.forEach(node=>node.disconnect());}};
}
const MeditationAudio=forwardRef<MeditationAudioHandle,{running:boolean;locale:"en"|"si"}>(function MeditationAudio({running,locale},ref){
  const sound=useRef<Sound|null>(null);
  const [track,setTrack]=useState<PresetId>("serenity"),[muted,setMuted]=useState(false),[volume,setVolume]=useState(30),[available,setAvailable]=useState(true);
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
    <div className="meditation-audio-heading"><Volume2 size={18}/><strong>{t("Meditation audio","භාවනා හඬ")}</strong><span aria-live="polite">{!available?t("Audio unavailable · timer still works","හඬ ලබාගත නොහැක · වේලාව ක්‍රියා කරයි"):muted||volume===0?t("Muted","හඬ නිහඬයි"):running?t("Nature sound playing","ස්වභාවික හඬ වාදනය වේ"):t("Starts with your practice","පුහුණුව සමඟ ඇරඹේ")}</span></div>
    <div className="soundscape-title">{t("Choose a soundscape","පසුබිම් හඬක් තෝරන්න")}</div>
    <div className="soundscape-grid" role="group" aria-label={t("Choose a nature sound","ස්වභාවික හඬක් තෝරන්න")}>{presets.map(item=>{const Icon=item.icon;return <button type="button" key={item.id} className={"soundscape-choice"+(track===item.id?" selected":"")} aria-pressed={track===item.id} onClick={()=>setTrack(item.id)}><Icon size={18} strokeWidth={1.6}/><span>{locale==="si"?item.si:item.en}</span>{track===item.id&&<Check size={15} className="soundscape-check"/>}</button>;})}</div>
    <div className="meditation-audio-controls"><button type="button" className="icon-button" aria-label={muted?t("Unmute nature sounds","හඬ සක්‍රිය කරන්න"):t("Mute nature sounds","හඬ නිහඬ කරන්න")} aria-pressed={muted} onClick={()=>setMuted(value=>!value)}>{muted||volume===0?<VolumeX size={20}/>:<Volume2 size={20}/>}</button><label htmlFor="meditation-volume">{t("Volume","හඬ මට්ටම")}</label><input id="meditation-volume" type="range" min="0" max="100" step="1" value={volume} onChange={event=>setVolume(Number(event.target.value))}/><output htmlFor="meditation-volume">{volume}%</output></div>
    <p>{t("Choose from ambient music and nature-inspired sounds, generated in your browser.","බ්‍රවුසරය තුළ ජනනය වන මෘදු සංගීතය සහ ස්වභාවික හඬ තෝරන්න.")}</p>
  </div>;
});
export default MeditationAudio;
