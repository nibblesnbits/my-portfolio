import { useState, useEffect } from "react";

export default function FontSizeAdjuster() {
  const [fontSize, setFontSize] = useState<number>(100);
  const [isOpen, setIsOpen] = useState(false);

  // Base font sizes in rem
  const baseSizes = {
    ".chapter-title": 2.5,
    ".section-title": 1.875,
    ".subsection-title": 1.5,
    ".story-text": 1.125,
    ".story-callout": 1,
    ".audiobook-title": 1.125,
  };

  // Load saved font size on mount
  useEffect(() => {
    const saved = localStorage.getItem("book-font-size");
    if (saved) {
      const size = parseInt(saved);
      setFontSize(size);
      updateFontSize(size);
    }
  }, []);

  const updateFontSize = (size: number) => {
    const scale = size / 100;

    // Apply font sizes directly to elements
    Object.entries(baseSizes).forEach(([selector, baseSize]) => {
      const elements = document.querySelectorAll(selector);
      elements.forEach((element) => {
        (element as HTMLElement).style.fontSize = `${baseSize * scale}rem`;
      });
    });

    localStorage.setItem("book-font-size", size.toString());
  };

  const adjustFont = (direction: "up" | "down" | "reset") => {
    let newSize = fontSize;

    if (direction === "up" && fontSize < 150) {
      newSize = fontSize + 10;
    } else if (direction === "down" && fontSize > 70) {
      newSize = fontSize - 10;
    } else if (direction === "reset") {
      newSize = 100;
    }

    setFontSize(newSize);
    updateFontSize(newSize);
  };

  return (
    <div className="fixed top-4 right-4 z-50">
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-12 h-12 rounded-full bg-card border border-border shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center text-lg hover:bg-accent group"
        aria-label="Adjust font size"
      >
        <span className="group-hover:scale-110 transition-transform">Aa</span>
      </button>

      {/* Controls Panel */}
      {isOpen && (
        <div className="absolute top-16 right-0 bg-card border border-border rounded-lg shadow-xl p-3 min-w-[160px] animate-in slide-in-from-top-2 duration-200">
          <div className="text-xs text-muted-foreground mb-2 text-center">
            Font Size: {fontSize}%
          </div>

          <div className="flex items-center gap-2">
            {/* Decrease */}
            <button
              onClick={() => adjustFont("down")}
              disabled={fontSize <= 70}
              className="w-8 h-8 rounded flex items-center justify-center bg-secondary hover:bg-accent disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              aria-label="Decrease font size"
            >
              <span className="text-sm">A</span>
            </button>

            {/* Reset */}
            <button
              onClick={() => adjustFont("reset")}
              className="px-3 h-8 rounded text-xs bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
            >
              Reset
            </button>

            {/* Increase */}
            <button
              onClick={() => adjustFont("up")}
              disabled={fontSize >= 150}
              className="w-8 h-8 rounded flex items-center justify-center bg-secondary hover:bg-accent disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              aria-label="Increase font size"
            >
              <span className="text-lg">A</span>
            </button>
          </div>
        </div>
      )}

      {/* Click outside to close */}
      {isOpen && (
        <div className="fixed inset-0 -z-10" onClick={() => setIsOpen(false)} />
      )}
    </div>
  );
}
