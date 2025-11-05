import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Linkedin, Github, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("MESSAGE SENT! PLAYER 2 WILL RESPOND SOON.");
    setFormData({ name: "", email: "", message: "" });
  };

  const socials = [
    {
      name: "EMAIL",
      icon: Mail,
      link: "mailto:ce24bt023@iitdh.ac.in",
      color: "primary",
    },
    {
      name: "LINKEDIN",
      icon: Linkedin,
      link: "https://www.linkedin.com/in/soumya-basuli-621453293/",
      color: "secondary",
    },
    {
      name: "GITHUB",
      icon: Github,
      link: "https://github.com/sam-sb655",
      color: "accent",
    },
    {
      name: "INSTA",
      icon: Instagram,
      link: "https://www.instagram.com/the_universal_daddy655/",
      color: "primary",
    },
  ];

  return (
    <section ref={ref} className="py-20 px-4 bg-background relative overflow-hidden scanlines">
      {/* Boss battle UI indicator */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 pixel-border bg-card px-6 py-2 z-10">
        <p className="font-pixel text-xs text-accent">⚔️ BOSS: COLLABORATION ⚔️</p>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="pixel-border-thick bg-card/80 p-8 inline-block backdrop-blur-sm">
            <h2 className="font-pixel text-2xl md:text-4xl mb-4">
              <span className="text-primary">▸ MULTIPLAYER</span>
            </h2>
            <p className="font-retro text-xl text-foreground">
              {'>'} LET'S CREATE SOMETHING
              <br />
              {'>'} THAT <span className="text-secondary">THINKS</span>
            </p>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="space-y-6 mb-12"
        >
          <div className="pixel-border-thick bg-card/80 p-6 backdrop-blur-sm">
            <p className="font-pixel text-xs text-primary mb-4">{'>'} ENTER PLAYER DATA:</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="font-retro text-sm text-muted-foreground block mb-2">
                  {'>'} NAME:
                </label>
                <Input
                  placeholder="PLAYER_NAME"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="pixel-border bg-background border-primary text-foreground font-retro"
                  required
                />
              </div>
              <div>
                <label className="font-retro text-sm text-muted-foreground block mb-2">
                  {'>'} EMAIL:
                </label>
                <Input
                  type="email"
                  placeholder="PLAYER@MAIL.COM"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="pixel-border bg-background border-primary text-foreground font-retro"
                  required
                />
              </div>
            </div>
            
            <div>
              <label className="font-retro text-sm text-muted-foreground block mb-2">
                {'>'} MESSAGE:
              </label>
              <Textarea
                placeholder="TYPE YOUR MESSAGE HERE..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="pixel-border bg-background border-primary text-foreground font-retro min-h-[150px]"
                required
              />
            </div>
          </div>

          <Button
            type="submit"
            className="w-full pixel-border-thick bg-primary hover:bg-secondary text-background font-pixel text-sm py-6 transition-all duration-300 hover:animate-shake"
          >
            [A] SEND MESSAGE
          </Button>
        </motion.form>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {socials.map((social, i) => (
            <motion.a
              key={social.name}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.6 + i * 0.1 }}
              className={`pixel-border bg-card hover:bg-${social.color}/20 p-4 flex flex-col items-center gap-2 transition-all duration-300 hover:animate-shake cursor-pointer group`}
            >
              <social.icon className="w-6 h-6 text-foreground group-hover:text-primary" />
              <span className="font-pixel text-xs text-muted-foreground group-hover:text-foreground">
                {social.name}
              </span>
            </motion.a>
          ))}
        </motion.div>

        {/* Power-up indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1 }}
          className="mt-8 text-center"
        >
          <div className="pixel-border bg-card/80 px-6 py-3 inline-block backdrop-blur-sm">
            <p className="font-pixel text-xs text-muted-foreground">
              <span className="text-primary animate-blink">●</span> ONLINE STATUS: ACTIVE
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
