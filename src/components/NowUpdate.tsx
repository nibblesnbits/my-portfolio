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
        Updated <strong>May 22, 2025</strong>. This page changes with me.
      </p>

      <p className="mt-4">
        I’m spending six weeks in Jacksonville with my son, trying to finish{" "}
        <em>Because the Sparrow Must Fly</em>—a novel about flight, AI, and the
        boundaries of self. It’s deeply personal. A little broken. Still
        becoming.
      </p>

      <p className="mt-4">
        I just released the final book in{" "}
        <a href="https://thrd.me/else" className="text-primary underline">
          The Elsebeneath Trilogy
        </a>
        —three lyrical fables I wrote for my son Sam (and anyone who’s ever
        needed help trying again).
      </p>

      <p className="mt-4">
        On the tech side, I built{" "}
        <a href="https://thrd.me" className="text-primary underline">
          thrd.me
        </a>
        —a personal shortlink service powered by Cloudflare Workers. It’s tiny,
        fast, and feels like mine.
      </p>

      <p className="mt-4">
        This site will keep growing. My goal is to make it a kind of digital
        loom—where story, code, and identity weave into something honest.
      </p>

      <blockquote className="mt-6 italic text-muted-foreground">
        Right now, I’m holding space for clarity. Trying to write a little every
        day. Remembering how to be soft and brave at the same time.
      </blockquote>

      <p className="mt-6">
        If you’re reading this, you’re part of the moment I’m in. Thanks for
        being here.
      </p>

      <p className="mt-8 text-right">—Juno</p>
    </motion.div>
  );
}
