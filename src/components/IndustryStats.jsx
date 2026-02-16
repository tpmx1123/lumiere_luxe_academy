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
  <section className="py-24" style={{ background: 'linear-gradient(-90deg, #FFFFFF 0%, #FFF7ED 100%)' }}>
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="font-bold text-sm tracking-[0.2em] uppercase mb-4" style={{ color: '#906B3A' }}>
          Why Hair Styling?
        </p>
        <h2 className="font-display text-3xl md:text-5xl font-bold mb-4" style={{ color: '#2C2521' }}>
          The Salon Industry is <span style={{ color: '#906B3A' }}>Booming</span>
        </h2>
        <p className="font-body max-w-2xl mx-auto" style={{ color: '#7C716A' }}>
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
            className="rounded-2xl p-6 text-center group hover:border-[#906B3A]/30 transition-colors"
          >
            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-[#906B3A]/10 flex items-center justify-center group-hover:bg-[#906B3A]/20 transition-colors">
              <stat.icon className="w-5 h-5" style={{ color: '#906B3A' }} />
            </div>
            <h3 className="font-display text-lg font-semibold mb-2" style={{ color: '#2C2521' }}>{stat.title}</h3>
            <p className="font-body text-sm" style={{ color: '#7C716A' }}>{stat.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default IndustryStats;
