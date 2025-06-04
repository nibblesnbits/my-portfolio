import { motion } from "framer-motion";

export default function NowPage() {
  return (
    <motion.div
      className="max-w-2xl text-left prose prose-invert relative m-8"
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
        Updated <strong>June 4, 2025</strong>. This page changes with me.
      </p>

      <p className="mt-4">
        I’m in Jacksonville now, carving out a focused stretch. Still writing{" "}
        <em>Because the Sparrow Must Fly</em>—a novel about AI, memory, and what
        it means to stay human in systems designed to forget us. It’s the kind
        of story that spills out slow and strange and necessary.
      </p>

      <p className="mt-4">
        I recently submitted an essay to <em>The Atlantic</em> titled{" "}
        <strong>The Mirror Doesn’t Lean Left</strong>. It explores the way large
        language models reflect collective moral tendencies—compassion over
        cruelty, fairness over fear—and how that reflection can make people
        uncomfortable when it doesn’t align with what they expected. It’s a
        piece about AI, yes—but also about all of us.
      </p>

      <p className="mt-4">
        Outside of writing, I’ve been rebuilding. Paying attention to what my
        body needs. What quiet feels like. What it means to be a person again
        after a long stretch of noise. That’s part of the work, too.
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
