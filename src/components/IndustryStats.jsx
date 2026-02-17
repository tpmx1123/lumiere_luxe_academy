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
  <section
    id="about"
    className="py-16 md:py-24 px-4 md:px-6 lg:px-14"
    style={{ background: "linear-gradient(90deg, #FFFFFF 0%, #FFF7ED 100%)" }}
  >
    <div className="container mx-auto">
      {/* Header Section */}
      <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-inter font-bold text-[10px] md:text-xs tracking-[0.3em] md:tracking-[0.5em] uppercase mb-3"
          style={{ color: "#906B3A" }}
        >
          Why Join Our Academy?
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-playfair text-3xl md:text-5xl font-medium leading-tight mb-4"
          style={{ color: "#2C2521" }}
        >
          The Beauty & Hair Industry is{" "}
          <span className="italic" style={{ color: "#906B3A" }}>
            Booming
          </span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-inter text-sm leading-relaxed"
          style={{ color: "#7C716A" }}
        >
          Join a premier skill development academy and turn your passion into a high-paying career.
        </motion.p>
      </div>

      {/* Grid: 2 columns mobile, 5 columns desktop */}
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-3 md:gap-6">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.07 }}
            /* CSS Logic: 
               - last:col-span-2: Makes the 5th item take full width on mobile 
               - lg:last:col-span-1: Resets it to 1 column on desktop 
               - max-w-[calc(50%-6px)]: Keeps the last card the same size as others on mobile
            */
            className="group rounded-2xl p-4 md:p-7 text-center bg-white border shadow-sm 
                       flex flex-col items-center justify-center
                       last:col-span-2 lg:last:col-span-1 
                       last:max-w-[calc(50%-6px)] last:mx-auto lg:last:max-w-none"
            style={{
              borderColor: "rgba(144, 107, 58, 0.18)",
              boxShadow: "0 4px 20px rgba(44, 37, 33, 0.06)",
            }}
          >
            <div
              className="w-10 h-10 md:w-14 md:h-14 mb-3 md:mb-4 rounded-full flex items-center justify-center border-2 shrink-0"
              style={{
                backgroundColor: "rgba(144, 107, 58, 0.08)",
                borderColor: "rgba(144, 107, 58, 0.22)",
              }}
            >
              <stat.icon className="w-5 h-5 md:w-6 md:h-6" style={{ color: "#906B3A" }} />
            </div>
            <h3 className="font-playfair text-sm md:text-lg font-semibold mb-1 md:mb-2 tracking-tight" style={{ color: "#2C2521" }}>
              {stat.title}
            </h3>
            <p className="font-inter text-[11px] md:text-sm leading-snug" style={{ color: "#7C716A" }}>
              {stat.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default IndustryStats;