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
        I’ve also unexpectedly take a dive into music this week—writing an R&B
        album called <strong>Shop Around</strong>. It’s my first time seriously
        using AI in music creation, and it’s reshaping how I think about
        creative value: not in the generation, but in the curation and
        intentionality.
      </p>

      <p className="mt-4">
        <div className="mt-4">
          <h2 className="text-2xl font-bold mb-2">Tracks from Today</h2>

          <div className="mb-4">
            <p className="font-semibold">Shop Around</p>
            <audio controls className="w-full">
              <source src="/audio/shop.mp3" type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>

          <div className="mb-4">
            <p className="font-semibold">Under My Skin</p>
            <audio controls className="w-full">
              <source src="/audio/skin.mp3" type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>

          <div className="mb-4">
            <p className="font-semibold">Fucxked Up</p>
            <audio controls className="w-full">
              <source src="/audio/fuckedup.mp3" type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>

          <div className="mb-4">
            <p className="font-semibold">Take It</p>
            <audio controls className="w-full">
              <source src="/audio/takeit.mp3" type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>
        </div>

        <div className="mt-4">
          <em>Album art:</em>
          <div className="w-full bg-gray-800 rounded-lg p-4 text-center">
            <img
              src="/shop-around-art.png"
              alt="Shop Around by Juno Album Art"
            />
          </div>
        </div>
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
