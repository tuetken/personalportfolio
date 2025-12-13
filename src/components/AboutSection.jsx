import { Code, User, Briefcase } from "lucide-react";
import ResumePDF from "../assets/ResumePDF.pdf";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Full-Stack JavaScript Developer
            </h3>

            <p className="text-muted-foreground">
              Building scalable web applications with modern
              JavaScript and cloud-native technologies.
            </p>

            <p className="text-muted-foreground">
              With hands-on experience building and
              designing robust backend systems, and
              deploying full-stack applications, I focus on
              creating reliable, maintainable solutions that
              scale.
            </p>

            <p className="text-muted-foreground">
              I enjoy working across the stack — from
              crafting responsive UIs in React to
              architecting Node.js services and deploying
              them.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>
              <a
                href={ResumePDF}
                download
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download Resume
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Cloud & DevOps (AWS + Deployment)
                  </h4>
                  <p className="text-muted-foreground">
                    Creating responsive websites and web
                    applications with modern frameworks.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Backend Engineering & API Design
                  </h4>
                  <p className="text-muted-foreground">
                    Designing intuitive user interfaces and
                    seamless user experiences.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Full-Stack JavaScript Development
                  </h4>
                  <p className="text-muted-foreground">
                    Crafting end-to-end applications using
                    React, Node.js, Express, and MongoDB.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
