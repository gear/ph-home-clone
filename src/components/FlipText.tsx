"use client";
 
import { useEffect, useMemo, useRef } from "react";
import { translations } from "./Dictionary";
 
const text = translations.en

export default function TextFlip() {
  const words = useMemo(
    () => [
      text.rp_title_flip_1, 
      text.rp_title_flip_2, 
      text.rp_title_flip_3, 
      text.rp_title_flip_4,
      text.rp_title_flip_1
    ], []
  );
 
  const tallestRef = useRef<HTMLDivElement>(null);
 
  useEffect(() => {
    if (tallestRef.current) {
      let maxHeight = 0;
 
      words.forEach((word) => {
        const span = document.createElement("span");
        span.className = "absolute opacity-0";
        span.textContent = word;
        tallestRef.current?.appendChild(span);
        const height = span.offsetHeight;
        tallestRef.current?.removeChild(span);
 
        if (height > maxHeight) {
          maxHeight = height;
        }
      });
 
      tallestRef.current.style.height = `${maxHeight}px`;
    }
  }, [words]);
 
  return (
    <div className="box-content justify-center flex gap-4 md:text-4xl sm:text-2xl font-semibold">
      <p className="text-foreground">{text.rp_title_flip_fixed}</p>
      <div ref={tallestRef} className="flex flex-col overflow-hidden text-yellow-500">
        {words.map((word, index) => (
          <span key={index} className="animate-flip-words">
            {word}
          </span>
        ))}
      </div>
    </div>
  );
}