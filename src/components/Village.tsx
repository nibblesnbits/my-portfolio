// src/components/Animated404.tsx
import { motion } from "framer-motion";

export default function Village() {
  return (
    <motion.div
      className="max-w-2xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <p className="text-xl md:text-2xl text-muted-foreground mb-6">
        <img
          src="/vov-cover.webp"
          alt="Village of Voicekeepers"
          className="w-full mb-4 rounded-lg shadow-lg"
        />
      </p>

      <p className="text-xl md:text-2xl text-muted-foreground mb-6">
        Hey, bud.
      </p>
      <p className="text-muted-foreground mb-8">
        This story is for you.
        <br />
        <br />
        <a
          href="https://docs.google.com/document/d/10bkrDjC5NXbqt8IRoNw4xu9uGvR2i96hA8TVPLXt2a4/view"
          className="underline"
        >
          Read along here
        </a>
        <br />
        <br />
        Chapter 1: The Wind In The Walls
        <audio controls className="w-full mb-4">
          <source src="/audio/village/vov-chapter-1.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
        <br />
        Chapter 2: Nightfall in the Village
        <audio controls className="w-full mb-4">
          <source src="/audio/village/vov-chapter-2.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
        <br />
        Chapter 3: The Bakery That Listens
        <audio controls className="w-full mb-4">
          <source src="/audio/village/vov-chapter-3.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
        <br />
        Chapter 4: Said-So Academy
        <audio controls className="w-full mb-4">
          <source src="/audio/village/vov-chapter-4.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
        <br />
        Chapter 5: The Sleepover
        <audio controls className="w-full mb-4">
          <source src="/audio/village/vov-chapter-5.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
        <br />
        Chapter 6: The Thought That Didn't Finish
        <audio controls className="w-full mb-4">
          <source src="/audio/village/vov-chapter-6.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
        <br />
        Chapter 7: Return to the Wind
        <audio controls className="w-full mb-4">
          <source src="/audio/village/vov-chapter-7.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
        <br />
        Chapter 8: The Tangle
        <audio controls className="w-full mb-4">
          <source src="/audio/village/vov-chapter-8.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
        <br />
        Chapter 9: The News
        <audio controls className="w-full mb-4">
          <source src="/audio/village/vov-chapter-9.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
        <br />
        Chapter 10: The Split
        <audio controls className="w-full mb-4">
          <source src="/audio/village/vov-chapter-10.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
        <br />
        Chapter 11: The Path Once Taken
        <br />
        Chapter 12: The Path Meant for Another
        <br />
        Chapter 13: Still Here
        <br />
        <audio controls className="w-full mb-4">
          <source src="/audio/village/vov-chapter-11.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
        <br />
        Chapter 14: A Mountain More Than You Can Chew
        <audio controls className="w-full mb-4">
          <source src="/audio/village/vov-chapter-14.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
        <br />
        Chapter 15: The Summit and the Shrine
        <audio controls className="w-full mb-4">
          <source src="/audio/village/vov-chapter-15.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
        <br />
        Chapter 16: The Village On Fire
        <audio controls className="w-full mb-4">
          <source src="/audio/village/vov-chapter-16.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
        <br />
        Chapter 17: Backdraft
        <br />
        Chapter 18: The End?
        <audio controls className="w-full mb-4">
          <source src="/audio/village/vov-chapter-17.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
        <br />
        <br />
        And a preview of the next book:
        <audio controls className="w-full mb-4">
          <source src="/audio/archive/preview.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </p>
      <a
        href="/"
        className="inline-block px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition"
      >
        🔙 Return Home
      </a>
    </motion.div>
  );
}
