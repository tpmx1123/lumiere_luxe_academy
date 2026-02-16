import { motion } from "framer-motion";
import { Check } from "lucide-react";

const applicants = [
  "Complete beginners",
  "10th / 12th pass students",
  "Degree students",
  "Salon assistants",
  "Beauticians upgrading skills",
  "Housewives restarting career",
  "Anyone passionate about hair styling",
];

const careers = [
  "Junior Hair Stylist",
  "Salon Assistant",
  "Hair Color Technician",
  "Entry-Level Freelance Stylist",
];

const WhoCanApply = () => (
  <section id="careers" className="py-24 bg-secondary">
    <div className="container mx-auto px-4">
      <div className="grid lg:grid-cols-2 gap-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="font-body text-sm tracking-[0.4em] text-primary uppercase mb-4">Eligibility</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
            Who Can <span className="text-gradient-gold">Apply?</span>
          </h2>
          <p className="font-body text-muted-foreground mb-8">No prior experience required.</p>
          <div className="space-y-4">
            {applicants.map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex items-center gap-3"
              >
                <div className="w-6 h-6 rounded-full bg-primary/15 flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 text-primary" />
                </div>
                <span className="font-body text-foreground">{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <p className="font-body text-sm tracking-[0.4em] text-primary uppercase mb-4">After Graduation</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8">
            Career <span className="text-gradient-gold">Opportunities</span>
          </h2>
          <div className="space-y-4">
            {careers.map((item, i) => (
              <div key={item} className="glass-card p-5 flex items-center gap-4">
                <span className="font-display text-2xl font-bold text-primary/30">{String(i + 1).padStart(2, "0")}</span>
                <span className="font-body text-foreground text-lg">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default WhoCanApply;
