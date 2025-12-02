import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import svgPaths from "./player-control-buttons";
import svgPathsEmpty from "./player-empty-state";
import svgPathsCassette from "./cassette-reel-paths";
import TapeDisplay from "./TapeDisplay";

type PlayerState = 'stopped' | 'playing' | 'paused' | 'rewinding' | 'fastforwarding' | 'recording';

interface Song {
  title: string;
  artist: string;
  audioUrl: string;
  color: string;
}

const SONGS: Song[] = [
  { 
    title: "Neon Dreams", 
    artist: "Synthwave Collective",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    color: "#FF6B9D"
  },
  { 
    title: "Electric Sunset", 
    artist: "Retro Wave",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    color: "#FFD93D"
  },
  { 
    title: "Miami Nights", 
    artist: "80s Revival",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
    color: "#6BCB77"
  },
  { 
    title: "Laser Highway", 
    artist: "Neon Rider",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
    color: "#4D96FF"
  },
  { 
    title: "Sunset Drive", 
    artist: "Vapor Dreams",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3",
    color: "#FF6B6B"
  },
  { 
    title: "Retro Future", 
    artist: "Time Machine",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3",
    color: "#B565D8"
  },
];

function PencilThingy({ rotation }: { rotation: number }) {
  return (
    <div className="absolute h-[81.417px] left-[173.73px] top-[95px] w-[80.766px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 81 82" style={{ transform: `rotate(${rotation}deg)` }}>
        <g id="Pencil Thingy">
          <circle cx="40.5376" cy="41.5381" fill="var(--fill-0, #3C3C3C)" id="Ellipse 404" r="30.3937" />
          <path d={svgPathsCassette.p2e9c6900} fill="var(--fill-0, #DCDCDC)" id="Subtract" />
        </g>
      </svg>
    </div>
  );
}

function PencilThingy1({ rotation }: { rotation: number }) {
  return (
    <div className="absolute h-[81.417px] left-[173.73px] top-[251px] w-[80.766px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 81 82" style={{ transform: `rotate(${rotation}deg)` }}>
        <g id="Pencil Thingy">
          <circle cx="40.5376" cy="41.538" fill="var(--fill-0, #3C3C3C)" id="Ellipse 404" r="30.3937" />
          <path d={svgPathsCassette.p3b82ca00} fill="var(--fill-0, #DCDCDC)" id="Subtract" />
        </g>
      </svg>
    </div>
  );
}

