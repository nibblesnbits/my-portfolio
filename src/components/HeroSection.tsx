import { personalInfo } from "@/lib/data";
import { Mail, MapPin, SquareStack, BookCopy } from "lucide-react";
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
                href={personalInfo.substack}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-sm text-[color:var(--muted-foreground)] hover:text-[color:var(--foreground)] transition-colors"
                variants={childVariants}
                whileHover={{ scale: 1.05 }}
              >
                <SquareStack className="h-4 w-4 mr-2" />
                🔗 Substack
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
              <strong>
                <em>Juno Threadborne</em>
              </strong>
              &nbsp;is a speculative and absurdist fiction writer exploring the
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
              🪞 Most Recent Work: <strong>The Elsebeneath Trilogy</strong>
            </h2>
            <p className="text-[color:var(--muted-foreground)] text-sm mb-2">
              <em>Written for one kid. Meant for all of us.</em>
              <br />
              <br />
              When Sam can’t land a simple yo-yo trick, he falls into a strange
              world where self-doubt has a geography. Over three quietly
              profound adventures—The Island of Almosts, The Valley of
              Yet-Stills, and The Mountain of Mastery—Sam meets turtles in moss
              hats, birds with unfinished songs, racing snails, shadowy fears,
              and climbing goats who build towers no one sees. Each step forward
              is a lesson in what it means to keep going—especially when you’re
              not the best, not the fastest, and definitely not perfect.
              <br />
              <br />
              Full of metaphor, warmth, and oddly emotional office supplies, The
              Elsebeneath Trilogy is a gentle, lyrical journey through failure,
              progress, and the quiet courage of trying again.
              <br />
              <br />
              Perfect for readers 9 to 99 who have ever felt like giving up—and
              might just need a friend to remind them they’re not alone.
            </p>
            <a
              href="https://medium.com/the-elsebeneath"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-[color:var(--accent)] hover:text-[color:var(--foreground)] transition-colors font-medium"
            >
              📖 Read the series on Medium
            </a>
          </div>
        </MotionWrapper>
      </div>
    </section>
  );
}
