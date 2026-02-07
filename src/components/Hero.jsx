import { Button, IconButton } from "@mui/material";
import { useEffect, useState } from "react";
import { Brightness4, Brightness7 } from "@mui/icons-material";

const roles = [
  "MERN Stack Developer",
  "Backend Developer",
  "Frontend Developer",
];

export default function Hero() {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [darkMode, setDarkMode] = useState(true);

  // Typewriter effect
  useEffect(() => {
    const currentRole = roles[roleIndex];
    if (charIndex < currentRole.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + currentRole[charIndex]);
        setCharIndex(charIndex + 1);
      }, 80);
      return () => clearTimeout(timeout);
    } else {
      setTimeout(() => {
        setText("");
        setCharIndex(0);
        setRoleIndex((roleIndex + 1) % roles.length);
      }, 1500);
    }
  }, [charIndex, roleIndex]);

  return (
    <section
      className={`relative min-h-screen flex items-center justify-center px-6 overflow-hidden transition-colors duration-500 ${
        darkMode ? "text-white" : "text-gray-900"
      }`}
    >
      {/* Animated Gradient Background */}
      <div
        className={`absolute inset-0 animate-gradient ${
          darkMode
            ? "bg-gradient-to-br from-[#0f172a] via-[#020617] to-[#020617]"
            : "bg-gradient-to-br from-[#f8fafc] via-[#e2e8f0] to-[#f1f5f9]"
        }`}
      />

      {/* Overlay */}
      <div
        className={`absolute inset-0 ${
          darkMode ? "bg-black/40" : "bg-white/60"
        }`}
      />

      {/* Theme Toggle */}
      <div className="absolute top-6 right-6 z-20">
        <IconButton onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? <Brightness7 /> : <Brightness4 />}
        </IconButton>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl text-center">
        <span className="text-sm uppercase tracking-widest text-blue-400">
           MERN Stack Developer (Fresher)
        </span>

        <h1 className="text-4xl md:text-6xl font-bold mt-4">
          Shreyasee Pal
        </h1>

        {/* Typewriter Role */}
        <h2 className="text-xl md:text-2xl mt-4 h-8">
          {text}
          <span className="border-r-2 border-blue-400 ml-1 animate-pulse" />
        </h2>

        <p
          className={`mt-6 leading-relaxed max-w-2xl mx-auto ${
            darkMode ? "text-gray-300" : "text-gray-700"
          }`}
        >
          Full-Stack Developer with a strong backend focus, experienced in building secure REST APIs, authentication systems, and scalable server-side architectures using Node.js, Express.js, and MongoDB, along with developing responsive user interfaces using React.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex justify-center gap-4 flex-wrap">
          <Button
            variant="contained"
            href="#projects"
            sx={{
              backgroundColor: "#2563eb",
              px: 4,
              py: 1.5,
              textTransform: "none",
              "&:hover": {
                backgroundColor: "#1d4ed8",
                transform: "translateY(-2px)",
              },
            }}
          >
            View Projects
          </Button>

          <Button
            variant="outlined"
            href="/Shreyasee-Pal-Resume.pdf"
            target="_blank"
            sx={{
              borderColor: "#60a5fa",
              color: "#60a5fa",
              px: 4,
              py: 1.5,
              textTransform: "none",
              "&:hover": {
                backgroundColor: "#60a5fa",
                color: "#000",
              },
            }}
          >
            Download Resume
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-16 flex flex-col items-center animate-bounce opacity-70">
          <span className="text-sm">Scroll</span>
          <span className="text-2xl">↓</span>
        </div>
      </div>

      {/* Gradient Animation */}
      <style>
        {`
          @keyframes gradient {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          .animate-gradient {
            background-size: 250% 250%;
            animation: gradient 14s ease infinite;
          }
        `}
      </style>
    </section>
  );
}