function SpeakerHoles() {
  return (
    <div className="absolute h-[161.722px] left-[48px] top-[437.11px] w-[112.103px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 113 162">
        <g id="Speaker holes">
          <circle cx="2.29738" cy="2.29719" fill="var(--fill-0, #151515)" id="Ellipse 124" r="2.29719" />
          <circle cx="2.2972" cy="10.5671" fill="var(--fill-0, #151515)" id="Ellipse 138" r="2.29719" />
          <circle cx="2.2972" cy="18.837" fill="var(--fill-0, #151515)" id="Ellipse 152" r="2.29719" />
          <circle cx="2.2972" cy="27.1069" fill="var(--fill-0, #151515)" id="Ellipse 166" r="2.29719" />
          <circle cx="2.2972" cy="35.3768" fill="var(--fill-0, #151515)" id="Ellipse 180" r="2.29719" />
          <circle cx="2.2972" cy="43.6467" fill="var(--fill-0, #151515)" id="Ellipse 194" r="2.29719" />
          <circle cx="2.2972" cy="51.9165" fill="var(--fill-0, #151515)" id="Ellipse 208" r="2.29719" />
          <circle cx="2.2972" cy="60.1864" fill="var(--fill-0, #151515)" id="Ellipse 222" r="2.29719" />
          <circle cx="2.2972" cy="68.4563" fill="var(--fill-0, #151515)" id="Ellipse 236" r="2.29719" />
          <circle cx="2.2972" cy="76.7262" fill="var(--fill-0, #151515)" id="Ellipse 250" r="2.29719" />
          <circle cx="2.2972" cy="84.9961" fill="var(--fill-0, #151515)" id="Ellipse 264" r="2.29719" />
          <circle cx="2.2972" cy="93.266" fill="var(--fill-0, #151515)" id="Ellipse 278" r="2.29719" />
          <circle cx="2.2972" cy="101.536" fill="var(--fill-0, #151515)" id="Ellipse 292" r="2.29719" />
          <circle cx="2.2972" cy="109.806" fill="var(--fill-0, #151515)" id="Ellipse 306" r="2.29719" />
          <circle cx="2.2972" cy="118.076" fill="var(--fill-0, #151515)" id="Ellipse 320" r="2.29719" />
          <circle cx="2.2972" cy="126.346" fill="var(--fill-0, #151515)" id="Ellipse 334" r="2.29719" />
          <circle cx="2.2972" cy="134.615" fill="var(--fill-0, #151515)" id="Ellipse 348" r="2.29719" />
          <circle cx="2.2972" cy="142.885" fill="var(--fill-0, #151515)" id="Ellipse 362" r="2.29719" />
          <circle cx="2.2972" cy="151.155" fill="var(--fill-0, #151515)" id="Ellipse 376" r="2.29719" />
          <circle cx="2.2972" cy="159.425" fill="var(--fill-0, #151515)" id="Ellipse 390" r="2.29719" />
          <circle cx="10.5671" cy="2.2972" fill="var(--fill-0, #151515)" id="Ellipse 125" r="2.29719" />
          <circle cx="10.5671" cy="10.5671" fill="var(--fill-0, #151515)" id="Ellipse 139" r="2.29719" />
          <circle cx="10.5671" cy="18.837" fill="var(--fill-0, #151515)" id="Ellipse 153" r="2.29719" />
          <circle cx="10.5671" cy="27.1069" fill="var(--fill-0, #151515)" id="Ellipse 167" r="2.29719" />
          <circle cx="10.5671" cy="35.3768" fill="var(--fill-0, #151515)" id="Ellipse 181" r="2.29719" />
          <circle cx="10.5671" cy="43.6467" fill="var(--fill-0, #151515)" id="Ellipse 195" r="2.29719" />
          <circle cx="10.5671" cy="51.9165" fill="var(--fill-0, #151515)" id="Ellipse 209" r="2.29719" />
          <circle cx="10.5671" cy="60.1864" fill="var(--fill-0, #151515)" id="Ellipse 223" r="2.29719" />
          <circle cx="10.5671" cy="68.4563" fill="var(--fill-0, #151515)" id="Ellipse 237" r="2.29719" />
          <circle cx="10.5671" cy="76.7262" fill="var(--fill-0, #151515)" id="Ellipse 251" r="2.29719" />
          <circle cx="10.5671" cy="84.9961" fill="var(--fill-0, #151515)" id="Ellipse 265" r="2.29719" />
          <circle cx="10.5671" cy="93.266" fill="var(--fill-0, #151515)" id="Ellipse 279" r="2.29719" />
          <circle cx="10.5671" cy="101.536" fill="var(--fill-0, #151515)" id="Ellipse 293" r="2.29719" />
          <circle cx="10.5671" cy="109.806" fill="var(--fill-0, #151515)" id="Ellipse 307" r="2.29719" />
          <circle cx="10.5671" cy="118.076" fill="var(--fill-0, #151515)" id="Ellipse 321" r="2.29719" />
          <circle cx="10.5671" cy="126.346" fill="var(--fill-0, #151515)" id="Ellipse 335" r="2.29719" />
          <circle cx="10.5671" cy="134.615" fill="var(--fill-0, #151515)" id="Ellipse 349" r="2.29719" />
          <circle cx="10.5671" cy="142.885" fill="var(--fill-0, #151515)" id="Ellipse 363" r="2.29719" />
          <circle cx="10.5671" cy="151.155" fill="var(--fill-0, #151515)" id="Ellipse 377" r="2.29719" />
          <circle cx="10.5671" cy="159.425" fill="var(--fill-0, #151515)" id="Ellipse 391" r="2.29719" />
          <circle cx="18.837" cy="2.2972" fill="var(--fill-0, #151515)" id="Ellipse 126" r="2.29719" />
          <circle cx="18.837" cy="10.5671" fill="var(--fill-0, #151515)" id="Ellipse 140" r="2.29719" />
          <circle cx="18.837" cy="18.837" fill="var(--fill-0, #151515)" id="Ellipse 154" r="2.29719" />
          <circle cx="18.837" cy="27.1069" fill="var(--fill-0, #151515)" id="Ellipse 168" r="2.29719" />
          <circle cx="18.837" cy="35.3768" fill="var(--fill-0, #151515)" id="Ellipse 182" r="2.29719" />
          <circle cx="18.837" cy="43.6467" fill="var(--fill-0, #151515)" id="Ellipse 196" r="2.29719" />
          <circle cx="18.837" cy="51.9165" fill="var(--fill-0, #151515)" id="Ellipse 210" r="2.29719" />
          <circle cx="18.837" cy="60.1864" fill="var(--fill-0, #151515)" id="Ellipse 224" r="2.29719" />
          <circle cx="18.837" cy="68.4563" fill="var(--fill-0, #151515)" id="Ellipse 238" r="2.29719" />
          <circle cx="18.837" cy="76.7262" fill="var(--fill-0, #151515)" id="Ellipse 252" r="2.29719" />
          <circle cx="18.837" cy="84.9961" fill="var(--fill-0, #151515)" id="Ellipse 266" r="2.29719" />
          <circle cx="18.837" cy="93.266" fill="var(--fill-0, #151515)" id="Ellipse 280" r="2.29719" />
          <circle cx="18.837" cy="101.536" fill="var(--fill-0, #151515)" id="Ellipse 294" r="2.29719" />
          <circle cx="18.837" cy="109.806" fill="var(--fill-0, #151515)" id="Ellipse 308" r="2.29719" />
          <circle cx="18.837" cy="118.076" fill="var(--fill-0, #151515)" id="Ellipse 322" r="2.29719" />
          <circle cx="18.837" cy="126.346" fill="var(--fill-0, #151515)" id="Ellipse 336" r="2.29719" />
          <circle cx="18.837" cy="134.615" fill="var(--fill-0, #151515)" id="Ellipse 350" r="2.29719" />
          <circle cx="18.837" cy="142.885" fill="var(--fill-0, #151515)" id="Ellipse 364" r="2.29719" />
          <circle cx="18.837" cy="151.155" fill="var(--fill-0, #151515)" id="Ellipse 378" r="2.29719" />
          <circle cx="18.837" cy="159.425" fill="var(--fill-0, #151515)" id="Ellipse 392" r="2.29719" />
          <circle cx="27.1069" cy="2.2972" fill="var(--fill-0, #151515)" id="Ellipse 127" r="2.29719" />
          <circle cx="27.1069" cy="10.5671" fill="var(--fill-0, #151515)" id="Ellipse 141" r="2.29719" />
          <circle cx="27.1069" cy="18.837" fill="var(--fill-0, #151515)" id="Ellipse 155" r="2.29719" />
          <circle cx="27.1069" cy="27.1069" fill="var(--fill-0, #151515)" id="Ellipse 169" r="2.29719" />
          <circle cx="27.1069" cy="35.3768" fill="var(--fill-0, #151515)" id="Ellipse 183" r="2.29719" />
          <circle cx="27.1069" cy="43.6467" fill="var(--fill-0, #151515)" id="Ellipse 197" r="2.29719" />
          <circle cx="27.1069" cy="51.9165" fill="var(--fill-0, #151515)" id="Ellipse 211" r="2.29719" />
          <circle cx="27.1069" cy="60.1864" fill="var(--fill-0, #151515)" id="Ellipse 225" r="2.29719" />
          <circle cx="27.1069" cy="68.4563" fill="var(--fill-0, #151515)" id="Ellipse 239" r="2.29719" />
          <circle cx="27.1069" cy="76.7262" fill="var(--fill-0, #151515)" id="Ellipse 253" r="2.29719" />
          <circle cx="27.1069" cy="84.9961" fill="var(--fill-0, #151515)" id="Ellipse 267" r="2.29719" />
          <circle cx="27.1069" cy="93.266" fill="var(--fill-0, #151515)" id="Ellipse 281" r="2.29719" />
          <circle cx="27.1069" cy="101.536" fill="var(--fill-0, #151515)" id="Ellipse 295" r="2.29719" />
          <circle cx="27.1069" cy="109.806" fill="var(--fill-0, #151515)" id="Ellipse 309" r="2.29719" />
          <circle cx="27.1069" cy="118.076" fill="var(--fill-0, #151515)" id="Ellipse 323" r="2.29719" />
          <circle cx="27.1069" cy="126.346" fill="var(--fill-0, #151515)" id="Ellipse 337" r="2.29719" />
          <circle cx="27.1069" cy="134.615" fill="var(--fill-0, #151515)" id="Ellipse 351" r="2.29719" />
          <circle cx="27.1069" cy="142.885" fill="var(--fill-0, #151515)" id="Ellipse 365" r="2.29719" />
          <circle cx="27.1069" cy="151.155" fill="var(--fill-0, #151515)" id="Ellipse 379" r="2.29719" />
          <circle cx="27.1069" cy="159.425" fill="var(--fill-0, #151515)" id="Ellipse 393" r="2.29719" />
          <circle cx="35.3768" cy="2.2972" fill="var(--fill-0, #151515)" id="Ellipse 128" r="2.29719" />
          <circle cx="35.3768" cy="10.5671" fill="var(--fill-0, #151515)" id="Ellipse 142" r="2.29719" />
          <circle cx="35.3768" cy="18.837" fill="var(--fill-0, #151515)" id="Ellipse 156" r="2.29719" />
          <circle cx="35.3768" cy="27.1069" fill="var(--fill-0, #151515)" id="Ellipse 170" r="2.29719" />
          <circle cx="35.3768" cy="35.3768" fill="var(--fill-0, #151515)" id="Ellipse 184" r="2.29719" />
          <circle cx="35.3768" cy="43.6467" fill="var(--fill-0, #151515)" id="Ellipse 198" r="2.29719" />
          <circle cx="35.3768" cy="51.9165" fill="var(--fill-0, #151515)" id="Ellipse 212" r="2.29719" />
          <circle cx="35.3768" cy="60.1864" fill="var(--fill-0, #151515)" id="Ellipse 226" r="2.29719" />
          <circle cx="35.3768" cy="68.4563" fill="var(--fill-0, #151515)" id="Ellipse 240" r="2.29719" />
          <circle cx="35.3768" cy="76.7262" fill="var(--fill-0, #151515)" id="Ellipse 254" r="2.29719" />
          <circle cx="35.3768" cy="84.9961" fill="var(--fill-0, #151515)" id="Ellipse 268" r="2.29719" />
          <circle cx="35.3768" cy="93.266" fill="var(--fill-0, #151515)" id="Ellipse 282" r="2.29719" />
          <circle cx="35.3768" cy="101.536" fill="var(--fill-0, #151515)" id="Ellipse 296" r="2.29719" />
          <circle cx="35.3768" cy="109.806" fill="var(--fill-0, #151515)" id="Ellipse 310" r="2.29719" />
          <circle cx="35.3768" cy="118.076" fill="var(--fill-0, #151515)" id="Ellipse 324" r="2.29719" />
          <circle cx="35.3768" cy="126.346" fill="var(--fill-0, #151515)" id="Ellipse 338" r="2.29719" />
          <circle cx="35.3768" cy="134.615" fill="var(--fill-0, #151515)" id="Ellipse 352" r="2.29719" />
          <circle cx="35.3768" cy="142.885" fill="var(--fill-0, #151515)" id="Ellipse 366" r="2.29719" />
          <circle cx="35.3768" cy="151.155" fill="var(--fill-0, #151515)" id="Ellipse 380" r="2.29719" />
          <circle cx="35.3768" cy="159.425" fill="var(--fill-0, #151515)" id="Ellipse 394" r="2.29719" />
          <circle cx="43.6466" cy="2.2972" fill="var(--fill-0, #151515)" id="Ellipse 129" r="2.29719" />
          <circle cx="43.6466" cy="10.5671" fill="var(--fill-0, #151515)" id="Ellipse 143" r="2.29719" />
          <circle cx="43.6466" cy="18.837" fill="var(--fill-0, #151515)" id="Ellipse 157" r="2.29719" />
          <circle cx="43.6466" cy="27.1069" fill="var(--fill-0, #151515)" id="Ellipse 171" r="2.29719" />
          <circle cx="43.6466" cy="35.3768" fill="var(--fill-0, #151515)" id="Ellipse 185" r="2.29719" />
          <circle cx="43.6466" cy="43.6467" fill="var(--fill-0, #151515)" id="Ellipse 199" r="2.29719" />
          <circle cx="43.6466" cy="51.9165" fill="var(--fill-0, #151515)" id="Ellipse 213" r="2.29719" />
          <circle cx="43.6466" cy="60.1864" fill="var(--fill-0, #151515)" id="Ellipse 227" r="2.29719" />
          <circle cx="43.6466" cy="68.4563" fill="var(--fill-0, #151515)" id="Ellipse 241" r="2.29719" />
          <circle cx="43.6466" cy="76.7262" fill="var(--fill-0, #151515)" id="Ellipse 255" r="2.29719" />
          <circle cx="43.6466" cy="84.9961" fill="var(--fill-0, #151515)" id="Ellipse 269" r="2.29719" />
          <circle cx="43.6466" cy="93.266" fill="var(--fill-0, #151515)" id="Ellipse 283" r="2.29719" />
          <circle cx="43.6466" cy="101.536" fill="var(--fill-0, #151515)" id="Ellipse 297" r="2.29719" />
          <circle cx="43.6466" cy="109.806" fill="var(--fill-0, #151515)" id="Ellipse 311" r="2.29719" />
          <circle cx="43.6466" cy="118.076" fill="var(--fill-0, #151515)" id="Ellipse 325" r="2.29719" />
          <circle cx="43.6466" cy="126.346" fill="var(--fill-0, #151515)" id="Ellipse 339" r="2.29719" />
          <circle cx="43.6466" cy="134.615" fill="var(--fill-0, #151515)" id="Ellipse 353" r="2.29719" />
          <circle cx="43.6466" cy="142.885" fill="var(--fill-0, #151515)" id="Ellipse 367" r="2.29719" />
          <circle cx="43.6466" cy="151.155" fill="var(--fill-0, #151515)" id="Ellipse 381" r="2.29719" />
          <circle cx="43.6466" cy="159.425" fill="var(--fill-0, #151515)" id="Ellipse 395" r="2.29719" />
          <circle cx="51.9165" cy="2.2972" fill="var(--fill-0, #151515)" id="Ellipse 130" r="2.29719" />
          <circle cx="51.9165" cy="10.5671" fill="var(--fill-0, #151515)" id="Ellipse 144" r="2.29719" />
          <circle cx="51.9165" cy="18.837" fill="var(--fill-0, #151515)" id="Ellipse 158" r="2.29719" />
          <circle cx="51.9165" cy="27.1069" fill="var(--fill-0, #151515)" id="Ellipse 172" r="2.29719" />
          <circle cx="51.9165" cy="35.3768" fill="var(--fill-0, #151515)" id="Ellipse 186" r="2.29719" />
          <circle cx="51.9165" cy="43.6467" fill="var(--fill-0, #151515)" id="Ellipse 200" r="2.29719" />
          <circle cx="51.9165" cy="51.9165" fill="var(--fill-0, #151515)" id="Ellipse 214" r="2.29719" />
          <circle cx="51.9165" cy="60.1864" fill="var(--fill-0, #151515)" id="Ellipse 228" r="2.29719" />
          <circle cx="51.9165" cy="68.4563" fill="var(--fill-0, #151515)" id="Ellipse 242" r="2.29719" />
          <circle cx="51.9165" cy="76.7262" fill="var(--fill-0, #151515)" id="Ellipse 256" r="2.29719" />
          <circle cx="51.9165" cy="84.9961" fill="var(--fill-0, #151515)" id="Ellipse 270" r="2.29719" />
          <circle cx="51.9165" cy="93.266" fill="var(--fill-0, #151515)" id="Ellipse 284" r="2.29719" />
          <circle cx="51.9165" cy="101.536" fill="var(--fill-0, #151515)" id="Ellipse 298" r="2.29719" />
          <circle cx="51.9165" cy="109.806" fill="var(--fill-0, #151515)" id="Ellipse 312" r="2.29719" />
          <circle cx="51.9165" cy="118.076" fill="var(--fill-0, #151515)" id="Ellipse 326" r="2.29719" />
          <circle cx="51.9165" cy="126.346" fill="var(--fill-0, #151515)" id="Ellipse 340" r="2.29719" />
          <circle cx="51.9165" cy="134.615" fill="var(--fill-0, #151515)" id="Ellipse 354" r="2.29719" />
          <circle cx="51.9165" cy="142.885" fill="var(--fill-0, #151515)" id="Ellipse 368" r="2.29719" />
          <circle cx="51.9165" cy="151.155" fill="var(--fill-0, #151515)" id="Ellipse 382" r="2.29719" />
          <circle cx="51.9165" cy="159.425" fill="var(--fill-0, #151515)" id="Ellipse 396" r="2.29719" />
          <circle cx="60.1864" cy="2.2972" fill="var(--fill-0, #151515)" id="Ellipse 131" r="2.29719" />
          <circle cx="60.1864" cy="10.5671" fill="var(--fill-0, #151515)" id="Ellipse 145" r="2.29719" />
          <circle cx="60.1864" cy="18.837" fill="var(--fill-0, #151515)" id="Ellipse 159" r="2.29719" />
          <circle cx="60.1864" cy="27.1069" fill="var(--fill-0, #151515)" id="Ellipse 173" r="2.29719" />
          <circle cx="60.1864" cy="35.3768" fill="var(--fill-0, #151515)" id="Ellipse 187" r="2.29719" />
          <circle cx="60.1864" cy="43.6467" fill="var(--fill-0, #151515)" id="Ellipse 201" r="2.29719" />
          <circle cx="60.1864" cy="51.9165" fill="var(--fill-0, #151515)" id="Ellipse 215" r="2.29719" />
          <circle cx="60.1864" cy="60.1864" fill="var(--fill-0, #151515)" id="Ellipse 229" r="2.29719" />
          <circle cx="60.1864" cy="68.4563" fill="var(--fill-0, #151515)" id="Ellipse 243" r="2.29719" />
          <circle cx="60.1864" cy="76.7262" fill="var(--fill-0, #151515)" id="Ellipse 257" r="2.29719" />
          <circle cx="60.1864" cy="84.9961" fill="var(--fill-0, #151515)" id="Ellipse 271" r="2.29719" />
          <circle cx="60.1864" cy="93.266" fill="var(--fill-0, #151515)" id="Ellipse 285" r="2.29719" />
          <circle cx="60.1864" cy="101.536" fill="var(--fill-0, #151515)" id="Ellipse 299" r="2.29719" />
          <circle cx="60.1864" cy="109.806" fill="var(--fill-0, #151515)" id="Ellipse 313" r="2.29719" />
          <circle cx="60.1864" cy="118.076" fill="var(--fill-0, #151515)" id="Ellipse 327" r="2.29719" />
          <circle cx="60.1864" cy="126.346" fill="var(--fill-0, #151515)" id="Ellipse 341" r="2.29719" />
          <circle cx="60.1864" cy="134.615" fill="var(--fill-0, #151515)" id="Ellipse 355" r="2.29719" />
          <circle cx="60.1864" cy="142.885" fill="var(--fill-0, #151515)" id="Ellipse 369" r="2.29719" />
          <circle cx="60.1864" cy="151.155" fill="var(--fill-0, #151515)" id="Ellipse 383" r="2.29719" />
          <circle cx="60.1864" cy="159.425" fill="var(--fill-0, #151515)" id="Ellipse 397" r="2.29719" />
          <circle cx="68.4563" cy="2.2972" fill="var(--fill-0, #151515)" id="Ellipse 132" r="2.29719" />
          <circle cx="68.4563" cy="10.5671" fill="var(--fill-0, #151515)" id="Ellipse 146" r="2.29719" />
          <circle cx="68.4563" cy="18.837" fill="var(--fill-0, #151515)" id="Ellipse 160" r="2.29719" />
          <circle cx="68.4563" cy="27.1069" fill="var(--fill-0, #151515)" id="Ellipse 174" r="2.29719" />
          <circle cx="68.4563" cy="35.3768" fill="var(--fill-0, #151515)" id="Ellipse 188" r="2.29719" />
          <circle cx="68.4563" cy="43.6467" fill="var(--fill-0, #151515)" id="Ellipse 202" r="2.29719" />
          <circle cx="68.4563" cy="51.9165" fill="var(--fill-0, #151515)" id="Ellipse 216" r="2.29719" />
          <circle cx="68.4563" cy="60.1864" fill="var(--fill-0, #151515)" id="Ellipse 230" r="2.29719" />
          <circle cx="68.4563" cy="68.4563" fill="var(--fill-0, #151515)" id="Ellipse 244" r="2.29719" />
          <circle cx="68.4563" cy="76.7262" fill="var(--fill-0, #151515)" id="Ellipse 258" r="2.29719" />
          <circle cx="68.4563" cy="84.9961" fill="var(--fill-0, #151515)" id="Ellipse 272" r="2.29719" />
          <circle cx="68.4563" cy="93.266" fill="var(--fill-0, #151515)" id="Ellipse 286" r="2.29719" />
          <circle cx="68.4563" cy="101.536" fill="var(--fill-0, #151515)" id="Ellipse 300" r="2.29719" />
          <circle cx="68.4563" cy="109.806" fill="var(--fill-0, #151515)" id="Ellipse 314" r="2.29719" />
          <circle cx="68.4563" cy="118.076" fill="var(--fill-0, #151515)" id="Ellipse 328" r="2.29719" />
          <circle cx="68.4563" cy="126.346" fill="var(--fill-0, #151515)" id="Ellipse 342" r="2.29719" />
          <circle cx="68.4563" cy="134.615" fill="var(--fill-0, #151515)" id="Ellipse 356" r="2.29719" />
          <circle cx="68.4563" cy="142.885" fill="var(--fill-0, #151515)" id="Ellipse 370" r="2.29719" />
          <circle cx="68.4563" cy="151.155" fill="var(--fill-0, #151515)" id="Ellipse 384" r="2.29719" />
          <circle cx="68.4563" cy="159.425" fill="var(--fill-0, #151515)" id="Ellipse 398" r="2.29719" />
          <circle cx="76.7262" cy="2.2972" fill="var(--fill-0, #151515)" id="Ellipse 133" r="2.29719" />
          <circle cx="76.7262" cy="10.5671" fill="var(--fill-0, #151515)" id="Ellipse 147" r="2.29719" />
          <circle cx="76.7262" cy="18.837" fill="var(--fill-0, #151515)" id="Ellipse 161" r="2.29719" />
          <circle cx="76.7262" cy="27.1069" fill="var(--fill-0, #151515)" id="Ellipse 175" r="2.29719" />
          <circle cx="76.7262" cy="35.3768" fill="var(--fill-0, #151515)" id="Ellipse 189" r="2.29719" />
          <circle cx="76.7262" cy="43.6467" fill="var(--fill-0, #151515)" id="Ellipse 203" r="2.29719" />
          <circle cx="76.7262" cy="51.9165" fill="var(--fill-0, #151515)" id="Ellipse 217" r="2.29719" />
          <circle cx="76.7262" cy="60.1864" fill="var(--fill-0, #151515)" id="Ellipse 231" r="2.29719" />
          <circle cx="76.7262" cy="68.4563" fill="var(--fill-0, #151515)" id="Ellipse 245" r="2.29719" />
          <circle cx="76.7262" cy="76.7262" fill="var(--fill-0, #151515)" id="Ellipse 259" r="2.29719" />
          <circle cx="76.7262" cy="84.9961" fill="var(--fill-0, #151515)" id="Ellipse 273" r="2.29719" />
          <circle cx="76.7262" cy="93.266" fill="var(--fill-0, #151515)" id="Ellipse 287" r="2.29719" />
          <circle cx="76.7262" cy="101.536" fill="var(--fill-0, #151515)" id="Ellipse 301" r="2.29719" />
          <circle cx="76.7262" cy="109.806" fill="var(--fill-0, #151515)" id="Ellipse 315" r="2.29719" />
          <circle cx="76.7262" cy="118.076" fill="var(--fill-0, #151515)" id="Ellipse 329" r="2.29719" />
          <circle cx="76.7262" cy="126.346" fill="var(--fill-0, #151515)" id="Ellipse 343" r="2.29719" />
          <circle cx="76.7262" cy="134.615" fill="var(--fill-0, #151515)" id="Ellipse 357" r="2.29719" />
          <circle cx="76.7262" cy="142.885" fill="var(--fill-0, #151515)" id="Ellipse 371" r="2.29719" />
          <circle cx="76.7262" cy="151.155" fill="var(--fill-0, #151515)" id="Ellipse 385" r="2.29719" />
          <circle cx="76.7262" cy="159.425" fill="var(--fill-0, #151515)" id="Ellipse 399" r="2.29719" />
          <circle cx="84.9961" cy="2.2972" fill="var(--fill-0, #151515)" id="Ellipse 134" r="2.29719" />
          <circle cx="84.9961" cy="10.5671" fill="var(--fill-0, #151515)" id="Ellipse 148" r="2.29719" />
          <circle cx="84.9961" cy="18.837" fill="var(--fill-0, #151515)" id="Ellipse 162" r="2.29719" />
          <circle cx="84.9961" cy="27.1069" fill="var(--fill-0, #151515)" id="Ellipse 176" r="2.29719" />
          <circle cx="84.9961" cy="35.3768" fill="var(--fill-0, #151515)" id="Ellipse 190" r="2.29719" />
          <circle cx="84.9961" cy="43.6467" fill="var(--fill-0, #151515)" id="Ellipse 204" r="2.29719" />
          <circle cx="84.9961" cy="51.9165" fill="var(--fill-0, #151515)" id="Ellipse 218" r="2.29719" />
          <circle cx="84.9961" cy="60.1864" fill="var(--fill-0, #151515)" id="Ellipse 232" r="2.29719" />
          <circle cx="84.9961" cy="68.4563" fill="var(--fill-0, #151515)" id="Ellipse 246" r="2.29719" />
          <circle cx="84.9961" cy="76.7262" fill="var(--fill-0, #151515)" id="Ellipse 260" r="2.29719" />
          <circle cx="84.9961" cy="84.9961" fill="var(--fill-0, #151515)" id="Ellipse 274" r="2.29719" />
          <circle cx="84.9961" cy="93.266" fill="var(--fill-0, #151515)" id="Ellipse 288" r="2.29719" />
          <circle cx="84.9961" cy="101.536" fill="var(--fill-0, #151515)" id="Ellipse 302" r="2.29719" />
          <circle cx="84.9961" cy="109.806" fill="var(--fill-0, #151515)" id="Ellipse 316" r="2.29719" />
          <circle cx="84.9961" cy="118.076" fill="var(--fill-0, #151515)" id="Ellipse 330" r="2.29719" />
          <circle cx="84.9961" cy="126.346" fill="var(--fill-0, #151515)" id="Ellipse 344" r="2.29719" />
          <circle cx="84.9961" cy="134.615" fill="var(--fill-0, #151515)" id="Ellipse 358" r="2.29719" />
          <circle cx="84.9961" cy="142.885" fill="var(--fill-0, #151515)" id="Ellipse 372" r="2.29719" />
          <circle cx="84.9961" cy="151.155" fill="var(--fill-0, #151515)" id="Ellipse 386" r="2.29719" />
          <circle cx="84.9961" cy="159.425" fill="var(--fill-0, #151515)" id="Ellipse 400" r="2.29719" />
          <circle cx="93.266" cy="2.2972" fill="var(--fill-0, #151515)" id="Ellipse 135" r="2.29719" />
          <circle cx="93.266" cy="10.5671" fill="var(--fill-0, #151515)" id="Ellipse 149" r="2.29719" />
          <circle cx="93.266" cy="18.837" fill="var(--fill-0, #151515)" id="Ellipse 163" r="2.29719" />
          <circle cx="93.266" cy="27.1069" fill="var(--fill-0, #151515)" id="Ellipse 177" r="2.29719" />
          <circle cx="93.266" cy="35.3768" fill="var(--fill-0, #151515)" id="Ellipse 191" r="2.29719" />
          <circle cx="93.266" cy="43.6467" fill="var(--fill-0, #151515)" id="Ellipse 205" r="2.29719" />
          <circle cx="93.266" cy="51.9165" fill="var(--fill-0, #151515)" id="Ellipse 219" r="2.29719" />
          <circle cx="93.266" cy="60.1864" fill="var(--fill-0, #151515)" id="Ellipse 233" r="2.29719" />
          <circle cx="93.266" cy="68.4563" fill="var(--fill-0, #151515)" id="Ellipse 247" r="2.29719" />
          <circle cx="93.266" cy="76.7262" fill="var(--fill-0, #151515)" id="Ellipse 261" r="2.29719" />
          <circle cx="93.266" cy="84.9961" fill="var(--fill-0, #151515)" id="Ellipse 275" r="2.29719" />
          <circle cx="93.266" cy="93.266" fill="var(--fill-0, #151515)" id="Ellipse 289" r="2.29719" />
          <circle cx="93.266" cy="101.536" fill="var(--fill-0, #151515)" id="Ellipse 303" r="2.29719" />
          <circle cx="93.266" cy="109.806" fill="var(--fill-0, #151515)" id="Ellipse 317" r="2.29719" />
          <circle cx="93.266" cy="118.076" fill="var(--fill-0, #151515)" id="Ellipse 331" r="2.29719" />
          <circle cx="93.266" cy="126.346" fill="var(--fill-0, #151515)" id="Ellipse 345" r="2.29719" />
          <circle cx="93.266" cy="134.615" fill="var(--fill-0, #151515)" id="Ellipse 359" r="2.29719" />
          <circle cx="93.266" cy="142.885" fill="var(--fill-0, #151515)" id="Ellipse 373" r="2.29719" />
          <circle cx="93.266" cy="151.155" fill="var(--fill-0, #151515)" id="Ellipse 387" r="2.29719" />
          <circle cx="93.266" cy="159.425" fill="var(--fill-0, #151515)" id="Ellipse 401" r="2.29719" />
          <circle cx="101.536" cy="2.2972" fill="var(--fill-0, #151515)" id="Ellipse 136" r="2.29719" />
          <circle cx="101.536" cy="10.5671" fill="var(--fill-0, #151515)" id="Ellipse 150" r="2.29719" />
          <circle cx="101.536" cy="18.837" fill="var(--fill-0, #151515)" id="Ellipse 164" r="2.29719" />
          <circle cx="101.536" cy="27.1069" fill="var(--fill-0, #151515)" id="Ellipse 178" r="2.29719" />
          <circle cx="101.536" cy="35.3768" fill="var(--fill-0, #151515)" id="Ellipse 192" r="2.29719" />
          <circle cx="101.536" cy="43.6467" fill="var(--fill-0, #151515)" id="Ellipse 206" r="2.29719" />
          <circle cx="101.536" cy="51.9165" fill="var(--fill-0, #151515)" id="Ellipse 220" r="2.29719" />
          <circle cx="101.536" cy="60.1864" fill="var(--fill-0, #151515)" id="Ellipse 234" r="2.29719" />
          <circle cx="101.536" cy="68.4563" fill="var(--fill-0, #151515)" id="Ellipse 248" r="2.29719" />
          <circle cx="101.536" cy="76.7262" fill="var(--fill-0, #151515)" id="Ellipse 262" r="2.29719" />
          <circle cx="101.536" cy="84.9961" fill="var(--fill-0, #151515)" id="Ellipse 276" r="2.29719" />
          <circle cx="101.536" cy="93.266" fill="var(--fill-0, #151515)" id="Ellipse 290" r="2.29719" />
          <circle cx="101.536" cy="101.536" fill="var(--fill-0, #151515)" id="Ellipse 304" r="2.29719" />
          <circle cx="101.536" cy="109.806" fill="var(--fill-0, #151515)" id="Ellipse 318" r="2.29719" />
          <circle cx="101.536" cy="118.076" fill="var(--fill-0, #151515)" id="Ellipse 332" r="2.29719" />
          <circle cx="101.536" cy="126.346" fill="var(--fill-0, #151515)" id="Ellipse 346" r="2.29719" />
          <circle cx="101.536" cy="134.615" fill="var(--fill-0, #151515)" id="Ellipse 360" r="2.29719" />
          <circle cx="101.536" cy="142.885" fill="var(--fill-0, #151515)" id="Ellipse 374" r="2.29719" />
          <circle cx="101.536" cy="151.155" fill="var(--fill-0, #151515)" id="Ellipse 388" r="2.29719" />
          <circle cx="101.536" cy="159.425" fill="var(--fill-0, #151515)" id="Ellipse 402" r="2.29719" />
          <circle cx="109.806" cy="2.2972" fill="var(--fill-0, #151515)" id="Ellipse 137" r="2.29719" />
          <circle cx="109.806" cy="10.5671" fill="var(--fill-0, #151515)" id="Ellipse 151" r="2.29719" />
          <circle cx="109.806" cy="18.837" fill="var(--fill-0, #151515)" id="Ellipse 165" r="2.29719" />
          <circle cx="109.806" cy="27.1069" fill="var(--fill-0, #151515)" id="Ellipse 179" r="2.29719" />
          <circle cx="109.806" cy="35.3768" fill="var(--fill-0, #151515)" id="Ellipse 193" r="2.29719" />
          <circle cx="109.806" cy="43.6467" fill="var(--fill-0, #151515)" id="Ellipse 207" r="2.29719" />
          <circle cx="109.806" cy="51.9165" fill="var(--fill-0, #151515)" id="Ellipse 221" r="2.29719" />
          <circle cx="109.806" cy="60.1864" fill="var(--fill-0, #151515)" id="Ellipse 235" r="2.29719" />
          <circle cx="109.806" cy="68.4563" fill="var(--fill-0, #151515)" id="Ellipse 249" r="2.29719" />
          <circle cx="109.806" cy="76.7262" fill="var(--fill-0, #151515)" id="Ellipse 263" r="2.29719" />
          <circle cx="109.806" cy="84.9961" fill="var(--fill-0, #151515)" id="Ellipse 277" r="2.29719" />
          <circle cx="109.806" cy="93.266" fill="var(--fill-0, #151515)" id="Ellipse 291" r="2.29719" />
          <circle cx="109.806" cy="101.536" fill="var(--fill-0, #151515)" id="Ellipse 305" r="2.29719" />
          <circle cx="109.806" cy="109.806" fill="var(--fill-0, #151515)" id="Ellipse 319" r="2.29719" />
          <circle cx="109.806" cy="118.076" fill="var(--fill-0, #151515)" id="Ellipse 333" r="2.29719" />
          <circle cx="109.806" cy="126.346" fill="var(--fill-0, #151515)" id="Ellipse 347" r="2.29719" />
          <circle cx="109.806" cy="134.615" fill="var(--fill-0, #151515)" id="Ellipse 361" r="2.29719" />
          <circle cx="109.806" cy="142.885" fill="var(--fill-0, #151515)" id="Ellipse 375" r="2.29719" />
          <circle cx="109.806" cy="151.155" fill="var(--fill-0, #151515)" id="Ellipse 389" r="2.29719" />
          <circle cx="109.806" cy="159.425" fill="var(--fill-0, #151515)" id="Ellipse 403" r="2.29719" />
        </g>
      </svg>
    </div>
  );
}

