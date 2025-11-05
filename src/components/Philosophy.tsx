import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const Philosophy = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const [glitchText, setGlitchText] = useState("PIXELS");

  useEffect(() => {
    const glitchChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*";
    const originalText = "PIXELS";
    
    const interval = setInterval(() => {
      if (Math.random() > 0.7) {
        const glitched = originalText
          .split("")
          .map(char => Math.random() > 0.5 ? glitchChars[Math.floor(Math.random() * glitchChars.length)] : char)
          .join("");
        setGlitchText(glitched);
        
        setTimeout(() => setGlitchText(originalText), 100);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={ref} className="py-32 px-4 bg-background relative overflow-hidden scanlines">
      {/* Pixel art background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            repeating-linear-gradient(0deg, transparent, transparent 8px, rgba(34, 197, 94, 0.3) 8px, rgba(34, 197, 94, 0.3) 9px),
            repeating-linear-gradient(90deg, transparent, transparent 8px, rgba(34, 197, 94, 0.3) 8px, rgba(34, 197, 94, 0.3) 9px)
          `
        }} />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div style={{ y }} className="text-center">
          <div className="pixel-border-thick bg-card/80 p-12 backdrop-blur-sm inline-block">
            <motion.h2
              animate={{ 
                textShadow: [
                  "4px 4px 0 rgba(34, 197, 94, 0.5)",
                  "4px 4px 0 rgba(234, 179, 8, 0.5)",
                  "4px 4px 0 rgba(239, 68, 68, 0.5)",
                  "4px 4px 0 rgba(34, 197, 94, 0.5)",
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="font-pixel text-3xl md:text-5xl mb-8"
            >
              <span className="text-primary">WHEN {glitchText}</span>
              <br />
              <span className="text-secondary">START MAKING</span>
              <br />
              <span className="text-accent">SENSE</span>
            </motion.h2>

            <div className="my-12 flex justify-center gap-4">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="w-8 h-8 bg-primary"
              />
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="w-8 h-8 bg-secondary"
                style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }}
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="w-8 h-8 bg-accent"
                style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
              />
            </div>

            <div className="space-y-4">
              <p className="font-retro text-2xl md:text-4xl text-foreground">
                {'>'} CREATIVITY —
              </p>
              <motion.p
                animate={{ 
                  color: ["hsl(142, 76%, 36%)", "hsl(48, 89%, 50%)", "hsl(6, 93%, 71%)", "hsl(142, 76%, 36%)"]
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="font-pixel text-xl md:text-3xl"
              >
                ENGINEERED
              </motion.p>
            </div>

            {/* 8-bit loading bar animation */}
            <div className="mt-8 space-y-2">
              <div className="h-4 bg-background relative overflow-hidden">
                <motion.div
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 bg-primary"
                  style={{ width: "30%" }}
                />
              </div>
              <p className="font-pixel text-xs text-muted-foreground">
                LOADING CREATIVITY... 99%
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative pixel elements */}
      <motion.div
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-20 left-10 w-16 h-16 bg-primary/20"
        style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}
      />
      
      <motion.div
        animate={{
          rotate: [0, 90, 180, 270, 360],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-20 right-10 w-12 h-12 bg-secondary/20"
      />
    </section>
  );
};

export default Philosophy;
