// src/components/Animated404.tsx
import { motion } from "framer-motion";

export default function Archive() {
  return (
    <motion.div
      className="max-w-2xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <p className="text-xl md:text-2xl text-muted-foreground mb-6">
        <img
          src="/archive-cover.webp"
          alt="The Archive of Unsaid Things"
          className="w-full mb-4 rounded-lg shadow-lg"
        />
      </p>

      <p className="text-xl md:text-2xl text-muted-foreground mb-6">
        A place for the stories that didn't fit anywhere else.
      </p>
      <p className="text-muted-foreground mb-8 text-2xl">
        <br />
        <br />
        <a
          href="https://junothreadborne.me/docs/The%20Archive%20of%20Unsaid%20Things.pdf"
          className="underline"
        >
          Read the full text here
        </a>
      </p>
      <a
        href="/"
        className="inline-block px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition"
      >
        🔙 Return Home
      </a>
    </motion.div>
  );
}
