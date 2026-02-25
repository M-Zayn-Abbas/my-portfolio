import React from "react";
import { Link } from "react-router-dom";
import { projects } from "@/data/projects";
import Header from "@/components/Header";
import { Helmet } from "react-helmet-async";

const ClientWork = () => {
    return (
        <div className="min-h-screen bg-background text-foreground font-sans antialiased flex flex-col pt-12 mesh-gradient">
            <Helmet>
                <title>Client Work | M Zain Abbas</title>
                <meta name="description" content="Explore a selection of web development projects built for clients, solving complex problems with modern tech by M Zain Abbas." />
            </Helmet>
            <Header transparent={true} />
            <main className="flex-grow pt-24 px-4 sm:px-8 md:px-16 pb-20">
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold uppercase mb-6 animate-fade-in text-gradient leading-tight tracking-tight">
                        Client Work
                    </h1>
                    <p className="text-muted-foreground text-lg sm:text-xl max-w-2xl mb-16 animate-fade-in leading-relaxed" style={{ animationDelay: '100ms' }}>
                        A selection of projects I've built for clients, solving complex problems with modern tech.
                    </p>

                    <div className="flex flex-col gap-24">
                        {projects.map((project, index) => (
                            <div
                                key={project.id}
                                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animate-fade-in-up group"
                                style={{ animationDelay: `${(index + 2) * 100}ms` }}
                            >
                                {/* Project Video/Image */}
                                <div className="relative overflow-hidden rounded-2xl bg-zinc-900 border border-zinc-800 shadow-2xl transition-transform duration-500 group-hover:scale-[1.02] flex items-center justify-center">
                                    {project.videoUrl ? (
                                        <video
                                            src={project.videoUrl}
                                            className="w-full h-auto"
                                            autoPlay
                                            loop
                                            muted
                                            playsInline
                                        />
                                    ) : (
                                        <img
                                            src={project.images[0]}
                                            alt={project.title}
                                            className="w-full h-auto object-cover"
                                        />
                                    )}
                                    {/* Overlay Gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                                </div>

                                {/* Project Details */}
                                <div className="flex flex-col">
                                    <h2 className="text-3xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                                        {project.title}
                                    </h2>

                                    {/* Problem Solved / Description */}
                                    <div className="mb-6">
                                        <p className="text-muted-foreground leading-relaxed text-lg line-clamp-3">
                                            {project.shortDescription}
                                        </p>
                                    </div>

                                    {/* Tech Stack */}
                                    <div className="mb-8 flex flex-wrap gap-2">
                                        {project.stack.map(tech => (
                                            <span
                                                key={tech}
                                                className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-xs font-semibold tracking-wider border border-border"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Actions */}
                                    <div>
                                        <Link
                                            to={`/client-work/${project.id}`}
                                            className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg bg-primary text-primary-foreground font-semibold transition-all duration-300 hover:shadow-[0_0_30px_hsl(172_66%_50%/0.3)] hover:-translate-y-0.5"
                                        >
                                            View My Work
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
};

export default ClientWork;
