import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div className="flex justify-center">
            <div className="w-64 h-64 sm:w-72 sm:h-72 rounded-2xl bg-secondary border border-border flex items-center justify-center overflow-hidden">
              <img src="/me.jpeg" alt="M Zain Abbas" className="w-full h-full object-cover" />
            </div>
          </div>

          <div>
            <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3">
              About Me
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Software Engineer & Web Developer
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              I am a Software Engineer and Web Developer with profound experience in the MERN stack, Next.js, Tailwind CSS, WordPress, and Wix. I focus on building scalable web applications, custom management systems, and high-converting platforms tailored to business needs.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
