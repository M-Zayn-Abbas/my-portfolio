import { motion } from "framer-motion";
import { ExternalLink, Star } from "lucide-react";

const Testimonials = () => {
    const testimonials = [
        {
            id: 1,
            type: "video",
            src: "/testimonials/kamilla.mp4",
            name: "Kamilla",
            role: "Client",
        },
        {
            id: 2,
            type: "text",
            name: "linat1245",
            country: "🇳🇱 Netherlands",
            avatar: "L",
            avatarColor: "bg-[#FFD1D1] text-[#902A2A] dark:bg-red-900/30 dark:text-red-400",
            stars: 5,
            time: "6 months ago",
            text: "Zayn is very helpful, thinks along with you, and always wants the best for his clients. He is reliable, professional, and easy to communicate with. Zayn takes the time to understand your needs and goes the extra mile to deliver great results.",
            duration: "7 days",
        },
        {
            id: 3,
            type: "text",
            name: "tr3dawgray",
            country: "🇺🇸 United States",
            avatar: "T",
            stars: 4.7,
            time: "1 year ago",
            text: "Very responsive did a great job with a quick turnaround.",
            duration: "8 days",
        },
    ];

    return (
        <section id="testimonials" className="py-24 px-6 bg-secondary/30">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="text-center mb-16"
                >
                    <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3">
                        Testimonials
                    </p>
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                        What Clients Say
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Don't just take my word for it - here's what the people I've worked with have to say about my services.
                    </p>
                </motion.div>

                {/* Video Testimonials Section */}
                <div className="mb-20">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true, margin: "-50px" }}
                        className="mb-8"
                    >
                        <h3 className="text-2xl sm:text-3xl font-bold flex items-center gap-3">
                            <span className="w-8 h-1 bg-primary rounded-full"></span>
                            Video Testimonial
                        </h3>
                    </motion.div>

                    <div className="flex justify-center">
                        {testimonials.filter(t => t.type === 'video').map((testimonial, index) => (
                            <motion.div
                                key={testimonial.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true, margin: "-50px" }}
                                className="bg-card w-full max-w-sm rounded-2xl border border-border overflow-hidden hover:shadow-lg transition-all flex flex-col shadow-md"
                            >
                                <div className="relative w-full overflow-hidden bg-muted/10 flex items-center justify-center aspect-[9/16] max-h-[600px]">
                                    <video
                                        src={testimonial.src}
                                        controls
                                        className="w-full h-full object-cover"
                                        poster=""
                                    />
                                </div>
                                <div className="p-6 md:p-8 flex flex-col justify-between">
                                    <div>
                                        <h3 className="font-semibold text-xl mb-1">{testimonial.name}</h3>
                                        <p className="text-sm text-primary font-medium">{testimonial.role}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Other Testimonials Section */}
                <div>
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true, margin: "-50px" }}
                        className="mb-8"
                    >
                        <h3 className="text-2xl sm:text-3xl font-bold flex items-center gap-3">
                            <span className="w-8 h-1 bg-primary rounded-full"></span>
                            Other Testimonials
                        </h3>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        {testimonials.filter(t => t.type === 'text').map((testimonial, index) => (
                            <motion.div
                                key={testimonial.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true, margin: "-50px" }}
                                className="bg-card w-full rounded-2xl border border-border overflow-hidden hover:shadow-lg transition-all flex flex-col shadow-md h-full p-6 md:p-8"
                            >
                                {/* Header: Avatar, Name, Country */}
                                <div className="flex items-center gap-4 mb-6">
                                    {testimonial.avatarImg ? (
                                        <img src={testimonial.avatarImg} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover border border-border" />
                                    ) : (
                                        <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl ${testimonial.avatarColor || 'bg-primary/20 text-primary'}`}>
                                            {testimonial.avatar}
                                        </div>
                                    )}
                                    <div>
                                        <h4 className="font-bold text-lg leading-tight">{testimonial.name}</h4>
                                        <span className="text-sm text-muted-foreground flex items-center gap-2">
                                            {testimonial.country}
                                        </span>
                                    </div>
                                </div>

                                {/* Stars & Time */}
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="flex gap-1">
                                        {[...Array(5)].map((_, i) => (
                                            <Star
                                                key={i}
                                                className={`w-4 h-4 ${(testimonial.stars || 0) > i ? 'fill-primary text-primary' : 'fill-muted text-muted-foreground'}`}
                                            />
                                        ))}
                                    </div>
                                    <span className="font-bold text-sm">{testimonial.stars}</span>
                                    <span className="text-muted-foreground text-sm border-l border-border pl-3">• {testimonial.time}</span>
                                </div>

                                {/* Text */}
                                <p className="text-foreground text-base leading-relaxed mb-8 flex-grow">
                                    {testimonial.text}
                                </p>

                                {/* Footer: Duration, Fiverr Link */}
                                <div className="pt-6 border-t border-border flex flex-col sm:flex-row gap-6 justify-between items-start sm:items-end mt-auto">
                                    <div className="flex gap-6">
                                        <div>
                                            <p className="font-bold text-lg">{testimonial.duration}</p>
                                            <p className="text-sm text-muted-foreground mt-1">Duration</p>
                                        </div>
                                    </div>

                                    <a
                                        href="https://www.fiverr.com/mzaynabbas_/make-professional-video-editor-portfolio-websites-custom-designs"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg bg-primary text-primary-foreground font-semibold transition-all duration-300 hover:shadow-[0_0_20px_hsl(172_66%_50%/0.3)] hover:-translate-y-0.5 whitespace-nowrap w-full sm:w-auto"
                                    >
                                        View on Fiverr <ExternalLink className="w-4 h-4" />
                                    </a>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
