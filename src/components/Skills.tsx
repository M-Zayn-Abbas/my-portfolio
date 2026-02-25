import { motion } from "framer-motion";

const skills = [
  "MongoDB", "Express.js", "React", "Node.js", "Next.js",
  "WordPress", "Wix", "API Integration", "Web Scraping", "WooCommerce",
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3">
            Skills & Tools
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-12">
            My Tech Stack
          </h2>
        </motion.div>

        <div className="overflow-hidden relative">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />
          <div className="flex animate-marquee w-max">
            {[...skills, ...skills].map((skill, i) => (
              <span
                key={i}
                className="mx-3 px-6 py-3 rounded-full border border-border bg-secondary text-secondary-foreground font-medium text-sm whitespace-nowrap transition-colors duration-300 hover:border-primary/50 hover:text-primary"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
