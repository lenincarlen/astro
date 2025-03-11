"use client"

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import ParticleBackground from "../../components/ParticleBackground";

// Mock product data - in a real app, this would come from an API or database
const productData = {
  id: "camiseta-astros",
  name: "Camiseta Astros",
  price: 29.99,
  description: "Camiseta oficial con el logo de Astros. Material de alta calidad, 100% algodón. Disponible en varios colores y tallas.",
  colors: [
    { name: "Negro", value: "#000000", image: "/background.jpg" },
    { name: "Rojo", value: "#8F1D1D", image: "/background.jpg" },
    { name: "Blanco", value: "#FFFFFF", image: "/background.jpg" },
  ],
  sizes: ["S", "M", "L", "XL", "XXL"],
  features: [
    "100% algodón de alta calidad",
    "Logo bordado",
    "Cuello redondo",
    "Lavable a máquina",
    "Diseño exclusivo"
  ]
};

export default function ProductDetail() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [selectedColor, setSelectedColor] = useState(productData.colors[0]);
  const [selectedSize, setSelectedSize] = useState(productData.sizes[2]); // Default to L
  const [quantity, setQuantity] = useState(1);
  
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

  const handleColorChange = (color: typeof selectedColor) => {
    setSelectedColor(color);
  };

  const handleSizeChange = (size: string) => {
    setSelectedSize(size);
  };

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity > 0 && newQuantity <= 10) {
      setQuantity(newQuantity);
    }
  };

  return (
    <div 
      className="relative grid grid-rows-[10px_1fr_10px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]"
    >
      {/* Particle Background */}
      <ParticleBackground />
      
      <main className="flex flex-col gap-8 row-start-2 items-center w-full max-w-6xl mx-auto">
        <div onMouseEnter={handleMouseEnter} className="mb-4">
          <Link href="/shop">
            <div className="flex items-center text-white gap-2 hover:underline hover:underline-offset-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              Volver a la tienda
            </div>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full bg-black/50 backdrop-blur-sm p-8 rounded-lg border border-white/20 text-white">
          {/* Product Image Gallery */}
          <div className="flex flex-col gap-4">
            <div className="relative aspect-square overflow-hidden rounded-md">
              <Image
                src={selectedColor.image}
                alt={`${productData.name} en color ${selectedColor.name}`}
                fill
                style={{ objectFit: 'cover' }}
                className="hover:scale-105 transition-transform duration-300"
                priority
              />
            </div>
            
            {/* Thumbnails */}
            <div className="flex gap-2 mt-2">
              {productData.colors.map((color) => (
                <button
                  key={color.name}
                  onClick={() => handleColorChange(color)}
                  className={`relative w-16 h-16 rounded-md overflow-hidden border-2 ${selectedColor.name === color.name ? 'border-white' : 'border-transparent'}`}
                  onMouseEnter={handleMouseEnter}
                >
                  <Image
                    src={color.image}
                    alt={`${productData.name} en color ${color.name}`}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </button>
              ))}
            </div>
          </div>
          
          {/* Product Details */}
          <div className="flex flex-col gap-6">
            <h1 className="text-4xl font-bold">{productData.name}</h1>
            <p className="text-3xl font-bold">${productData.price}</p>
            <p className="text-lg">{productData.description}</p>
            
            {/* Color Selection */}
            <div>
              <h2 className="text-xl font-semibold mb-2">Color: {selectedColor.name}</h2>
              <div className="flex gap-3">
                {productData.colors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => handleColorChange(color)}
                    className={`w-10 h-10 rounded-full border ${selectedColor.name === color.name ? 'border-white ring-2 ring-white' : 'border-gray-400'}`}
                    style={{ backgroundColor: color.value }}
                    title={color.name}
                    onMouseEnter={handleMouseEnter}
                  />
                ))}
              </div>
            </div>
            
            {/* Size Selection */}
            <div>
              <h2 className="text-xl font-semibold mb-2">Talla: {selectedSize}</h2>
              <div className="flex flex-wrap gap-2">
                {productData.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => handleSizeChange(size)}
                    className={`w-12 h-12 flex items-center justify-center rounded-md border ${selectedSize === size ? 'bg-white/30 border-white' : 'bg-black/30 border-gray-500'}`}
                    onMouseEnter={handleMouseEnter}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Quantity */}
            <div>
              <h2 className="text-xl font-semibold mb-2">Cantidad:</h2>
              <div className="flex items-center gap-4">
                <button 
                  onClick={() => handleQuantityChange(quantity - 1)}
                  className="w-10 h-10 flex items-center justify-center rounded-md border border-gray-500 bg-black/30"
                  disabled={quantity <= 1}
                  onMouseEnter={handleMouseEnter}
                >
                  -
                </button>
                <span className="text-xl">{quantity}</span>
                <button 
                  onClick={() => handleQuantityChange(quantity + 1)}
                  className="w-10 h-10 flex items-center justify-center rounded-md border border-gray-500 bg-black/30"
                  disabled={quantity >= 10}
                  onMouseEnter={handleMouseEnter}
                >
                  +
                </button>
              </div>
            </div>
            
            {/* Add to Cart Button */}
            <button 
              className="w-full px-6 py-3 mt-4 bg-white/10 hover:bg-white/20 border border-white/30 rounded-md text-white text-xl font-bold"
              onMouseEnter={handleMouseEnter}
            >
              Añadir al carrito
            </button>
            
            {/* Features */}
            <div className="mt-6">
              <h2 className="text-xl font-semibold mb-2">Características:</h2>
              <ul className="list-disc pl-5 space-y-1">
                {productData.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
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