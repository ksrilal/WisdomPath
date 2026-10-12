"use client";
import {forwardRef,useEffect,useImperativeHandle,useRef,useState} from "react";
import {Volume2,VolumeX,Check,Music2,Bird,Droplets,CloudRain,Wind,Waves} from "lucide-react";
import "./MeditationAudio.css";

export type MeditationAudioHandle={start:()=>Promise<void>};
type Voice={osc:OscillatorNode;gain:GainNode};
type Sound={context:AudioContext;master:GainNode;voices:Voice[];nodes:AudioNode[]};
const presets=[
  {id:"serenity",en:"Serenity · Warm ambient",si:"සන්සුන් බව · මෘදු ස්වර",notes:[130.81,164.81,196,261.63],breeze:0.07,speed:0.055},
  {id:"deep",en:"Deep stillness · Low drone",si:"ගැඹුරු නිහඬතාව · පහත් ස්වර",notes:[65.41,98,130.81,196],breeze:0.10,speed:0.025},
  {id:"lotus",en:"Lotus garden · Gentle harmony",si:"නෙළුම් උයන · මෘදු සුසංයෝගය",notes:[146.83,174.61,220,293.66],breeze:0.08,speed:0.065},
  {id:"floating",en:"Floating light · Airy tones",si:"පාවෙන ආලෝකය · සැහැල්ලු ස්වර",notes:[174.61,220,261.63,349.23],breeze:0.05,speed:0.085},
  {id:"calm",en:"Calm breath · Soft breeze",si:"සන්සුන් හුස්ම · මඳ සුළඟ",notes:[110,164.81,220,329.63],breeze:0.16,speed:0.04},
  {id:"night",en:"Night meditation · Deep warmth",si:"රාත්‍රී භාවනාව · ගැඹුරු ස්වර",notes:[73.42,110,146.83,220],breeze:0.12,speed:0.035},
  {id:"dawn",en:"Morning clarity · Bright calm",si:"උදෑසන පැහැදිලිකම · සන්සුන් ස්වර",notes:[164.81,196,246.94,329.63],breeze:0.06,speed:0.075},
  {id:"birds",en:"Morning birds",si:"උදෑසන කුරුල්ලෝ",notes:[196,261.63,329.63,392],breeze:0.13,speed:0.065},
  {id:"drops",en:"Water drops",si:"දිය බිඳු",notes:[130.81,196,261.63,329.63],breeze:0.11,speed:0.045},
  {id:"stream",en:"Forest stream",si:"වනාන්තර දිය පහර",notes:[110,164.81,220,293.66],breeze:0.30,speed:0.04},
  {id:"rain",en:"Gentle rain",si:"මෘදු වැස්ස",notes:[98,146.83,196,293.66],breeze:0.36,speed:0.03},
  {id:"breeze",en:"Forest breeze",si:"වනාන්තර මඳ සුළඟ",notes:[130.81,164.81,196,261.63],breeze:0.26,speed:0.055}
];
function buildSound(context:AudioContext,preset:typeof presets[number],master:GainNode):Sound{
  const voices:Voice[]=[];const nodes:AudioNode[]=[];
  const delay=context.createDelay(1),feedback=context.createGain(),wet=context.createGain();
  delay.delayTime.value=0.42;feedback.gain.value=0.20;wet.gain.value=0.15;
  delay.connect(feedback);feedback.connect(delay);delay.connect(wet);wet.connect(master);
  nodes.push(delay,feedback,wet);
  preset.notes.forEach((frequency,index)=>{
    const osc=context.createOscillator(),gain=context.createGain();
    osc.type=index===0?"sine":"triangle";osc.frequency.value=frequency;
    gain.gain.value=0.0001;osc.connect(gain);gain.connect(master);gain.connect(delay);
    const lfo=context.createOscillator(),depth=context.createGain();
    lfo.type="sine";lfo.frequency.value=preset.speed*(1+index*0.19);
    depth.gain.value=[0.018,0.012,0.009,0.006][index];
    lfo.connect(depth);depth.connect(gain.gain);
    const base=[0.16,0.085,0.055,0.028][index];
    gain.gain.setTargetAtTime(base,context.currentTime,1.8);
    osc.start();lfo.start();voices.push({osc,gain},{osc:lfo,gain:depth});nodes.push(gain,depth);
  });
  const buffer=context.createBuffer(1,context.sampleRate*3,context.sampleRate);
  const data=buffer.getChannelData(0);
  for(let i=0;i<data.length;i++)data[i]=(Math.random()*2-1)*0.12;
  const noise=context.createBufferSource(),filter=context.createBiquadFilter(),noiseGain=context.createGain();
  noise.buffer=buffer;noise.loop=true;filter.type="lowpass";filter.frequency.value=300;
  noiseGain.gain.value=preset.breeze;noise.connect(filter);filter.connect(noiseGain);noiseGain.connect(master);noise.start();
  voices.push({osc:noise as unknown as OscillatorNode,gain:noiseGain});nodes.push(filter,noiseGain);
  // Naturalistic textures use browser synthesis, with no external audio assets.
  const nature=["birds","drops","stream","rain","breeze"].includes(preset.id);
  if(nature){
    const water=preset.id==="stream"||preset.id==="rain";
    filter.frequency.value=water?1800:preset.id==="breeze"?650:950;
    noiseGain.gain.value=water?0.23:preset.id==="breeze"?0.16:0.08;
    // Gentle fluctuations avoid a static white-noise sound.
    const swell=context.createOscillator(),swellDepth=context.createGain();
    swell.frequency.value=water?0.19:0.085;swellDepth.gain.value=water?0.075:0.035;
    swell.connect(swellDepth);swellDepth.connect(noiseGain.gain);swell.start();
    voices.push({osc:swell,gain:swellDepth});nodes.push(swellDepth);
    if(preset.id==="birds"||preset.id==="drops"||preset.id==="stream"){
      const count=preset.id==="birds"?3:2;
      for(let i=0;i<count;i++){
        const chirp=context.createOscillator(),tone=context.createGain(),pulse=context.createOscillator(),shape=context.createGain(),pitch=context.createOscillator(),bend=context.createGain();
        chirp.type="sine";chirp.frequency.value=preset.id==="birds"?[880,1174,1568][i]:[740,988][i];
        pulse.frequency.value=(preset.id==="birds"?0.42:0.72)+i*0.21;
        shape.gain.value=preset.id==="birds"?0.018:0.026;
        tone.gain.value=0.005;
        pulse.connect(shape);shape.connect(tone.gain);
        pitch.frequency.value=pulse.frequency.value; bend.gain.value=preset.id==="birds"?220:95;
        pitch.connect(bend);bend.connect(chirp.frequency);
        chirp.connect(tone);tone.connect(master);
        chirp.start();pulse.start();pitch.start();
        voices.push({osc:chirp,gain:tone},{osc:pulse,gain:shape},{osc:pitch,gain:bend});
        nodes.push(tone,shape,bend);
      }
    }
  }
  return {context,master,voices,nodes};
}
function stopSound(sound:Sound){
  sound.voices.forEach(({osc})=>{try{osc.stop();}catch{}osc.disconnect();});
  sound.nodes.forEach(node=>node.disconnect());
}
const MeditationAudio=forwardRef<MeditationAudioHandle,{running:boolean;locale:"en"|"si"}>(function MeditationAudio({running,locale},ref){
  const sound=useRef<Sound|null>(null);
  const [track,setTrack]=useState(presets[0].id),[muted,setMuted]=useState(false),[volume,setVolume]=useState(30),[available,setAvailable]=useState(true);
  const t=(en:string,si:string)=>locale==="si"?si:en;
  useImperativeHandle(ref,()=>({async start(){
    try{
      if(!sound.current){
        const context=new AudioContext(),master=context.createGain();
        master.gain.value=0;master.connect(context.destination);
        sound.current=buildSound(context,presets.find(p=>p.id===track)??presets[0],master);
      }
      await sound.current.context.resume();
      setAvailable(true);
    }catch{setAvailable(false);}
  }}),[track]);
  useEffect(()=>{
    const current=sound.current;if(!current)return;
    const {context,master}=current;
    if(!running){master.gain.setTargetAtTime(0,context.currentTime,0.12);return;}
    master.gain.setTargetAtTime(muted?0:volume/100,context.currentTime,0.35);
  },[running,muted,volume]);
  useEffect(()=>{
    const current=sound.current;if(!current)return;
    const {context,master}=current;
    master.gain.setTargetAtTime(0,context.currentTime,0.12);
    const next=buildSound(context,presets.find(p=>p.id===track)??presets[0],master);
    stopSound(current);sound.current=next;
    master.gain.setTargetAtTime(running&&!muted?volume/100:0,context.currentTime+0.3,0.6);
  // Only rebuild when the selected soundscape changes.
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[track]);
  useEffect(()=>()=>{const current=sound.current;sound.current=null;if(current){stopSound(current);void current.context.close().catch(()=>{});}},[]);
  return <div className="meditation-audio">
    <div className="meditation-audio-heading"><Volume2 size={18}/><strong>{t("Meditation audio","භාවනා හඬ")}</strong><span aria-live="polite">{!available?t("Audio unavailable · timer still works","හඬ ලබාගත නොහැක · වේලාව ක්‍රියා කරයි"):muted||volume===0?t("Muted","හඬ නිහඬයි"):running?t("Soundscape playing","පසුබිම් හඬ වාදනය වේ"):t("Starts with your practice","පුහුණුව සමඟ ඇරඹේ")}</span></div>
    <div className="soundscape-title">{t("Choose your soundscape","ඔබේ පසුබිම් හඬ තෝරන්න")}</div>
    <div className="soundscape-grid" role="group" aria-label={t("Choose your soundscape","පසුබිම් හඬ තෝරන්න")}>{presets.map((item,index)=>{const Icon=index<7?Music2:item.id==="birds"?Bird:item.id==="drops"?Droplets:item.id==="rain"?CloudRain:item.id==="stream"?Waves:Wind;return <button type="button" key={item.id} className={"soundscape-choice"+(track===item.id?" selected":"")} aria-pressed={track===item.id} onClick={()=>setTrack(item.id)}><Icon size={18} strokeWidth={1.6}/><span>{locale==="si"?item.si:item.en}</span>{track===item.id&&<Check size={15} className="soundscape-check"/>}</button>;})}</div>
    <div className="meditation-audio-controls"><button type="button" className="icon-button" aria-label={muted?t("Unmute meditation audio","භාවනා හඬ සක්‍රිය කරන්න"):t("Mute meditation audio","භාවනා හඬ නිහඬ කරන්න")} aria-pressed={muted} onClick={()=>setMuted(value=>!value)}>{muted||volume===0?<VolumeX size={20}/>:<Volume2 size={20}/>}</button><label htmlFor="meditation-volume">{t("Volume","හඬ මට්ටම")}</label><input id="meditation-volume" type="range" min="0" max="100" step="1" value={volume} onChange={event=>setVolume(Number(event.target.value))}/><output htmlFor="meditation-volume">{volume}%</output></div>
    <p>{t("Ambient music and nature-inspired sounds generated in your browser. No downloads required.","බ්‍රවුසරය තුළ ජනනය වන සංගීත සහ ස්වභාවික හඬ. බාගැනීම් අවශ්‍ය නොවේ.")}</p>
  </div>;
});
export default MeditationAudio;
