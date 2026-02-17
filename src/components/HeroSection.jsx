import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Phone, ArrowDown, Send, MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-salon.jpg";
import { useToast } from "@/hooks/use-toast.jsx";

const HERO_COURSES = [
  "Professional Hair Styling Course",
  "Hair Cutting & Styling Course",
  "Hair Coloring & Highlights Course",
  "Hair & Scalp Treatments Course",
  "Blow Dry & Styling Course",
  "Salon Management Course",
];

const HeroSection = () => {
  const { toast } = useToast();
  const [formVisible, setFormVisible] = useState(false);
  const [form, setForm] = useState({ title: "Mr", name: "", phone: "", course: "", city: "" });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setFormVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  const openWhatsApp = () => {
    window.open("https://wa.me/919234569999", "_blank");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.phone) {
      toast({ title: "Name and phone required", variant: "destructive" });
      return;
    }
    setLoading(true);
    setTimeout(() => {
      toast({ title: "Request Received", description: "Expect a quick callback within 5 minutes." });
      setForm({ title: "Mr", name: "", phone: "", course: "", city: "" });
      setLoading(false);
    }, 1000);
  };

  const inputClass =
    "w-full border-b border-[#906B3A] py-2.5 font-inter text-sm text-[#2C2521] placeholder:text-[#7C716A]/50 focus:outline-none focus:border-b-2 bg-white/80 rounded-t";

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-background/75" />

      <div className="relative z-10 container mx-auto px-4 py-24 flex flex-col lg:flex-row items-center gap-12 lg:gap-16 min-h-screen">
        {/* Left: headline & CTA */}
        <div className="flex-1 text-center lg:text-left">
          <motion.div
            initial={{ y: 40 }}
            animate={{ y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <p className="font-inter text-base uppercase mb-2 font-bold mt-24 tracking-[0.2em]" style={{ color: "#FFF7ED" }}>
              Premier Hair & Beauty Academy
            </p>
            <h1 className="font-playfair text-3xl sm:text-5xl md:text-7xl font-bold leading-tight mb-4">
              <span style={{ color: "#ffffffff" }}>Lumière </span>
              <span style={{ color: "#906B3A" }}>Luxe</span>
              <span style={{ color: "#ffffffff" }}> Academy</span>
            </h1>
            <p className="font-playfair text-xl sm:text-2xl md:text-2xl mt-4 mb-4 max-w-2xl mx-auto lg:mx-0" style={{ color: "#ffffffff" }}>
              Be A Part Of The High-Paying Beauty & Hair Industry
            </p>
            
          </motion.div>

          <motion.div
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap justify-center lg:justify-start gap-4 text-sm font-inter tracking-wider "
            style={{ color: "#7C716A" }}
          >
            {["No Experience Required", "Real Salon Training", "Job-Ready Certification"].map((item) => (
              <span key={item} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#906B3A" }} />
                {item}
              </span>
            ))}
          </motion.div>

          
          <motion.p
            initial={{ y: 10 }}
            animate={{ y: 0 }}
            transition={{ delay: 1.2 }}
            className="mt-6 font-inter text-sm tracking-wider"
            style={{ color: "#ffffffff" }}
          >
            Admissions Open – Limited Seats Per Batch • 100% Hands-On Training
          </motion.p>
        </div>

        {/* Right: form (appears after 2s, no opacity transition) */}
        {formVisible && (
          <motion.div
            initial={{ x: 24 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="w-full lg:w-[380px] flex-shrink-0"
          >
            <div
              className="rounded-2xl shadow-2xl overflow-hidden border p-6"
              style={{ backgroundColor: "#FFF7ED", borderColor: "#906B3A" }}
            >
              <p className="font-inter text-xs tracking-[0.2em] uppercase font-bold mb-4" style={{ color: "#906B3A" }}>
                Get Quick Call Back
              </p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex gap-3 items-end">
                  <div className="w-20">
                    <label className="text-[10px] font-bold uppercase tracking-wider block mb-1" style={{ color: "#2C2521" }}>Title</label>
                    <select
                      value={form.title}
                      onChange={(e) => setForm({ ...form, title: e.target.value })}
                      className={inputClass + " cursor-pointer"}
                    >
                      <option value="Mr">Mr.</option>
                      <option value="Ms">Ms.</option>
                      <option value="Mrs">Mrs.</option>
                    </select>
                  </div>
                  <div className="flex-1">
                    <label className="text-[10px] font-bold uppercase tracking-wider block mb-1" style={{ color: "#2C2521" }}>Name *</label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className={inputClass}
                      placeholder="Your name"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-[10px] font-bold uppercase tracking-wider block mb-1" style={{ color: "#2C2521" }}>Phone *</label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className={inputClass}
                    placeholder="10-digit mobile"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-bold uppercase tracking-wider block mb-1" style={{ color: "#2C2521" }}>Course</label>
                  <select
                    value={form.course}
                    onChange={(e) => setForm({ ...form, course: e.target.value })}
                    className={inputClass + " cursor-pointer"}
                  >
                    <option value="">Select course</option>
                    {HERO_COURSES.map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="text-[10px] font-bold uppercase tracking-wider block mb-1" style={{ color: "#2C2521" }}>City</label>
                  <input
                    type="text"
                    value={form.city}
                    onChange={(e) => setForm({ ...form, city: e.target.value })}
                    className={inputClass}
                    placeholder="Your city"
                  />
                </div>
                <div className="flex gap-3 pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="flex-1 py-3 rounded-full font-inter text-xs font-bold tracking-widest uppercase flex items-center justify-center gap-2 disabled:opacity-60"
                    style={{ backgroundColor: "#906B3A", color: "#FFF7ED" }}
                  >
                    {loading ? "Sending..." : "Request Callback"}
                    <Send className="w-3.5 h-3.5" />
                  </button>
                  <button
                    type="button"
                    onClick={openWhatsApp}
                    className="px-4 py-3 rounded-full flex items-center justify-center border transition-colors hover:bg-green-50"
                    style={{ borderColor: "#25D366", color: "#25D366" }}
                  >
                    <MessageCircle className="w-5 h-5" />
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default HeroSection;