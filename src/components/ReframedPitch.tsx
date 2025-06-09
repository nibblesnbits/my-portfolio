// src/components/ReframedPitch.tsx
import { motion } from "framer-motion";

export default function ReframedPitch() {
  return (
    <motion.div
      className="max-w-2xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-4xl md:text-6xl font-bold mb-4 text-primary">
        Reframed
      </h1>
      <p className="text-xl text-muted-foreground mb-6">
        A sketch series about unlearning control.
      </p>

      <p className="text-muted-foreground mb-4">
        It starts like alpha male dating advice.
        <br />
        Frame control. Pattern interrupts. Dominate or disappear.
        <br />
        But then—someone calls it out.
        <br />
        The mask slips. And someone with empathy steps in.
      </p>

      <p className="text-muted-foreground mb-4">
        Same swagger. No manipulation.
        <br />
        It’s a fake show about real growth.
      </p>

      <p className="text-muted-foreground mb-4 italic">
        Dropout already lives this premise.
        <br />
        This isn't just a sketch. It's a mirror.
      </p>

      <p className="text-muted-foreground bold">
        If you're not Sam, feel free to
      </p>

      <a
        href="https://bsky.app/profile/junothreadborne.me/post/3lr6igv5lx22h"
        className="inline-block px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition mb-10"
        target="_blank"
        rel="noopener noreferrer"
      >
        💖 Like the Seed Post
      </a>

      <div className="mt-10 space-y-4 text-muted-foreground">
        <h2 className="text-2xl font-semibold text-primary">Why It Works</h2>
        <p>
          The alpha bro space is bloated, loud, and hollow. But *Reframed* plays
          their game just long enough to show them—and the audience—how to win
          differently.
        </p>
        <p>
          Every episode is 60–90 seconds. Real advice hidden in satire,
          delivered by a rotating cast of emotionally fluent comedians.
        </p>
        <p className="">
          We’re not mocking toxic masculinity.{" "}
          <a
            className="underline italic"
            href="https://medium.junothreadborne.me/reframed-9002ea5e3ff2"
          >
            We’re gently dismantling it
          </a>
          .
        </p>
      </div>

      <p className="mt-12 mb-6 text-sm text-muted-foreground italic">
        This isn’t a pitch deck. It’s a reframing exercise.
      </p>
    </motion.div>
  );
}
