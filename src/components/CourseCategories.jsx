import { motion } from "framer-motion";
import { Scissors, Palette, Sparkles, Heart } from "lucide-react";

const categories = [
  { icon: Scissors, label: "Hair Technology", sub: "Cut, style, treat" },
  { icon: Palette, label: "Hair Coloring", sub: "Highlights & balayage" },
  { icon: Sparkles, label: "Styling & Blow Dry", sub: "Salon-ready looks" },
  { icon: Heart, label: "Hair & Scalp Care", sub: "Treatments & spa" },
];

const CourseCategories = () => (
  <section
    className="py-20 px-4 md:px-6 lg:px-14"
    style={{ background: "linear-gradient(180deg, #FFF7ED 0%, #FFFFFF 50%, #FFF7ED 100%)" }}
  >
    <div className="container mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <motion.p
          initial={{ y: 12 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          className="font-inter font-bold text-xs tracking-[0.5em] uppercase mb-3"
          style={{ color: "#906B3A" }}
        >
          School of Beauty
        </motion.p>
        <motion.h2
          initial={{ y: 12 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          className="font-playfair text-4xl md:text-5xl font-medium leading-tight"
          style={{ color: "#2C2521" }}
        >
          Courses Offered By{" "}
          <span className="italic" style={{ color: "#906B3A" }}>
            Lumière Luxe Academy
          </span>
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {categories.map((cat, i) => (
          <motion.div
            key={cat.label}
            initial={{ y: 24 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            className="group relative rounded-2xl p-8 text-center bg-white border shadow-sm overflow-hidden"
            style={{
              borderColor: "rgba(144, 107, 58, 0.18)",
              boxShadow: "0 4px 20px rgba(44, 37, 33, 0.06)",
            }}
          >
            <div
              className="absolute inset-x-0 top-0 h-1 rounded-t-2xl transition-all duration-300 group-hover:opacity-100"
              style={{ backgroundColor: "#906B3A", opacity: 0.6 }}
            />
            <div
              className="w-14 h-14 mx-auto mb-5 rounded-full flex items-center justify-center border-2 transition-colors duration-300"
              style={{
                backgroundColor: "rgba(144, 107, 58, 0.08)",
                borderColor: "rgba(144, 107, 58, 0.25)",
              }}
            >
              <cat.icon className="w-7 h-7" style={{ color: "#906B3A" }} />
            </div>
            <h3 className="font-playfair text-xl font-semibold mb-2 tracking-tight" style={{ color: "#2C2521" }}>
              {cat.label}
            </h3>
            <p className="font-inter text-sm leading-snug" style={{ color: "#7C716A" }}>
              {cat.sub}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default CourseCategories;
