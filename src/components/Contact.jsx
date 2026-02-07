import {
    Card,
    TextField,
    Button,
} from "@mui/material";
import { Mail, Linkedin, Github, Send } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="py-28 px-6 bg-slate-50">
            <div className="max-w-5xl mx-auto">
                {/* HEADER */}
                <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
                <p className="text-slate-600 max-w-xl mb-16">
                    I'm a fresher MERN Stack Developer with hands-on experience in backend
                    development. Open to full-time roles, internships, and learning-driven
                    opportunities where I can grow and contribute.
                </p>

                {/* CONTENT GRID */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* LEFT INFO */}
                    <div className="space-y-6">
                        {/* EMAIL */}
                        <InfoCard
                            icon={<Mail size={20} />}
                            label="Email"
                            value="palsumitra265@gmail.com"
                            href="mailto:palsumitra265@gmail.com"
                        />

                        {/* LINKEDIN */}
                        <InfoCard
                            icon={<Linkedin size={20} />}
                            label="LinkedIn"
                            value="linkedin.com/in/shreyasee-pal"
                            href="https://www.linkedin.com/in/shreyasee-pal-4987a7213"
                        />

                        {/* GITHUB */}
                        <InfoCard
                            icon={<Github size={20} />}
                            label="GitHub"
                            value="github.com/shreythecoder410"
                            href="https://github.com/shreythecoder410"
                        />
                    </div>

                    {/* RIGHT FORM */}
                    <Card
                        elevation={0}
                        className="
                          p-7 rounded-3xl
                          border border-gray-200
                          shadow-sm
                          max-w-md
                          ml-auto
                          "
                    >
                        <form className="space-y-6">
                            <TextField
                                fullWidth
                                label="Name"
                                placeholder="Your full name"
                            />

                            <TextField
                                fullWidth
                                label="Email"
                                placeholder="your@email.com"
                            />

                            <TextField
                                fullWidth
                                multiline
                                rows={4}
                                label="Message"
                                placeholder="Write your message or opportunity details here..."
                            />

                            <Button
                                fullWidth
                                variant="contained"
                                size="large"
                                endIcon={<Send size={18} />}
                                sx={{
                                    textTransform: "none",
                                    backgroundColor: "#2563eb",
                                    paddingY: 1.4,
                                    fontSize: "1rem",
                                    borderRadius: "10px",
                                    "&:hover": {
                                        backgroundColor: "#1d4ed8",
                                    },
                                }}
                            >
                                Send Message
                            </Button>
                        </form>
                    </Card>

                </div>
            </div>
        </section>
    );
}

/* -------- INFO CARD -------- */

function InfoCard({ icon, label, value, href }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noreferrer"
            className="
        flex items-center gap-4
        p-5 rounded-xl
        bg-white border border-gray-200
        transition-all duration-300
        hover:border-blue-500
        hover:shadow-md
        group
      "
        >
            <div
                className="
          h-12 w-12 flex items-center justify-center
          rounded-full
          bg-blue-50 text-blue-600
          group-hover:bg-blue-600
          group-hover:text-white
          transition
        "
            >
                {icon}
            </div>

            <div>
                <p className="text-sm text-slate-500">{label}</p>
                <p className="font-medium text-slate-800 group-hover:text-blue-600 transition">
                    {value}
                </p>
            </div>
        </a>
    );
}
