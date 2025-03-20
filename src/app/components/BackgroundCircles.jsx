'use client';
import React, { useEffect, useState } from 'react';

const colorVariants = [
  "bg-[rgba(34,139,230,0.1)]",
  "bg-[rgba(34,139,230,0.3)]",
  "bg-[rgba(34,139,230,0.5)]",
  "bg-[rgba(34,139,230,0.7)]",
  "bg-[rgba(34,139,230,0.9)]",
];

const rows = 5;
const cols = 3;
const totalCircles = rows * cols;

const generateCircleStyles = () => {
  return Array.from({ length: totalCircles }).map((_, i) => {
    const row = Math.floor(i / cols);
    const col = i % cols;

    const top = (row / rows) * 100 + Math.random() * (100 / rows - 5);
    const left = (col / cols) * 100 + Math.random() * (100 / cols - 5);

    const size = Math.random() * 30 + 20;

    return {
      top: `${top}%`,
      left: `${left}%`,
      opacity: Math.random() * 0.3 + 0.1,
      transform: `scale(${Math.random() * 0.5 + 0.5})`,
      animationDuration: `${Math.random() * 10 + 5}s`,
      background: colorVariants[i % colorVariants.length],
      width: size,
      height: size,
    };
  });
};

function BackgroundCircles() {
  const [circleStyles, setCircleStyles] = useState([]);

  useEffect(() => {
    // Only runs on client
    setCircleStyles(generateCircleStyles());
  }, []);

  return (
    <div className="absolute inset-0 z-[-1] pointer-events-none">
      {circleStyles.map((style, i) => (
        <div
          key={i}
          className={`rounded-full absolute animate-float ${style.background}`}
          style={{
            top: style.top,
            left: style.left,
            width: style.width,
            height: style.height,
            opacity: style.opacity,
            transform: style.transform,
            animationDuration: style.animationDuration,
          }}
        />
      ))}
    </div>
  );
}

export default BackgroundCircles;
