"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";


export function VantaBackground() {
  const [vantaEffect, setVantaEffect] = useState<any>(null);
  const myRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!vantaEffect && myRef.current) {
      const loadVanta = async () => {
        try {
          // @ts-ignore
          const BIRDS = (await import("vanta/dist/vanta.birds.min")).default;
          if (myRef.current) {
             setVantaEffect(
              BIRDS({
                el: myRef.current,
                THREE: THREE,
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                minHeight: 200.00,
                minWidth: 200.00,
                scale: 1.00,
                scaleMobile: 1.00,
                backgroundColor: 0xffffff,
                color1: 0xff6f3c, // Orange 1
                color2: 0xff9e00, // Orange 2
                birdSize: 1.50,
                wingSpan: 30.00,
                speedLimit: 5.00,
                separation: 20.00,
                alignment: 20.00,
                cohesion: 20.00,
                quantity: 3.00
              })
            );
          }
        } catch (error) {
          console.error("Failed to load Vanta effect", error);
        }
      };
      loadVanta();
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div ref={myRef} className="fixed inset-0 -z-10 pointer-events-none opacity-50" />
  );
}
