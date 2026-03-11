import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { Link } from "react-router-dom";
import { Project, projects } from "@/data/projects";

// Get only the top 4 projects
const topProjects = projects.slice(0, 4);

const FeaturedProjectCard = ({ project, i }: { project: Project; i: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!videoRef.current) return;
    if (isHovered) {
      videoRef.current.play().catch(() => { });
    } else {
      videoRef.current.pause();
      // Optional: rewind video on mouse leave so it restarts next hover
      videoRef.current.currentTime = 0;
    }
  }, [isHovered]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: i * 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
      className="group rounded-xl bg-card border border-border p-6 flex flex-col glow-border"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="w-full h-48 rounded-lg bg-secondary mb-5 overflow-hidden relative">
        {project.videoUrl ? (
          <>
            <video
              ref={videoRef}
              src={project.videoUrl}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${isHovered ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
              loop
              muted
              playsInline
            />
            <img
              src={project.images[0]}
              alt={project.title}
              className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${isHovered ? 'opacity-0 scale-105 z-0' : 'opacity-100 scale-100 z-10'}`}
            />
          </>
        ) : (
          <img
            src={project.images[0]}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        )}
      </div>

      <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
        {project.title}
      </h3>
      <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">
        {project.shortDescription}
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {project.stack.slice(0, 3).map((tech) => (
          <span
            key={tech}
            className="text-xs px-3 py-1 rounded-full bg-secondary text-muted-foreground border border-border"
          >
            {tech}
          </span>
        ))}
        {project.stack.length > 3 && (
          <span className="text-xs px-3 py-1 rounded-full bg-secondary text-muted-foreground border border-border">
            +{project.stack.length - 3}
          </span>
        )}
      </div>

      <Link
        to={`/client-work/${project.id}`}
        className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline mt-auto"
      >
        View Project <ArrowUpRight className="w-4 h-4" />
      </Link>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3">
            Portfolio
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold">
            Featured Client Work
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {topProjects.map((project, i) => (
            <FeaturedProjectCard key={project.id} project={project as Project} i={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Link
            to="/client-work"
            className="inline-flex items-center justify-center px-8 py-3.5 border border-primary/50 text-foreground font-semibold rounded-lg transition-all duration-300 hover:bg-primary/10 hover:text-primary hover:-translate-y-0.5 shadow-[0_0_15px_rgba(20,184,166,0.15)] hover:shadow-[0_0_25px_rgba(20,184,166,0.25)]"
          >
            View All Client Work
            <ArrowUpRight className="w-5 h-5 ml-2" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