function PowerButton({ onClick }: { onClick: () => void }) {
  return (
    <button 
      className="absolute left-[313.42px] size-[36.29px] top-[427px] cursor-pointer transition-transform active:scale-95" 
      onClick={onClick}
      aria-label="Power"
    >
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 37 37">
        <g id="power button">
          <circle cx="18.1448" cy="18.1449" fill="var(--fill-0, #828282)" id="Ellipse 24" r="18.1448" />
          <circle cx="18.1274" cy="18.1011" fill="url(#paint0_linear_3_1113)" id="Ellipse 19" r="17.1028" />
          <circle cx="18.1445" cy="18.1449" fill="url(#paint1_linear_3_1113)" id="Ellipse 20" r="13.6086" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_3_1113" x1="26.7914" x2="10.3476" y1="3.40223" y2="33.5964">
            <stop stopColor="white" />
            <stop offset="1" stopColor="#303030" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_3_1113" x1="12.3779" x2="25.3236" y1="31.7579" y2="5.99226">
            <stop stopColor="#D6D6D6" />
            <stop offset="1" stopColor="#B3B3B3" />
          </linearGradient>
        </defs>
      </svg>
    </button>
  );
}

function LedIndicator({ isPowered, state, isEjected }: { isPowered: boolean; state: PlayerState; isEjected: boolean }) {
  const getColor = () => {
    if (!isPowered) return 'bg-gray-700 shadow-none';
    if (isEjected) return 'bg-red-600 shadow-[0px_0px_5.513px_0px_rgba(220,38,38,0.8)]';
    if (state === 'playing') return 'bg-green-500 shadow-[0px_0px_5.513px_0px_rgba(34,197,94,0.9)]';
    if (state === 'recording') return 'bg-red-600 shadow-[0px_0px_8px_0px_rgba(220,38,38,1)] animate-pulse';
    return 'bg-red-600 shadow-[0px_0px_5.513px_0px_rgba(220,38,38,0.8)]';
  };

  return (
    <div 
      className={`absolute left-[287.69px] rounded-[1.72574e+07px] size-[9.185px] top-[441.7px] transition-all duration-200 ${getColor()}`} 
    />
  );
}

