import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Send, Instagram, Loader2 } from "lucide-react";
import { useState, FormEvent } from "react";

import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formsubmit.co/ajax/mzainabbas23@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          ...form,
          _subject: `New Portfolio Message from ${form.name}`,
        }),
      });

      if (response.ok) {
        toast({
          title: "Message sent!",
          description: "Thank you for reaching out. I'll get back to you soon.",
        });
        setForm({ name: "", email: "", message: "" });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12"
        >
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3">
            Get In Touch
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold">
            Let's Work Together
          </h2>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-5"
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <input
              type="text"
              placeholder="Your Name"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full px-5 py-3.5 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all"
            />
            <input
              type="email"
              placeholder="Your Email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full px-5 py-3.5 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all"
            />
          </div>
          <textarea
            placeholder="Your Message"
            required
            rows={5}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="w-full px-5 py-3.5 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all resize-none"
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-primary text-primary-foreground font-semibold transition-all duration-300 hover:shadow-[0_0_30px_hsl(172_66%_50%/0.3)] hover:-translate-y-0.5 disabled:opacity-70 disabled:pointer-events-none"
          >
            {isSubmitting ? (
              <>
                Sending... <Loader2 className="w-4 h-4 animate-spin" />
              </>
            ) : (
              <>
                Send Message <Send className="w-4 h-4" />
              </>
            )}
          </button>
        </motion.form>

        <div className="flex justify-center gap-6 mt-12">
          {[
            { icon: Linkedin, href: "https://www.linkedin.com/in/muhammad-zain-abbas-004953275/", label: "LinkedIn" },
            { icon: Github, href: "https://github.com/M-Zayn-Abbas", label: "GitHub" },
            { icon: Instagram, href: "https://www.instagram.com/zaynwebdev/", label: "Instagram" },
            { icon: Mail, href: "mailto:mzainabbas23@gmail.com", label: "Email" },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-muted-foreground transition-all duration-300 hover:border-primary/50 hover:text-primary hover:-translate-y-1"
            >
              <Icon className="w-5 h-5" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
