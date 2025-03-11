"use client"

import Image from "next/image";
import { useEffect, useRef } from "react";
import Link from "next/link";

export default function Eventos() {
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
    
    <main className="flex flex-col gap-8 row-start-2 items-center w-full max-w-4xl mx-auto">
      {/* <div onMouseEnter={handleMouseEnter} className="mb-8">
        <Link href="/">
          <Image
            className="dark:invert"
            src="/astros.png"
            alt="Astros logo"
            width={300}
            height={92}
            priority
          />
        </Link>
      </div> */}
      
      <h1 className="text-5xl font-bold text-white mb-8">Eventos</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
        {/* Event cards */}
        <div className="bg-black/50 backdrop-blur-sm p-6 rounded-lg border border-white/20 text-white">
          <h2 className="text-3xl mb-2">Concierto en vivo</h2>
          <p className="text-xl mb-4">15 de Junio, 2024</p>
          <p>Únete a nosotros para una noche inolvidable de música en vivo.</p>
          <button 
            className="mt-4 px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/30 rounded-md text-white"
            onMouseEnter={handleMouseEnter}
          >
            Más información
          </button>
        </div>
        
        <div className="bg-black/50 backdrop-blur-sm p-6 rounded-lg border border-white/20 text-white">
          <h2 className="text-3xl mb-2">Festival de verano</h2>
          <p className="text-xl mb-4">22 de Julio, 2024</p>
          <p>El festival más esperado del verano con artistas internacionales.</p>
          <button 
            className="mt-4 px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/30 rounded-md text-white"
            onMouseEnter={handleMouseEnter}
          >
            Más información
          </button>
        </div>
        
        <div className="bg-black/50 backdrop-blur-sm p-6 rounded-lg border border-white/20 text-white">
          <h2 className="text-3xl mb-2">Noche de DJ</h2>
          <p className="text-xl mb-4">5 de Agosto, 2024</p>
          <p>Los mejores DJs de la escena local e internacional.</p>
          <button 
            className="mt-4 px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/30 rounded-md text-white"
            onMouseEnter={handleMouseEnter}
          >
            Más información
          </button>
        </div>
        
        <div className="bg-black/50 backdrop-blur-sm p-6 rounded-lg border border-white/20 text-white">
          <h2 className="text-3xl mb-2">Lanzamiento de álbum</h2>
          <p className="text-xl mb-4">18 de Septiembre, 2024</p>
          <p>Sé parte del lanzamiento exclusivo de nuestro nuevo álbum.</p>
          <button 
            className="mt-4 px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/30 rounded-md text-white"
            onMouseEnter={handleMouseEnter}
          >
            Más información
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