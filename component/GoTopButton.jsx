"use client";
import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export default function GoTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function toggleVisibility() {
      setVisible(window.scrollY > 300);
    }

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  function scrollToTop() {
    const startPosition = window.scrollY;
    const startTime = performance.now();
    const duration = 1200;

    function animation(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Gradually slows down near the top
      const easeOut = 1 - Math.pow(1 - progress, 5);

      window.scrollTo(0, startPosition * (1 - easeOut));

      if (progress < 1) {
        requestAnimationFrame(animation);
      }
    }

    requestAnimationFrame(animation);
  }

  return (
    <>
      {visible && (
        <button
          onClick={scrollToTop}
          className="fixed cursor-pointer bottom-10 right-6 z-50 bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-800/90 transition-all"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </>
  );
}
