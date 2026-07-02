import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMoon, faSun, faMapMarkerAlt, faPlay, faQuoteLeft, faEnvelope
} from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';
import 'animate.css';
import './App.css'


//images
import forMich from './components/images/ForMichigan.png';
import oneVote from './components/images/oneVote.png';
import ar from './components/images/convosenses.png';
import shriya from './components/images/shriya-transparent.png';
import demo from './components/images/Demostration.webm';

import twfivhack from './components/images/2025hackathonwin.jpeg'
import twfrhack from './components/images/2024hackathon.jpg'
import twthrhack from './components/images/2023hackathonwin.jpg'
import walmart from './components/images/walmart.jpg'
import urop from './components/images/urop.JPG';
import demo_img from './components/images/demo_img.png';
// import ai from './components/images/aihandwritingmodel.png';
import robo from './components/images/EdgeDetection.webp';
import greenBro from './components/images/greenBrother.png';
import plannerIo from './components/images/plannerIo.png';
import medChatbot from './components/images/medChatbot.png';
import docuDog from './components/images/docuDog.png';
import deadlineTracker from './components/images/deadlineTracker.png';
import architext from './components/images/architext.png';
import budget from './components/images/budgetApp.png';


const SCHEMATICS = {
  devpost: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
      <path d="M6.002 1.61L0 12.004L6.002 22.39h11.996L24 12.004L17.998 1.61H6.002z" />
      <path d="M7.595 5.694h3.947c3.605 0 6.276 1.695 6.276 6.31 0 4.436-3.21 6.302-6.456 6.302H7.595v-12.612z" strokeOpacity="0.6" />
      <path d="M10.112 8.143v7.714h1.241c2.646 0 3.862-1.55 3.862-3.861.009-2.569-1.096-3.853-3.767-3.853z" strokeOpacity="0.4" />
    </svg>
  ),
  memory: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M6 4v16M10 4v16M14 4v16M18 4v16M2 10h20M2 14h20" strokeOpacity="0.3" />
    </svg>
  ),
  lock: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10">
      <rect x="5" y="11" width="14" height="10" rx="2" />
      <path d="M7 11V7a5 5 0 0110 0v4" />
    </svg>
  ),
  server: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10">
      <rect x="2" y="2" width="20" height="8" rx="2" />
      <rect x="2" y="14" width="20" height="8" rx="2" />
      <path d="M6 6h.01M6 18h.01M18 6h.01M18 18h.01" />
    </svg>
  ),
  brain: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10">
      <path d="M9.5 2A4.5 4.5 0 005 6.5c0 .41.05.81.15 1.19A4.5 4.5 0 007 16.5c.41 0 .81-.05 1.19-.15A4.5 4.5 0 0016.5 19c.41 0 .81-.05 1.19-.15A4.5 4.5 0 0019 14.5c0-.41-.05-.81-.15-1.19A4.5 4.5 0 0017 4.5c-.41 0-.81.05-1.19.15A4.5 4.5 0 009.5 2z" />
    </svg>
  ),
  nodes: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10">
      <circle cx="12" cy="5" r="3" /><circle cx="5" cy="19" r="3" /><circle cx="19" cy="19" r="3" />
      <path d="M12 8v8M7 17l3.5-3.5M17 17l-3.5-3.5" />
    </svg>
  ),
  eye: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
};

const FlipCard = ({ front, back, rotate, width, height, isFlipped }) => {
  return (
    <div
      className={`relative ${rotate} transition-all duration-500 hover:z-50 hover:scale-105`}
      style={{
        width,
        height,
        perspective: '1200px',
        WebkitPerspective: '1200px'
      }}
    >
      <div
        className="relative w-full h-full transition-transform duration-700 preserve-3d"
        style={{
          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
          WebkitTransform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
        }}
      >
        <div
          className="absolute inset-0 w-full h-full backface-hidden z-20"
          style={{ transform: 'rotateY(0deg)', WebkitTransform: 'rotateY(0deg)' }}
        >
          {front}
        </div>
        <div
          className="absolute inset-0 w-full h-full backface-hidden bg-white dark:bg-[#F3F3F1] board-item-shadow rounded-sm shadow-2xl shadow-black/50 p-6 border border-neutral-200 dark:border-[#D1D1D1]"
          style={{
            transform: 'rotateY(180deg)',
            WebkitTransform: 'rotateY(180deg)'
          }}
        >
          <div className="h-full w-full" style={{ backfaceVisibility: 'hidden' }}>
            {back}
          </div>
        </div>
      </div>
    </div>
  );
};

const PolaroidItem = ({ data, onPlay, isPlaying }) => {
  const [isHoveringCard, setIsHoveringCard] = useState(false);
  const [isOverVideo, setIsOverVideo] = useState(false);
  const shouldFlip = isHoveringCard && !isOverVideo; //dont flip over video so user can play
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const scrollRef = useRef(null);
  
  const [isMobile, setIsMobile] = useState(false);

  //resize for mobile
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

useEffect(() => {
  if (scrollRef.current) {
    const { scrollHeight, clientHeight } = scrollRef.current;
    setIsOverflowing(scrollHeight > clientHeight);
  }
  
  if (!shouldFlip) {
    setHasScrolled(false);
  }
}, [data.text, shouldFlip]); 

const handleScroll = (e) => {
  if (e.target.scrollTop > 10) setHasScrolled(true); //hide if user
};
  const front = (
    <>
      <Pushpin />

      <div className="bg-white dark:bg-[#F3F3F1] board-item-shadow p-3 pb-6 h-full shadow-xl shadow-black/30 border border-neutral-200 dark:border-[#D1D1D1] flex flex-col">
        <div
          className="relative w-full h-[75%] bg-black overflow-hidden group/img z-30"
          onMouseEnter={() => setIsOverVideo(true)}
          onMouseLeave={() => setIsOverVideo(false)}
        >
          {isPlaying ? (
            <iframe
              src={`https://www.youtube.com/embed/${data.video.includes("v=")
                ? data.video.split("v=")[1].split("&")[0]
                : data.video.split("/").pop()
                }?autoplay=1&mute=1&controls=0&loop=1&playlist=${data.video.includes("v=")
                  ? data.video.split("v=")[1].split("&")[0]
                  : data.video.split("/").pop()
                }`}
              className="w-full h-full border-none"
              allow="autoplay; encrypted-media"
              title="YouTube video player"
            />
          ) : (
            <img src={data.img} className="w-full h-full object-cover" alt="snap" />
          )}

          {data.video && !isPlaying && (
            <div
              onClick={(e) => {
                e.stopPropagation();
                onPlay(data.id);
              }}
              className="absolute inset-0 flex items-center justify-center cursor-pointer bg-black/10 hover:bg-black/40 transition-all"
            >
              <FontAwesomeIcon icon={faPlay} className="text-white text-5xl opacity-70 hover:scale-110 transition-all" />
            </div>
          )}
        </div>

        <div className="flex-1 flex flex-col justify-center items-center pt-3 px-1 text-center">
          <h3 className={`font-['Caveat'] font-bold text-neutral-800 dark:text-black leading-tight mb-1 
          ${data.title.length > 20 ? 'text-lg' : 'text-2xl'}`}>
            {data.title}
          </h3>
          <p className="font-mono text-[11px] text-blue-500 dark:text-blue-400 font-black tracking-tighter uppercase line-clamp-1">
            {data.skills}
          </p>
        </div>
      </div>
    </>
  );

const back = (
  <div className="flex flex-col h-full gap-4 relative">
    <div className="flex flex-col flex-1 min-h-0 relative">
      
      <div className="flex items-center justify-between mb-2 flex-shrink-0">
        <h4 className="font-black uppercase text-[8px] md:text-[10px] tracking-widest text-blue-600 dark:text-blue-500">
          Project Insight
        </h4>

        {/* indicate to scroll if applicable */}
        {isOverflowing && !hasScrolled && (
          <div className="flex items-center gap-1 animate-pulse text-blue-500 transition-opacity duration-500">
            <span className="text-[7px] md:text-[8px] font-bold uppercase tracking-tighter">Keep Scrolling</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" viewBox="0 0 16 16" className="animate-bounce-slow">
              <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
            </svg>
          </div>
        )}
      </div>

      <div 
        ref={scrollRef}
        onScroll={handleScroll} 
        className="flex-1 overflow-y-auto pr-2 custom-project-scroll text-neutral-700 dark:text-neutral-400"
      >
        <p className="font-['Caveat'] text-base md:text-lg leading-tight mb-4">
          {data.text}
        </p>
      </div>

      <div className="pt-2 border-t border-neutral-100 dark:border-neutral-200 flex-shrink-0">
        <p className="font-mono text-[11px] text-blue-800 dark:text-blue-600 font-bold uppercase">
          {data.skills}
        </p>
      </div>
    </div>
    
    {/* link icons */}
    <div className="flex flex-col gap-3 pt-2 border-t border-neutral-100 dark:border-neutral-800 flex-shrink-0">
       <div className="flex gap-4 text-xl text-neutral-400">
        {data.ghlink && <a href={data.ghlink} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} className="text-black" /></a>}
        {data.devpost && (
          <a href={data.devpost} target="_blank" rel="noreferrer" className="text-[#003E54] transition-colors">
            <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
              <path d="M6.002 1.61L0 12.004L6.002 22.39h11.996L24 12.004L17.998 1.61zm1.593 4.084h3.947c3.605 0 6.276 1.695 6.276 6.31 0 4.436-3.21 6.302-6.456 6.302H7.595zm2.517 2.449v7.714h1.241c2.646 0 3.862-1.55 3.862-3.861.009-2.569-1.096-3.853-3.767-3.853z" />
            </svg>
          </a>
        )}
        {data.yt && <a href={data.yt} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faYoutube} className="text-red-600" /></a>}
      </div>

      {data.website && (
        <a href={data.website} target="_blank" rel="noreferrer" className="group/link relative inline-flex items-center gap-3 px-1">
          <div className="absolute -inset-x-1 bottom-0 h-1 bg-blue-400/20 group-hover/link:h-full transition-all duration-200 -rotate-1"></div>
          <span className="relative z-10 font-['Caveat'] text-base font-bold text-neutral-800 dark:text-neutral-200">
            Launch Project <span className="text-2xl"> ↗ </span>
          </span>
        </a>
      )}
    </div>
  </div>
);

  return (
    <div
      onMouseEnter={() => setIsHoveringCard(true)}
      onMouseLeave={() => setIsHoveringCard(false)}
    >
      <FlipCard
        front={front}
        back={back}
        rotate={data.rotate}
        width={isMobile ? "250px" : "320px"}
        height={isMobile ? "300px" : "360px"}
        isFlipped={shouldFlip}
      />
    </div>
  );
};