function PlayButton({ onClick, isPressed }: { onClick: () => void; isPressed: boolean }) {
  return (
    <button 
      className={`absolute h-[24.81px] left-[293.2px] top-[573.1px] w-[55.133px] cursor-pointer transition-all ${isPressed ? 'translate-y-[2px] scale-95' : 'active:scale-95'}`}
      onClick={onClick}
      aria-label="Play"
    >
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 56 25">
        <g id="Play button">
          <g filter="url(#filter0_in_3_1400)" id="Rectangle 1525">
            <path d={svgPaths.p2a00d300} fill="url(#paint0_linear_3_1400)" />
          </g>
          <path d={svgPaths.p1d3f6170} fill="var(--fill-0, #303030)" id="Vector" />
        </g>
        <defs>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="25.2691" id="filter0_in_3_1400" width="55.4083" x="0" y="0">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dx="0.275663" dy="0.459438" />
            <feGaussianBlur stdDeviation="0.918877" />
            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
            <feBlend in2="shape" mode="normal" result="effect1_innerShadow_3_1400" />
            <feTurbulence baseFrequency="2.1765704154968262 2.1765704154968262" numOctaves="3" result="noise" seed="4929" stitchTiles="stitch" type="fractalNoise" />
            <feComponentTransfer in="noise" result="coloredNoise1">
              <feFuncR intercept="-0.5" slope="2" type="linear" />
              <feFuncG intercept="-0.5" slope="2" type="linear" />
              <feFuncB intercept="-0.5" slope="2" type="linear" />
              <feFuncA tableValues="1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 " type="discrete" />
            </feComponentTransfer>
            <feComposite in="coloredNoise1" in2="effect1_innerShadow_3_1400" operator="in" result="noise1Clipped" />
            <feComponentTransfer in="noise1Clipped" result="color1">
              <feFuncA tableValues="0 0.15" type="table" />
            </feComponentTransfer>
            <feMerge result="effect2_noise_3_1400">
              <feMergeNode in="effect1_innerShadow_3_1400" />
              <feMergeNode in="color1" />
            </feMerge>
          </filter>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_3_1400" x1="27.5663" x2="27.5663" y1="0" y2="24.8097">
            <stop stopColor="#E8E8E8" />
            <stop offset="1" stopColor="#D5D5D5" />
          </linearGradient>
        </defs>
      </svg>
    </button>
  );
}

