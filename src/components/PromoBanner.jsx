import { motion } from "framer-motion";
import { Tag } from "lucide-react";

const PromoBanner = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="py-6 md:py-8 px-6 md:px-14"
      style={{ background: "linear-gradient(90deg, #906B3A 0%, #7a5a2f 100%)" }}
    >
      <div className="container mx-auto flex flex-col items-center justify-center text-center">
        
        {/* Content Only Layout */}
        <div className="flex flex-col md:flex-row items-center gap-4">
          <div className="p-3 rounded-full bg-white/10 hidden md:flex items-center justify-center">
            <Tag className="w-6 h-6" style={{ color: "#FFF7ED" }} />
          </div>
          
          <div className="flex flex-col">
            <div className="flex flex-col md:flex-row items-center md:items-baseline gap-1 md:gap-3">
              <span className="font-playfair text-2xl md:text-4xl font-semibold text-white">
                Get up to 30% Off
              </span>
              <span className="font-inter text-xs md:text-sm uppercase tracking-[0.2em] opacity-80 text-white font-bold">
                on enrollment
              </span>
            </div>
            <p className="font-inter text-[10px] md:text-xs mt-1 opacity-70 text-white italic tracking-wide">
              *Exclusive limited period offer for new students
            </p>
          </div>
        </div>

      </div>
    </motion.section>
  );
};

export default PromoBanner;