const PostcardItem = ({ data, isStickyClosed }) => {
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showNote, setShowNote] = useState(false);

  //resize for mobile
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (data.type !== 'postcard_enhanced') return;
    if (!isStickyClosed) return;

    setShowNote(true);
    const clearNote = () => setShowNote(false);
    const timeout = setTimeout(() => {
      window.addEventListener('scroll', clearNote);
      window.addEventListener('mousedown', clearNote);
    }, 700);

    return () => {
      clearTimeout(timeout);
      window.removeEventListener('scroll', clearNote);
      window.removeEventListener('mousedown', clearNote);
    };
  }, [data.type, isStickyClosed]);

  useEffect(() => {
    if (!isHovering) return;
    setShowNote(false);
  }, [isHovering]);

  const front = (
    <>
      {/* postcard magnet */}
      <div className="absolute -top-5 md:-top-12 left-1/2 -translate-x-1/2 z-40 pointer-events-none group-hover:scale-110 transition-transform duration-300">
        <div className="w-10 h-10 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-neutral-300 via-neutral-500 to-neutral-800 dark:from-neutral-200 dark:via-neutral-400 dark:to-neutral-600 shadow-2xl border-b-4 border-neutral-900 flex items-center justify-center relative">
          <div className="absolute top-4 left-2 w-3 h-1.5 bg-white/30 rounded-full rotate-[-40deg]"></div>
          <div className="w-6 h-6 rounded-full border border-white/5 shadow-inner bg-black/10 flex items-center justify-center">
            <div className="w-1 h-1 bg-black/40 rounded-full"></div>
          </div>
        </div>
        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-3 bg-black/40 blur-md rounded-full -z-10"></div>
      </div>

      <div className="bg-[#fffcf5] dark:bg-[#F3F3F1] board-item-shadow  board-item-shadow p-3 h-full shadow-2xl shadow-black/50 border border-neutral-300 dark:border-[#D1D1D1]flex flex-col">
        <div className="w-full h-[75%] bg-neutral-100 dark:bg-[#F3F3F1] overflow-hidden relative border-b border-neutral-200 dark:border-[#D1D1D1]">
          {/* postcard image */}
          <img src={data.img} className="w-full h-full object-cover" alt="card-art" />
          {/* postcard stamp */}
          <div className="absolute top-4 right-4 w-12 h-14 border-2 border-red-600 flex flex-col items-center justify-center font-black text-[10px] text-red-600 rotate-12 bg-white/90">
            <span>{data.stamp || 'POST'}</span>
            <div className="w-6 h-0.5 bg-red-600 my-0.5"></div>
            <span className="text-[6px]">2026</span>
          </div>
        </div>
        <div className="flex-1 flex items-center justify-between mt-5 md:px-2 ">
          {/* postcard info */}
          <div>
            <h2 className="text-[12px] md:text-xl font-black text-black uppercase leading-none mb-3 truncate">{data.title}</h2>
            <h3 className="font-['Caveat'] text-[1em] md:text-2xl text-blue-600 dark:text-blue-500 font-bold leading-none mt-1">{data.role}</h3>
          </div>
        </div>
      </div>
    </>
  );

  const back = (
    <div className="h-full flex flex-col justify-between border-l-2 border-dashed border-neutral-300 dark:border-[#D1D1D1] pl-6">
      <div className="space-y-4">
        <div className="flex justify-between items-start">
          <FontAwesomeIcon icon={faQuoteLeft} className="text-3xl text-blue-100 dark:text-blue-200" />
          <div className="text-right text-[10px] font-mono opacity-50 uppercase tracking-widest">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-1" /> {data.location}
          </div>
        </div>
        <p className="font-['Caveat'] text-base md:text-2xl text-neutral-700 dark:text-neutral-600 leading-tight">
          {data.text}
        </p>
      </div>
    </div>
  );

  return (
    <div
      className={`${data.rotate} transition-all duration-500`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >

      <FlipCard
        front={front}
        back={back}
        width={isMobile ? "325px" : "600px"}
        height={isMobile ? "300px" : "400px"}
        isFlipped={isHovering}
      />
      {showNote && (
        <div className="relative w-full items-center flex flex-col justify-center animate__animated animate__fadeInDown">
          <svg
            viewBox="0 0 120 140"
            className="w-20 h-32 text-blue-500/70 dark:text-blue-400/60"
            style={{ transform: 'rotate(45deg)' }}
          >
            <path
              d="M60,120 C58,90 52,65 58,35"
              fill="none"
              stroke="currentColor"
              strokeWidth="6"
              strokeLinecap="round"
              className="path-animate"
            />
            <path
              d="M58,35 L50,45 M58,35 L66,45"
              fill="none"
              stroke="currentColor"
              strokeWidth="6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <p className="font-['Caveat'] max-w-[400px] text-lg md:text-2xl text-red-600 dark:text-blue-400 rotate-3 leading-tight text-right pr-2">
            <span className="relative inline-block px-1">
              <span
                className="absolute inset-0 bg-yellow-300/60 dark:bg-yellow-400/20 -rotate-1 translate-y-1"
                style={{
                  borderRadius: '20% 80% 15% 85% / 95% 15% 85% 5%',
                  clipPath: 'inset(0 100% 0 0)',
                  animation: 'highlightStroke 0.6s ease-out 1.2s forwards'
                }}
              ></span>
              <span className="relative z-10 text-red-600 font-bold dark:text-red-400">
                Note: hover over elements with a magnet or a pin for more information
              </span>
            </span>
          </p>

          <svg
            viewBox="0 0 120 140"
            className="w-20 h-32 text-blue-500/70 dark:text-blue-400/60"
            style={{ transform: 'rotate(45deg)' }}
          >
            <path
              d="M60,20 C62,50 68,80 60,110"
              fill="none"
              stroke="currentColor"
              strokeWidth="6"
              strokeLinecap="round"
              className="path-animate"
            />
            <path
              d="M60,110 L52,100 M60,110 L68,100"
              fill="none"
              stroke="currentColor"
              strokeWidth="6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      )}
    </div>
  );
};

const PhotoStripItem = ({ data }) => (
  <div
    className={`
      bg-white dark:bg-[#EBEBEB] p-2 pt-6 shadow-xl shadow-black/30 flex flex-col gap-2 transition-all duration-300 hover:scale-105 hover:z-20 cursor-pointer 
      ${data.rotate} border border-neutral-200 dark:border-neutral-700 relative group/strip w-[130px] h-[420px] md:w-[180px] md:h-[580px]
    `}
  >
    <BlueWashiTape className="absolute -top-3 left-1/2 -translate-x-1/2 w-10 h-3 md:w-25 md:h-8" />
    
    {/* array of 3 pics/projects */}
    {[...Array(3)].map((_, i) => (
      <div
        key={i}
        className="flex-1 overflow-hidden relative border border-neutral-100 dark:border-neutral-700 flex flex-col"
        style={{ backgroundColor: data.bgColors?.[i] || 'rgba(30, 58, 138, 0.02)' }}
      >
        {data.imgs?.[i] ? (
          <img
            src={data.imgs[i]}
            alt=""
            className="w-full h-full object-cover transition-all duration-500"
          />
        ) : (
          <div className="w-full h-full flex flex-col relative group/blueprint">
            {/*grid*/}
            <div
              className="absolute inset-0 opacity-[0.08] dark:opacity-[0.10]"
              style={{
                backgroundImage: 'linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(90deg, #3b82f6 1px, transparent 1px)',
                backgroundSize: '10px 10px'
              }}
            />

            <div className="absolute top-1 left-1 w-2 h-2 border-t border-l border-blue-300 dark:border-blue-400"></div>
            <div className="absolute top-1 right-1 w-2 h-2 border-t border-r border-blue-300 dark:border-blue-400"></div>

            <span className="absolute top-2 right-2 text-[6px] md:text-[7px] font-mono text-blue-400 font-bold tracking-widest opacity-60">
              FIG. 0{i + 1}
            </span>

            {/* mid icon */}
            <div className="flex-1 flex items-center justify-center p-2 md:p-4 text-blue-800 dark:text-blue-700 opacity-20 md:opacity-60 group-hover/blueprint:opacity-90 group-hover/blueprint:scale-110 transition-all duration-500">
              {data.svgs?.[i]}
            </div>

            {/* Project Label Area */}
            {data.projectNames?.[i] && (
              <div className="relative z-10 w-full bg-white/90 dark:bg-neutral-100/95 border-t border-blue-100 dark:border-blue-200 p-1.5 md:p-2 backdrop-blur-[2px] flex flex-col items-center justify-center min-h-[35%] md:min-h-[30%]">
                <span className="text-[8px] md:text-[10px] font-black text-blue-900 dark:text-blue-800 uppercase tracking-tighter leading-none text-center">
                  {data.projectNames[i]}
                </span>
                {data.description?.[i] && (
                  <span className="mt-1 text-[6px] md:text-[7px] font-mono font-medium text-blue-600 dark:text-blue-700 uppercase tracking-wide text-center leading-tight">
                    {data.description[i]}
                  </span>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    ))}

    {/* Bottom Title Section */}
    <div className="text-center py-1 md:py-2 border-t border-dashed border-neutral-200 dark:border-neutral-700">
      <p className="font-['Caveat'] text-lg md:text-xl font-bold leading-none text-blue-700 dark:text-blue-800 mb-1 italic">
        {data.title}
      </p>
    </div>
  </div>
);

const StickyItem = ({ data }) => (
  <div
    className={`
      ${data.color} p-4 md:p-6 shadow-xl flex flex-col items-center justify-center text-center relative border-b-4 border-black/10 transition-all hover:rotate-0 hover:scale-110 
      cursor-pointer ${data.rotate} w-[150px] h-[150px] md:w-[200px] md:h-[200px]
    `}
    onClick={() => data.link && window.open(data.link)}
  >
    <Pushpin />
    <div className="absolute top-0 left-0 w-full h-2 md:h-3 bg-white/20"></div>
    
    <FontAwesomeIcon 
      icon={data.icon} 
      className="text-2xl md:text-3xl mb-2 md:mb-3 text-black/40" 
    />
    
    {/* info */}
    <h3 className="text-[8px] md:text-[10px] font-black uppercase mb-1 opacity-40 dark:opacity-50 leading-none">
      {data.title}
    </h3>
    <p className="font-['Caveat'] text-[14px] md:text-xl font-bold text-black/80 leading-tight">
      {data.text}
    </p>
  </div>
);

const IDCard = ({ data, theme, setTheme, time, isStickyClosed }) => {
  const [showGuide, setShowGuide] = useState(false);
 console.log("467", sessionStorage.getItem('visited_id_guide')); 
  const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches; 
  
useEffect(() => {
  //const hasSeen = sessionStorage.getItem('visited_id_guide') === 'true';
  const hasSeen = false; 
  if (!hasSeen && isStickyClosed) setShowGuide(true); 

  console.log("447", showGuide); 

  const clearGuide = () => {
    setShowGuide(false);
    //sessionStorage.setItem('visited_id_guide', 'true');
  };

  if (isStickyClosed && !hasSeen) {
    console.log("460")
    const timeout = setTimeout(() => {
      window.addEventListener('scroll', clearGuide);
      window.addEventListener('mousedown', clearGuide);
    }, 700);

    return () => {
      clearTimeout(timeout);
      window.removeEventListener('scroll', clearGuide);
      window.removeEventListener('mousedown', clearGuide);
    };
  }
}, [isStickyClosed]); 


  console.log("cryy", showGuide, isStickyClosed); 

  const OnboardingGuide = ({ isVisible, time }) => {

    console.log("505",isVisible); 

    if (!isVisible) return null;

    return (
      <>
        {/* dark/light mode hint */}
        <div className="absolute -top-20 md:-top-24 -right-0 md:-right-4 z-[60] w-auto pointer-events-none animate__animated animate__fadeInDown">
  <p className="font-['Caveat'] text-lg md:text-2xl text-red-600 dark:text-blue-400 -rotate-3 leading-tight text-right pr-2">
    <span className="relative inline-block px-1">
      {/* //highligher */}
      <span 
        className="absolute inset-0 bg-yellow-300/60 dark:bg-yellow-400/20 -rotate-1 translate-y-1"
        style={{
          borderRadius: '20% 80% 15% 85% / 95% 15% 85% 5%',
          clipPath: 'inset(0 100% 0 0)',
          animation: 'highlightStroke 0.6s ease-out 1.2s forwards',
          animationDelay:`${0.7 + time}s`
        }}
      ></span>
      {isDark ? 
      <span className="relative z-10 text-red-600 font-black dark:text-red-400"> Note: Click the magnet for Light Mode</span> :
      <span className="relative z-10 text-red-600 font-black dark:text-red-400"> Note: Click the magnet for Dark Mode</span>
      }
    </span>
  </p>
   {/* handdrawn arrow */}
  <svg 
    viewBox="0 0 100 80" 
    className="w-14 h-14 md:w-20 md:h-20 ml-auto mt-[-5px] fill-none stroke-blue-500/70 dark:stroke-blue-400/60 stroke-[4] stroke-linecap-round"
  >
    <path 
      className="path-animate" 
      d="M20,10 C35,10 70,15 85,55 M75,45 L85,55 L95,45" 
    />
  </svg>
</div>

      </>
    );
  };

  const allCourses = [
    { id: "281", name: "Data Structures & Alg" },
    { id: "370", name: "Computer Architecture" },
    { id: "445", name: "Machine Learning" },
    { id: "482", name: "Operating Systems" },
    { id: "487", name: "Natural Language Proc." },
    { id: "492", name: "Artificial Intelligence" },
    { id: "497", name: "Human-Centered SW Dev" },
    { id: "201", name: "CS Pragmatics" }
  ];

  const activities = [
    "Instructional Aide (DSA)",
    "Residential Advisor",
    "Freelance Developer",
    "YouTuber (Travel)"
  ];

  return (
    <div className="relative inline-block group w-[325px] h-[250px] md:w-[520px] md:h-[390px]">
      
      <OnboardingGuide isVisible={showGuide} time={time} />


      {/* dark/light mode magnet */}
      <div className="absolute -top-6 -right-1 md:-right-6 z-50 transition-transform duration-300 group-hover:scale-110">
        <button
  onClick={() => {
    const isSystemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Determine current look regardless of source
    const currentLook = theme === 'system' 
      ? (isSystemDark ? 'dark' : 'light') 
      : theme;

    // Toggle to the explicit opposite (overriding system)
    setTheme(currentLook === 'dark' ? 'light' : 'dark');
  }}
  className="group relative w-10 h-10 md:w-20 md:h-20 flex items-center justify-center outline-none"
>
          <div className={`
            absolute inset-0 rounded-full transition-all duration-300
            border-b-4 active:border-b-0 active:translate-y-1
            flex items-center justify-center
            ${theme === 'dark'
              ? 'bg-neutral-800 border-neutral-950 shadow-[0_10px_20px_rgba(0,0,0,0.5)]'
              : 'bg-white border-neutral-200 shadow-[0_10px_20px_rgba(0,0,0,0.2)]'
            }
          `}>
            <div className="absolute top-2 left-3 w-2 h-1 md:w-4 h-2 bg-white/20 rounded-full rotate-[-35deg] pointer-events-none"></div>
            <div className={`
              md:text-3xl transition-all duration-500 transform
              ${theme === 'dark' ? 'text-blue-400 rotate-0 scale-100' : 'text-yellow-500 rotate-[360deg] scale-110'}
              group-hover:scale-125
            `}>
              <FontAwesomeIcon icon={theme === 'dark' ? faMoon : faSun} />
            </div>
            <div className="absolute inset-1 rounded-full border border-black/5 dark:border-white/5 pointer-events-none"></div>
          </div>
          <div className="absolute -bottom-1 w-6 h-3 md:w-12 h-4 bg-black/40 blur-md rounded-full -z-10"></div>
        </button>
      </div>

      {/* 2026 overlay */}
      <div className="absolute right-1 md:right-4 top-14 md:top-10 md:bottom-10 z-30 flex flex-col justify-center items-center pointer-events-none">
        <div className="flex flex-col md:gap-4 font-sans font-extrabold text-3xl font-black text-blue-900/20 dark:text-blue-700/20 select-none">
          <span>2</span><span>0</span><span>2</span><span>6</span>
        </div>
      </div>

      {/* ID Card Body */}
      <div
        className={`bg-white dark:bg-[#E8E8E8] shadow-2xl shadow-black/50 relative transition-all duration-500 hover:scale-[1.01] ${data.rotate} border-t-[14px] border-blue-900 dark:border-blue-700 rounded-xl overflow-hidden h-full w-full`}
      >
        <div className="py-2 px-3 md:px-5 relative z-10 h-full flex flex-col">
          {/* Header */}
          <div className="flex justify-between items-start mb-3">
            <div className="flex flex-col">
              <h3 className="text-xs md:text-xl font-black text-blue-900 tracking-tighter leading-none uppercase">University of Michigan</h3>
              <span className="text-[8px] md:text-[10px] font-mono font-bold text-neutral-400 dark:text-neutral-500 uppercase tracking-widest mt-1">Ann Arbor, MI • College of Engineering</span>
            </div>
            <div className="text-right md:mr-8"> 
              <span className="bg-blue-900 text-yellow-400 px-1 py-1 md:px-3 text-[6px] md:text-[10px] font-black rounded italic shadow-sm">CLASS OF 2026</span>
            </div>
          </div>

          {/* Profile Section */}
          <div className="flex gap-6 md:mb-3">
            <div className="w-14 h-14 md:w-28 md:h-28 bg-neutral-100 dark:bg-neutral-200 border-2 border-neutral-200 dark:border-neutral-300 rounded-lg overflow-hidden grayscale flex-shrink-0 shadow-inner">
              <img src={shriya} className="w-full h-full object-cover" alt="id-photo" />
            </div>
            <div className="flex flex-col justify-center flex-1">
              <div className="md:mb-3">
                <h4 className="text-base md:text-3xl font-black italic uppercase text-neutral-800 leading-none">Shriya Biddala</h4>
                <p className="text-blue-600 text-[8px] md:text-[11px] font-bold uppercase tracking-tight">B.S.E. Computer Science Engineering</p>
              </div>
              <div className="flex flex-wrap gap-x-3 md:gap-y-1 opacity-70">
                {activities.map((act, i) => (
                  <span key={i} className="text-[6px] md:text-[8px] font-bold text-neutral-600 dark:text-neutral-700 uppercase italic">• {act}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Coursework */}
          <div className="flex-1 border-t border-neutral-100 dark:border-neutral-400 pt-2">
            <h5 className="text-[5px] md:text-[9px] font-black text-blue-900 uppercase mb-2 tracking-[0.2em] flex items-center gap-2">
              <div className="w-1 h-1 md:w-2 md:h-2 bg-yellow-400 rounded-full"></div>Coursework Inventory
            </h5>
            <div className="grid grid-cols-2 md:gap-x-10 md:gap-y-2">
              {allCourses.map((course, i) => (
                <div key={i} className="flex flex-col">
                  <span className="text-[6px] md:text-[8px] font-mono font-black text-blue-600 leading-none uppercase">EECS {course.id}</span>
                  <span className="text-[8px] md:text-[10px] font-bold text-neutral-700 uppercase leading-tight truncate">{course.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Barcode Footer */}
          <div className="absolute bottom-0 left-0 w-full">
            <div className="h-5 md:h-10 bg-neutral-50 dark:bg-neutral-300 flex items-center px-4 md:px-6 gap-2 md:gap-4 border-t border-neutral-200 dark:border-neutral-800">
              <div className="flex-1 h-4 flex gap-[1px] opacity-30">
                {[...Array(60)].map((_, i) => (
                  <div key={i} className={`h-full bg-black ${Math.random() > 0.6 ? 'w-[2px]' : 'w-[1px]'}`}></div>
                ))}
              </div>
              <span className="text-[6px] md:text-[9px] font-mono font-bold tracking-[0.4em] text-neutral-400 uppercase">CERT_ID_EECS_2026</span>
            </div>
            <div className="h-1.5 bg-gradient-to-r from-blue-900 via-yellow-400 to-blue-900"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SkillSticky = ({ title, skills, color, rotate }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const dim = isMobile ? '180px' : '260px'; //resize dims

  return (
    <div
      className={`${color} dark:before:absolute dark:before:inset-0 dark:before:bg-black/20 dark:before:pointer-events-none p-4 md:p-6 shadow-xl shadow-black/50 relative transition-all hover:scale-110 hover:z-30 cursor-default ${rotate}`}
      style={{ 
        width: dim, 
        minHeight: dim, 
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 92%, 92% 100%, 0% 100%)' 
      }}
    >
      <div className="absolute top-0 left-0 w-full h-3 md:h-4 bg-black/5"></div>

      <h3 className="font-sans text-sm md:text-base font-bold mb-3 md:mb-4 border-b border-black/10 pb-1 text-black/70 uppercase tracking-tight">
        {title}
      </h3>

      {/* list of skills param */}
      <ul className="space-y-0.5 md:space-y-1">
        {skills.map((s, i) => (
          <li key={i} className="font-['Caveat'] text-[14px] md:text-xl font-medium flex justify-between items-center text-black/80">
            <span className="truncate mr-2 text-wrap">{s.name}</span>
            <span className="text-[11px] md:text-sm font-[Caveat] font-black opacity-60 shrink-0">
              {s.yrs}
            </span>
          </li>
        ))}
      </ul>

      <div className="absolute bottom-0 right-0 w-4 h-4 md:w-6 md:h-6 bg-black/10"></div>
    </div>
  );
};

const BlueWashiTape = ({ className }) => (
  <div
    className={`absolute w-24 h-8 bg-blue-400/30 dark:bg-blue-400/60 backdrop-blur-[1px] z-30 border-x border-white/10 pointer-events-none ${className}`}
    style={{
      clipPath: 'polygon(5% 0%, 95% 2%, 100% 50%, 95% 98%, 5% 100%, 0% 50%)',
    }}
  />
);

const Pushpin = () => (
  <>
    {/* push pin */}
    <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-30 pointer-events-none">
      <div className="w-4 h-4 bg-red-600 dark:bg-red-700 rounded-full shadow-md relative">
        <div className="absolute top-1 left-1 w-1.5 h-1 bg-white/30 rounded-full"></div>
      </div>
      <div className="w-4 h-2 bg-black/20 blur-[1px] rounded-full mt-0.5 ml-1"></div>
    </div>
  </>
);

const IdleScrollIndicator = ({ isStickyDismissed, delayMs }) => {
  const [isIdle, setIsIdle] = useState(false);

  useEffect(() => {
    //wait until sticky is lost
    if (!isStickyDismissed) return;

    let idleTimer;

    const startInactivityTimer = (customDelay) => {
      if (idleTimer) clearTimeout(idleTimer);
      
      idleTimer = setTimeout(() => {
        const totalHeight = document.documentElement.scrollHeight;
        const currentPosition = window.innerHeight + window.scrollY;
        //keep showing keep scrolling if user has no activity after 5 seconds
        if (currentPosition < totalHeight - 100) {
          setIsIdle(true);
        }
      }, 5000);
    };

    const initialWait = 700 + delayMs + 5000;
    startInactivityTimer(initialWait);

    const handleScroll = () => {
      //unidle if scroll
      setIsIdle(false);
      startInactivityTimer(5000); 
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      clearTimeout(idleTimer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isStickyDismissed, delayMs]);

  return (
    <div 
      className={`fixed w-full z-50 bottom-10 pr-8 flex flex-col items-center transition-all duration-1000 ${
        isIdle ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
      }`}
    >
      <div className="animate-bounce flex flex-col items-center">
        <div className="w-auto relative inline-block px-2">
          <span 
            className="absolute inset-0 bg-yellow-300/70 -rotate-1 translate-y-1"
            style={{
              borderRadius: '20% 80% 15% 85% / 95% 15% 85% 5%',
              clipPath: 'inset(0 100% 0 0)',
              animation: isIdle ? 'highlightStroke 1.2s ease-out forwards' : 'none',
              filter: 'blur(0.5px)'
            }}
          ></span>
          <span className="relative z-10 mx-1 my-1 font-['Caveat'] text-2xl font-semibold md:text-3xl text-red-600 dark:text-red-700 italic">
            Keep exploring...
          </span>
        </div>
        <i className="fa-solid fa-chevron-down text-red-500 text-3xl mt-2"></i>
      </div>
    </div>
  );
};

const FallingSticky = ({ isExiting, onClose }) => {
  useEffect(() => {
    const handleGlobalInteraction = () => onClose();
    window.addEventListener('scroll', handleGlobalInteraction);
    window.addEventListener('wheel', handleGlobalInteraction);
    window.addEventListener('mousedown', handleGlobalInteraction);
    window.addEventListener('touchstart', handleGlobalInteraction);

    return () => {
      window.removeEventListener('scroll', handleGlobalInteraction);
      window.removeEventListener('wheel', handleGlobalInteraction);
      window.removeEventListener('mousedown', handleGlobalInteraction);
      window.removeEventListener('touchstart', handleGlobalInteraction);
    };
  }, [onClose]);

  return (
    // opaque background == focus
    <div className="fixed inset-0 flex justify-center items-center w-full h-full bg-black/30 backdrop-blur-lg z-[999] animate__animated animate__fadeIn animate__faster">
      
      <div 
        className={`cursor-pointer group ${isExiting ? 'sticky-peel-exit' : ''}`}
        style={{ 
          animation: 'stickyReversePop 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards' 
        }}
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
      >

        <div className="absolute inset-x-4 bottom-2 h-8 bg-black/30 blur-xl rounded-[100%] transition-opacity duration-300 group-hover:opacity-50"></div>

        <div 
          className="relative bg-blue-200 dark:bg-blue-300 pt-6 px-6 pb-4 w-[300px] md:w-[350px] transition-transform duration-300 shadow-2xl"
          style={{ 
            transform: 'rotate(-2deg)',
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 80%, 80% 100%, 0% 100%)',
            animation: 'stickyReversePop 0.8s cubic-bezier(0.165, 0.84, 0.44, 1) forwards'
          }}
        >

          <div className="absolute top-0 left-0 w-full h-3 md:h-4 bg-black/5"></div>
          
          <div className="mt-2 select-none">
            <h2 className="font-sans font-black uppercase text-[10px] tracking-[0.2em] mb-2 text-black/30">Note from Shriya</h2>
            <p className="font-['Caveat'] text-xl md:text-3xl text-neutral-800 leading-tight mb-4">
               Hey! Feel free to <span className="text-blue-700 underline underline-offset-4 decoration-blue-800/30">hover</span> over items with magnets and pins to flip 'em! You can also use the sun/moon magnet to switch between light and dark modes. 
            </p>
            <p className="font-mono text-[9px] uppercase tracking-tighter opacity-40 text-center pt-3 border-t border-black/10 text-black">
               Click anywhere or Scroll to Peel
            </p>
          </div>


{/* folded corner nonesense */}
    <div 
      className="absolute bottom-0 right-0 w-[20%] h-[20%] bg-black blur-[1px]" 
      style={{ 
        clipPath: 'polygon(100% 0%, 100% 100%, 0% 100%)',
      }}
    ></div>

    <div 
      className="absolute bottom-0 right-0 w-[20%] h-[20%] bg-blue-400 dark:bg-blue-400 shadow-[-3px_-3px_8px_rgba(0,0,0,0.2)] transition-all duration-500 group-hover:w-[22%] group-hover:h-[22%]" 
      style={{ 
        clipPath: 'polygon(0% 0%, 100% 0%, 0% 100%)',
        transformOrigin: 'bottom left'
      }}
    ></div>
        </div>
      </div>
    </div>
  );
};

export default function App() {
  const [playingVideoId, setPlayingVideoId] = useState(null);
  //const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  const [theme, setTheme] = useState('system'); 
  const formRef = useRef(null);
  const [isSent, setIsSent] = useState(false);
  const [replyText, setReplyText] = useState("");
  const [isTypingFinished, setIsTypingFinished] = useState(false);
  const [userData, setUserData] = useState({ name: "", email: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSticky, setShowSticky] = useState(true);
  const [isExiting, setIsExiting] = useState(false);

  const pageLoadTime = useRef(Date.now());
  const [timeToClick, setTimeToClick] = useState(0);

  //guide sitcky closign: 
  const handleDismiss = () => {
    setIsExiting(true);
    
    setTimeout(() => setShowSticky(false), 600);
    const duration = Date.now() - pageLoadTime.current;
    
    setTimeToClick(duration / 1000);

    console.log(`${duration}ms from page load to click.`);
  };
  

  //form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSubmitting || isSent) return;
    setIsSubmitting(true);
    setReplyText("");
    setIsTypingFinished(false);

    const formData = new FormData(formRef.current);
    const name = formData.get("Name");
    const email = formData.get("Email");
    setUserData({ name, email });

    const scriptURL = 'https://script.google.com/macros/s/AKfycbzO-68zD61CnGTH_dpGWCeXvm0TZdo_b2aj_SDds6D8cza-VKd4SLseEJJAnqKPTuc/exec';
    fetch(scriptURL, {
      method: 'POST',
      body: new FormData(formRef.current)
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok.');
        }

        setIsSent(true);
        formRef.current.reset();
        const message = `Hey ${name.split(' ')[0]}! Got your message. I'll read this over and get back to your email at ${email} soon. – Shriya`;

        let currentStep = 0;
        const typingInterval = setInterval(() => {
          setReplyText(message.slice(0, currentStep));
          currentStep++;
          if (currentStep > message.length) {
            clearInterval(typingInterval);
            setIsTypingFinished(true);
          }
        }, 40);
      })
      .catch(error => {
        console.error('Error!', error.message);
        const message = 'Something went wrong, please try again.';
        let currentStep = 0;
        const typingInterval = setInterval(() => {
          setReplyText(message.slice(0, currentStep));
          currentStep++;
          if (currentStep > message.length) {
            clearInterval(typingInterval);
            setIsTypingFinished(true);
          }
        }, 40);
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  //form reset
  const handleReset = () => {
    setIsSent(false);
    setReplyText("");
    setIsTypingFinished(false);
    setUserData({ name: "", email: "" });
    if (formRef.current) formRef.current.reset();
  };

//dark/light mode use effect
 useEffect(() => {
  const root = window.document.documentElement;
  const isSystemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const shouldBeDark = theme === 'dark' || (theme === 'system' && isSystemDark);
  if (shouldBeDark) {
    root.classList.add('dark');
  } else {
    root.classList.remove('dark');
  }
  //localStorage.setItem('theme', theme); //persistence of theme
}, [theme]);
  // need to override this w the button magnet

  //board data
  const boardData = [
    { id: 'edu-1', type: 'lined_note', title: "University of Michigan", items: ["B.S.E in Computer Science Engineering, 2026", "Instructional Aide for Data ", "Data Analytics Researcher"], rotate: '-rotate-1', category: 'edu' },
    { id: 'strip-1', type: 'film_strip', title: "# Hackathons", imgs: [twthrhack, twfivhack, twfrhack], rotate: 'rotate-2', category: 'edu' },
    /* { id: 'exp-1', type: 'postcard', title: "Walmart Global Tech", role: "AI/ML SWE Intern", location: "Bentonville, AR", img: walmart, stamp: "USA", text: "Developed a reusable LLM-as-a-judge framework for 2.1M users, reducing hallucinations by 80% and cutting token costs by 30% via custom context summarization.", rotate: 'rotate-1', category: 'exp' }, */
    { id: 'exp-1', type: 'postcard_enhanced', title: "Walmart Global Tech", role: "AI/ML SWE Intern", location: "Bentonville, AR", img: walmart, stamp: "USA", text: "Developed a reusable LLM-as-a-judge framework for 2.1M users, reducing hallucinations by 80% and cutting token costs by 30% via custom context summarization.", rotate: 'rotate-1', category: 'exp' },

    //ai/ml cluster
    {
      id: 'sticky-ai',
      type: 'skills_sticky',
      title: "AI / ML / NLP",
      color: "bg-[#00BFFF]",
      rotate: "rotate-2",
      skills: [
        { name: "PyTorch / OpenCV", yrs: "3Y" },
        { name: "Transformers (HuggingFace) / LLMs", yrs: "3Y" },
        { name: "RAG & Fine-Tuning", yrs: "3Y" },
        { name: "Pandas / Scikit-learn", yrs: "3Y" },
        { name: "LangChain + LangGraph", yrs: "1Y" }
      ]
    },

    {
      id: 'proj-mental-health',
      type: 'polaroid',
      category: 'Client',
      title: "Chatbot for Mental Health Awareness",
      img: demo_img,
      video: demo,
      yt: "https://www.youtube.com/watch?v=Afk6gSBdXUg",
      skills: "#PyTorch #Python #Kaggle #GoogleCloud",
      text: "A chatbot utilizing generative AI and Google Search API to provide resources for mental health questions.",
      rotate: '-rotate-2'
    },

    {
      id: 'pers-medbot',
      type: 'polaroid',
      category: 'Personal',
      title: "Chatbot for Medical Condition Awareness",
      img: medChatbot,
      skills: "#BioBERT #PyTorch #Attention #FineTuning",
      text: "Chatbot to accept symptoms and questions about medican conditions and recieve more information.",
      rotate: 'rotate-2'
    },

    {
      id: 'hack-convosenses',
      type: 'polaroid',
      category: 'Hackathon',
      title: "ConvoSenses",
      img: ar,
      video: "https://www.youtube.com/watch?v=YTZotjnA4ok",
      yt: "https://www.youtube.com/watch?v=YTZotjnA4ok",
      ghlink: "https://github.com/MatchaOnMuffins/MHacks25",
      devpost: "https://devpost.com/software/conversenses",
      skills: "#LangChain #GeminiAPI #ReactJS #SnapAR",
      text: "🏆 Best Use of Snap AR: 2nd Place. AR Intelligent Public Speaking Coach with a user-dashboard that displays real-time feedback.",
      rotate: '-rotate-3',
      link: "https://devpost.com/software/conversenses"
    },

    //   {
    //   id: 'strip-ml',
    //   type: 'film_strip',
    //   title: "# Machine Learning",
    //   svgs: [SCHEMATICS.brain, SCHEMATICS.nodes, SCHEMATICS.eye],
    //   projectNames: ["Dog Breed ViT", "ICU Clinical Model", "CNN Image Classificaition"],
    //   description: [
    //     "Fine-tuned a Vision Transformer for dog breed classification. Experimented with frozen CNN layers to leverage Transfer Learning , implemented custom data augmentation, and optimized the ADAM optimizer to prevent overfitting.",
    //     "Engineered a robust Logistic Regression classifier for ICU patient data. Implemented advanced feature engineering including KNN-based imputation, Polynomial feature expansion, and statistical aggregation to mitigate outlier influence.",
    //   ],
    //   bgColors: ['#FFCB05', 'rgba(0, 39, 76, 0.1)', 'rgba(0, 39, 76, 0.05)'],
    //   rotate: 'rotate-1',
    // },

    { id: 'exp-4', type: 'postcard', title: "Brain A.I. & Child Center @ CU Boulder ", role: "Machine Learning Research Intern", location: "Boulder, CO", stamp: "AI/ML", img: demo_img, text: "Automated a pipeline for 300k+ data points, cutting processing time by 125%. Developed Python heuristics to detect LLM-generated misinformation.", rotate: '-rotate-2', category: 'exp' },


    {
      id: 'strip-nlp',
      type: 'film_strip',
      title: "# NLP",
      svgs: [SCHEMATICS.nodes, SCHEMATICS.brain, SCHEMATICS.server],
      projectNames: ["Neural Q&A System", "Dense Text Classifier", "N-Gram Language Models & Naive Bayes"],
      description: [
        "Designed a Recurrent Neural Network (RNN) to tackle question answering tasks. Also trained Logistic Regression models to evaluate the coherence and consistency of automated text summarization systems.",
        "Implemented a Feed-Forward Neural Network (FFNN) leveraging pretrained GloVe word embeddings. Explored vector semantics to train dense vector representations for text classification tasks.",
        "Developed character-level and word-level n-gram models to generate synthetic Yelp reviews. Built a Naive Bayes classifier to distinguish between legitimate news headlines and clickbait with high accuracy."
      ],
      bgColors: ['#FFCB05', 'rgba(194, 225, 255, 1)', 'rgba(211, 255, 225, 1)'],
      rotate: 'rotate-2',
    },
    {
      id: 'hack-docudog',
      type: 'polaroid',
      category: 'Hackathon',
      title: "DocuDog",
      img: docuDog,
      skills: "#Python #GeminiPro #PromptEng",
      text: "Generative AI application to help people extract specific summaries from complex legal documents.",
      rotate: 'rotate-3',
      devpost: "https://devpost.com/software/docudog",
      yt: "https://www.youtube.com/watch?v=Qq7_72aoV08",
    },

    //fullstack cluster
    {
      id: 'sticky-fs',
      type: 'skills_sticky',
      title: "Full-Stack Dev",
      color: "bg-[#FFEF00]",
      rotate: "rotate-1",
      skills: [
        { name: "HTML / CSS / JS", yrs: "6Y" },
        { name: "React / Node / Express / TailwindCSS", yrs: "2Y" },
        { name: "Django / MySQL", yrs: "1Y" },
        { name: "NoSQL", yrs: "1Y" },
        { name: "FastAPI / Vite", yrs: "1Y" }
      ]
    },

    {
      id: 'pers-mint',
      type: 'polaroid',
      category: 'Personal',
      title: "Encourage-mint",
      img: budget,
      skills: "#Gemini3 #FastAPI #React #GoogleSheets",
      text: "Budgeting and expense tracking app integrated with AI for spend categorization.",
      rotate: '-rotate-2',
      ghlink: "https://github.com/shriyabi/budgeting-app-vite",
      website: "https://shriyabi.github.io/budgeting-app-vite/"
    },

    {
      id: 'exp-formich',
      type: 'postcard',
      category: 'Full-Stack',
      title: "For Michigan (under America Votes)",
      role: "Freelance Full-Stack Developer",
      location: "Remote / Ann Arbor, MI",
      stamp: "VOTE",
      text: "Engineered a voter engagement portal for 100k+ users. Built color-changing interactive UI and optimized MySQL schemas for high-traffic registration windows.",
      img: forMich,
      size: 'md:col-span-4 md:row-span-3',
      rotate: '-rotate-1'
    },

    {
      id: 'pers-deadline',
      type: 'polaroid',
      category: 'Personal',
      title: "Deadline Tracker",
      img: deadlineTracker,
      skills: "#Gemma #ReactJS #FastAPI #Tailwind #Named_Entity_Recognition  #GoogleCalendarAPI",
      text: "Extracts events from syllabus strings using Gemma/Gemini and syncs them to Google Calendar. Provides list view of calendar and supports CRUD operations for calendars and events.",
      rotate: '-rotate-3',
      ghlink: "https://github.com/shriyabi/deadline_tracker_more",
      website: "https://shriyabi.github.io/deadline_tracker_more/"
    },
    {
      id: 'pers-planner',
      type: 'polaroid',
      category: 'Personal',
      title: "Planner.io",
      img: plannerIo,
      skills: "#React #Tailwind #NodeJS #GoogleTaskAPI",
      text: "A weekly planner with task categorization with color coordination and organization based on time priority, with an integrated timer.",
      rotate: 'rotate-2',
      ghlink: "https://github.com/shriyabi/Planner.io",
      website: "https://shriyabi.github.io/Planner.io/"
    },

    {
      id: 'hack-onevote',
      type: 'polaroid',
      category: 'Hackathon',
      title: "OneVote",
      img: oneVote,
      skills: "#GPT4 #TF-IDF #HTML/CSS/JS #CivicTech",
      text: "🏆 Best Hack for Social Impact: 3rd Place. Web application for local elections awareness with a conversational agent answering questions and guiding users to polling stations. ",
      rotate: '-rotate-3',
      devpost: "https://devpost.com/software/onevote-lsp7eu",
      yt: "https://www.youtube.com/watch?v=-eGkraEZ6HA"
    },

    {
      id: 'proj-formich',
      type: 'polaroid',
      category: 'Client',
      title: "For Michigan Website",
      img: forMich,
      skills: "#React #NodeJS #MySQL #HTML/CSS #Tailwind ",
      text: "The official website for the For Michigan non-profit organization. Includes a 300-person staff directory and personalized voting info pages for colleges.",
      rotate: 'rotate-1',
      link: "https://github.com/shriyabi/for_michigan_website"
    },

    //miscellanous cluster
    { id: 'exp-3', type: 'postcard', title: "Social A.I. Lab @ UM ", role: "Data Analytics Research Intern", location: "Ann Arbor, MI", stamp: "UROP", img: urop, text: "Automated a pipeline for 300k+ data points, cutting processing time by 125%. Developed Python heuristics to detect LLM-generated misinformation.", rotate: '-rotate-2', category: 'exp' },




    // {
    //   id: 'proj-handwriting',
    //   type: 'polaroid',
    //   category: 'Computer Vision',
    //   title: "A.I. Handwriting Model",
    //   img: ai,
    //   skills: "#OpenCV #PyTorch #ExpressJS #HTML",
    //   text: "Integrated model developed using OpenCV and PyTorch to detect and transform handwritten components.",
    //   rotate: 'rotate-2'
    // },

    //hackathon projects


    {
      id: 'hack-architext',
      type: 'polaroid',
      category: 'Hackathon',
      title: "ArchiText",
      img: architext,
      skills: "#VSCodeAPI #LlamaAPI #Python #JS",
      text: "VSCode extension that creates and inserts AI-generated code documentation with one click.",
      rotate: '-rotate-1',
      ghlink: "https://github.com/shriyabi/SparthackX",
      yt: "https://www.youtube.com/watch?v=HxY2zq5rcqk&t=1s",
      devpost: "https://devpost.com/software/architext"
    },

    {
      id: 'hack-greenbro',
      type: 'polaroid',
      category: 'Hackathon',
      title: "GreenBrother",
      img: greenBro,
      skills: "#ReactJS #React_Native #TailwindCSS",
      text: "Web application for local elections awareness with a conversational agent answering questions and guiding users to polling stations.",
      rotate: 'rotate-3',
      ghlink: "https://github.com/shriyabi/for_michigan_website",
      yt: "https://www.youtube.com/watch?v=BbTT9nJbXnE",
      devpost: "https://devpost.com/software/greenbrother"
    },

    {
      id: 'per-robo',
      type: 'polaroid',
      category: 'Personal',
      title: "RoboPicasso",
      img: robo,
      skills: "#OpenCV",
      text: "OpenCV + Canary Line detection to detect edges of any given object in view for the robot to trace.",
      rotate: '-rotate-2',
    },
    //systems cluster
    // {
    //   id: 'strip-systems',
    //   type: 'film_strip',
    //   title: "# Systems",
    //   svgs: [SCHEMATICS.memory, SCHEMATICS.lock, SCHEMATICS.server],
    //   projectNames: ["VM Pager", "Thread-Safe File System", "Assembler/Linker"],
    //   description: [
    //     "A robust virtual memory management unit written in C++ handling page faults, swap space management, and clock eviction algorithms. Implemented distinct layers for physical memory and disk synchronization.",
    //     "Hierarchical file system supporting concurrent access via fine-grained locking. Features crash consistency through journaling and inode-based metadata management.",
    //     "Built a two-pass assembler to translate custom assembly into machine code and a linker to resolve external symbol dependencies across multiple object files."
    //   ],
    //   bgColors: ['#FFCB05', 'rgba(123, 207, 255)', 'rgba(255, 202, 88)'],
    //   rotate: 'rotate-2',
    // },

    {
      id: 'sticky-sys',
      type: 'skills_sticky',
      title: "Low-Level Systems",
      color: "bg-[#FF6AD5]",
      rotate: "rotate-3",
      skills: [
        { name: "C++ / C / Unix", yrs: "3Y" },
        { name: "Valgrind / GDB", yrs: "2Y" },
        { name: "ARM-64 Assembly", yrs: "1Y" },
        { name: "Multithreading", yrs: "1Y" },
        { name: "TCP/IP Networking", yrs: "1Y" }
      ]
    },



    //social media stickies
    { id: 'st-1', type: 'sticky', title: "LinkedIn", text: "/in/shriya-biddala", color: 'bg-yellow-200 dark:bg-yellow-500', icon: faLinkedin, rotate: 'rotate-6', link: 'https://www.linkedin.com/in/shriya-biddala' },
    { id: 'st-2', type: 'sticky', title: "GitHub", text: "Commits: @shriyabi", color: 'bg-cyan-200 dark:bg-cyan-500', icon: faGithub, rotate: '-rotate-6', link: 'https://github.com/shriyabi' },
    { id: 'st-3', type: 'sticky', title: "Email", text: "shriyarbiddala@gmail.com", color: 'bg-red-200 dark:bg-red-500', icon: faEnvelope, rotate: 'rotate-6', link: "mailto:shriyarbiddala@gmail.com" },
    { id: 'st-4', type: 'sticky', title: "YouTube", text: "Shri Ram", color: 'bg-green-200 dark:bg-green-500', icon: faYoutube, rotate: 'rotate-6', link: 'https://www.youtube.com/channel/UCF1wX0AqAWlqtwaSraqN6kA' },


    //  {
    //     id: 'sticky-swe',
    //     type: 'skills_sticky',
    //     title: "Core SWE",
    //     color: "bg-[#ADFF2F]",
    //     rotate: "-rotate-1",
    //     skills: [
    //       { name: "Java / Git", yrs: "6Y" },
    //       { name: "Python", yrs: "5Y" },
    //       { name: "Google Cloud (GCP)", yrs: "4Y" },
    //       { name: "Django / NoSQL", yrs: "1Y" },
    //       { name: "Golang", yrs: "<1Y" }
    //     ]
    //   },


  ]


  return (
    <div className="min-h-screen w-screen corkboard bg-[#F0E8D3] dark:bg-[#241B15] text-neutral-900 dark:text-neutral-100 p-8">

{showSticky && <FallingSticky isExiting={isExiting} onClose={handleDismiss} />}
      <IdleScrollIndicator isStickyDismissed={isExiting} delayMs={timeToClick}/>

      <div className="max-w-[1600px] mx-auto  flex flex-col md:flex-row justify-between items-end mb-24 px-8 relative">
        
        <div className="relative inline-block group">
          {/* highligher animation */}
          <style>{`
  @keyframes highlightStroke {
    from { clip-path: inset(0 100% 0 0); }
    to { clip-path: inset(0 0 0 0); }
  }
  .animate-stroke {
    animation: highlightStroke 0.8s cubic-bezier(0.19, 1, 0.22, 1) forwards;
    /* Use kebab-case 'animation-delay' for raw CSS inside <style> tags */
    animation-delay: ${isExiting ? (timeToClick) : 0}s;
  }
`}</style>

{console.log("1289", isExiting)}

          {/* highlighter */}
          <div
            className={`absolute top-5 -left-2 -right-4 h-[45%] bg-blue-400/40 dark:bg-blue-500/60 z-0 ${isExiting ? 'animate-stroke' : ''}`}
            style={{
              borderRadius: '20% 80% 15% 85% / 95% 15% 85% 5%',
              filter: 'blur(0.4px)',
              transform: 'rotate(-1deg)',
              clipPath: 'inset(0 100% 0 0)'
            }}
          />
          <h1 className="relative z-10 text-5xl md:text-7xl font-black italic tracking-tighter uppercase leading-none text-black dark:text-white">
            shriya's <span className="text-blue-600 dark:text-blue-400 relative">bulletin</span> board
          </h1>
          <p className="font-['Caveat'] text-xl md:text-3xl text-neutral-500 dark:text-neutral-200 mt-4 italic animate__animated animate__fadeIn flex items-center gap-3">
            <span className="h-[1px] w-8 bg-neutral-400 dark:bg-neutral-100 dark:text-slate-50 block"></span>
            "Be the change you wish to see in the world..."
          </p>
        </div>

        
       

      </div>

       
      {/* integrated divs with all types of photos = vision board */}
      <div className="max-w-[1600px] animate__animated animate__fadeIn animate__delay-1s mx-auto flex flex-wrap gap-8 md:gap-16 justify-center pb-32 justify-start items-start">
        {boardData.map(item => {
          if (item.type === 'polaroid') return <PolaroidItem key={item.id} data={item} onPlay={setPlayingVideoId} isPlaying={playingVideoId === item.id} />;
          if (item.type === 'film_strip') return <PhotoStripItem key={item.id} data={item} />;
          if (item.type === 'postcard' || item.type === 'postcard_enhanced') return <PostcardItem key={item.id} data={item} isStickyClosed={isExiting} />;
          if (item.type === 'lined_note') return <IDCard key={item.id} data={item} theme={theme} setTheme={setTheme} isStickyClosed={isExiting} />;
          if (item.type === 'sticky') return <StickyItem key={item.id} data={item} />;
          if (item.type === 'skills_sticky') return <SkillSticky key={item.id} title={item.title} skills={item.skills} color={item.color} rotate={item.rotate} />;
          return null;
        })}
      </div>

      {/* contact me postcard */}
<div id="Contact" className="w-full flex justify-center flex-col items-center py-20 px-4 md:px-20 relative">
  {/* washi tape */}
  <div className="w-32 h-10 bg-blue-200/40 backdrop-blur-[2px] shadow-sm mb-[-15px] z-20 rotate-3 border-x border-blue-400/20 dark:bg-blue-400/60 "
    style={{ clipPath: 'polygon(5% 0%, 95% 0%, 100% 50%, 95% 100%, 5% 100%, 0% 50%)' }}></div>

  <div className="relative w-full max-w-[850px] aspect-auto md:aspect-[3/2] min-h-[600px] md:min-h-0">

        {/* additional post cards in background */}
    <div className="absolute inset-0 bg-[#f9f5eb] border border-neutral-300 shadow-xl -rotate-1 md:-rotate-2 translate-x-2 md:translate-x-4 translate-y-2 z-0 opacity-60"></div>
    <div className="absolute inset-0 bg-white border border-neutral-200  shadow-lg rotate-1 -translate-x-1 md:-translate-x-2 -translate-y-1 z-0 opacity-40"></div>

    <form ref={formRef} onSubmit={handleSubmit}
      className="relative w-full h-full bg-[#fffcf5] dark:bg-[#E2E1DE] shadow-2xl border border-neutral-300 dark:border-neutral-400 p-6 lg:p-8 flex flex-col md:flex-row gap-10 md:gap-8 overflow-hidden z-10">

      {/* message side */}
      <div className="flex-[1.2] flex flex-col min-h-[250px] md:min-h-0">
        <div className="flex items-center gap-2 mb-4 opacity-40">
          <FontAwesomeIcon icon={faQuoteLeft} className="text-xl dark:text-neutral-950" />
          <span className="font-mono text-[10px] uppercase tracking-widest dark:text-neutral-950">
            {isSent ? "Response" : "Message"}
          </span>
        </div>

        {!isSent ? (
          <textarea name="Subject" placeholder="Write your message..." required
            className="flex-1 w-full placeholder-neutral-900 bg-transparent resize-none font-['Caveat'] text-2xl text-neutral-800 dark:text-neutral-900 focus:outline-none placeholder:opacity-20 dark:placeholder-opacity-1000 leading-relaxed" />
        ) : (
          <div className="flex-1 flex flex-col justify-between">
            <div className="font-['Caveat'] text-2xl md:text-3xl text-blue-600 dark:text-blue-700 leading-relaxed animate__animated animate__fadeIn">
              {replyText}
              {!isTypingFinished && <span className="animate-pulse border-r-2 border-blue-600 ml-1"></span>}
            </div>
            {isTypingFinished && (
              <button onClick={handleReset} className="self-start font-mono text-[11px] uppercase tracking-[0.3em] text-neutral-400 hover:text-blue-500 transition-all mt-4 animate__animated animate__fadeInUp flex items-center gap-2">
                <i className="fa-solid fa-pencil text-lg"></i> Send Another
              </button>
            )}
          </div>
        )}
      </div>

      {/* divider */}
      <div className="w-full md:w-[2px] h-[2px] md:h-full border-t-2 md:border-t-0 md:border-l-2 border-dashed border-neutral-200 dark:border-neutral-300 relative"/>

      {/* address/sender side */}
      <div className="flex-1 flex flex-col justify-between gap-8 md:gap-0">
        {/* stamp */}
        <div className="flex justify-between items-start">
          <div className="flex flex-row justify-center items-center">
          <h3 className="font-mono text-sm uppercase text-neutral-400 dark:text-neutral-500 ">RE: </h3>
          <h3 className="font-['Caveat'] text-2xl text-black opacity-90 dark:text-black">Contact Form</h3>
          
          </div>
          {/*stamp */}
          <div className="w-15 h-20 md:h-12 lg:w-20 lg:h-28 border-2 border-red-500/30 dark:border-red-500/20 border-double flex flex-col items-center justify-center p-2 relative shrink-0">
            <div className={`text-[9px] font-black ${isSent ? 'text-red-600/40' : 'text-red-600'} uppercase text-center leading-none`}>Shriya<br />Biddala</div>
            {isSent && (
              <div className="absolute inset-0 flex items-center justify-center rotate-12 animate__animated animate__zoomIn">
                <div className="border-2 border-blue-600/40 rounded-full px-2 py-1 text-[8px] font-black text-blue-600 uppercase">DISPATCHED</div>
              </div>
            )}
          </div>
        </div>

        <div className="space-y-8 lg:space-y-10 relative">
          {!isSent ? (
            <>
              <div className="relative border-b border-neutral-300 dark:border-neutral-700 pb-1">
                <span className="absolute -top-4 left-0 text-[8px] font-mono uppercase text-neutral-400 dark:text-neutral-500 tracking-widest">To</span>
                <p className="font-['Caveat'] text-2xl text-black opacity-70 dark:text-black">Shriya Biddala</p>
              </div>
              <div className="relative">
                <input type="text" name="Name" placeholder="Your Name" required
                  className="w-full bg-transparent placeholder-neutral-900 border-b border-neutral-300 dark:border-neutral-700 py-1 focus:border-blue-500 outline-none transition-colors font-['Caveat'] text-2xl text-neutral-800 dark:text-neutral-900 placeholder:opacity-30" />
                <span className="absolute -top-4 left-0 text-[8px] font-mono uppercase text-neutral-400 dark:text-neutral-500 tracking-widest">From</span>
              </div>
              <div className="relative">
                <input type="email" name="Email" placeholder="Your Email" required
                  className="w-full bg-transparent placeholder-neutral-900 border-b border-neutral-300 dark:border-neutral-700 py-1 focus:border-blue-500 outline-none transition-colors font-['Caveat'] text-2xl text-neutral-800 dark:text-neutral-900 placeholder:opacity-30" />
                <span className="absolute -top-4 left-0 text-[8px] font-mono uppercase text-neutral-400 dark:text-neutral-500 tracking-widest">Reply-To</span>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full placeholder-neutral-900 bg-blue-400 dark:bg-blue-500 text-white dark:text-white font-black py-2 uppercase text-[10px] tracking-widest transition-all shadow-xl flex items-center justify-center gap-2 ${isSubmitting ? 'cursor-not-allowed opacity-60' : 'hover:bg-blue-400 hover:text-white'}`}
              >
                <i className={`fa-solid ${isSubmitting ? 'fa-spinner animate-spin' : 'fa-paper-plane'}`}></i>
                {isSubmitting ? 'Sending...' : 'Post Message'}
              </button>
            </>
          ) : (
            <div className="animate__animated animate__fadeIn space-y-6">
              <div className="relative border-b border-neutral-300 dark:border-neutral-400 pb-1">
                <span className="absolute -top-4 left-0 text-[8px] font-mono uppercase text-neutral-400 dark:text-neutral-500 tracking-widest font-bold">To</span>
                <p className="font-['Caveat'] text-2xl md:text-3xl text-neutral-800 dark:text-neutral-900">{userData.name}</p>
              </div>
              <div className="relative border-b border-neutral-300 dark:border-neutral-400 pb-1">
                <span className="absolute -top-4 left-0 text-[8px] font-mono uppercase text-neutral-400 dark:text-neutral-500 tracking-widest">Email</span>
                <p className="font-['Caveat'] text-xl md:text-3xl text-neutral-800 dark:text-neutral-900 truncate">{userData.email}</p>
              </div>
              <div className="relative border-b border-neutral-300 dark:border-neutral-400 pb-1">
                <span className="absolute -top-4 left-0 text-[8px] font-mono uppercase text-neutral-400 dark:text-neutral-500 tracking-widest">From</span>
                <p className="font-['Caveat'] text-2xl md:text-3xl text-blue-600 dark:text-blue-700 italic">Shriya Biddala</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </form>
  </div>
</div>

    </div>

  );
}