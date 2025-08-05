import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Main TextSelectionSharing component
export const TextSelectionSharing = ({
  children,
  storyTitle = "A Kitten Named Kippen",
  author = "Juno Threadborne",
  minSelectionLength = 10,
  platforms = ["twitter", "linkedin", "facebook", "copy"],
  onShare = null,
  className = "",
  disabled = false,
}) => {
  const [contextMenu, setContextMenu] = useState({
    visible: false,
    x: 0,
    y: 0,
    selectedText: "",
    selection: null,
  });

  const [toast, setToast] = useState({ visible: false, message: "" });
  const contextMenuRef = useRef(null);
  const debounceTimer = useRef(null);
  const containerRef = useRef(null);

  // Handle text selection
  const handleSelection = useCallback(
    (event) => {
      if (disabled) return;

      clearTimeout(debounceTimer.current);
      debounceTimer.current = setTimeout(() => {
        const selection = window.getSelection();
        const selectedText = selection.toString().trim();

        // Check if selection is within our container
        const range = selection.rangeCount > 0 ? selection.getRangeAt(0) : null;
        const isWithinContainer =
          range &&
          containerRef.current &&
          containerRef.current.contains(range.commonAncestorContainer);

        if (selectedText.length >= minSelectionLength && isWithinContainer) {
          const rect = range.getBoundingClientRect();
          const menuWidth = 320;
          const menuHeight = 60;

          // Position menu above or below selection
          let top = rect.top - menuHeight - 10;
          let left = rect.left + rect.width / 2 - menuWidth / 2;

          // Adjust for viewport boundaries
          if (top < 10) {
            top = rect.bottom + 10;
          }
          if (left < 10) {
            left = 10;
          } else if (left + menuWidth > window.innerWidth - 10) {
            left = window.innerWidth - menuWidth - 10;
          }

          setContextMenu({
            visible: true,
            x: left,
            y: top + window.scrollY,
            selectedText,
            selection,
          });

          // Track selection for analytics
          if (typeof window !== "undefined" && window.dataLayer) {
            window.dataLayer.push({
              event: "text_selected",
              story_title: storyTitle,
              selection_length: selectedText.length,
              selection_preview:
                selectedText.substring(0, 50) +
                (selectedText.length > 50 ? "..." : ""),
            });
          }
        } else {
          setContextMenu((prev) => ({ ...prev, visible: false }));
        }
      }, 150);
    },
    [disabled, minSelectionLength, storyTitle]
  );

  // Handle clicks outside menu
  const handleClickOutside = useCallback((event) => {
    if (
      contextMenuRef.current &&
      !contextMenuRef.current.contains(event.target)
    ) {
      setContextMenu((prev) => ({ ...prev, visible: false }));
    }
  }, []);

  // Handle scroll to hide menu
  const handleScroll = useCallback(() => {
    setContextMenu((prev) => ({ ...prev, visible: false }));
  }, []);

  // Handle keyboard selection
  const handleKeyUp = useCallback(
    (event) => {
      if (disabled) return;

      // Handle keyboard selections (Shift+Arrow, Ctrl+A, etc.)
      if (event.shiftKey || event.ctrlKey || event.metaKey) {
        setTimeout(() => handleSelection(event), 100);
      }
    },
    [disabled, handleSelection]
  );

  // Set up event listeners
  useEffect(() => {
    const options = { passive: true };

    document.addEventListener("mouseup", handleSelection, options);
    document.addEventListener("touchend", handleSelection, options);
    document.addEventListener("keyup", handleKeyUp);
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("scroll", handleScroll, options);

    return () => {
      document.removeEventListener("mouseup", handleSelection);
      document.removeEventListener("touchend", handleSelection);
      document.removeEventListener("keyup", handleKeyUp);
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("scroll", handleScroll);
      clearTimeout(debounceTimer.current);
    };
  }, [handleSelection, handleKeyUp, handleClickOutside, handleScroll]);

  // Format quote for sharing
  const formatQuote = (text, platform) => {
    const maxLength = platform === "twitter" ? 200 : 300;
    let formattedText =
      text.length > maxLength ? text.substring(0, maxLength - 3) + "..." : text;

    return `"${formattedText}" — ${storyTitle} by ${author}`;
  };

  // Show toast notification
  const showToast = (message) => {
    setToast({ visible: true, message });
    setTimeout(() => setToast({ visible: false, message: "" }), 3000);
  };

  // Share handlers
  const shareToTwitter = (quote) => {
    const url = window.location.href;
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      quote
    )}&url=${encodeURIComponent(url)}`;
    openShareWindow(twitterUrl, "twitter");
  };

  const shareToLinkedIn = (quote) => {
    const url = window.location.href;
    const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
      url
    )}&summary=${encodeURIComponent(quote)}`;
    openShareWindow(linkedInUrl, "linkedin");
  };

  const shareToFacebook = (quote) => {
    const url = window.location.href;
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      url
    )}&quote=${encodeURIComponent(quote)}`;
    openShareWindow(facebookUrl, "facebook");
  };

  const copyToClipboard = async (quote) => {
    try {
      await navigator.clipboard.writeText(quote);
      showToast("Quote copied to clipboard! 📋");
    } catch (err) {
      // Fallback for older browsers
      const textArea = document.createElement("textarea");
      textArea.value = quote;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      showToast("Quote copied to clipboard! 📋");
    }
  };

  const openShareWindow = (url, platform) => {
    const width = 600;
    const height = 400;
    const left = (window.innerWidth - width) / 2;
    const top = (window.innerHeight - height) / 2;

    window.open(
      url,
      "share-window",
      `width=${width},height=${height},left=${left},top=${top},scrollbars=yes,resizable=yes`
    );
  };

  // Handle share button click
  const handleShare = (platform) => {
    const { selectedText } = contextMenu;
    const quote = formatQuote(selectedText, platform);

    // Track sharing
    if (typeof window !== "undefined" && window.dataLayer) {
      window.dataLayer.push({
        event: "text_shared",
        story_title: storyTitle,
        platform: platform,
        selection_length: selectedText.length,
        share_type: "text_selection",
      });
    }

    // Call custom onShare handler if provided
    if (onShare) {
      onShare({
        platform,
        text: selectedText,
        quote,
        storyTitle,
        author,
      });
    }

    switch (platform) {
      case "twitter":
        shareToTwitter(quote);
        break;
      case "linkedin":
        shareToLinkedIn(quote);
        break;
      case "facebook":
        shareToFacebook(quote);
        break;
      case "copy":
        copyToClipboard(quote);
        break;
    }

    setContextMenu((prev) => ({ ...prev, visible: false }));
  };

  // Platform configurations
  const platformConfig = {
    twitter: {
      label: "Tweet",
      icon: "🐦",
      bgColor: "hover:bg-blue-500",
      textColor: "hover:text-white",
    },
    linkedin: {
      label: "Share",
      icon: "💼",
      bgColor: "hover:bg-blue-600",
      textColor: "hover:text-white",
    },
    facebook: {
      label: "Share",
      icon: "👥",
      bgColor: "hover:bg-blue-700",
      textColor: "hover:text-white",
    },
    copy: {
      label: "Copy",
      icon: "📋",
      bgColor: "hover:bg-gray-600",
      textColor: "hover:text-white",
    },
  };

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      {children}

      {/* Context Menu */}
      <AnimatePresence>
        {contextMenu.visible && (
          <motion.div
            ref={contextMenuRef}
            initial={{ opacity: 0, scale: 0.9, y: -5 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: -5 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="fixed z-50 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 p-2"
            style={{
              left: `${contextMenu.x}px`,
              top: `${contextMenu.y}px`,
            }}
          >
            <div className="flex gap-1">
              {platforms.map((platform) => {
                const config = platformConfig[platform];
                if (!config) return null;

                return (
                  <button
                    key={platform}
                    onClick={() => handleShare(platform)}
                    className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${config.bgColor} ${config.textColor} hover:scale-105 active:scale-95`}
                    title={`${config.label} this quote`}
                  >
                    <span className="text-base">{config.icon}</span>
                    <span className="hidden sm:inline">{config.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Preview of selected text */}
            <div className="mt-2 px-2 py-1 bg-gray-50 dark:bg-gray-700 rounded text-xs text-gray-600 dark:text-gray-300 max-w-xs truncate">
              "{contextMenu.selectedText.substring(0, 60)}
              {contextMenu.selectedText.length > 60 ? "..." : ""}"
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toast */}
      <AnimatePresence>
        {toast.visible && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="fixed bottom-4 right-4 z-50 bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg font-medium"
          >
            {toast.message}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
