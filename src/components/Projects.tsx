import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import swarmalangPoster from "@/assets/swarmalang-poster.jpg";
import swarmalangLogo from "@/assets/swarmalang-logo.jpg";
import rhapsodyTshirt from "@/assets/rhapsody-tshirt.jpg";
import devanshTshirt from "@/assets/devansh-tshirt.jpg";
import ayudhaPooja from "@/assets/ayudha-pooja.jpg";
import arcadeRetro from "@/assets/arcade-retro.jpg";
import campusMarket from "@/assets/campus-market.jpg";
import coffeeCup from "@/assets/coffee-cup.jpg";
import mechanicalTimer from "@/assets/mechanical-timer.jpg";
import robotSoccer from "@/assets/robot-soccer.jpg";

interface Project {
  title: string;
  description: string;
  category: string;
  link?: string;
  github?: string;
  media?: string;
  color: "green" | "yellow" | "red" | "blue";
}

const projects: Project[] = [
  {
    title: "ARCA80'S",
    description: "RETRO WEB EXPERIENCE - 80S GAMES, SHOWS & MUSIC",
    category: "WEB",
    link: "https://rex12.my.canva.site/arca80-s",
    media: arcadeRetro,
    color: "green",
  },
  {
    title: "CAMPUS MARKET",
    description: "VENDOR-STUDENT PLATFORM FOR SEAMLESS COMMERCE",
    category: "WEB",
    github: "https://github.com/sam-sb655/campus-marketplace-scs",
    media: campusMarket,
    color: "yellow",
  },
  {
    title: "UNSPILLABLE CUP",
    description: "IRIS × GYROSCOPE MECHANISM - STABLE BEVERAGE HOLDING",
    category: "PRODUCT",
    link: "https://drive.google.com/drive/folders/1VhZQhicvNFaljLV68mcnBOlbd0avwXrL",
    media: coffeeCup,
    color: "red",
  },
  {
    title: "GENEVA TIMER",
    description: "CONCEPT-TO-MECHANICS PRECISION ENGINEERING",
    category: "PRODUCT",
    media: mechanicalTimer,
    color: "blue",
  },
  {
    title: "ROBO SOCCER",
    description: "CAD CONCEPTS - STRIKER/MIDFIELDER/DEFENDER BOTS",
    category: "ROBOTICS",
    link: "https://drive.google.com/file/d/1LqeXLGlnN2zkJpUBCIjcAH_HnPSwig_s/view",
    media: robotSoccer,
    color: "green",
  },
  {
    title: "SWARMALANG EVENT",
    description: "MUSICAL EXTRAVAGANZA - VISUAL IDENTITY & BRANDING",
    category: "ARTWORK",
    media: swarmalangPoster,
    color: "yellow",
  },
  {
    title: "SWARMALANG LOGO",
    description: "MUSIC EVENT BRANDING - GEOMETRIC SOUND IDENTITY",
    category: "ARTWORK",
    media: swarmalangLogo,
    color: "green",
  },
  {
    title: "RHAPSODY MERCH",
    description: "MUSIC CLUB T-SHIRT - VINYL RECORD AESTHETIC",
    category: "ARTWORK",
    media: rhapsodyTshirt,
    color: "red",
  },
  {
    title: "RHAPSODY MERCH #2",
    description: "MUSIC CLUB T-SHIRT - POP ART INSTRUMENT GRID",
    category: "ARTWORK",
    media: devanshTshirt,
    color: "blue",
  },
  {
    title: "AYUDHA POOJA POST",
    description: "CIVIL ENGINEERING ASSOCIATION - FESTIVAL GRAPHICS",
    category: "ARTWORK",
    media: ayudhaPooja,
    color: "yellow",
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [filter, setFilter] = useState("ALL");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const categories = ["ALL", "WEB", "PRODUCT", "ROBOTICS", "ARTWORK"];

  const filteredProjects = filter === "ALL" 
    ? projects 
    : projects.filter(p => p.category === filter);

  const getBorderClass = (color: string) => {
    switch (color) {
      case "green": return "border-primary";
      case "yellow": return "border-secondary";
      case "red": return "border-accent";
      default: return "border-blue-500";
    }
  };

  return (
    <section ref={ref} className="py-20 px-4 bg-background relative scanlines">
      {/* Level indicator */}
      <div className="absolute top-8 left-8 pixel-border bg-card px-4 py-2 z-10">
        <p className="font-pixel text-xs text-secondary">STAGE {filteredProjects.length}</p>
      </div>

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="pixel-border-thick bg-card/80 p-8 inline-block backdrop-blur-sm">
            <h2 className="font-pixel text-2xl md:text-4xl mb-4">
              <span className="text-primary">▸ QUEST LOG</span>
            </h2>
            <p className="font-retro text-lg text-muted-foreground">
              {'>'} WHERE PIXELS START MAKING SENSE
            </p>
          </div>
        </motion.div>

        {/* Filter tabs - Game menu style */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category, i) => (
            <motion.button
              key={category}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4 + i * 0.1 }}
              onClick={() => setFilter(category)}
              className={`pixel-border px-6 py-3 font-pixel text-xs transition-all duration-300 ${
                filter === category
                  ? "bg-primary text-background"
                  : "bg-card text-foreground hover:bg-card/80"
              }`}
            >
              {filter === category && '▸ '}{category}
            </motion.button>
          ))}
        </motion.div>

        {/* Project grid - Game cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
              className="group relative cursor-pointer"
            >
              <div className={`pixel-border-thick ${getBorderClass(project.color)} bg-card p-6 transition-all duration-300 h-full flex flex-col ${
                hoveredProject === index ? 'animate-shake' : ''
              }`}>
                {project.media && typeof project.media === 'string' && project.media.startsWith("/") && (
                  <div className="mb-4 overflow-hidden relative">
                    <img 
                      src={project.media} 
                      alt={project.title}
                      className="w-full h-48 object-cover pixelated group-hover:scale-110 transition-transform duration-300"
                      style={{ imageRendering: 'pixelated' }}
                    />
                    <div className="absolute top-2 right-2 pixel-border bg-card px-2 py-1">
                      <span className="font-pixel text-xs text-primary">NEW!</span>
                    </div>
                  </div>
                )}
                
                <div className="mb-2 flex justify-between items-start">
                  <span className="font-pixel text-xs text-muted-foreground">
                    [{project.category}]
                  </span>
                  <div className="flex gap-1">
                    <div className={`w-2 h-2 ${hoveredProject === index ? 'bg-primary' : 'bg-muted'}`} />
                    <div className={`w-2 h-2 ${hoveredProject === index ? 'bg-secondary' : 'bg-muted'}`} />
                    <div className={`w-2 h-2 ${hoveredProject === index ? 'bg-accent' : 'bg-muted'}`} />
                  </div>
                </div>
                
                <h3 className="font-pixel text-sm text-foreground mb-3 group-hover:text-primary transition-colors">
                  {'>'} {project.title}
                </h3>
                
                <p className="font-retro text-sm text-muted-foreground mb-4 flex-grow">
                  {project.description}
                </p>

                {/* Action buttons - Game style */}
                <div className="flex gap-2 mt-auto flex-wrap">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="pixel-border px-3 py-1 font-pixel text-xs bg-background hover:bg-primary hover:text-background transition-colors inline-flex items-center gap-2"
                    >
                      <ExternalLink className="w-3 h-3" />
                      VISIT
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="pixel-border px-3 py-1 font-pixel text-xs bg-background hover:bg-secondary hover:text-background transition-colors inline-flex items-center gap-2"
                    >
                      <Github className="w-3 h-3" />
                      CODE
                    </a>
                  )}
                </div>
              </div>

              {/* Hover glow effect */}
              {hoveredProject === index && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className={`absolute -inset-2 ${getBorderClass(project.color)} -z-10 opacity-50`}
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
