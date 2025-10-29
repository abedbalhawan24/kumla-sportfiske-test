import { useState, useEffect } from "react";
import "./BackToTop.css"; // CSS-fil vi skapar här nedan

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  // Lyssna på scroll
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) setVisible(true);
      else setVisible(false);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Scrolla till toppen
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className={`back-to-top ${visible ? "show" : ""}`}
      onClick={scrollToTop}
      aria-label="Back to top"
    >
      ↑
    </button>
  );
}
