import { motion } from "framer-motion";
import { Tag, ArrowRight, MessageCircle } from "lucide-react";

const PromoBanner = () => {
  const scrollToForm = () => {
    const formElement = document.getElementById("apply"); // Updated to LeadForm ID
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="py-6 md:py-8 px-6 md:px-14"
      style={{ background: "linear-gradient(90deg, #906B3A 0%, #7a5a2f 100%)" }}
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left Side: Content */}
        <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
          <div className="p-3 rounded-full bg-white/10 hidden md:block">
            <Tag className="w-6 h-6" style={{ color: "#FFF7ED" }} />
          </div>
          
          <div className="flex flex-col">
            <div className="flex flex-col md:flex-row items-center md:items-baseline gap-1 md:gap-3">
              <span className="font-playfair text-2xl md:text-3xl font-semibold text-white">
                Get up to 30% Off
              </span>
              <span className="font-inter text-xs md:text-sm uppercase tracking-widest opacity-80 text-white">
                on enrollment
              </span>
            </div>
            <p className="font-inter text-[10px] md:text-xs mt-1 opacity-70 text-white italic">
              *Exclusive limited period offer for new students
            </p>
          </div>
        </div>

        {/* Right Side: Button */}
        <button
          onClick={scrollToForm}
          className="group w-full md:w-auto flex items-center justify-center gap-2 bg-[#FFF7ED] px-8 py-4 md:py-3 rounded-full transition-all duration-300 hover:bg-white active:scale-95 shadow-xl"
        >
          <MessageCircle className="w-4 h-4 text-[#906B3A]" />
          <span className="font-inter font-bold text-xs uppercase tracking-widest text-[#906B3A]">
            Fill Form
          </span>
          <ArrowRight className="w-4 h-4 text-[#906B3A] transition-transform group-hover:translate-x-1" />
        </button>

      </div>
    </motion.section>
  );
};

export default PromoBanner;