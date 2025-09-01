"use client";
import { cn } from "@/lib/utils";
import React, { useEffect, useRef } from "react";
import { createNoise3D } from "simplex-noise";

export const WavyBackground = ({
  children,
  className,
  containerClassName,
  colors,
  waveWidth,
  backgroundFill,
  blur = 10,
  speed = "fast",
  waveOpacity = 0.5,
  ...props
}: {
  children?: any;
  className?: string;
  containerClassName?: string;
  colors?: string[];
  waveWidth?: number;
  backgroundFill?: string;
  blur?: number;
  speed?: "slow" | "fast";
  waveOpacity?: number;
  [key: string]: any;
}) => {
  const noise = createNoise3D();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  let w: number, h: number, i: number, x: number, ctx: any, canvas: any;
  let nt = 0; // regular variable for animation

  const getSpeed = () => (speed === "fast" ? 0.002 : 0.001);

  const init = () => {
    canvas = canvasRef.current;
    ctx = canvas.getContext("2d");
    w = ctx.canvas.width = window.innerWidth;
    h = ctx.canvas.height = window.innerHeight;
    ctx.filter = `blur(${blur}px)`;
    window.onresize = () => {
      w = ctx.canvas.width = window.innerWidth;
      h = ctx.canvas.height = window.innerHeight;
      ctx.filter = `blur(${blur}px)`;
    };
    renderCanvas();
  };

  const waveColors = colors ?? [
    "#ec7200ff",
    "#818cf8",
    "#c084fc",
    "#e879f9",
    "#22d3ee",
  ];

  const drawWave = (n: number, ntLocal: number) => {
    for (i = 0; i < n; i++) {
      ctx.beginPath();
      ctx.lineWidth = waveWidth || 50;
      ctx.strokeStyle = waveColors[i % waveColors.length];
      for (x = 0; x < w; x += 5) {
        const y = noise(x / 800, 0.3 * i, ntLocal) * 100;
        ctx.lineTo(x, y + h * 0.5);
      }
      ctx.stroke();
      ctx.closePath();
    }
  };

  let animationId: number;
  const renderCanvas = () => {
    nt += getSpeed();
    ctx.fillStyle = backgroundFill || "black";
    ctx.globalAlpha = waveOpacity || 0.5;
    ctx.fillRect(0, 0, w, h);
    drawWave(5, nt);
    animationId = requestAnimationFrame(renderCanvas);
  };

  useEffect(() => {
    init();
    return () => cancelAnimationFrame(animationId);
  }, []);

  // Safari support
  const [isSafari, setIsSafari] = React.useState(false);
  useEffect(() => {
    setIsSafari(
      typeof window !== "undefined" &&
        navigator.userAgent.includes("Safari") &&
        !navigator.userAgent.includes("Chrome")
    );
  }, []);

  // Animate Aerion text
  useEffect(() => {
    let textAnimId: number;
    const animateText = () => {
      if (textRef.current) {
        const offset = noise(0, 0, nt) * 15; // max 15px vertical float
        textRef.current.style.transform = `translateY(${offset}px)`;
      }
      textAnimId = requestAnimationFrame(animateText);
    };
    animateText();
    return () => cancelAnimationFrame(textAnimId);
  }, []);

  return (
    <div
      className={cn(
        "h-screen flex flex-col items-center justify-center overflow-hidden",
        containerClassName
      )}
    >
      <canvas
        className="absolute inset-0 z-0"
        ref={canvasRef}
        id="canvas"
        style={{
          ...(isSafari ? { filter: `blur(${blur}px)` } : {}),
        }}
      ></canvas>

      {/* Aerion Info Overlay with Floating Animation */}
      <div
        ref={textRef}
        className="relative z-10 text-center text-white px-4 max-w-2xl transition-transform duration-100"
      >
        <h1 className="text-5xl font-bold mb-4">Welcome to Aerion</h1>
        <p className="text-lg mb-2">
          At Aerion, we are shaping the future where intelligent software meets advanced robotics and aerial systems.
        </p>
        <p className="text-lg mb-4">
          We specialize in creating cutting-edge web & mobile applications, AI-driven solutions, and next-generation drone and robotic technologies.
        </p>
        <p className="text-md font-medium">
          Our mission: Empower businesses and communities with innovation that works in the real world.
        </p>
      </div>

      <div className={cn("relative z-10", className)} {...props}>
        {children}
      </div>
    </div>
  );
};
