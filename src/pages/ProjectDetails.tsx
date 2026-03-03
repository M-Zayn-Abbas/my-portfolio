import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { projects } from "@/data/projects";
import Header from "@/components/Header";
import { ArrowLeft, ExternalLink, X, ChevronLeft, ChevronRight } from "lucide-react";
import { Helmet } from "react-helmet-async";

const ProjectDetails = () => {
    const { id } = useParams<{ id: string }>();
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const project = projects.find(p => p.id === id);

    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Also block body scroll when modal is open
    useEffect(() => {
        if (selectedImage) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [selectedImage]);

    if (!project) {
        return (
            <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center font-sans pt-12">
                <Header transparent={true} />
                <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
                <Link to="/client-work" className="text-primary hover:text-primary/80 underline">
                    Back to Client Work
                </Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-background text-foreground font-sans antialiased flex flex-col pt-12 mesh-gradient">
            <Helmet>
                <title>{project.title} | M Zain Abbas Project</title>
                <meta name="description" content={project.shortDescription} />
                {project.images && project.images.length > 0 && (
                    <meta property="og:image" content={project.images[0]} />
                )}
            </Helmet>
            <Header transparent={true} />

            <main className="flex-grow pb-24">
                {/* Hero Section */}
                <section className="pt-32 pb-16 px-4 sm:px-8 md:px-16 relative overflow-hidden">
                    <div className="absolute top-0 inset-x-0 h-64 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
                    <div className="max-w-7xl mx-auto relative z-10 flex flex-col lg:flex-row justify-between items-start gap-12">
                        <div className="max-w-2xl">
                            <Link to="/client-work" className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-8 group">
                                <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                                Back to Projects
                            </Link>
                            <h1 className="text-5xl md:text-7xl font-extrabold uppercase mb-6 leading-tight tracking-tight text-gradient">
                                {project.title}
                            </h1>
                            <div className="flex flex-wrap gap-2 mb-8">
                                {project.stack.map(tech => (
                                    <span key={tech} className="px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-semibold tracking-wide border border-primary/20">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                        {project.liveLink && (
                            <div className="lg:mt-24">
                                <a
                                    href={project.liveLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center px-8 py-3.5 border border-border text-foreground font-semibold rounded-lg transition-all duration-300 hover:border-primary/50 hover:text-primary hover:-translate-y-0.5"
                                >
                                    Visit Live Site
                                    <ExternalLink className="w-5 h-5 ml-2" />
                                </a>
                            </div>
                        )}
                    </div>
                </section>

                {/* Media & Content */}
                <section className="px-4 sm:px-8 md:px-16 max-w-7xl mx-auto -mt-12 relative z-20">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                        {/* Left Col - Media */}
                        <div className="col-span-1 lg:col-span-8 flex flex-col gap-8">
                            {/* Main Video */}
                            {project.videoUrl && (
                                <div className="rounded-2xl overflow-hidden bg-zinc-900 shadow-2xl border border-zinc-800">
                                    <video
                                        src={project.videoUrl}
                                        className="w-full object-cover"
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        controls
                                    />
                                </div>
                            )}



                            {/* Gallery Carousel */}
                            {project.images && project.images.length > 0 && (
                                <div className="mt-4">
                                    <h3 className="text-xl font-bold uppercase tracking-widest text-primary mb-6 border-b border-border pb-2">Gallery</h3>
                                    <div className="relative rounded-2xl overflow-hidden bg-black border border-border group shadow-2xl">
                                        <div
                                            className="cursor-pointer relative flex items-center justify-center overflow-hidden bg-black"
                                            onClick={() => setSelectedImage(project.images[currentImageIndex])}
                                        >
                                            <img
                                                src={project.images[currentImageIndex]}
                                                alt={`${project.title} screenshot ${currentImageIndex + 1}`}
                                                className="w-full h-auto object-contain transition-transform duration-700 hover:scale-[1.02]"
                                            />
                                        </div>

                                        {/* Carousel Controls */}
                                        {project.images.length > 1 && (
                                            <>
                                                <button
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        setCurrentImageIndex((prev) => (prev === 0 ? project.images.length - 1 : prev - 1));
                                                    }}
                                                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:-translate-x-1"
                                                >
                                                    <ChevronLeft className="w-6 h-6" />
                                                </button>
                                                <button
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        setCurrentImageIndex((prev) => (prev === project.images.length - 1 ? 0 : prev + 1));
                                                    }}
                                                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1"
                                                >
                                                    <ChevronRight className="w-6 h-6" />
                                                </button>

                                                {/* Pagination Dots */}
                                                <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 mt-4">
                                                    {project.images.map((_, i) => (
                                                        <button
                                                            key={i}
                                                            onClick={(e) => {
                                                                e.stopPropagation();
                                                                setCurrentImageIndex(i);
                                                            }}
                                                            className={`h-2 rounded-full transition-all duration-300 ${currentImageIndex === i ? 'bg-primary w-6' : 'bg-white/50 hover:bg-white w-2'}`}
                                                        />
                                                    ))}
                                                </div>
                                            </>
                                        )}
                                    </div>
                                </div>
                            )}

                            {/* Testimonial Video */}
                            {project.testimonialVideoUrl && (
                                <div className="mt-12 max-w-xl mx-auto w-full">
                                    <h3 className="text-xl font-bold uppercase tracking-widest text-primary mb-6 border-b border-border pb-2 text-center">Client Testimonial</h3>
                                    <div className="rounded-2xl overflow-hidden bg-black shadow-2xl border border-zinc-800 aspect-video flex items-center justify-center">
                                        <video
                                            src={project.testimonialVideoUrl}
                                            className="w-full h-full object-contain"
                                            playsInline
                                            controls
                                        />
                                    </div>
                                </div>
                            )}

                            {/* Testimonial Image */}
                            {project.testimonialImageUrl && (
                                <div className="mt-12 max-w-xl mx-auto w-full">
                                    <h3 className="text-xl font-bold uppercase tracking-widest text-primary mb-6 border-b border-border pb-2 text-center">Client Testimonial</h3>
                                    <div className="rounded-2xl overflow-hidden shadow-2xl border border-zinc-800 flex items-center justify-center bg-card max-w-sm mx-auto p-2">
                                        <img
                                            src={project.testimonialImageUrl}
                                            alt={`${project.title} Client Testimonial`}
                                            className="w-full h-auto object-contain rounded-xl"
                                        />
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Right Col - Details */}
                        <div className="col-span-1 lg:col-span-4 flex flex-col gap-12 pt-12 lg:pt-0">

                            {/* About */}
                            <div>
                                <h3 className="text-xl font-bold uppercase tracking-widest text-primary mb-4 border-b border-border pb-2">About The Project</h3>
                                <div className="space-y-6">
                                    {project.fullDescription.split('\n').filter(p => p.trim()).map((paragraph, index, array) => (
                                        <div key={index}>
                                            <p className="text-muted-foreground leading-relaxed text-lg">
                                                {paragraph}
                                            </p>
                                            {index < array.length - 1 && (
                                                <hr className="border-border mt-1 opacity-0" />
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Key Features */}
                            <div>
                                <h3 className="text-xl font-bold uppercase tracking-widest text-primary mb-4 border-b border-border pb-2">Key Features</h3>
                                <ul className="space-y-4">
                                    {project.features.map((feature, i) => (
                                        <li key={i} className="flex items-start">
                                            <span className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                                            <span className="text-muted-foreground text-lg">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Stack Details */}
                            <div>
                                <h3 className="text-xl font-bold uppercase tracking-widest text-primary mb-4 border-b border-border pb-2">Tech Stack Details</h3>
                                <div className="flex flex-wrap gap-2">
                                    {project.stack.map(tech => (
                                        <span
                                            key={tech}
                                            className="px-3 py-1.5 bg-secondary text-secondary-foreground rounded text-sm font-medium border border-border"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                        </div>

                    </div>
                </section>
            </main>

            {/* Image Modal Lightbox */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm cursor-zoom-out animate-fade-in"
                    onClick={() => setSelectedImage(null)}
                >
                    <button
                        className="absolute top-6 right-6 text-white/70 hover:text-white bg-black/50 hover:bg-black/80 p-2 rounded-full transition-all"
                        onClick={(e) => {
                            e.stopPropagation();
                            setSelectedImage(null);
                        }}
                    >
                        <X className="w-8 h-8" />
                    </button>
                    <img
                        src={selectedImage}
                        alt="Zoomed view"
                        className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    />
                </div>
            )}
        </div>
    );
};

export default ProjectDetails;
