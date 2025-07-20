// src/components/Animated404.tsx
import { motion } from "framer-motion";

export default function Elsewhere() {
  return (
    <motion.div
      className="max-w-2xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <p className="text-xl md:text-2xl text-muted-foreground mb-6">
        <img
          src="/elsewhere-cover.png"
          alt="Elsewhere, Briefly"
          className="w-full mb-4 rounded-lg shadow-lg"
        />
      </p>

      <p className="text-xl md:text-2xl text-muted-foreground mb-6">
        A fun little jaunt between the Elsebeneath and somewhere else.
      </p>
      <p className="text-muted-foreground mb-8">
        <br />
        <br />
        <a
          href="https://docs.google.com/document/d/1ydvMlIUtjOPYtHFFZw6L8aLkadHNhl7vW8E4pi0J0Xg/edit?usp=sharing"
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
