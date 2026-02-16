import { motion } from "framer-motion";
import { TrendingUp, DollarSign, Users, Zap, Clock } from "lucide-react";

const stats = [
  { icon: TrendingUp, title: "High Demand", desc: "Skilled Hair Stylists are in massive demand" },
  { icon: DollarSign, title: "Great Earnings", desc: "Attractive monthly salaries + tips" },
  { icon: Users, title: "Freelance Ready", desc: "Freelance & bridal opportunities" },
  { icon: Zap, title: "Fast Growth", desc: "Rapid career advancement paths" },
  { icon: Clock, title: "Quick Start", desc: "Start earning in just 2 months" },
];

const IndustryStats = () => (
  <section id="about" className="py-24 bg-gradient-dark">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="font-body text-sm tracking-[0.4em] text-primary uppercase mb-4">
          Why Hair Styling?
        </p>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
          The Salon Industry is <span className="text-gradient-gold">Booming</span>
        </h2>
        <p className="font-body text-muted-foreground max-w-2xl mx-auto">
          Turn your passion for hair into a high-paying salon career with hands-on in-salon training.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass-card p-6 text-center group hover:border-primary/30 transition-colors"
          >
            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <stat.icon className="w-5 h-5 text-primary" />
            </div>
            <h3 className="font-display text-lg font-semibold text-foreground mb-2">{stat.title}</h3>
            <p className="font-body text-sm text-muted-foreground">{stat.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default IndustryStats;