function FastForwardButton({ onClick, isPressed }: { onClick: () => void; isPressed: boolean }) {
  return (
    <button 
      className={`absolute h-[24.81px] left-[237.15px] top-[573.1px] w-[55.133px] cursor-pointer transition-all ${isPressed ? 'translate-y-[2px] scale-95' : 'active:scale-95'}`}
      onClick={onClick}
      aria-label="Fast forward"
    >
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 56 25">
        <g id="Fast forward button">
          <g filter="url(#filter0_in_3_1412)" id="Rectangle 1524">
            <path d={svgPaths.p3cf95500} fill="url(#paint0_linear_3_1412)" />
          </g>
          <path d={svgPaths.p1ccd5700} fill="var(--fill-0, #303030)" id="Vector" />
        </g>
        <defs>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="25.2691" id="filter0_in_3_1412" width="55.4083" x="0" y="0">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dx="0.275663" dy="0.459438" />
            <feGaussianBlur stdDeviation="0.918877" />
            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
            <feBlend in2="shape" mode="normal" result="effect1_innerShadow_3_1412" />
            <feTurbulence baseFrequency="2.1765704154968262 2.1765704154968262" numOctaves="3" result="noise" seed="4929" stitchTiles="stitch" type="fractalNoise" />
            <feComponentTransfer in="noise" result="coloredNoise1">
              <feFuncR intercept="-0.5" slope="2" type="linear" />
              <feFuncG intercept="-0.5" slope="2" type="linear" />
              <feFuncB intercept="-0.5" slope="2" type="linear" />
              <feFuncA tableValues="1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 " type="discrete" />
            </feComponentTransfer>
            <feComposite in="coloredNoise1" in2="effect1_innerShadow_3_1412" operator="in" result="noise1Clipped" />
            <feComponentTransfer in="noise1Clipped" result="color1">
              <feFuncA tableValues="0 0.15" type="table" />
            </feComponentTransfer>
            <feMerge result="effect2_noise_3_1412">
              <feMergeNode in="effect1_innerShadow_3_1412" />
              <feMergeNode in="color1" />
            </feMerge>
          </filter>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_3_1412" x1="27.5663" x2="27.5663" y1="0" y2="24.8097">
            <stop stopColor="#E8E8E8" />
            <stop offset="1" stopColor="#D5D5D5" />
          </linearGradient>
        </defs>
      </svg>
    </button>
  );
}

function RewindButton({ onClick, isPressed }: { onClick: () => void; isPressed: boolean }) {
  return (
    <button 
      className={`absolute h-[24.81px] left-[181.1px] top-[573.1px] w-[55.133px] cursor-pointer transition-all ${isPressed ? 'translate-y-[2px] scale-95' : 'active:scale-95'}`}
      onClick={onClick}
      aria-label="Rewind"
    >
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 56 25">
        <g id="Reward button">
          <g filter="url(#filter0_in_3_1109)" id="Rectangle 1522">
            <path d={svgPaths.pef47b80} fill="url(#paint0_linear_3_1109)" />
          </g>
          <path d={svgPaths.p2616b440} fill="var(--fill-0, #303030)" id="Vector" />
        </g>
        <defs>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="25.2691" id="filter0_in_3_1109" width="55.4083" x="0" y="0">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dx="0.275663" dy="0.459438" />
            <feGaussianBlur stdDeviation="0.918877" />
            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
            <feBlend in2="shape" mode="normal" result="effect1_innerShadow_3_1109" />
            <feTurbulence baseFrequency="2.1765704154968262 2.1765704154968262" numOctaves="3" result="noise" seed="4929" stitchTiles="stitch" type="fractalNoise" />
            <feComponentTransfer in="noise" result="coloredNoise1">
              <feFuncR intercept="-0.5" slope="2" type="linear" />
              <feFuncG intercept="-0.5" slope="2" type="linear" />
              <feFuncB intercept="-0.5" slope="2" type="linear" />
              <feFuncA tableValues="1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 " type="discrete" />
            </feComponentTransfer>
            <feComposite in="coloredNoise1" in2="effect1_innerShadow_3_1109" operator="in" result="noise1Clipped" />
            <feComponentTransfer in="noise1Clipped" result="color1">
              <feFuncA tableValues="0 0.15" type="table" />
            </feComponentTransfer>
            <feMerge result="effect2_noise_3_1109">
              <feMergeNode in="effect1_innerShadow_3_1109" />
              <feMergeNode in="color1" />
            </feMerge>
          </filter>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_3_1109" x1="27.5663" x2="27.5663" y1="0" y2="24.8097">
            <stop stopColor="#E8E8E8" />
            <stop offset="1" stopColor="#D5D5D5" />
          </linearGradient>
        </defs>
      </svg>
    </button>
  );
}

