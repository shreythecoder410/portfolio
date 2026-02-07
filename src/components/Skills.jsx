import {
  Code2,
  Server,
  Database,
  ShieldCheck,
  Layers,
  Paintbrush,
  Braces,
  LayoutGrid,
} from "lucide-react";

export default function Skills() {
  const skills = [
    { name: "HTML5", icon: Code2 },
    { name: "CSS", icon: Paintbrush },
    { name: "JavaScript", icon: Braces },
    { name: "Node.js", icon: Server },
    { name: "Express.js", icon: Server },
    { name: "MongoDB", icon: Database },
    { name: "REST APIs", icon: Layers },
    { name: "JWT Authentication", icon: ShieldCheck },
    { name: "React", icon: LayoutGrid },
    { name: "Material UI", icon: LayoutGrid },
    { name: "Bootstrap", icon: LayoutGrid },
    { name: "EJS", icon: Code2 },
  ];

  return (
    <section
      id="skills"
      className="py-28 px-6 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50"
    >
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Skills & Technologies
        </h2>

        <p className="text-gray-600 mb-14 max-w-2xl mx-auto">
          Technologies I use to build secure, scalable, production-ready
          applications with a strong backend focus.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((skill) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.name}
                className="group rounded-xl p-6 bg-white border border-gray-200 shadow-md
                           transition-all duration-300
                           hover:-translate-y-2 hover:shadow-xl"
              >
                {/* ICON */}
                <Icon
                  size={32}
                  className="mx-auto mb-3 text-blue-600 group-hover:text-indigo-600 transition"
                />

                {/* TEXT */}
                <p className="font-medium text-gray-800">
                  {skill.name}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
