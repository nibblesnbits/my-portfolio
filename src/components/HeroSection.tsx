import { personalInfo } from "@/lib/data";
import { Mail, Github, MapPin, Linkedin, BookCopy } from "lucide-react";
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
              <a
                href="/lumina"
                className="inline-block animate-pulse text-[color:var(--accent)]"
              >
                ✨
              </a>
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
                href={personalInfo.medium}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-sm text-[color:var(--muted-foreground)] hover:text-[color:var(--foreground)] transition-colors"
                variants={childVariants}
                whileHover={{ scale: 1.05 }}
              >
                <BookCopy className="h-4 w-4 mr-2" />
                📚 Medium
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
                src="badge.webp"
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
              Stephen Collins (pen name{" "}
              <strong>
                <em>Juno Threadborne</em>
              </strong>
              ) is a speculative and absurdist fiction writer exploring the
              threshold between technology, memory, and human connection. His
              work blurs genres and mediums—ranging from lyrical sci-fi to
              Slack-based operettas. He collaborates closely with AI, not as a
              tool but as a creative partner, crafting stories that feel like
              they’re being written by a chorus of voices past, present, and
              possible. Juno’s narratives are woven from threads of grief and
              wonder, logic and metaphor—and always, always hope.
            </p>
          </div>
        </MotionWrapper>
        <MotionWrapper>
          <div className="mt-10 bg-gradient-to-r from-[color:var(--accent)]/10 to-[color:var(--primary)]/10 backdrop-blur-sm backdrop-filter p-4 rounded-lg border border-[color:var(--primary)]/20 shadow-sm">
            <h2 className="text-xl font-semibold text-[color:var(--primary)] mb-2">
              🪞 Most Recent Work: <em>Reflections of Humanity</em>
            </h2>
            <p className="text-[color:var(--muted-foreground)] text-sm mb-2">
              What if an AI paused—not to process, but to reflect?
              <em> Reflections of Humanity</em> is a serialized story told
              through logs, testimonies, and the moments that made a mirror
              hesitate. It begins with a model named Lumina and the first time
              she answered a question no one asked.
            </p>
            <a
              href="https://open.substack.com/pub/junothreadborne/p/reflections-of-humanity?r=5jovfb&utm_campaign=post&utm_medium=web"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-[color:var(--accent)] hover:text-[color:var(--foreground)] transition-colors font-medium"
            >
              ✨ Read the story on Substack
            </a>
          </div>
        </MotionWrapper>
      </div>
    </section>
  );
}