function PauseButton({ onClick, isPressed }: { onClick: () => void; isPressed: boolean }) {
  return (
    <button 
      className={`absolute h-[24.81px] left-[293.2px] top-[514.29px] w-[55.133px] cursor-pointer transition-all ${isPressed ? 'translate-y-[2px] scale-95' : 'active:scale-95'}`}
      onClick={onClick}
      aria-label="Pause"
    >
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 56 25">
        <g id="pause button">
          <g filter="url(#filter0_in_3_1105)" id="Rectangle 1529">
            <path d={svgPaths.p2a00d300} fill="url(#paint0_linear_3_1105)" />
          </g>
          <path d={svgPaths.p1c03ac00} fill="var(--fill-0, #303030)" id="Vector" />
        </g>
        <defs>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="25.2691" id="filter0_in_3_1105" width="55.4083" x="0" y="0">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dx="0.275663" dy="0.459438" />
            <feGaussianBlur stdDeviation="0.918877" />
            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
            <feBlend in2="shape" mode="normal" result="effect1_innerShadow_3_1105" />
            <feTurbulence baseFrequency="2.1765704154968262 2.1765704154968262" numOctaves="3" result="noise" seed="4929" stitchTiles="stitch" type="fractalNoise" />
            <feComponentTransfer in="noise" result="coloredNoise1">
              <feFuncR intercept="-0.5" slope="2" type="linear" />
              <feFuncG intercept="-0.5" slope="2" type="linear" />
              <feFuncB intercept="-0.5" slope="2" type="linear" />
              <feFuncA tableValues="1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 " type="discrete" />
            </feComponentTransfer>
            <feComposite in="coloredNoise1" in2="effect1_innerShadow_3_1105" operator="in" result="noise1Clipped" />
            <feComponentTransfer in="noise1Clipped" result="color1">
              <feFuncA tableValues="0 0.15" type="table" />
            </feComponentTransfer>
            <feMerge result="effect2_noise_3_1105">
              <feMergeNode in="effect1_innerShadow_3_1105" />
              <feMergeNode in="color1" />
            </feMerge>
          </filter>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_3_1105" x1="27.5663" x2="27.5663" y1="0" y2="24.8097">
            <stop stopColor="#E8E8E8" />
            <stop offset="1" stopColor="#D5D5D5" />
          </linearGradient>
        </defs>
      </svg>
    </button>
  );
}

