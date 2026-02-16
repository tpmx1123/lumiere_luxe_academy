import { motion } from "framer-motion";
import { Phone, ArrowDown } from "lucide-react";
import heroImage from "@/assets/hero-salon.jpg";

const HeroSection = () => {
  const scrollToForm = () => {
    document.getElementById("apply")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-background/75" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />

      <div className="relative z-10 container mx-auto px-4 text-center py-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <p className="font-body text-sm tracking-[0.4em] text-primary uppercase mb-6">
            Professional Hair Academy
          </p>
          <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-bold leading-tight mb-4">
            <span className="text-gradient-gold">Lumière Luxe</span>
            <br />
            <span className="text-foreground">Salon by Sasha</span>
          </h1>
          <p className="font-serif text-xl sm:text-2xl md:text-3xl italic text-gold-light mt-4 mb-8">
            Become a Professional Hair Stylist in Just 8 Weeks
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-wrap justify-center gap-4 text-sm font-body tracking-wider text-muted-foreground mb-12"
        >
          {["No Experience Required", "Real Salon Training", "Job-Ready Certification"].map((item) => (
            <span key={item} className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              {item}
            </span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={scrollToForm}
            className="bg-gradient-gold text-primary-foreground px-8 py-4 font-body text-sm tracking-[0.2em] uppercase hover:opacity-90 transition-opacity shadow-gold"
          >
            Enroll Now – Limited Seats
          </button>
          <a
            href="tel:+919234569999"
            className="flex items-center gap-2 border border-primary/30 text-primary px-8 py-4 font-body text-sm tracking-[0.2em] uppercase hover:bg-primary/10 transition-colors"
          >
            <Phone className="w-4 h-4" />
            +91 9234569999
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-6 text-primary/70 font-body text-sm tracking-wider"
        >
          Admissions Open – Limited Seats Per Batch
        </motion.p>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ArrowDown className="w-5 h-5 text-primary/50" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
