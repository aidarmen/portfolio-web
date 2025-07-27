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
      {/* {auroraConfigs.map((cfg, i) => ( */}
        <div
          //key={i}
          className="absolute inset-0 z-0"
          style={{
            background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(99, 102, 241, 0.25), transparent 70%), #000000",
          }}
        />
      {/* ))} */}
      <div
      className="absolute inset-0 z-0"
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(ellipse at bottom, rgba(10,20,40,0.7) 60%, transparent 100%)",
          backgroundImage: `
            radial-gradient(circle at 1px 1px, rgba(139, 92, 246, 0.2) 1px, transparent 0),
            radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.18) 1px, transparent 0),
            radial-gradient(circle at 1px 1px, rgba(236, 72, 153, 0.15) 1px, transparent 0)
          `,
          backgroundSize: "20px 20px, 30px 30px, 25px 25px",
          backgroundPosition: "0 0, 10px 10px, 15px 5px",
          zIndex: 1,
        }}
      />
    </div>
  );
};