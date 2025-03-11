"use client"

import Image from "next/image";
import { useEffect, useRef } from "react";
import Link from "next/link";

export default function Shop() {
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
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <Image
        src="/background.jpg"
        alt="Background"
        fill
        style={{ objectFit: 'cover' }}
        priority
      />
    </div>
    
    <main className="flex flex-col gap-8 row-start-2 items-center w-full max-w-4xl mx-auto">
   
      
      <h1 className="text-5xl font-bold text-white mb-8">Shop</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
        {/* Product cards */}
        <div className="bg-black/50 backdrop-blur-sm p-6 rounded-lg border border-white/20 text-white">
          <div className="relative aspect-square mb-4 overflow-hidden rounded-md">
            <Image
              src="/background.jpg"
              alt="Product image"
              fill
              style={{ objectFit: 'cover' }}
              className="hover:scale-105 transition-transform duration-300"
            />
          </div>
          <h2 className="text-2xl mb-2">Camiseta Astros</h2>
          <p className="text-xl mb-2 font-bold">$29.99</p>
          <p className="mb-4">Camiseta oficial con el logo de Astros.</p>
          <button 
            className="w-full px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/30 rounded-md text-white"
            onMouseEnter={handleMouseEnter}
          >
            Añadir al carrito
          </button>
        </div>
        
        <div className="bg-black/50 backdrop-blur-sm p-6 rounded-lg border border-white/20 text-white">
          <div className="relative aspect-square mb-4 overflow-hidden rounded-md">
            <Image
              src="/background.jpg"
              alt="Product image"
              fill
              style={{ objectFit: 'cover' }}
              className="hover:scale-105 transition-transform duration-300"
            />
          </div>
          <h2 className="text-2xl mb-2">Gorra Astros</h2>
          <p className="text-xl mb-2 font-bold">$24.99</p>
          <p className="mb-4">Gorra negra con el logo bordado de Astros.</p>
          <button 
            className="w-full px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/30 rounded-md text-white"
            onMouseEnter={handleMouseEnter}
          >
            Añadir al carrito
          </button>
        </div>
        
        <div className="bg-black/50 backdrop-blur-sm p-6 rounded-lg border border-white/20 text-white">
          <div className="relative aspect-square mb-4 overflow-hidden rounded-md">
            <Image
              src="/background.jpg"
              alt="Product image"
              fill
              style={{ objectFit: 'cover' }}
              className="hover:scale-105 transition-transform duration-300"
            />
          </div>
          <h2 className="text-2xl mb-2">Póster Firmado</h2>
          <p className="text-xl mb-2 font-bold">$19.99</p>
          <p className="mb-4">Póster exclusivo firmado por los artistas.</p>
          <button 
            className="w-full px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/30 rounded-md text-white"
            onMouseEnter={handleMouseEnter}
          >
            Añadir al carrito
          </button>
        </div>
        
        <div className="bg-black/50 backdrop-blur-sm p-6 rounded-lg border border-white/20 text-white">
          <div className="relative aspect-square mb-4 overflow-hidden rounded-md">
            <Image
              src="/background.jpg"
              alt="Product image"
              fill
              style={{ objectFit: 'cover' }}
              className="hover:scale-105 transition-transform duration-300"
            />
          </div>
          <h2 className="text-2xl mb-2">Álbum Digital</h2>
          <p className="text-xl mb-2 font-bold">$12.99</p>
          <p className="mb-4">Descarga digital del último álbum con bonus tracks.</p>
          <button 
            className="w-full px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/30 rounded-md text-white"
            onMouseEnter={handleMouseEnter}
          >
            Añadir al carrito
          </button>
        </div>
        
        <div className="bg-black/50 backdrop-blur-sm p-6 rounded-lg border border-white/20 text-white">
          <div className="relative aspect-square mb-4 overflow-hidden rounded-md">
            <Image
              src="/background.jpg"
              alt="Product image"
              fill
              style={{ objectFit: 'cover' }}
              className="hover:scale-105 transition-transform duration-300"
            />
          </div>
          <h2 className="text-2xl mb-2">Sudadera Astros</h2>
          <p className="text-xl mb-2 font-bold">$49.99</p>
          <p className="mb-4">Sudadera con capucha y el logo de Astros.</p>
          <button 
            className="w-full px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/30 rounded-md text-white"
            onMouseEnter={handleMouseEnter}
          >
            Añadir al carrito
          </button>
        </div>
        
        <div className="bg-black/50 backdrop-blur-sm p-6 rounded-lg border border-white/20 text-white">
          <div className="relative aspect-square mb-4 overflow-hidden rounded-md">
            <Image
              src="/background.jpg"
              alt="Product image"
              fill
              style={{ objectFit: 'cover' }}
              className="hover:scale-105 transition-transform duration-300"
            />
          </div>
          <h2 className="text-2xl mb-2">Vinilo Edición Limitada</h2>
          <p className="text-xl mb-2 font-bold">$39.99</p>
          <p className="mb-4">Vinilo de edición limitada con artwork exclusivo.</p>
          <button 
            className="w-full px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/30 rounded-md text-white"
            onMouseEnter={handleMouseEnter}
          >
            Añadir al carrito
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