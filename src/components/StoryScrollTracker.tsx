import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { useEffect, useState, useCallback, useRef } from "react";

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
  // New props for resume functionality
  resumeThreshold?: number; // Minimum scroll % to save position (default: 5%)
  debounceMs?: number; // Debounce delay for saving (default: 500ms)
}

interface SavedPosition {
  scrollY: number;
  scrollProgress: number;
  timestamp: number;
  storyTitle: string;
}

interface ResumeModalProps {
  isOpen: boolean;
  onResume: () => void;
  onDismiss: () => void;
  scrollProgress: number;
  storyTitle: string;
}

function ResumeModal({
  isOpen,
  onResume,
  onDismiss,
  scrollProgress,
  storyTitle,
}: ResumeModalProps) {
  if (!isOpen) return null;

  const formatTimeAgo = (timestamp: number) => {
    const now = Date.now();
    const diff = now - timestamp;
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(diff / 3600000);
    const days = Math.floor(diff / 86400000);

    if (days > 0) return `${days} day${days > 1 ? "s" : ""} ago`;
    if (hours > 0) return `${hours} hour${hours > 1 ? "s" : ""} ago`;
    if (minutes > 0) return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
    return "just now";
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100] flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onDismiss}
      >
        <motion.div
          className="bg-white rounded-xl shadow-2xl max-w-md w-full p-6"
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          transition={{ type: "spring", duration: 0.3 }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Welcome back!</h3>
              <p className="text-sm text-gray-600">
                Continue reading where you left off
              </p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-700">
                Progress in "{storyTitle}"
              </span>
              <span className="text-sm font-bold text-purple-600">
                {Math.round(scrollProgress * 100)}%
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <motion.div
                className="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${scrollProgress * 100}%` }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />
            </div>
          </div>

          <div className="flex gap-3">
            <button
              onClick={onDismiss}
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors font-medium"
            >
              Start Over
            </button>
            <button
              onClick={onResume}
              className="flex-1 px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition-colors font-medium"
            >
              Continue Reading
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function StoryScrollTracker({
  storyTitle,
  chapters = [],
  donateUrl = "https://thrd.me/tip",
  showProgressBar = true,
  resumeThreshold = 0.05, // 5% minimum to save
  debounceMs = 500,
}: StoryScrollTrackerProps) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [milestonesReached, setMilestonesReached] = useState(new Set<string>());
  const [badges, setBadges] = useState<string[]>([]);
  const [mouseX, setMouseX] = useState<number | null>(null);
  const [showResumeModal, setShowResumeModal] = useState(false);
  const [savedPosition, setSavedPosition] = useState<SavedPosition | null>(
    null
  );

  // Refs for debouncing and cleanup
  const savePositionTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const hasCheckedForSavedPosition = useRef(false);

  // Generate a unique key for this story's saved position
  const getStorageKey = useCallback(() => {
    const urlPath =
      typeof window !== "undefined"
        ? window.location.pathname.replace(/\/$/, "")
        : "";
    return `story-position-${btoa(urlPath + storyTitle).replace(
      /[^a-zA-Z0-9]/g,
      ""
    )}`;
  }, [storyTitle]);

  // Load saved position on mount
  useEffect(() => {
    if (typeof window === "undefined" || hasCheckedForSavedPosition.current)
      return;

    hasCheckedForSavedPosition.current = true;

    try {
      const saved = localStorage.getItem(getStorageKey());
      if (saved) {
        const position: SavedPosition = JSON.parse(saved);

        // Validate the saved position is for the same story and not too old (7 days)
        const isValidPosition =
          position.storyTitle === storyTitle &&
          position.scrollProgress >= resumeThreshold &&
          position.scrollProgress < 0.95 && // Don't resume if nearly finished
          Date.now() - position.timestamp < 7 * 24 * 60 * 60 * 1000; // 7 days

        if (isValidPosition) {
          setSavedPosition(position);
          setShowResumeModal(true);
        }
      }
    } catch (error) {
      console.warn("Failed to load saved reading position:", error);
      // Clean up corrupted data
      localStorage.removeItem(getStorageKey());
    }
  }, [storyTitle, getStorageKey, resumeThreshold]);

  // Load badges on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        const saved = localStorage.getItem("earned-badges");
        if (saved) {
          setBadges(JSON.parse(saved));
        }
      } catch (error) {
        console.warn("Failed to load badges:", error);
        localStorage.removeItem("earned-badges");
      }
    }
  }, []);

  const { scrollYProgress } = useScroll();
  const donateOpacity = useTransform(scrollYProgress, [0.4, 0.6], [0, 1]);
  const donateScale = useTransform(scrollYProgress, [0.4, 0.6], [0.8, 1]);

  // Debounced function to save scroll position
  const saveScrollPosition = useCallback(
    (progress: number, scrollY: number) => {
      if (typeof window === "undefined" || progress < resumeThreshold) return;

      // Clear existing timeout
      if (savePositionTimeoutRef.current) {
        clearTimeout(savePositionTimeoutRef.current);
      }

      // Set new timeout
      savePositionTimeoutRef.current = setTimeout(() => {
        try {
          const position: SavedPosition = {
            scrollY,
            scrollProgress: progress,
            timestamp: Date.now(),
            storyTitle,
          };
          localStorage.setItem(getStorageKey(), JSON.stringify(position));
        } catch (error) {
          console.warn("Failed to save reading position:", error);
        }
      }, debounceMs);
    },
    [resumeThreshold, debounceMs, storyTitle, getStorageKey]
  );

  // Resume reading function
  const handleResumeReading = useCallback(() => {
    if (!savedPosition) return;

    setShowResumeModal(false);

    // Smooth scroll to saved position
    window.scrollTo({
      top: savedPosition.scrollY,
      behavior: "smooth",
    });

    // Track resume action
    if (typeof window !== "undefined" && window.dataLayer) {
      window.dataLayer.push({
        event: "reading_resumed",
        story_title: storyTitle,
        resumed_progress: Math.round(savedPosition.scrollProgress * 100),
        time_since_last_read: Date.now() - savedPosition.timestamp,
      });
    }
  }, [savedPosition, storyTitle]);

  const handleDismissResume = useCallback(() => {
    setShowResumeModal(false);

    // Clear saved position since user chose to start over
    if (typeof window !== "undefined") {
      localStorage.removeItem(getStorageKey());
    }

    // Track dismissal
    if (typeof window !== "undefined" && window.dataLayer) {
      window.dataLayer.push({
        event: "reading_resume_dismissed",
        story_title: storyTitle,
        dismissed_progress: savedPosition
          ? Math.round(savedPosition.scrollProgress * 100)
          : 0,
      });
    }
  }, [getStorageKey, storyTitle, savedPosition]);

  const removeBadge = (badgeToRemove: string) => {
    const updated = badges.filter((b) => b !== badgeToRemove);
    setBadges(updated);
    if (typeof window !== "undefined") {
      try {
        localStorage.setItem("earned-badges", JSON.stringify(updated));
      } catch (error) {
        console.warn("Failed to save badges:", error);
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = Math.min(scrollTop / docHeight, 1);
      setScrollProgress(progress);

      // Save scroll position (debounced)
      saveScrollPosition(progress, scrollTop);

      // Existing chapter tracking logic
      chapters.forEach((chapter) => {
        if (
          progress >= chapter.threshold &&
          !milestonesReached.has(chapter.id)
        ) {
          setMilestonesReached((prev) => new Set([...prev, chapter.id]));

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

      // Existing milestone tracking logic
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

      // Existing time tracking logic
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

      // Existing completion logic with position cleanup
      if (progress >= 0.98 && !milestonesReached.has("badge-sent")) {
        setMilestonesReached((prev) => new Set([...prev, "badge-sent"]));

        // Clean up saved position since story is completed
        if (typeof window !== "undefined") {
          localStorage.removeItem(getStorageKey());
        }

        if (typeof window !== "undefined" && window.dataLayer) {
          window.dataLayer.push({
            event: "story_completed",
            story_title: storyTitle,
            scroll_progress: 100,
          });

          const storyKey =
            window.location.href
              .replace(/([\?\#].*)/, "")
              .split("/")
              .at(-1) ||
            window.location.href
              .replace(/([\?\#].*)/, "")
              .split("/")
              .at(-2) ||
            "";

          if (!badges.includes(storyKey)) {
            const updated = [...badges, storyKey];
            setBadges(updated);
            try {
              localStorage.setItem("earned-badges", JSON.stringify(updated));
            } catch (error) {
              console.warn("Failed to save badges:", error);
            }
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      // Clear any pending save operations
      if (savePositionTimeoutRef.current) {
        clearTimeout(savePositionTimeoutRef.current);
      }
    };
  }, [
    milestonesReached,
    chapters,
    storyTitle,
    badges,
    saveScrollPosition,
    getStorageKey,
  ]);

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
      {/* Resume Reading Modal */}
      <ResumeModal
        isOpen={showResumeModal}
        onResume={handleResumeReading}
        onDismiss={handleDismissResume}
        scrollProgress={savedPosition?.scrollProgress || 0}
        storyTitle={storyTitle}
      />

      {/* Floating Badge Dock */}
      <motion.div
        className="fixed bottom-6 left-1/2 -translate-x-1/2 flex bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: badges.length > 0 ? 1 : 0 }}
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          setMouseX(e.clientX - rect.left);
        }}
        onMouseLeave={() => setMouseX(null)}
      >
        {badges.map((badge, i) => {
          const baseWidth = 40;
          const centerX = i * (baseWidth + 12) + baseWidth / 2;
          let scale = 1;

          if (mouseX !== null) {
            const distance = Math.abs(mouseX - centerX);
            scale = Math.max(1, 2 - distance / 80);
          }

          return (
            <motion.div
              key={badge}
              className="relative group cursor-pointer flex items-center justify-center"
              animate={{ scale }}
              style={{
                marginLeft: i === 0 ? 0 : 8 * scale,
                marginRight: i === badges.length - 1 ? 0 : 8 * scale,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <motion.img
                src={`/badges/${badge}.png`}
                alt={`${badge} badge`}
                className="w-10 h-10 rounded-full border-2 border-gray-300"
                onClick={() => {
                  if (typeof window !== "undefined") {
                    window.location.href = `/story/${badge}`;
                  }
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              />
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  removeBadge(badge);
                }}
                className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
              >
                ✕
              </button>
            </motion.div>
          );
        })}
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
        className="fixed bottom-6 right-30 z-40"
        style={{ opacity: donateOpacity, scale: donateScale }}
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

      {/* Reading Progress Indicator */}
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
