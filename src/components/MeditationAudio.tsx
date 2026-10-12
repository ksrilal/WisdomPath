"use client";
import {forwardRef,useEffect,useImperativeHandle,useRef,useState} from "react";
import {Volume2,VolumeX} from "lucide-react";

export type MeditationAudioHandle={start:()=>Promise<void>};
const tracks=[
  {id:"verclub",name:"Meditation Music · Verclub",file:"verclub_music-meditation-music-550885.mp3"},
  {id:"atlas-deep",name:"Deep Meditation · Atlas Audio",file:"atlasaudio-deep-meditation-588149.mp3"},
  {id:"leberch-1",name:"Meditation · Leberch",file:"leberch-meditation-578429.mp3"},
  {id:"velario",name:"Meditation Music · Velario",file:"velariomusic-meditation-music-603880.mp3"},
  {id:"atlas-calm",name:"Calmness Meditation · Atlas Audio",file:"atlasaudio-calmness-meditation-613486.mp3"},
  {id:"marlowe",name:"Deep Meditation · Marlowe",file:"marlowemusic-deep-meditation-587561.mp3"},
  {id:"leberch-2",name:"Meditation II · Leberch",file:"leberch-meditation-583077.mp3"}
];
const MeditationAudio=forwardRef<MeditationAudioHandle,{running:boolean;locale:"en"|"si"}>(function MeditationAudio({running,locale},ref){
  const audio=useRef<HTMLAudioElement|null>(null);
  const [track,setTrack]=useState(tracks[0].id),[muted,setMuted]=useState(false),[volume,setVolume]=useState(30),[available,setAvailable]=useState(true);
  const t=(en:string,si:string)=>locale==="si"?si:en;
  useImperativeHandle(ref,()=>({async start(){
    const player=audio.current;if(!player)return;
    try{await player.play();setAvailable(true);}catch{setAvailable(false);}
  }}),[]);
  useEffect(()=>{const player=audio.current;if(!player)return;player.volume=volume/100;player.muted=muted;},[volume,muted]);
  useEffect(()=>{const player=audio.current;if(!player)return;if(!running)player.pause();},[running]);
  useEffect(()=>{const player=audio.current;if(!player)return;player.load();setAvailable(true);if(running)void player.play().catch(()=>setAvailable(false));},[track]);
  const selected=tracks.find(item=>item.id===track)??tracks[0];
  return <div className="meditation-audio">
    <audio ref={audio} src={"/audio/"+selected.file} loop preload="none" onError={()=>setAvailable(false)} onCanPlay={()=>setAvailable(true)}/>
    <div className="meditation-audio-heading"><Volume2 size={18}/><strong>{t("Meditation audio","භාවනා හඬ")}</strong><span aria-live="polite">{!available?t("Audio unavailable · timer still works","හඬ ලබාගත නොහැක · වේලාව ක්‍රියා කරයි"):muted||volume===0?t("Muted","හඬ නිහඬයි"):running?t("Music playing","සංගීතය වාදනය වේ"):t("Starts with your practice","පුහුණුව සමඟ ඇරඹේ")}</span></div>
    <label htmlFor="meditation-track">{t("Choose meditation music","භාවනා සංගීතය තෝරන්න")}</label>
    <select id="meditation-track" value={track} onChange={event=>setTrack(event.target.value)}>{tracks.map(item=><option key={item.id} value={item.id}>{item.name}</option>)}</select>
    <div className="meditation-audio-controls"><button type="button" className="icon-button" aria-label={muted?t("Unmute meditation audio","භාවනා හඬ සක්‍රිය කරන්න"):t("Mute meditation audio","භාවනා හඬ නිහඬ කරන්න")} aria-pressed={muted} onClick={()=>setMuted(value=>!value)}>{muted||volume===0?<VolumeX size={20}/>:<Volume2 size={20}/>}</button><label htmlFor="meditation-volume">{t("Volume","හඬ මට්ටම")}</label><input id="meditation-volume" type="range" min="0" max="100" step="1" value={volume} onChange={event=>setVolume(Number(event.target.value))}/><output htmlFor="meditation-volume">{volume}%</output></div>
    <p>{t("Choose a track to accompany your practice. Music loops until you pause or finish.","පුහුණුව සඳහා සංගීතයක් තෝරන්න. විරාමය දක්වා සංගීතය නැවත වාදනය වේ.")}</p>
  </div>;
});
export default MeditationAudio;
