import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

interface Chapter {
  id: string;
  threshold: number;
  name: string;
}

interface StoryScrollTrackerProps {
  storyTitle: string;
  chapters?: Chapter[];
  donateUrl?: string;
  showProgressBar?: boolean;
}

export default function StoryScrollTracker({
  storyTitle,
  chapters = [],
  donateUrl = "https://thrd.me/tip",
  showProgressBar = true,
}: StoryScrollTrackerProps) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [milestonesReached, setMilestonesReached] = useState(new Set<string>());
  const [badges, setBadges] = useState<string[]>([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("earned-badges");
      if (saved) {
        setBadges(JSON.parse(saved));
      }
    }
  }, []);
  const { scrollYProgress } = useScroll();

  // Transform scroll progress to opacity for donate button (fades in at 50%)
  const donateOpacity = useTransform(scrollYProgress, [0.4, 0.6], [0, 1]);
  const donateScale = useTransform(scrollYProgress, [0.4, 0.6], [0.8, 1]);
const removeBadge = (badgeToRemove: string) => {
  const updated = badges.filter((b) => b !== badgeToRemove);
  setBadges(updated);
  if (typeof window !== "undefined") {
    localStorage.setItem("earned-badges", JSON.stringify(updated));
  }
};
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = Math.min(scrollTop / docHeight, 1);
      setScrollProgress(progress);

      // Track chapter milestones
      chapters.forEach((chapter) => {
        if (
          progress >= chapter.threshold &&
          !milestonesReached.has(chapter.id)
        ) {
          setMilestonesReached((prev) => new Set([...prev, chapter.id]));

          // Fire GTM event for chapter progress
          if (typeof window !== "undefined" && window.dataLayer) {
            window.dataLayer.push({
              event: "story_progress",
              story_title: storyTitle,
              chapter_id: chapter.id,
              chapter_name: chapter.name,
              scroll_progress: Math.round(progress * 100),
              progress_milestone: `${Math.round(chapter.threshold * 100)}%`,
            });
          }
        }
      });

      // Track major reading milestones
      const readingMilestones = [25, 50, 75, 90, 100];
      readingMilestones.forEach((milestone) => {
        const key = `reading-${milestone}`;
        if (progress >= milestone / 100 && !milestonesReached.has(key)) {
          setMilestonesReached((prev) => new Set([...prev, key]));

          if (typeof window !== "undefined" && window.dataLayer) {
            window.dataLayer.push({
              event: "reading_milestone",
              story_title: storyTitle,
              milestone_percent: milestone,
              scroll_progress: Math.round(progress * 100),
              engagement_level:
                milestone >= 75 ? "high" : milestone >= 50 ? "medium" : "low",
            });
          }
        }
      });

      // Track time spent reading (fire every 30 seconds)
      const timeKey = `time-${Math.floor(Date.now() / 30000)}`;
      if (!milestonesReached.has(timeKey)) {
        setMilestonesReached((prev) => new Set([...prev, timeKey]));

        if (typeof window !== "undefined" && window.dataLayer) {
          window.dataLayer.push({
            event: "reading_time",
            story_title: storyTitle,
            scroll_progress: Math.round(progress * 100),
            time_interval: "30s",
          });
        }
      }

      if (progress >= 0.98 && !milestonesReached.has("badge-sent")) {
        setMilestonesReached((prev) => new Set([...prev, "badge-sent"]));

        if (typeof window !== "undefined" && window.dataLayer) {
          window.dataLayer.push({
            event: "story_completed",
            story_title: storyTitle,
            scroll_progress: 100,
          });
          const storyKey =
            window.location.href
              .split("/")
              .at(-1)
              ?.replace(/\?(.*)/gi, "") ||
            window.location.href
              .split("/")
              .at(-2)
              ?.replace(/\?(.*)/gi, "") ||
            "";

          if (!badges.includes(storyKey)) {
            const updated = [...badges, storyKey];
            setBadges(updated);
            localStorage.setItem("earned-badges", JSON.stringify(updated));
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [milestonesReached, chapters, storyTitle]);

  const handleDonateClick = () => {
    if (typeof window !== "undefined" && window.dataLayer) {
      window.dataLayer.push({
        event: "donate_click",
        story_title: storyTitle,
        scroll_progress: Math.round(scrollProgress * 100),
        donate_trigger: "floating_button",
        engagement_level:
          scrollProgress >= 0.75
            ? "high"
            : scrollProgress >= 0.5
            ? "medium"
            : "low",
      });
    }
  };

  return (
    <>
      <motion.div
        className="fixed bottom-6 left-1/2 -translate-x-1/2 flex gap-3 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: badges.length > 0 ? 1 : 0 }}
      >
        {badges.map((badge) => (
          <div
            key={badge}
            className="relative group" // group enables hover state for children
          >
            <motion.img
              src={`/badges/${badge}.png`}
              alt={`${badge} badge`}
              className="w-10 h-10 rounded-full border-2 border-gray-300"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.95 }}
            />

            {/* X Button (hidden until hover) */}
            <button
              onClick={() => removeBadge(badge)}
              className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
            >
              ✕
            </button>
          </div>
        ))}
      </motion.div>
      {/* Progress Bar */}
      {showProgressBar && (
        <motion.div
          className="fixed top-0 left-0 h-1 bg-gradient-to-r from-purple-600 to-blue-600 z-50"
          style={{
            width: `${scrollProgress * 100}%`,
            transition: "width 0.1s ease-out",
          }}
        />
      )}

      {/* Floating Donate Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-40"
        style={{
          opacity: donateOpacity,
          scale: donateScale,
        }}
      >
        <motion.a
          href={donateUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleDonateClick}
          className="flex items-center gap-2 bg-[#13C3FF] hover:bg-[#0FA6CC] text-white font-medium px-4 py-3 rounded-full shadow-lg transition-colors duration-200"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <img
            src="https://storage.ko-fi.com/cdn/logomarkLogo.png"
            alt="Ko-fi"
            className="w-5 h-5"
          />
          <span className="hidden sm:inline">Fuel More Stories</span>
        </motion.a>
      </motion.div>

      {/* Reading Progress Indicator (optional) */}
      <motion.div
        className="fixed bottom-6 left-6 z-40 bg-black/80 text-white px-3 py-1 rounded-full text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: scrollProgress > 0.1 ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {Math.round(scrollProgress * 100)}%
      </motion.div>
    </>
  );
}
