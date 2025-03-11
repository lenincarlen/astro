"use client";

import React, { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
import { Engine } from 'tsparticles-engine';

interface ParticleBackgroundProps {
  className?: string;
}

const ParticleBackground: React.FC<ParticleBackgroundProps> = ({ className }) => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <div className={`absolute inset-0 -z-10 overflow-hidden ${className || ''}`}>
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: false,
          background: {
            color: {
              value: "#952223", // Red background
            },
          },
          fpsLimit: 100,
          particles: {
            color: {
              value: "#952223", // White particles
            },
            links: {
              enable: true,
              color: "#952223",
              opacity: 0.3,
              distance: 500,
            },
            move: {
              enable: true,
              speed: 1,
              direction: "none",
              random: true,
              outModes: {
                default: "bounce",
              },
            },
            number: {
              density: {
                enable: true,
                area: 1000,
              },
              value: 80,
            },
            opacity: {
              value: 1, // More visible
            },
            shape: {
              type: "char",
              character: {
                value: "🎧"
                  
              }
              
            },
            size: {
              value: 10, // Particle size
            },
          },
          detectRetina: true,
        }}
        className="h-full w-full"
      />
    </div>
  );
};

export default ParticleBackground;