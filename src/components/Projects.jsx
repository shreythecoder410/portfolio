import { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  Dialog,
  DialogTitle,
  DialogContent,
  Chip,
  IconButton,
  Typography,
} from "@mui/material";
import {
  Github,
  ChevronLeft,
  ChevronRight,
  X,
  ExternalLink,
} from "lucide-react";

const projects = [
  {
    title: "EventHub – Online Event Management",
    short:
      "Full-stack MERN platform for event creation, registration, and admin monitoring.",
    description:
      "EventHub is a scalable MERN-based application focused on backend architecture. It includes role-based authentication, event creation, registrations, ticketing, and an admin dashboard. Strong emphasis on REST APIs, MongoDB aggregation, and secure authentication.",
    features: [
      "Role-based authentication for Admin, Organizer, and User using JWT",
      "Event creation, update, and management by organizers",
      "Event listing with date, location, pricing, and seat availability",
      "User event registration with seat limit validation",
      "Automatic digital e-ticket generation after registration",
      "RESTful API architecture with middleware-based authorization",
    ],
    tech: ["Node.js", "Express", "MongoDB", "JWT", "React", "React-Redux", "Material UI"],
    github: "https://github.com/shreythecoder410/Eventhub-management-system",
    live: "https://eventhub.vercel.app",
    images: [
      "/images/event-image1.jpg",
      "/images/event-image2.jpg",
      "/images/event-image3.jpg",
      "/images/event-image4.jpg",
    ],
  },
  {
    title: "Medibridge - Doctor Appointment System",
    short: "Backend-driven appointment booking with OTP email verification.",
    description:
      "Medibridge is a full-stack doctor appointment management system designed to simplify healthcare scheduling through a secure, role-based platform. The system allows patients to register, verify their accounts via email, and book appointments online, while doctors and administrators manage schedules, appointments, and users through dedicated dashboards.The application emphasizes secure authentication, efficient appointment workflows, and a clean user experience, built with a strong backend architecture using Node.js and MongoDB.",
    features: [
      "Email OTP-based user verification",
      "JWT authentication with role-based access (Admin / Doctor / Patient)",
      "Patient appointment booking & history",
      "Doctor dashboard for managing appointments",
      "Admin panel for monitoring users and appointments",
      "Secure password hashing with bcrypt",
      "Clean MVC-based backend structure",
    ],
    tech: ["Node.js", "Express", "MongoDB", "JWT", "bcrypt", "Nodemailer", "EJS", "HTML", "CSS", "Bootstrap"],
    github: "https://github.com/shreythecoder410/Doctor_Appointment_Backend-Medibridge",
    live: "https://doctor-app.vercel.app",
    images: [
      "/images/medibridge-image1.png",
      "/images/medibridge-image2.png",
      "/images/medibridge-image3.png",
      "/images/medibridge-image4.png",
    ],
  },
  {
    title: "Organia - E-commerce Grocery Store",
    short: "Organia is a lightweight React-based grocery platform with login, product categories, and cart functionality.",
    description:
      "Organia is a responsive online grocery store frontend application built with React. It focuses on clean UI design, smooth user experience, and component-based architecture for browsing products and managing a shopping flow.",
    features: [
      "User authentication (Login & Registration)",
      "Product listing with category filtering",
      "Product detail view",
      "Add to cart functionality",
      "Cart item quantity management",
      "Persistent cart state during session",
      "Responsive UI for desktop & mobile devices",
      "Reusable and modular React components",
      "Clean and minimal user interface",
    ],
    tech: ["React.js", "JavaScript(ES6)", "React Redux","Redux toolkit", "Material UI", "CSS"],
    github: "https://github.com/shreythecoder410/Organia-React-Frontend",
    live: "https://doctor-app.vercel.app",
    images: [
      "/images/organia-image1.png",
      "/images/organia-image2.png",
      "/images/organia-image3.png",
      "/images/organia-image4.png",
    ],
  },
];

