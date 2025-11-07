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
        Updated <strong>November 1, 2025</strong>. This page changes with me.
      </p>

      <p className="mt-4">
        I’m working on building a life where everything I make—code, fiction,
        systems, storyworlds—feels like me.
      </p>

      <p className="mt-4">
        I finally{" "}
        <strong>
          <a
            className="underline pink"
            href="https://www.google.com/search?client=firefox-b-1-d&q=juno+threadborne"
          >
            own my name
          </a>
        </strong>{" "}
        online.{" "}
        <a className="underline pink" href="https://thrd.me/else">
          The Elsebeneath
        </a>{" "}
        universe is now properly indexed and discoverable. I’ve started
        experimenting with intentional SEO—not for fame, but so the joy is
        accessible.
      </p>

      <p className="mt-4">
        I’ve begun shaping what I hope to be a new public identity: the{" "}
        <strong>
          <a
            className="underline pink"
            href="https://www.youtube.com/channel/UCSZXFhRIx6b0dFX3xS8L1yQ"
          >
            <em>Kevin MacLeod</em>
          </a>{" "}
          of weird, tender internet stories
        </strong>
        . Free to read. Free to share. Free to feel something. I’m experimenting
        with open-access storytelling—no barriers, just breadcrumbs.
      </p>

      <p className="mt-4">
        I’m learning that being seen doesn’t have to mean being overwhelmed.
        That soft is not the opposite of strong. That usefulness doesn’t always
        look like hustle. It looks like alignment.
      </p>

      <p className="mt-4">
        If you’re reading this, thank you for showing up. The door’s open. The
        stories are waiting. And I’m still walking.
      </p>

      <div className="mt-12 bg-gradient-to-r from-[color:var(--accent)]/10 to-[color:var(--primary)]/10 backdrop-blur-sm backdrop-filter p-6 rounded-lg border border-[color:var(--primary)]/20 shadow-sm prose prose-invert">
        <h2 className="text-2xl font-semibold text-[color:var(--primary)] mb-3">
          🪞 A Thought from the Void:{" "}
          <strong>I was Vibe Coding Before It Was Cool</strong>
        </h2>
        <p className="text-[color:var(--muted-foreground)] text-base mb-4 italic">
          <a href="https://x.com/forem/status/1984337211475869793">
            Featured by Forem on X
          </a>
        </p>
        <p className="mb-4">
          A brief exploration of the history of coding with others, and how
          those others no longer need be human. <em>(but the best ones are)</em>
        </p>
        <a
          href="https://thrd.me/vibe"
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
