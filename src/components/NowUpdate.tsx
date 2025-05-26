import { motion } from "framer-motion";
import { useState, useRef } from "react";
import { Volume2, VolumeX } from "lucide-react";

export default function NowPage() {
  return (
    <motion.div
      className="max-w-2xl text-left prose prose-invert relative"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
        <span className="inline-block animate-pulse text-[color:var(--accent)]">
          🧵
        </span>{" "}
        What I'm Working On Now
      </h1>

      <p className="text-xl md:text-2xl text-muted-foreground mb-6">
        Updated <strong>May 26, 2025</strong>. This page changes with me.
      </p>

      <p className="mt-4">
        I’m in Jacksonville now, settled in for a focused stretch, working on{" "}
        <em>Because the Sparrow Must Fly</em>—a novel about flight, AI, and the
        edges of self. It’s deeply personal. Still a little broken. Still
        becoming.
      </p>

      <p className="mt-4">
        I recently wrapped the final book in{" "}
        <a href="https://thrd.me/else" className="text-primary underline">
          The Elsebeneath Trilogy
        </a>
        —three lyrical fables I wrote for my son Sam (and anyone who’s ever
        needed help finding their way back to trying).
      </p>

      <p className="mt-4">
        On the tech side, I built{" "}
        <a href="https://thrd.me" className="text-primary underline">
          thrd.me
        </a>
        —a tiny, fast, personal shortlink service powered by Cloudflare Workers.
        It feels like mine. It feels like a thread I wanted to pull through the
        internet.
      </p>

      <p className="mt-4">
        This site will keep growing. My aim is still the same: to build a kind
        of digital loom—where story, code, and identity weave into something
        honest.
      </p>

      <blockquote className="mt-6 italic text-muted-foreground">
        Right now, I’m holding space for quiet progress. Trying to write a
        little every day. Letting the air clear, letting the work breathe,
        remembering how to be soft and brave at the same time.
      </blockquote>

      <p className="mt-6">
        If you’re reading this, you’re part of the moment I’m in. Thanks for
        walking alongside me.
      </p>

      <p className="mt-8 text-right">—Juno</p>
    </motion.div>
  );
}
