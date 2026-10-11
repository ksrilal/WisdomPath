"use client";
import {forwardRef,useEffect,useImperativeHandle,useRef,useState} from "react";
import {Volume2,VolumeX} from "lucide-react";

export type MeditationAudioHandle={start:()=>Promise<void>};
type Sound={context:AudioContext;gain:GainNode};
const MeditationAudio=forwardRef<MeditationAudioHandle,{running:boolean;locale:"en"|"si"}>(function MeditationAudio({running,locale},ref){
  const sound=useRef<Sound|null>(null);
  const [muted,setMuted]=useState(false),[volume,setVolume]=useState(30),[available,setAvailable]=useState(true);
  const t=(en:string,si:string)=>locale==="si"?si:en;
  useImperativeHandle(ref,()=>({async start(){
    try{
      if(!sound.current){
        const context=new AudioContext();
        const gain=context.createGain();gain.gain.value=0;gain.connect(context.destination);
        sound.current={context,gain};
        // A quiet ambient chord, generated in the browser without recordings.
        [130.81,196,261.63,329.63].forEach((frequency,index)=>{
          const oscillator=context.createOscillator(),level=context.createGain();
          oscillator.type="sine";oscillator.frequency.value=frequency;
          level.gain.value=[0.18,0.09,0.06,0.035][index];
          oscillator.connect(level);level.connect(gain);oscillator.start();
        });
        const buffer=context.createBuffer(1,context.sampleRate*4,context.sampleRate);
        const data=buffer.getChannelData(0);
        for(let i=0;i<data.length;i++)data[i]=(Math.random()*2-1)*0.12;
        const breeze=context.createBufferSource(),filter=context.createBiquadFilter();
        breeze.buffer=buffer;breeze.loop=true;filter.type="lowpass";filter.frequency.value=450;
        breeze.connect(filter);filter.connect(gain);breeze.start();
      }
      await sound.current.context.resume();setAvailable(true);
    }catch{setAvailable(false);}
  }}),[]);
  useEffect(()=>{
    const current=sound.current;if(!current)return;
    const {context,gain}=current;
    if(!running){void context.suspend().catch(()=>setAvailable(false));return;}
    gain.gain.setTargetAtTime(muted?0:volume/100,context.currentTime,0.3);
  },[running,muted,volume]);
  useEffect(()=>()=>{const current=sound.current;sound.current=null;if(current)void current.context.close().catch(()=>{});},[]);
  return <div className="meditation-audio">
    <div className="meditation-audio-heading"><Volume2 size={18}/><strong>{t("Meditation audio","භාවනා හඬ")}</strong><span aria-live="polite">{!available?t("Audio unavailable · timer still works","හඬ ලබාගත නොහැක · වේලාව ක්‍රියා කරයි"):muted||volume===0?t("Muted","හඬ නිහඬයි"):running?t("Ambient sound playing","සන්සුන් පසුබිම් හඬ වාදනය වේ"):t("Starts with your practice","පුහුණුව සමඟ ඇරඹේ")}</span></div>
    <div className="meditation-audio-controls"><button type="button" className="icon-button" aria-label={muted?t("Unmute meditation audio","භාවනා හඬ සක්‍රිය කරන්න"):t("Mute meditation audio","භාවනා හඬ නිහඬ කරන්න")} aria-pressed={muted} onClick={()=>setMuted(value=>!value)} disabled={!available}>{muted||volume===0?<VolumeX size={20}/>:<Volume2 size={20}/>}</button><label htmlFor="meditation-volume">{t("Volume","හඬ මට්ටම")}</label><input id="meditation-volume" type="range" min="0" max="100" step="1" value={volume} disabled={!available} onChange={event=>setVolume(Number(event.target.value))}/><output htmlFor="meditation-volume">{volume}%</output></div>
    <p>{t("Gentle tones and a soft breeze. Adjust to a comfortable level.","මෘදු ස්වර සහ සුළඟක පසුබිම් හඬක්. ඔබට පහසු හඬ මට්ටමක් තෝරන්න.")}</p>
  </div>;
});
export default MeditationAudio;
