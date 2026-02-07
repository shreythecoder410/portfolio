import { Card, CardContent, Typography, Chip } from "@mui/material";

export default function About() {
  return (
    <section
      id="about"
      className="py-24 px-6 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
       {/* LEFT: PREMIUM PROFILE IMAGE */}
<div className="flex justify-center">
  <div className="relative group">

    {/* Gradient Glow */}
    <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500 via-indigo-500 to-purple-500 opacity-40 blur-xl group-hover:opacity-70 transition duration-500" />

    {/* Gradient Ring */}
    <div className="relative p-1 rounded-full bg-gradient-to-tr from-blue-600 via-indigo-600 to-purple-600">
      
      {/* Image Container */}
      <div className="w-60 h-60 rounded-full overflow-hidden bg-white shadow-xl transform transition duration-500 group-hover:scale-105">
        <img
          src="images/profile-image.jpeg"
          alt="Shreyasee Pal"
          className="w-full h-full object-cover"
        />
      </div>
    </div>

    {/* Label */}
    <div className="mt-4 text-center">
      <span className="inline-block px-4 py-1 text-sm font-medium rounded-full bg-blue-50 text-blue-600">
         Full Stack Developer
      </span>
    </div>

  </div>
</div>


        {/* RIGHT: ABOUT CONTENT */}
        <Card
          elevation={0}
          className="rounded-2xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
          sx={{
            border: "1px solid rgba(0,0,0,0.06)",
          }}
        >
          <CardContent className="p-8">
            <Typography variant="h4" fontWeight="bold" gutterBottom>
              About Me
            </Typography>

            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ lineHeight: 1.8, mb: 2 }}
            >
              I am a <strong>Full Stack MERN Developer</strong>{" "}
              with hands-on experience in building real-world web applications.
              My primary strength lies in developing secure REST APIs,
              handling databases, and implementing authentication and
              authorization systems.
            </Typography>

            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ lineHeight: 1.8, mb: 2 }}
            >
              I also have working knowledge of frontend technologies like{" "}
              <strong>React, Material UI, and Tailwind CSS</strong>, which helps
              me build complete applications and collaborate effectively across
              the full stack.
            </Typography>

            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ lineHeight: 1.8 }}
            >
              As a fresher, I am actively looking for opportunities where I can
              grow as a backend or MERN Stack developer, contribute to real-world
              projects, and continuously improve my technical skills.
            </Typography>

            {/* SKILLS */}
            <div className="mt-6 flex flex-wrap gap-2">
              {[
                "Node.js",
                "Express.js",
                "MongoDB",
                "JWT Auth",
                "REST APIs",
                "Aggregation Pipeline",
                "React",
                "Material UI",
                "Tailwind CSS",
              ].map((skill) => (
                <Chip
                  key={skill}
                  label={skill}
                  variant="outlined"
                  sx={{
                    transition: "all 0.3s",
                    "&:hover": {
                      backgroundColor: "#2563eb",
                      color: "#fff",
                      borderColor: "#2563eb",
                    },
                  }}
                />
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
