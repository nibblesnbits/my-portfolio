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
        I’m still in Jacksonville, carving out a focused stretch. Still working
        on{" "}
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
        —a series of stories about memory, choice, and the echoes we carry. It’s
        a world where hallways fold, rooms remember differently, and objects
        demand to be heard.
      </p>

      <p className="mt-4">
        Outside of writing, I’ve been rebuilding. Paying attention to what my
        body needs. What quiet feels like. What it means to be a person again
        after a long stretch of noise. That’s part of the work, too.
      </p>

      <p className="mt-4">
        My life will be changing for the better soon. That's what I'm holing on
        to.
      </p>

      <p className="mt-6">
        If you’re reading this, you’re part of the moment I’m in. Thanks for
        walking alongside me.
      </p>

      {/* ELSEWHERE, BRIEFLY Highlight */}
      <div className="mt-12 bg-gradient-to-r from-[color:var(--accent)]/10 to-[color:var(--primary)]/10 backdrop-blur-sm backdrop-filter p-6 rounded-lg border border-[color:var(--primary)]/20 shadow-sm prose prose-invert">
        <h2 className="text-2xl font-semibold text-[color:var(--primary)] mb-3">
          🪞 Most Recent Work: <strong>Elsewhere, Briefly</strong>
        </h2>
        <p className="text-[color:var(--muted-foreground)] text-base mb-4 italic">
          For the echoes we carry and the unfinished stories we’re still
          telling.
        </p>
        <p className="mb-4">
          Step into the Elsebeneath—a shifting realm woven from memories that
          never quite settled, regrets that whisper, and metaphors that bend and
          stretch like living things.
        </p>
        <p className="mb-4">
          Follow Sam and Fen as they navigate hallways that fold, rooms that
          remember differently, and a committee of objects that demand to be
          heard.
        </p>
        <p className="mb-4">
          A journey through meaning, missteps, and the quiet courage it takes to
          finish the sentences left hanging in the spaces between us.
        </p>
        <p className="mb-4">
          Filled with gentle absurdity, warm riddles, and poetic puzzles,{" "}
          <strong>Elsewhere, Briefly</strong> invites readers 12 to 112 to
          wander the curious corridors of memory, choice, and what it means to
          be truly heard.
        </p>
        <a
          href="https://docs.google.com/document/d/1ydvMlIUtjOPYtHFFZw6L8aLkadHNhl7vW8E4pi0J0Xg/edit?usp=sharing"
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
