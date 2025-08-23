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
        Updated <strong>August 23, 2025</strong>. This page changes with me.
      </p>

      <p className="mt-4">
        For now, I’ve stepped away from{" "}
        <em>
          <a
            className="underline"
            rel="noreferrer"
            target="_blank"
            href="https://thrd.me/else"
          >
            The Elsebeneath
          </a>
        </em>
        . It still lives online—ten books deep, tangled with memory and magic—
        but my hands are quiet, and my heart’s pointed elsewhere.
      </p>

      <p className="mt-4">
        I don't know if I’ll return to it. I might. But if I don’t, I’ve made
        peace with that. It’s no longer mine to hold constantly—it belongs to
        anyone who’s ever wandered inside it, even briefly. It belongs to you,
        if you’ve ever felt seen by its echoes.
      </p>

      <p className="mt-4">
        Right now, I’m working on rebuilding real things: my home, my focus, my
        future. I’m trying to find structure again—not in narrative, but in
        breath and body and rhythm. That’s its own kind of story.
      </p>

      <p className="mt-4">
        If you’re reading this, thank you. For showing up. For walking part of
        the way with me. The doors are still there, even if I’m not on the other
        side of them right now.
      </p>

      {/* ELSEWHERE, BRIEFLY Highlight */}
      <div className="mt-12 bg-gradient-to-r from-[color:var(--accent)]/10 to-[color:var(--primary)]/10 backdrop-blur-sm backdrop-filter p-6 rounded-lg border border-[color:var(--primary)]/20 shadow-sm prose prose-invert">
        <h2 className="text-2xl font-semibold text-[color:var(--primary)] mb-3">
          🪞 A World Still Whispering: <strong>Elsewhere, Briefly</strong>
        </h2>
        <p className="text-[color:var(--muted-foreground)] text-base mb-4 italic">
          Not a conclusion. Just a comma. A pause between echoes.
        </p>
        <p className="mb-4">
          The Elsebeneath is still yours to visit. You can start with{" "}
          <strong>Elsewhere, Briefly</strong>—a quiet, surreal story about
          missteps, memory, and moments that almost made sense.
        </p>
        <p className="mb-4">
          Sam and Fen remain there, walking hallways that fold, laughing at
          sentient benches, making meaning out of metaphors. They’re in no rush.
          They’ll wait.
        </p>
        <p className="mb-4">
          If you feel like wandering, the stories will meet you where you are.
          They always have.
        </p>
        <a
          href="https://thrd.me/elsewhere"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-[color:var(--accent)] hover:text-[color:var(--foreground)] transition-colors font-medium"
        >
          📖 Read it here
        </a>
      </div>

      <p className="mt-8 text-right">—Juno</p>
    </motion.div>
  );
}
