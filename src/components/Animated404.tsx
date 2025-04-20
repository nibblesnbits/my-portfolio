// src/components/Animated404.tsx
import { motion } from "framer-motion";

export default function Animated404() {
  return (
    <motion.div
      className="max-w-2xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-6xl md:text-7xl font-bold mb-4 text-primary">404</h1>
      <p className="text-xl md:text-2xl text-muted-foreground mb-6">
        This page is a whisper.
      </p>
      <p className="text-muted-foreground mb-8">
        A story not yet told.
        <br />
        The stars remember it.
        <br />
        But not the server.
      </p>
      <a
        href="/my-portfolio"
        className="inline-block px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition"
      >
        🔙 Return Home
      </a>
    </motion.div>
  );
}
