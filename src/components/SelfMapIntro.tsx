import { motion } from "framer-motion";
import { useState, useRef } from "react";
import { FileText } from "lucide-react";

export default function SelfMapIntro() {
  return (
    <motion.div
      className="max-w-2xl text-left prose prose-invert relative"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
        <FileText className="inline-block mr-2 text-[color:var(--accent)]" />
        What’s a Self-Map?
      </h1>

      <p className="text-xl md:text-2xl text-muted-foreground mb-6">
        <strong>A Self-Map</strong> is a short, context-rich snapshot of how
        your brain works best—especially in collaboration.
      </p>

      <p className="leading-relaxed">
        It’s not a résumé.
        <br />
        It’s not a list of diagnoses.
        <br />
        It’s not a personality quiz result.
      </p>

      <p className="leading-relaxed">
        It’s a <em>personal clarity tool</em>—for <strong>you</strong> and for
        the people you work with.
      </p>
      <br />

      <blockquote className="italic text-muted-foreground border-l-4 border-accent pl-4">
        When you’re neurodivergent (or just thrive on structure), a Self-Map
        helps reduce friction, invite understanding, and build faster
        alignment—without the emotional labor of constant explanation.
      </blockquote>

      <h2 className="mt-10 text-2xl font-semibold text-accent">
        ✍️ Why Make a Self-Map?
      </h2>
      <p className="leading-relaxed">
        Because context shouldn’t be a guessing game. When expectations are
        unspoken, people misread each other. When preferences stay hidden,
        collaboration turns into code-breaking. A Self-Map helps you:
      </p>
      <ul className="list-disc pl-6 space-y-1">
        <li>
          <strong>Set boundaries without apologizing</strong>
        </li>
        <li>
          <strong>Define how you like to communicate</strong>
        </li>
        <li>
          <strong>Share how you think, process, and contribute best</strong>
        </li>
      </ul>

      <p className="leading-relaxed">
        It’s not oversharing. It’s <strong>scaffolding</strong>.
      </p>

      <h2 className="mt-10 text-2xl font-semibold text-accent">
        🧠 What Goes in a Self-Map?
      </h2>
      <p className="leading-relaxed">
        Here’s a basic structure you can build from:
      </p>

      <h3 className="text-xl font-semibold mt-6">
        🗣️ 1. My Communication Style
      </h3>
      <ul className="list-disc pl-6 space-y-1">
        <li>“I process before I speak.”</li>
        <li>“I do better with direct feedback than vague encouragement.”</li>
        <li>
          “Sometimes I ask a lot of clarifying questions—this means I’m engaged,
          not doubting you.”
        </li>
      </ul>

      <h3 className="text-xl font-semibold mt-6">🧠 2. How I Work Best</h3>
      <ul className="list-disc pl-6 space-y-1">
        <li>“I prefer asynchronous follow-ups.”</li>
        <li>“I need to know the goal before I can generate ideas.”</li>
        <li>“I focus on patterns, so I might zoom out before I zoom in.”</li>
      </ul>

      <h3 className="text-xl font-semibold mt-6">🚨 3. Signals to Watch For</h3>
      <ul className="list-disc pl-6 space-y-1">
        <li>
          “If I go quiet, I might be processing—or overwhelmed. Feel free to
          check in.”
        </li>
        <li>
          “If I start restating things, I’m trying to get aligned, not repeating
          for no reason.”
        </li>
      </ul>

      <h3 className="text-xl font-semibold mt-6">
        🛠️ 4. Support That Helps Me
      </h3>
      <ul className="list-disc pl-6 space-y-1">
        <li>“I appreciate summaries, visuals, or bullet points.”</li>
        <li>“I do best when I can pause and return with ideas.”</li>
        <li>
          “Please flag if something feels off—I like to recalibrate in real
          time.”
        </li>
      </ul>

      <h2 className="mt-10 text-2xl font-semibold text-accent">
        🧰 Build Your Own Self-Map
      </h2>
      <p className="leading-relaxed">
        You can format your Self-Map however you like:
      </p>
      <ul className="list-disc pl-6 space-y-1">
        <li>A one-page doc you share before a project</li>
        <li>A section on your portfolio or “About Me” page</li>
        <li>A conversation starter in new team settings</li>
      </ul>

      <p className="leading-relaxed">
        Or try this simple fill-in-the-blank version:
      </p>
      <br />
      <div className="bg-muted p-4 rounded-xl text-sm whitespace-pre-wrap font-mono">
        🧠 I work best when...
        <br />
        🔁 I tend to struggle when...
        <br />
        📬 The best way to communicate with me is...
        <br />
        🛑 When I’m quiet or unclear, it usually means...
        <br />
        🎯 Here's how I like to give and receive feedback...
        <br />
        ❤️ Things that help me feel safe and focused include...
      </div>

      <h2 className="mt-10 text-2xl font-semibold text-accent">
        💬 You Shouldn’t Have to Translate Yourself Constantly
      </h2>
      <p className="leading-relaxed">
        You don’t have to disclose anything you’re not comfortable sharing. This
        isn’t about justifying yourself. It’s about setting yourself up to
        thrive.
      </p>

      <p className="leading-relaxed">
        When you give people a map, they don’t have to guess where you’re coming
        from. And you don’t have to spend your energy translating your needs in
        real time.
      </p>

      <p className="mt-8 text-right">—Juno</p>
    </motion.div>
  );
}
