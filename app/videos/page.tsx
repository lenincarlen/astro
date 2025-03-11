"use client"

import Image from "next/image";
import { useEffect, useRef } from "react";
import Link from "next/link";

export default function Videos() {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Create audio element
    audioRef.current = new Audio("/clic.mp3");
    return () => {
      // Cleanup
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const handleMouseEnter = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0; // Reset audio to start
      audioRef.current.play();
    }
  };

  return (
    <div 
    className="relative grid grid-rows-[10px_1fr_10px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]"
  >
    {/* Background image */}
    {/* <div className="absolute inset-0 -z-10 overflow-hidden">
      <Image
        src="/background.jpg"
        alt="Background"
        fill
        style={{ objectFit: 'cover' }}
        priority
      />
    </div> */}
    
    <main className="flex flex-col gap-8 row-start-2 items-center w-full  mx-auto">
      
      
      <h1 className="text-5xl font-bold text-white mb-8">Videos</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
        {/* Video cards */}
        <div className="bg-black/50 backdrop-blur-sm p-6 rounded-lg border border-white/20 text-white">
          <div className="relative aspect-video mb-4 overflow-hidden rounded-md">
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
            <Image
              src="/background.jpg"
              alt="Video thumbnail"
              fill
              style={{ objectFit: 'cover' }}
              className="hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <div className="w-0 h-0 border-t-8 border-b-8 border-l-12 border-transparent border-l-white ml-1"></div>
              </div>
            </div>
          </div>
          <h2 className="text-3xl mb-2">Concierto en vivo</h2>
          <p className="text-xl mb-4">15 de Junio, 2024</p>
          <button 
            className="mt-2 px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/30 rounded-md text-white"
            onMouseEnter={handleMouseEnter}
          >
            Ver video
          </button>
        </div>
        
        <div className="bg-black/50 backdrop-blur-sm p-6 rounded-lg border border-white/20 text-white">
          <div className="relative aspect-video mb-4 overflow-hidden rounded-md">
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
            <Image
              src="/background.jpg"
              alt="Video thumbnail"
              fill
              style={{ objectFit: 'cover' }}
              className="hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <div className="w-0 h-0 border-t-8 border-b-8 border-l-12 border-transparent border-l-white ml-1"></div>
              </div>
            </div>
          </div>
          <h2 className="text-3xl mb-2">Backstage</h2>
          <p className="text-xl mb-4">22 de Julio, 2024</p>
          <button 
            className="mt-2 px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/30 rounded-md text-white"
            onMouseEnter={handleMouseEnter}
          >
            Ver video
          </button>
        </div>
        
        <div className="bg-black/50 backdrop-blur-sm p-6 rounded-lg border border-white/20 text-white">
          <div className="relative aspect-video mb-4 overflow-hidden rounded-md">
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
            <Image
              src="/background.jpg"
              alt="Video thumbnail"
              fill
              style={{ objectFit: 'cover' }}
              className="hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <div className="w-0 h-0 border-t-8 border-b-8 border-l-12 border-transparent border-l-white ml-1"></div>
              </div>
            </div>
          </div>
          <h2 className="text-3xl mb-2">Entrevista</h2>
          <p className="text-xl mb-4">5 de Agosto, 2024</p>
          <button 
            className="mt-2 px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/30 rounded-md text-white"
            onMouseEnter={handleMouseEnter}
          >
            Ver video
          </button>
        </div>
        
        <div className="bg-black/50 backdrop-blur-sm p-6 rounded-lg border border-white/20 text-white">
          <div className="relative aspect-video mb-4 overflow-hidden rounded-md">
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
            <Image
              src="/background.jpg"
              alt="Video thumbnail"
              fill
              style={{ objectFit: 'cover' }}
              className="hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <div className="w-0 h-0 border-t-8 border-b-8 border-l-12 border-transparent border-l-white ml-1"></div>
              </div>
            </div>
          </div>
          <h2 className="text-3xl mb-2">Documental</h2>
          <p className="text-xl mb-4">18 de Septiembre, 2024</p>
          <button 
            className="mt-2 px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/30 rounded-md text-white"
            onMouseEnter={handleMouseEnter}
          >
            Ver video
          </button>
        </div>
      </div>
    </main>
      
    <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
      <Link
        className="flex items-center text-[30px] font-bold text-white gap-2 hover:underline hover:underline-offset-4"
        href="/eventos"
        onMouseEnter={handleMouseEnter}
      >
        Eventos
      </Link>
      <Link
        className="flex items-center font-bold text-white text-[30px] gap-2 hover:underline hover:underline-offset-4"
        href="/videos"
        onMouseEnter={handleMouseEnter}
      >
        Videos
      </Link>
      <Link
        className="flex font-bold text-[30px] text-white items-center gap-2 hover:underline hover:underline-offset-4"
        href="/shop"
        onMouseEnter={handleMouseEnter}
      >
        Shop →
      </Link>
    </footer>
  </div>
  );
}