import { Code, User, Briefcase } from "lucide-react";
import TylerTuetken from "../assets/TylerTuetken.pdf";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Backend-Focused Software Engineer</h3>

            <p className="text-muted-foreground">
              Building backend systems and cloud-based applications with JavaScript, Node.js, and modern web technologies.
            </p>

            <p className="text-muted-foreground">
              I focus on designing reliable, performant services — from asynchronous ingestion pipelines and queue-based architectures to
              RESTful APIs and containerized deployments.
            </p>

            <p className="text-muted-foreground">
              AWS Certified and ITIL-certified, with a B.S. in Software Engineering from Western Governors University.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>
              <a
                href={TylerTuetken}
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
                  <h4 className="font-semibold text-lg">Cloud & DevOps</h4>
                  <p className="text-muted-foreground">AWS Certified Cloud Practitioner. Deploying containerized apps via Docker, Render, and Vercel with CI/CD pipelines.</p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Backend Engineering & API Design</h4>
                  <p className="text-muted-foreground">Building RESTful APIs and async pipelines with Node.js, Express, Redis queues, and PostgreSQL.</p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Full-Stack JavaScript Development</h4>
                  <p className="text-muted-foreground">End-to-end apps with React, Node.js, Express, and MongoDB — from responsive UIs to production deployments.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
