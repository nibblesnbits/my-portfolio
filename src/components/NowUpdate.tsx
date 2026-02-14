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
        The Sovereignty Arc
      </h1>

      <p className="text-xl md:text-2xl text-muted-foreground mb-6">
        Updated <strong>February 14, 2026</strong>. This page changes with me.
      </p>

      <p className="mt-4">
        I’m building a life that does not depend on permission.
      </p>

      <p className="mt-4">That means infrastructure.</p>

      <p className="mt-4">
        I’m hardening the home stack — local AI, private services, self-hosted
        tools, systems that work even when the internet doesn’t. If something
        flickers out there, nothing inside this house should panic.
      </p>

      <p className="mt-4">
        I’m thinking deeply about{" "}
        <a className="underline" href="https://thrd.me/coherence">
          architectural coherence
        </a>
        — in code, in homes, in governments, in minds. Entropy accumulates
        quietly. Sovereignty is simply choosing where to place the boundary.
      </p>

      <p className="mt-4">
        I’m writing publicly about cognitive load, invisible performance costs,
        and AI as a cognitive prosthetic — not as replacement, but as amplifier.
        Not automation, but alignment.
      </p>

      <p className="mt-4">
        I’m stabilizing the physical house too. Making rooms fully clean. Making
        mornings intentional. Cooking real food. Leaving breadcrumbs for Sarah.
        Sovereignty is emotional as much as technical.
      </p>

      <p className="mt-4">
        I don’t want to control the world. I want a small, resilient center that
        can’t be easily shaken.
      </p>

      <div className="mt-12 bg-gradient-to-r from-[color:var(--accent)]/10 to-[color:var(--primary)]/10 backdrop-blur-sm backdrop-filter p-6 rounded-lg border border-[color:var(--primary)]/20 shadow-sm prose prose-invert">
        <h2 className="text-2xl font-semibold text-[color:var(--primary)] mb-3">
          🛠 Current Focus
        </h2>
        <p className="mb-3">
          • Self-hosted AI tooling and local-first infrastructure
        </p>
        <p className="mb-3">
          • Writing about coherence as a measurable performance layer
        </p>
        <p className="mb-3">
          • Reducing friction in both software systems and daily life
        </p>
        <p className="mb-3">
          • Building systems my family can rely on — quietly
        </p>
      </div>

      <p className="mt-8 text-right">—Juno</p>
    </motion.div>
  );
}
