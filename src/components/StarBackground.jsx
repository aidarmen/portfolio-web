import { useEffect, useState } from "react";

const auroraConfigs = [
  {
    colors: ["#a1ffce", "#faffd1"],
    top: "10%",
    left: "10%",
    width: "60vw",
    height: "30vh",
    blur: "80px",
    animation: "aurora1 12s ease-in-out infinite alternate",
    opacity: 0.6,
  },
  {
    colors: ["#fbc2eb", "#a6c1ee"],
    top: "30%",
    left: "40%",
    width: "50vw",
    height: "25vh",
    blur: "100px",
    animation: "aurora2 14s ease-in-out infinite alternate",
    opacity: 0.5,
  },
  {
    colors: ["#89f7fe", "#66a6ff"],
    top: "50%",
    left: "20%",
    width: "70vw",
    height: "35vh",
    blur: "120px",
    animation: "aurora3 16s ease-in-out infinite alternate",
    opacity: 0.4,
  },
];

export const StarBackground = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check if the 'dark' class is present on <html>
    const checkDark = () => {
      setIsDark(document.documentElement.classList.contains("dark"));
    };
    checkDark();
    // Listen for class changes (e.g., theme toggle)
    const observer = new MutationObserver(checkDark);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  if (!isDark) return null;

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {auroraConfigs.map((cfg, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            top: cfg.top,
            left: cfg.left,
            width: cfg.width,
            height: cfg.height,
            opacity: cfg.opacity,
            background: `linear-gradient(120deg, ${cfg.colors[0]}, ${cfg.colors[1]})`,
            filter: `blur(${cfg.blur})`,
            borderRadius: "50%",
            animation: cfg.animation,
            zIndex: 0,
            pointerEvents: "none",
            mixBlendMode: "screen",
          }}
        />
      ))}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(ellipse at bottom, rgba(10,20,40,0.7) 60%, transparent 100%)",
          zIndex: 1,
        }}
      />
    </div>
  );
};