"use client"

import Image from "next/image";
import { useEffect, useRef } from "react";
import Link from "next/link";
import loading from "./components/LoadingPercentage";
import LoadingPercentage from "./components/LoadingPercentage";

export default function Home() {
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
    className="relative grid bg-black grid-rows-[10px_1fr_10px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]"
  >

    {/* <ParticleBackground /> */}
    
    <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <div onMouseEnter={handleMouseEnter}>
        <Image
          className="dark"
          src="/video-mordida.gif"
          alt="Next.js logo"
          width={160}
          height={138}
          priority
        />
      </div>
      <div className="flex mx-auto items-center justify-center ">
      {/* <LoadingPercentage color="#FF5733" size="text-4xl" speed={30} /> */}

      <LoadingPercentage color="#a91e1e" size="text-4xl" speed={13} />
    </div>
       
       
      </main>
      {/* <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <Link
          className="flex items-center  text-[30px] font-bold  text-lg text-white gap-2 hover:underline hover:underline-offset-4"
          href="/eventos"
          onMouseEnter={handleMouseEnter}
        >
         
         Eventos
        </Link>
        <Link
          className="flex items-center font-bold  text-white font-bold  text-[30px] gap-2 hover:underline hover:underline-offset-4"
          href="/videos"
          onMouseEnter={handleMouseEnter}
        >
         
          Videos
        </Link>
        <Link
          className="flex font-bold  text-lg  text-[30px] text-white items-center gap-2 hover:underline hover:underline-offset-4"
          href="/shop"
          onMouseEnter={handleMouseEnter}
        >
          
          Shop →
        </Link>
      </footer> */}
    </div>
  );
}
