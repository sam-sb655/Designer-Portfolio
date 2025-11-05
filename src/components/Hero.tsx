import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Hero = () => {
  const [showScrollHint, setShowScrollHint] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setShowScrollHint(true), 3000);
    const scoreInterval = setInterval(() => {
      setScore(prev => (prev + 100) % 999900);
    }, 50);
    return () => {
      clearTimeout(timer);
      clearInterval(scoreInterval);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background scanlines crt-effect">
      {/* Retro grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(34,197,94,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(34,197,94,0.1)_1px,transparent_1px)] bg-[size:32px_32px]" />
      
      {/* Game UI Header */}
      <div className="absolute top-0 left-0 right-0 p-4 z-20">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="pixel-border bg-card px-4 py-2">
            <p className="font-pixel text-xs text-primary">
              SCORE: {score.toString().padStart(6, '0')}
            </p>
          </div>
          <div className="pixel-border bg-card px-4 py-2">
            <p className="font-pixel text-xs text-secondary animate-blink">
              ● REC
            </p>
          </div>
          <div className="pixel-border bg-card px-4 py-2">
            <p className="font-pixel text-xs text-accent">
              HP: ██████████
            </p>
          </div>
        </div>
      </div>

      {/* Floating pixel blocks */}
      <div className="absolute top-20 left-20 w-16 h-16 bg-primary/30 animate-pixel-float" style={{ clipPath: "polygon(0 25%, 25% 0, 75% 0, 100% 25%, 100% 75%, 75% 100%, 25% 100%, 0 75%)" }} />
      <div className="absolute bottom-20 right-20 w-20 h-20 bg-secondary/30 animate-pixel-float" style={{ animationDelay: "1s", clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }} />
      <div className="absolute top-40 right-40 w-12 h-12 bg-accent/30 animate-pixel-float" style={{ animationDelay: "2s" }} />

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Game-style title screen */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12"
        >
          <div className="pixel-border-thick bg-card/80 p-8 inline-block backdrop-blur-sm">
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <p className="font-pixel text-xs md:text-sm text-muted-foreground mb-4">
                [PRESS START]
              </p>
            </motion.div>
            
            <h1 className="font-pixel text-2xl md:text-4xl lg:text-5xl mb-6 text-pixel-shadow">
              <span className="text-primary animate-glitch inline-block">ART</span>
              <br className="md:hidden" />
              <span className="text-foreground"> × </span>
              <br className="md:hidden" />
              <span className="text-secondary animate-glitch inline-block" style={{ animationDelay: "0.3s" }}>
                ALGORITHM
              </span>
            </h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="space-y-3"
            >
              <p className="font-retro text-xl md:text-2xl text-foreground">
                {'>'} I'M SOUMYA BASULI
              </p>
              
              <p className="font-retro text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
                {'>'} A DEVELOPER WHO DESIGNS —
                <br />
                {'>'} AND A DESIGNER WHO CODES.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="mt-6 flex justify-center gap-2"
            >
              <div className="w-3 h-3 bg-primary" />
              <div className="w-3 h-3 bg-secondary" />
              <div className="w-3 h-3 bg-accent" />
            </motion.div>
          </div>
        </motion.div>

        {showScrollHint && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
          >
            <div className="flex flex-col items-center gap-3 pixel-border bg-card px-6 py-3">
              <p className="font-pixel text-xs text-primary animate-blink">
                ▼ SCROLL TO CONTINUE ▼
              </p>
            </div>
          </motion.div>
        )}
      </div>

      {/* Corner decorations */}
      <div className="absolute top-4 left-4 w-8 h-8 border-l-4 border-t-4 border-primary" />
      <div className="absolute top-4 right-4 w-8 h-8 border-r-4 border-t-4 border-secondary" />
      <div className="absolute bottom-4 left-4 w-8 h-8 border-l-4 border-b-4 border-accent" />
      <div className="absolute bottom-4 right-4 w-8 h-8 border-r-4 border-b-4 border-primary" />
    </section>
  );
};

export default Hero;