export default function Projects() {
  const [open, setOpen] = useState(false);
  const [activeProject, setActiveProject] = useState(null);

  return (
    <section id="projects" className="py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">Featured Projects</h2>
        <p className="text-slate-400 text-center max-w-2xl mx-auto mb-16">
          Real-world applications showcasing backend engineering and full-stack integration.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              onOpen={() => {
                setActiveProject(project);
                setOpen(true);
              }}
            />
          ))}
        </div>
      </div>

      <Dialog open={open} onClose={() => setOpen(false)} maxWidth="md" fullWidth>
        {activeProject && (
          <>
            <DialogTitle className="flex justify-between items-center">
              <span className="text-blue-600 font-bold text-xl">
                {activeProject.title}
              </span>
              <IconButton onClick={() => setOpen(false)}>
                <X />
              </IconButton>
            </DialogTitle>

            <DialogContent>
              <Typography sx={{ mb: 3 }}>{activeProject.description}</Typography>

              <Typography fontWeight="bold" sx={{ mb: 1, color: "#2563eb" }}>
                Key Features
              </Typography>
              <ul className="list-disc pl-6 mb-4 text-slate-700">
                {activeProject.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>

              <Typography fontWeight="bold" sx={{ mb: 1, color: "#2563eb" }}>
                Tech Stack
              </Typography>
              <div className="flex flex-wrap gap-2">
                {activeProject.tech.map((t) => (
                  <Chip key={t} label={t} />
                ))}
              </div>
            </DialogContent>
          </>
        )}
      </Dialog>
    </section>
  );
}

function ProjectCard({ project, onOpen }) {
  const [index, setIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(1);
  const [showNext, setShowNext] = useState(false);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      triggerSlide((index + 1) % project.images.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [index, project.images.length]);

  const triggerSlide = (newIndex) => {
    setNextIndex(newIndex);
    setShowNext(true);

    setTimeout(() => {
      setIndex(newIndex);
      setShowNext(false);
    }, 600); // must match CSS duration
  };

  return (
    <Card
      elevation={0}
      onClick={onOpen}
      className="
        group cursor-pointer rounded-2xl
        border border-gray-200 bg-white
        transition-all duration-300
        hover:border-blue-500
        hover:shadow-[0_10px_35px_rgba(59,130,246,0.25)]
      "
      sx={{ maxWidth: 360, margin: "0 auto" }}
    >
      {/* IMAGE SLIDER */}
      <div className="relative h-44 overflow-hidden rounded-t-2xl">
        {/* CURRENT IMAGE */}
        {/* CURRENT IMAGE */}
        <img
          src={project.images[index]}
          alt={`${project.title} screenshot ${index + 1}`}
          className={`
    absolute inset-0 w-full h-full object-cover
    transition-opacity duration-600 ease-in-out
    ${showNext ? "opacity-0" : "opacity-100"}
  `}
        />

        {/* NEXT IMAGE (decorative during transition) */}
        <img
          src={project.images[nextIndex]}
          alt=""
          aria-hidden="true"
          className={`
    absolute inset-0 w-full h-full object-cover
    transition-opacity duration-600 ease-in-out
    ${showNext ? "opacity-100" : "opacity-0"}
  `}
        />


        {/* OVERLAY */}
        <div className="
          absolute inset-0
          bg-gradient-to-t from-black/80 via-black/40 to-transparent
          opacity-0 group-hover:opacity-100
          transition duration-300
          flex items-end p-4
        ">
          <p className="text-sm text-gray-200">
            {project.short}
            <span className="block text-xs text-blue-300 mt-1">
              Click to view details →
            </span>
          </p>
        </div>

        {/* CONTROLS */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            triggerSlide(
              (index - 1 + project.images.length) % project.images.length
            );
          }}
          className="absolute left-2 top-1/2 -translate-y-1/2
                     bg-black/60 p-1 rounded
                     opacity-0 group-hover:opacity-100 transition"
        >
          <ChevronLeft size={16} color="white" />
        </button>

        <button
          onClick={(e) => {
            e.stopPropagation();
            triggerSlide((index + 1) % project.images.length);
          }}
          className="absolute right-2 top-1/2 -translate-y-1/2
                     bg-black/60 p-1 rounded
                     opacity-0 group-hover:opacity-100 transition"
        >
          <ChevronRight size={16} color="white" />
        </button>
      </div>

      <CardContent>
        <h3 className="
          font-semibold text-lg mb-2
          text-gray-900
          transition-colors duration-300
          group-hover:text-blue-600
        ">
          {project.title}
        </h3>

        <div className="flex justify-between items-center">
          <div className="flex gap-2 flex-wrap">
            {project.tech.slice(0, 3).map((t) => (
              <span
                key={t}
                className="text-xs px-2 py-1 rounded bg-blue-50 text-blue-700"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="flex gap-1">
            <IconButton
              onClick={(e) => {
                e.stopPropagation();
                window.open(project.github, "_blank");
              }}
              sx={{ color: "#64748b", "&:hover": { color: "#2563eb" } }}
            >
              <Github size={18} />
            </IconButton>

            {project.live && (
              <IconButton
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(project.live, "_blank");
                }}
                sx={{ color: "#64748b", "&:hover": { color: "#2563eb" } }}
              >
                <ExternalLink size={18} />
              </IconButton>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

