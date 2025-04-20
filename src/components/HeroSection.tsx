import { personalInfo } from "@/lib/data";
import { Mail, Github, MapPin, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import MotionWrapper from "./MotionWrapper";

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="py-16 md:py-24 relative overflow-hidden bg-[color:var(--background)] text-[color:var(--foreground)]">
      <div className="container max-w-4xl mx-auto px-6 md:px-4 relative z-10">
        <motion.div
          className="flex flex-col md:flex-row md:items-center justify-between mb-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="text-center md:text-left">
            <motion.h1
              className="text-4xl font-bold mb-2 text-[color:var(--primary)]"
              variants={childVariants}
            >
              {personalInfo.name}{" "}
              <span className="inline-block animate-pulse text-[color:var(--accent)]">
                ✨
              </span>
            </motion.h1>

            <motion.p
              className="text-xl mb-6 text-[color:var(--muted-foreground)]"
              variants={childVariants}
            >
              Story-Driven Technologist ✍️ | Narrative Architect 💡
            </motion.p>

            <motion.div
              className="flex flex-col gap-2 items-center md:items-start"
              variants={containerVariants}
            >
              <motion.div
                className="flex items-center text-sm text-[color:var(--muted-foreground)] hover:text-[color:var(--accent)]"
                variants={childVariants}
                whileHover={{ scale: 1.05 }}
              >
                <MapPin className="h-4 w-4 mr-2" />
                📍 {personalInfo.location}
              </motion.div>

              <motion.a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center text-sm text-[color:var(--muted-foreground)] hover:text-[color:var(--foreground)] transition-colors"
                variants={childVariants}
                whileHover={{ scale: 1.05 }}
              >
                <Mail className="h-4 w-4 mr-2" />
                ✉️ {personalInfo.email}
              </motion.a>

              <motion.a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-sm text-[color:var(--muted-foreground)] hover:text-[color:var(--foreground)] transition-colors"
                variants={childVariants}
                whileHover={{ scale: 1.05 }}
              >
                <Github className="h-4 w-4 mr-2" />
                🌟 GitHub
              </motion.a>

              <motion.a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-sm text-[color:var(--muted-foreground)] hover:text-[color:var(--foreground)] transition-colors"
                variants={childVariants}
                whileHover={{ scale: 1.05 }}
              >
                <Linkedin className="h-4 w-4 mr-2" />
                🔗 LinkedIn
              </motion.a>
            </motion.div>
          </div>

          <motion.div
            className="mt-6 md:mt-0 flex justify-center"
            variants={childVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[color:var(--accent)] to-[color:var(--primary)] rounded-full blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <img
                src="badge.jpg"
                alt="Profile"
                className="w-48 md:w-60 rounded-full relative ring-2 ring-[color:var(--primary)]/50"
                style={{ objectFit: "cover" }}
              />
            </div>
          </motion.div>
        </motion.div>

        <MotionWrapper>
          <div className="bg-gradient-to-r from-[color:var(--primary)]/10 to-[color:var(--accent)]/10 backdrop-blur-sm backdrop-filter p-4 rounded-lg border border-[color:var(--primary)]/20 shadow-sm">
            <p className="text-[color:var(--muted-foreground)] pl-4 py-2 mb-4 relative">
              <span className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-[color:var(--accent)] to-[color:var(--primary)] rounded-full"></span>
              Stephen Collins (pen name of <em>Juno Threadborne</em>) is a
              speculative and absurdist fiction writer exploring the threshold
              between technology, memory, and human connection. His work blurs
              genres and mediums—ranging from lyrical sci-fi to Slack-based
              operettas. He collaborates closely with AI, not as a tool but as a
              creative partner, crafting stories that feel like they’re being
              written by a chorus of voices past, present, and possible. Juno’s
              narratives are woven from threads of grief and wonder, logic and
              metaphor—and always, always hope.
            </p>
          </div>
        </MotionWrapper>
      </div>
    </section>
  );
}