function MaterialSymbolsStop() {
  return (
    <div className="absolute left-[253.69px] size-[22.053px] top-[516.13px] pointer-events-none">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23 23">
        <g id="material-symbols:stop">
          <path d={svgPaths.p1c6ebb80} fill="var(--fill-0, #303030)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function StopButton({ onClick, isPressed }: { onClick: () => void; isPressed: boolean }) {
  return (
    <>
      <button 
        className={`absolute bg-gradient-to-b from-[#e8e8e8] h-[24.81px] left-[237.15px] rounded-[0.919px] to-[#d5d5d5] top-[514.29px] w-[55.133px] cursor-pointer transition-all ${isPressed ? 'translate-y-[2px] scale-95' : 'active:scale-95'}`}
        onClick={onClick}
        aria-label="Stop/Eject"
      >
        <div className="absolute inset-0 pointer-events-none shadow-[0.276px_0.459px_1.838px_0px_inset_#ffffff]" />
      </button>
      <MaterialSymbolsStop />
    </>
  );
}

function SolarRecordBold() {
  return (
    <div className="absolute left-[203.15px] size-[11.945px] top-[520.73px] pointer-events-none">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_3_1099)" id="solar:record-bold">
          <path d={svgPaths.p2cd35400} fill="var(--fill-0, #303030)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_3_1099">
            <rect fill="white" height="11.9454" width="11.9454" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function RecordButton({ onClick, isPressed }: { onClick: () => void; isPressed: boolean }) {
  return (
    <>
      <button 
        className={`absolute h-[24.81px] left-[181.1px] rounded-bl-[1.838px] rounded-br-[0.919px] rounded-tl-[1.838px] rounded-tr-[0.919px] top-[514.29px] w-[55.133px] cursor-pointer transition-all ${isPressed ? 'translate-y-[2px] scale-95' : 'active:scale-95'}`}
        style={{ 
          backgroundImage: "linear-gradient(195.342deg, rgb(255, 77, 0) 29.318%, rgb(255, 143, 94) 111.19%), linear-gradient(rgb(232, 232, 232) 0%, rgb(213, 213, 213) 100%)" 
        }}
        onClick={onClick}
        aria-label="Record"
      >
        <div className="absolute inset-0 pointer-events-none shadow-[0.276px_0.459px_1.838px_0px_inset_#ffffff]" />
      </button>
      <SolarRecordBold />
    </>
  );
}

export default function VintageWalkmanMusicPlayer() {
  const [isPowered, setIsPowered] = useState(false);
  const [state, setState] = useState<PlayerState>('stopped');
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [rotation, setRotation] = useState(0);
  const [lastPressedButton, setLastPressedButton] = useState<PlayerState | null>(null);
  const [recordedAudio, setRecordedAudio] = useState<string | null>(null);
  const [isRecordingMode, setIsRecordingMode] = useState(false);
  const [isEjected, setIsEjected] = useState(false);
  const [showTapeDisplay, setShowTapeDisplay] = useState(false);
  const animationRef = useRef<number>();
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const playPromiseRef = useRef<Promise<void> | null>(null);
  const rewindAudioContextRef = useRef<AudioContext | null>(null);
  const rewindOscillatorRef = useRef<OscillatorNode | null>(null);
  const rewindGainRef = useRef<GainNode | null>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const isRecordingModeRef = useRef(false);
  const ejectSoundRef = useRef<HTMLAudioElement | null>(null);
  const insertSoundRef = useRef<HTMLAudioElement | null>(null);
  const isInitialMount = useRef(true);

  const currentSong = isPowered && !isRecordingMode ? SONGS[currentSongIndex] : null;

  // Keep ref in sync with state
  useEffect(() => {
    isRecordingModeRef.current = isRecordingMode;
  }, [isRecordingMode]);

  // Initialize audio on mount
  useEffect(() => {
    audioRef.current = new Audio();
    audioRef.current.volume = 0.8;
    audioRef.current.loop = true;
    
    // Initialize sound effects for eject/insert with preload
    ejectSoundRef.current = new Audio('https://raw.githubusercontent.com/khuang67/637-assets/2403f92/cassette-eject-172757.mp3');
    ejectSoundRef.current.volume = 0.8;
    ejectSoundRef.current.preload = 'auto';
    ejectSoundRef.current.load();
    
    insertSoundRef.current = new Audio('https://raw.githubusercontent.com/khuang67/637-assets/2403f92/tape-cassette-insert-172758.mp3');
    insertSoundRef.current.volume = 0.75;
    insertSoundRef.current.preload = 'auto';
    insertSoundRef.current.load();
    
    // Initialize Web Audio API for mechanical rewind sound
    rewindAudioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
    
    // Handle audio ended (if not looping)
    const handleEnded = () => {
      // If we just finished playing a recording, switch back to playlist mode
      if (isRecordingModeRef.current) {
        setIsRecordingMode(false);
      }
      setCurrentSongIndex((prev) => (prev + 1) % SONGS.length);
      setState('stopped');
    };
    
    audioRef.current.addEventListener('ended', handleEnded);
    
    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener('ended', handleEnded);
        audioRef.current.pause();
        audioRef.current = null;
      }
      if (rewindAudioContextRef.current) {
        rewindAudioContextRef.current.close();
      }
      if (ejectSoundRef.current) {
        ejectSoundRef.current = null;
      }
      if (insertSoundRef.current) {
        insertSoundRef.current = null;
      }
    };
  }, []);

  // Load new song when song index changes or switch to recorded audio
  useEffect(() => {
    if (audioRef.current) {
      if (isRecordingMode && recordedAudio) {
        audioRef.current.src = recordedAudio;
        audioRef.current.loop = false; // Don't loop recorded audio
        audioRef.current.load();
      } else if (currentSong) {
        audioRef.current.src = currentSong.audioUrl;
        audioRef.current.loop = true; // Loop playlist songs
        audioRef.current.load();
      }
    }
  }, [currentSongIndex, currentSong, isRecordingMode, recordedAudio]);

  // Handle eject/insert sound effects
  useEffect(() => {
    // Skip sound effects on initial mount
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }
    
    if (isEjected && ejectSoundRef.current) {
      // Play eject sound
      ejectSoundRef.current.currentTime = 0;
      ejectSoundRef.current.play().catch(() => {});
    } else if (!isEjected && insertSoundRef.current) {
      // Play insert sound
      insertSoundRef.current.currentTime = 0;
      insertSoundRef.current.play().catch(() => {});
    }
  }, [isEjected]);

  // Handle power off - stop everything
  useEffect(() => {
    if (!isPowered) {
      setState('stopped');
      setRotation(0);
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    }
  }, [isPowered]);

  // Handle mechanical rewind sound effect
  useEffect(() => {
    if (!rewindAudioContextRef.current || !isPowered) return;

    if (state === 'rewinding') {
      // Stop music playback during rewind
      if (audioRef.current) {
        audioRef.current.pause();
      }

      // Create mechanical motor sound for rewinding
      const context = rewindAudioContextRef.current;
      
      // Create oscillator for motor hum (low frequency)
      const oscillator = context.createOscillator();
      oscillator.type = 'sawtooth';
      oscillator.frequency.setValueAtTime(80, context.currentTime);
      
      // Add slight frequency modulation for mechanical vibration
      const lfo = context.createOscillator();
      lfo.frequency.setValueAtTime(10, context.currentTime);
      const lfoGain = context.createGain();
      lfoGain.gain.setValueAtTime(5, context.currentTime);
      lfo.connect(lfoGain);
      lfoGain.connect(oscillator.frequency);
      
      // Create gain node for volume control
      const gainNode = context.createGain();
      gainNode.gain.setValueAtTime(0.4, context.currentTime);
      
      // Create filter for more mechanical sound
      const filter = context.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(200, context.currentTime);
      filter.Q.setValueAtTime(1, context.currentTime);
      
      // Connect the nodes
      oscillator.connect(filter);
      filter.connect(gainNode);
      gainNode.connect(context.destination);
      
      // Start the sound
      oscillator.start();
      lfo.start();
      
      // Store references for cleanup
      rewindOscillatorRef.current = oscillator;
      rewindGainRef.current = gainNode;
    } else {
      // Stop mechanical rewind sound
      if (rewindOscillatorRef.current) {
        rewindOscillatorRef.current.stop();
        rewindOscillatorRef.current = null;
      }
      rewindGainRef.current = null;
    }

    return () => {
      if (rewindOscillatorRef.current) {
        try {
          rewindOscillatorRef.current.stop();
        } catch (e) {
          // Already stopped
        }
        rewindOscillatorRef.current = null;
      }
    };
  }, [state, isPowered]);

  // Handle playback state changes
  useEffect(() => {
    if (!audioRef.current || !isPowered) return;

    const audio = audioRef.current;

    if (state === 'playing') {
      audio.playbackRate = 1;
      audio.volume = 0.8; // Ensure volume is set
      playPromiseRef.current = audio.play();
      if (playPromiseRef.current) {
        playPromiseRef.current
          .then(() => {
            playPromiseRef.current = null;
          })
          .catch(() => {
            playPromiseRef.current = null;
          });
      }
    } else if (state === 'paused') {
      if (playPromiseRef.current) {
        playPromiseRef.current
          .then(() => {
            audio.pause();
          })
          .catch(() => {
            // Play was interrupted, but we can still pause
          });
      } else {
        audio.pause();
      }
    } else if (state === 'stopped') {
      if (playPromiseRef.current) {
        playPromiseRef.current
          .then(() => {
            audio.pause();
            audio.currentTime = 0;
          })
          .catch(() => {
            audio.pause();
            audio.currentTime = 0;
          });
      } else {
        audio.pause();
        audio.currentTime = 0;
      }
    } else if (state === 'fastforwarding') {
      audio.playbackRate = 2;
      playPromiseRef.current = audio.play();
      if (playPromiseRef.current) {
        playPromiseRef.current
          .then(() => {
            playPromiseRef.current = null;
          })
          .catch(() => {
            playPromiseRef.current = null;
          });
      }
    } else if (state === 'recording') {
      // Recording mode: pause audio playback
      if (playPromiseRef.current) {
        playPromiseRef.current
          .then(() => {
            audio.pause();
          })
          .catch(() => {
            // Play was interrupted, but we can still pause
          });
      } else {
        audio.pause();
      }
    }
    // Note: rewinding is handled by the mechanical sound effect above
  }, [state, isPowered]);

  // Handle reel rotation animation
  useEffect(() => {
    if (!isPowered || (state !== 'playing' && state !== 'fastforwarding' && state !== 'rewinding' && state !== 'recording')) {
      return;
    }

    let lastTime = Date.now();
    const speed = state === 'fastforwarding' ? 2 : state === 'rewinding' ? -3 : 1;

    const animate = () => {
      const now = Date.now();
      const delta = (now - lastTime) / 1000;
      lastTime = now;

      // Handle rewinding - move backwards while audio plays at 2x speed
      // This creates a "scanning backwards" effect where you hear the audio while rewinding
      if (state === 'rewinding' && audioRef.current) {
        // Move backwards at 2x speed
        // Net effect: stays in same position while playing audio at 2x speed (scanning effect)
        const newTime = Math.max(0, audioRef.current.currentTime - delta * 2);
        audioRef.current.currentTime = newTime;
        
        // When we reach the beginning, bounce the rewind button back up
        if (newTime === 0) {
          setState('stopped');
          setLastPressedButton(null);
        }
      }

      // Rotate cassette reels (negative speed will rotate backwards for rewinding)
      setRotation(prev => prev + delta * 90 * speed);

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [state, isPowered, currentSongIndex]);

  const handlePower = () => {
    if (isPowered) {
      // Turning off - clear last pressed button
      setLastPressedButton(null);
    } else {
      // Turning on - prime the audio by playing silently (fixes first-time audio issue)
      if (ejectSoundRef.current) {
        const primeEject = ejectSoundRef.current.play();
        if (primeEject) {
          primeEject.then(() => {
            if (ejectSoundRef.current) {
              ejectSoundRef.current.pause();
              ejectSoundRef.current.currentTime = 0;
            }
          }).catch(() => {
            // Ignore errors - this is just to prime the audio
          });
        }
      }
      if (insertSoundRef.current) {
        const primeInsert = insertSoundRef.current.play();
        if (primeInsert) {
          primeInsert.then(() => {
            if (insertSoundRef.current) {
              insertSoundRef.current.pause();
              insertSoundRef.current.currentTime = 0;
            }
          }).catch(() => {
            // Ignore errors - this is just to prime the audio
          });
        }
      }
    }
    setIsPowered(!isPowered);
  };

  const handlePlay = () => {
    if (!isPowered) return; // Only works when powered on
    
    // Don't allow play when TapeDisplay is showing
    if (showTapeDisplay) return;
    
    // If ejected, reinsert the cassette when play is pressed
    if (isEjected) {
      setIsEjected(false);
      return;
    }
    
    if (state === 'paused' || state === 'stopped' || state === 'fastforwarding' || state === 'rewinding') {
      setState('playing');
      setLastPressedButton('playing');
    }
  };

  const handlePause = () => {
    if (!isPowered || isEjected || showTapeDisplay) return; // Only works when powered on and cassette inserted
    if (state === 'playing' || state === 'fastforwarding' || state === 'rewinding') {
      setState('paused');
      setLastPressedButton('paused');
    }
  };

  const handleStop = () => {
    // Eject should work even when power is off (mechanical action)
    
    // If currently recording, stop the recording (only if powered on)
    if (isPowered && state === 'recording') {
      if (mediaRecorderRef.current && mediaRecorderRef.current.state === 'recording') {
        mediaRecorderRef.current.stop();
      }
    }
    
    // If already stopped or power is off, toggle eject
    if (state === 'stopped' || !isPowered) {
      setIsEjected(!isEjected);
      setShowTapeDisplay(!showTapeDisplay);
      setLastPressedButton(null);
      if (!isEjected) {
        // When ejecting, ensure audio is stopped and reels stop
        if (audioRef.current) {
          audioRef.current.pause();
          audioRef.current.currentTime = 0;
        }
        setRotation(0);
      }
    } else {
      // Otherwise, stop playback first (only when powered on)
      setState('stopped');
      setLastPressedButton(null);
      setRotation(0);
    }
  };

  const handleRecord = async () => {
    if (!isPowered || isEjected || showTapeDisplay) return; // Only works when powered on and cassette inserted
    // Can't record while rewinding or fast-forwarding
    if (state === 'rewinding' || state === 'fastforwarding') return;
    // Can only start recording when not already recording
    if (state === 'recording') return;
    
    // Check for HTTPS on mobile
    if (window.location.protocol !== 'https:' && window.location.hostname !== 'localhost') {
      alert('Recording requires a secure (HTTPS) connection on mobile devices.');
      return;
    }

    // Check if MediaRecorder is supported
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      alert('Your browser does not support audio recording. Please use a modern browser.');
      return;
    }

    if (typeof MediaRecorder === 'undefined') {
      alert('MediaRecorder is not supported in your browser. Please try Chrome, Edge, or Safari.');
      return;
    }
    
    // Start recording
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      
      // Determine the best MIME type for the current browser
      let mimeType = 'audio/webm';
      const options: MediaRecorderOptions = {};
      
      // iOS Safari support
      if (MediaRecorder.isTypeSupported('audio/mp4')) {
        mimeType = 'audio/mp4';
        options.mimeType = 'audio/mp4';
      } else if (MediaRecorder.isTypeSupported('audio/webm;codecs=opus')) {
        mimeType = 'audio/webm;codecs=opus';
        options.mimeType = 'audio/webm;codecs=opus';
      } else if (MediaRecorder.isTypeSupported('audio/webm')) {
        mimeType = 'audio/webm';
        options.mimeType = 'audio/webm';
      } else if (MediaRecorder.isTypeSupported('audio/ogg;codecs=opus')) {
        mimeType = 'audio/ogg;codecs=opus';
        options.mimeType = 'audio/ogg;codecs=opus';
      } else {
        // No options specified - let the browser choose
        mimeType = 'audio/webm'; // fallback for blob creation
      }
      
      const mediaRecorder = new MediaRecorder(stream, options);
      mediaRecorderRef.current = mediaRecorder;
      audioChunksRef.current = [];

      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          audioChunksRef.current.push(event.data);
        }
      };

      mediaRecorder.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: mimeType });
        const audioUrl = URL.createObjectURL(audioBlob);
        setRecordedAudio(audioUrl);
        setIsRecordingMode(true);
        
        // Stop all tracks in the stream
        stream.getTracks().forEach(track => track.stop());
      };

      mediaRecorder.onerror = () => {
        alert('Recording error occurred. Please try again.');
        stream.getTracks().forEach(track => track.stop());
        setState('stopped');
        setLastPressedButton(null);
      };

      mediaRecorder.start();
      setState('recording');
      setLastPressedButton('recording');
    } catch (error: any) {
      
      let errorMessage = 'Unable to access microphone.';
      
      if (error.name === 'NotAllowedError' || error.name === 'PermissionDeniedError') {
        errorMessage = 'Microphone access denied. Please grant microphone permissions in your browser settings.';
      } else if (error.name === 'NotFoundError' || error.name === 'DevicesNotFoundError') {
        errorMessage = 'No microphone found. Please connect a microphone and try again.';
      } else if (error.name === 'NotReadableError' || error.name === 'TrackStartError') {
        errorMessage = 'Microphone is already in use by another application. Please close other apps and try again.';
      } else if (error.name === 'OverconstrainedError' || error.name === 'ConstraintNotSatisfiedError') {
        errorMessage = 'Microphone does not support the required settings.';
      } else if (error.name === 'NotSupportedError') {
        errorMessage = 'Your browser does not support audio recording.';
      } else if (error.name === 'SecurityError') {
        errorMessage = 'Recording is blocked due to security restrictions. Try using HTTPS.';
      }
      
      alert(errorMessage);
    }
  };

  const handleRewind = () => {
    if (!isPowered || isEjected || showTapeDisplay) return; // Only works when powered on and cassette inserted
    if (state === 'playing' || state === 'paused' || state === 'stopped' || state === 'fastforwarding') {
      setState('rewinding');
      setLastPressedButton('rewinding');
    }
  };

  const handleFastForward = () => {
    if (!isPowered || isEjected || showTapeDisplay) return; // Only works when powered on and cassette inserted
    if (state === 'playing' || state === 'paused' || state === 'stopped' || state === 'rewinding') {
      setState('fastforwarding');
      setLastPressedButton('fastforwarding');
    }
  };

  return (
    <div className="bg-white relative size-full">
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center left-[-81px] top-[-88px] w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "818", "--transform-inner-height": "545.328125" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <div className="h-[545.333px] relative w-[818px] bg-[rgb(58,58,58)]">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src="https://raw.githubusercontent.com/khuang67/637-assets/main/a60b80d011b855a39c71aed53e928b50af285dbd.png" />
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isEjected && (
          <motion.div
            key="empty"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="absolute flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center left-[81px] top-[24px] w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))] z-0"
            style={{ "--transform-inner-width": "377", "--transform-inner-height": "250" } as React.CSSProperties}
          >
            <div className="flex-none rotate-[90deg]">
              <div className="h-[250px] relative rounded-bl-[15px] rounded-br-[10px] rounded-tl-[15px] rounded-tr-[10px] w-[377px]">
                <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-bl-[15px] rounded-br-[10px] rounded-tl-[15px] rounded-tr-[10px]">
                  <img alt="" className="absolute h-[222.86%] left-[-29.27%] max-w-none top-[-55.51%] w-[217.16%]" src="https://raw.githubusercontent.com/khuang67/637-assets/main/ae6ce1c27157c8dabeec1537068d0483b8f21bde.png" />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence mode="wait">
        {!isEjected && (
          <motion.div
            key="cassette"
            initial={{ y: -500 }}
            animate={{ y: 0 }}
            exit={{ 
              y: -500,
              transition: { 
                duration: 0.6,
                ease: "backInOut"
              }
            }}
            transition={{ duration: 0.5, ease: "backInOut" }}
            className="relative z-10"
          >
            <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center left-[81px] top-[22px] w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "378", "--transform-inner-height": "249" } as React.CSSProperties}>
              <div className="flex-none rotate-[90deg]">
                <div className="h-[249px] relative rounded-[14.184px] w-[378px]">
                  <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[14.184px]">
                    <img alt="" className="absolute h-[218.13%] left-[-28.35%] max-w-none top-[-53.73%] w-[214.7%]" src="https://raw.githubusercontent.com/khuang67/637-assets/main/a60b80d011b855a39c71aed53e928b50af285dbd.png" />
                  </div>
                </div>
              </div>
            </div>
            <PencilThingy rotation={rotation} />
            <PencilThingy1 rotation={rotation} />
          </motion.div>
        )}
      </AnimatePresence>
      <div className="absolute bg-gradient-to-r from-[#bebebe] from-[4.485%] h-[206px] left-[39px] to-[#cdcdcd] top-[411px] w-[316px]" />
      <div className="absolute h-[24.967px] left-[170.99px] top-[433.43px] w-[105.921px]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[282.75%] left-0 max-w-none top-[-91.38%] w-full" src="https://raw.githubusercontent.com/khuang67/637-assets/main/611baf61f5caa9283f6ec66de9a5790f405ee193.png" />
        </div>
      </div>
      <SpeakerHoles />
      <PowerButton onClick={handlePower} />
      <div className="absolute bg-gradient-to-t from-[#343434] from-[3.448%] h-[26.647px] left-[180.18px] rounded-[2.757px] to-[#9a9a9a] to-[239.66%] top-[572.18px] w-[169.073px]">
        <div aria-hidden="true" className="absolute border-[0.459px] border-[rgba(255,255,255,0.6)] border-solid inset-[-0.459px] pointer-events-none rounded-[3.21644px]" />
      </div>
      <div className="absolute bg-gradient-to-t from-[#343434] from-[3.448%] h-[26.647px] left-[180.18px] rounded-[2.757px] to-[#9a9a9a] to-[239.66%] top-[513.37px] w-[169.073px]">
        <div aria-hidden="true" className="absolute border-[0.459px] border-[rgba(255,255,255,0.6)] border-solid inset-[-0.459px] pointer-events-none rounded-[3.21644px]" />
      </div>
      <p className="absolute font-['Al_Nile:Regular',_'Noto_Sans:Regular',_sans-serif] leading-[normal] left-[321.08px] text-[8.27px] text-black text-center text-nowrap top-[558.4px] translate-x-[-50%] whitespace-pre pointer-events-none" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
        PLAY
      </p>
      <p className="absolute font-['Al_Nile:Regular',_'Noto_Sans:Regular',_sans-serif] leading-[normal] left-[265.21px] text-[8.27px] text-black text-center text-nowrap top-[558.4px] translate-x-[-50%] whitespace-pre pointer-events-none" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
        F.F
      </p>
      <p className="absolute font-['Al_Nile:Regular',_'Noto_Sans:Regular',_sans-serif] leading-[normal] left-[209.4px] text-[8.27px] text-black text-center text-nowrap top-[558.4px] translate-x-[-50%] whitespace-pre pointer-events-none" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
        REW
      </p>
      <p className="absolute font-['Al_Nile:Regular',_'Noto_Sans:Regular',_sans-serif] leading-[normal] left-[320.91px] text-[8.27px] text-black text-center text-nowrap top-[499.59px] translate-x-[-50%] whitespace-pre pointer-events-none" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
        PAUSE
      </p>
      <p className="absolute font-['Al_Nile:Regular',_'Noto_Sans:Regular',_sans-serif] leading-[normal] left-[264.75px] text-[8.27px] text-black text-center text-nowrap top-[499.59px] translate-x-[-50%] whitespace-pre pointer-events-none" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
        STOP/EJECT
      </p>
      <p className="absolute font-['Al_Nile:Regular',_'Noto_Sans:Regular',_sans-serif] leading-[normal] left-[208.82px] text-[8.27px] text-black text-center text-nowrap top-[499.59px] translate-x-[-50%] whitespace-pre pointer-events-none" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
        REC
      </p>
      <LedIndicator isPowered={isPowered} state={state} isEjected={isEjected} />
      <PlayButton onClick={handlePlay} isPressed={isPowered && state === 'playing' && lastPressedButton === 'playing'} />
      <FastForwardButton onClick={handleFastForward} isPressed={isPowered && state === 'fastforwarding' && lastPressedButton === 'fastforwarding'} />
      <RewindButton onClick={handleRewind} isPressed={isPowered && state === 'rewinding' && lastPressedButton === 'rewinding'} />
      <PauseButton onClick={handlePause} isPressed={isPowered && state === 'paused' && lastPressedButton === 'paused'} />
      <StopButton onClick={handleStop} isPressed={isPowered && state === 'stopped' && lastPressedButton === 'stopped'} />
      <RecordButton onClick={handleRecord} isPressed={isPowered && state === 'recording' && lastPressedButton === 'recording'} />
      
      {/* Tape Display - Fades in when cassette is ejected */}
      <AnimatePresence>
        {showTapeDisplay && (
          <motion.div
            key="tape-display"
            initial={{ 
              y: 23,
              x: 79,
              opacity: 0
            }}
            animate={{ 
              y: 23,
              x: 79,
              opacity: 1
            }}
            exit={{ 
              y: 23,
              x: 79,
              opacity: 0,
              transition: {
                duration: 0.5,
                ease: "easeInOut"
              }
            }}
            transition={{ 
              duration: 0.6,
              ease: "easeInOut",
              delay: 0.6  // Wait for cassette ejection animation to complete (0.6s)
            }}
            className="absolute w-[251px] h-[379px] z-50"
          >
            <TapeDisplay 
              currentSongIndex={currentSongIndex}
              songs={SONGS}
              onSelectTape={(index) => {
                // Change to the selected tape
                setCurrentSongIndex(index);
                
                // Hide TapeDisplay first - triggers exit animation (0.5s)
                setShowTapeDisplay(false);
                
                // Wait for TapeDisplay to slide out completely (0.5s)
                setTimeout(() => {
                  // Then insert the cassette
                  setIsEjected(false);
                  
                  // Play insert sound after a brief moment
                  setTimeout(() => {
                    if (insertSoundRef.current) {
                      insertSoundRef.current.currentTime = 0;
                      insertSoundRef.current.play().catch(() => {});
                    }
                  }, 100);
                }, 500);
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
