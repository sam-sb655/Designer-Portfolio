import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const Footer = () => {
  const [score, setScore] = useState(999999);

  useEffect(() => {
    const interval = setInterval(() => {
      setScore(prev => prev === 0 ? 999999 : prev - 1);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="py-8 px-4 bg-background border-t-4 border-primary relative overflow-hidden scanlines">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Game over style credits */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="pixel-border bg-card px-6 py-3"
          >
            <p className="font-pixel text-xs text-primary">
              FINAL SCORE: {score.toString().padStart(6, '0')}
            </p>
          </motion.div>

          <div className="text-center">
            <p className="font-retro text-sm text-muted-foreground mb-1">
              {'>'} © 2025 SOUMYA BASULI
            </p>
            <p className="font-pixel text-xs text-secondary">
              ART × ALGORITHM | 2030 VISION
            </p>
          </div>

          {/* Lives/continues indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="pixel-border bg-card px-6 py-3"
          >
            <p className="font-pixel text-xs text-accent">
              CONTINUES: ∞
            </p>
          </motion.div>
        </div>

        {/* Press Start animation */}
        <motion.div
          animate={{ opacity: [1, 0.3, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-center mt-6"
        >
          <p className="font-pixel text-xs text-primary">
            ▲ PRESS START TO CONTINUE ▲
          </p>
        </motion.div>
      </div>

      {/* Pixel decorations */}
      <div className="absolute bottom-4 left-4 flex gap-2">
        <div className="w-3 h-3 bg-primary animate-pixel-float" />
        <div className="w-3 h-3 bg-secondary animate-pixel-float" style={{ animationDelay: "0.5s" }} />
        <div className="w-3 h-3 bg-accent animate-pixel-float" style={{ animationDelay: "1s" }} />
      </div>
      
      <div className="absolute bottom-4 right-4 flex gap-2">
        <div className="w-3 h-3 bg-accent animate-pixel-float" />
        <div className="w-3 h-3 bg-secondary animate-pixel-float" style={{ animationDelay: "0.5s" }} />
        <div className="w-3 h-3 bg-primary animate-pixel-float" style={{ animationDelay: "1s" }} />
      </div>
    </footer>
  );
};

export default Footer;
