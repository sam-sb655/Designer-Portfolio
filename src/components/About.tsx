import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredPhase, setHoveredPhase] = useState<number | null>(null);

  const phases = [
    {
      title: "RETRO WEB",
      description: "NOSTALGIA MEETS INNOVATION",
      icon: "🎮",
      stat: "LVL 80",
    },
    {
      title: "DESIGN",
      description: "UI/UX THAT MAKES SENSE",
      icon: "🎨",
      stat: "LVL 95",
    },
    {
      title: "FULL STACK",
      description: "MERN STACK & BEYOND",
      icon: "⚡",
      stat: "LVL 88",
    },
    {
      title: "AI POWER",
      description: "GENERATIVE AI × CREATIVITY",
      icon: "🤖",
      stat: "LVL 92",
    },
  ];

  return (
    <section ref={ref} className="py-20 px-4 bg-background relative overflow-hidden scanlines">
      {/* Level indicator */}
      <div className="absolute top-8 right-8 pixel-border bg-card px-4 py-2 z-10">
        <p className="font-pixel text-xs text-primary">LEVEL SELECT</p>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="pixel-border-thick bg-card/80 p-8 inline-block backdrop-blur-sm mb-8">
            <h2 className="font-pixel text-2xl md:text-4xl mb-6 text-primary">
              ▸ MISSION STATEMENT
            </h2>
            <div className="space-y-4 max-w-3xl">
              <p className="font-retro text-xl md:text-2xl text-foreground">
                {'>'} DESIGNS THAT MAKE YOU SAY —
              </p>
              <p className="font-retro text-lg md:text-xl text-secondary">
                {'>'} "HMM, THAT'S SOMETHING I'D LIKE TO HAVE."
              </p>
              <div className="mt-6 pt-6 border-t-4 border-primary">
                <p className="font-retro text-base md:text-lg text-muted-foreground">
                  {'>'} EVERY DESIGN I CREATE HAS
                  <br />
                  {'>'} LOGIC BEHIND ITS BEAUTY.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Character stats / Skills */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {phases.map((phase, index) => (
            <motion.div
              key={phase.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredPhase(index)}
              onMouseLeave={() => setHoveredPhase(null)}
              className="relative group cursor-pointer"
            >
              <div className={`pixel-border bg-card p-6 transition-all duration-300 h-full ${
                hoveredPhase === index ? 'bg-primary/20 animate-shake' : ''
              }`}>
                <div className="flex justify-between items-start mb-4">
                  <div className="text-4xl group-hover:animate-pixel-float">
                    {phase.icon}
                  </div>
                  <span className="font-pixel text-xs text-secondary">
                    {phase.stat}
                  </span>
                </div>
                
                <h3 className="font-pixel text-sm text-foreground mb-3">
                  {phase.title}
                </h3>
                
                <p className="font-retro text-sm text-muted-foreground">
                  {phase.description}
                </p>

                {/* Progress bar */}
                <div className="mt-4 h-2 bg-background relative overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${70 + index * 5}%` } : {}}
                    transition={{ duration: 1, delay: index * 0.2 + 0.5 }}
                    className="h-full bg-primary relative"
                  >
                    <div className="absolute inset-0 bg-primary animate-pulse" />
                  </motion.div>
                </div>
              </div>

              {/* Hover effect */}
              {hoveredPhase === index && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="absolute -inset-1 bg-primary/20 -z-10"
                />
              )}
            </motion.div>
          ))}
        </div>

        {/* Tech stack tags */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="pixel-border bg-card/80 p-6 inline-block backdrop-blur-sm">
            <p className="font-pixel text-xs text-primary mb-4">{'>'} EQUIPPED ITEMS</p>
            <div className="flex flex-wrap gap-3 justify-center">
              {["UI/UX", "MERN", "GEN AI", "3D MODEL", "PRODUCT"].map((skill, i) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 1 + i * 0.1 }}
                  className="pixel-border px-4 py-2 font-pixel text-xs bg-card hover:bg-primary/20 transition-colors cursor-pointer hover:animate-shake"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
