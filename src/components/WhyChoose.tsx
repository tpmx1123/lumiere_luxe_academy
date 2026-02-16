import { motion } from "framer-motion";
import { Scissors, GraduationCap, HandMetal, BookOpen, Award, Briefcase } from "lucide-react";
import aboutImage from "@/assets/about-salon.jpg";

const reasons = [
  { icon: Scissors, title: "Real In-Salon Training", desc: "Practice daily in a live professional salon environment" },
  { icon: GraduationCap, title: "Expert Trainers", desc: "Learn from senior stylists & trichologists" },
  { icon: HandMetal, title: "100% Hands-On Focus", desc: "Intensive weekend practice on real clients" },
  { icon: BookOpen, title: "Comprehensive Curriculum", desc: "From basics to trending techniques" },
  { icon: Award, title: "Recognized Certification", desc: "Industry-recognized credentials upon completion" },
  { icon: Briefcase, title: "Career Support", desc: "Placement & freelance guidance included" },
];

const WhyChoose = () => (
  <section id="course" className="py-24 bg-secondary">
    <div className="container mx-auto px-4">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <p className="font-body text-sm tracking-[0.4em] text-primary uppercase mb-4">
            Why Us
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-8">
            Why Choose <span className="text-gradient-gold">Lumière Luxe</span> Academy?
          </h2>
          <div className="space-y-6">
            {reasons.map((r, i) => (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-4 items-start"
              >
                <div className="w-10 h-10 shrink-0 rounded bg-primary/10 flex items-center justify-center">
                  <r.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground">{r.title}</h3>
                  <p className="font-body text-sm text-muted-foreground">{r.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute -inset-4 bg-gradient-gold opacity-10 blur-2xl" />
          <img
            src={aboutImage}
            alt="Professional hair styling training at Lumière Luxe Academy"
            className="relative w-full aspect-square object-cover border-gold"
            style={{ border: "1px solid hsl(38 72% 50% / 0.2)" }}
          />
          <div className="absolute bottom-6 left-6 right-6 glass-card p-5">
            <p className="font-display text-2xl font-bold text-gradient-gold">8 Weeks</p>
            <p className="font-body text-sm text-muted-foreground">Foundation Course • 5 Days/Week</p>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default WhyChoose;
