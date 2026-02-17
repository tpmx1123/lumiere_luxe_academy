import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Send, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast.jsx";
import applyImage from "@/assets/apply-bg.png"; 

const COURSES = [
  "Professional Hair Styling",
  "Hair Cutting & Styling",
  "Hair Coloring & Highlights",
  "Hair & Scalp Treatments",
  "Blow Dry & Styling",
  "Salon Management",
];

const LeadForm = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({
    title: "Mr",
    name: "",
    phone: "",
    city: "",
    course: "",
    reason: "",
    agreePrivacy: false,
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.city) {
      toast({ title: "Required fields missing", variant: "destructive" });
      return;
    }
    if (!form.agreePrivacy) {
      toast({ title: "Please agree to the Privacy Policy", variant: "destructive" });
      return;
    }
    setLoading(true);
    setTimeout(() => {
      toast({ title: "Request Received", description: "Expect a quick callback within 5 minutes." });
      setForm({ title: "Mr", name: "", phone: "", city: "", course: "", reason: "", agreePrivacy: false });
      setLoading(false);
    }, 1000);
  };

  const inputClass =
    "w-full border-b border-[#906B3A] py-3 font-inter text-sm text-[#2C2521] placeholder:text-[#7C716A]/40 focus:outline-none focus:border-b-2 transition-all duration-300 bg-transparent";

  return (
    <section id="enroll-form" className="py-10 md:py-16 px-4 md:px-6 lg:px-4 relative overflow-visible" style={{ background: '#FFF7ED' }}>
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-stretch bg-white shadow-xl rounded-[1.5rem] md:rounded-[2rem] overflow-hidden min-h-[auto] lg:min-h-[700px] border border-[#906B3A]/10">
          
          {/* Top (Mobile) / Right (Desktop): Visual Section */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 relative min-h-[250px] md:min-h-[450px] lg:min-h-full order-1 lg:order-2"
          >
            <img 
              src={applyImage} 
              alt="Professional Stylist Training" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Gradient Overlay for text readability on mobile */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent lg:bg-none" />
            
            <div className="absolute inset-0 z-20 flex flex-col justify-end p-6 md:p-10 lg:p-16">
              <h3 className="font-playfair text-2xl md:text-5xl italic leading-tight text-white lg:text-[#fbfafaff]" style={{ textShadow: '0 4px 20px rgba(0,0,0,0.3)' }}>
                "The future of hair <br className="hidden md:block" /> styling starts here."
              </h3>
            </div>
          </motion.div>

          {/* Bottom (Mobile) / Left (Desktop): Form Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 p-6 md:p-12 lg:p-14 flex flex-col justify-between order-2 lg:order-1"
          >
            <div>
              <div className="mb-8">
                <p className="font-inter text-[10px] tracking-[0.4em] uppercase mb-2 font-bold" style={{ color: '#906B3A' }}>Quick Call Back</p>
                <h2 className="font-playfair text-3xl md:text-4xl font-medium leading-tight mb-2" style={{ color: '#2C2521' }}>
                  Begin Your Journey
                </h2>
                <p className="font-inter text-xs md:text-sm" style={{ color: '#7C716A' }}>Fill the form below and we'll reach out within 5 minutes.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="flex flex-row gap-4 items-end">
                  <div className="w-20 md:w-24">
                    <p className="text-[10px] text-[#2C2521] font-black uppercase tracking-widest mb-1">Title</p>
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
                    <p className="text-[10px] text-[#2C2521] font-black uppercase tracking-widest mb-1">Full Name *</p>
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className={inputClass}
                      placeholder="Enter name"
                    />
                  </div>
                </div>

                <div>
                  <p className="text-[10px] text-[#2C2521] font-black uppercase tracking-widest mb-1">Select Course</p>
                  <select
                    value={form.course}
                    onChange={(e) => setForm({ ...form, course: e.target.value })}
                    className={inputClass + " cursor-pointer"}
                  >
                    <option value="">Choose a course</option>
                    {COURSES.map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-[10px] text-[#2C2521] font-black uppercase tracking-widest mb-1">Phone Number *</p>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className={inputClass}
                      placeholder="+91"
                    />
                  </div>
                  <div>
                    <p className="text-[10px] text-[#2C2521] font-black uppercase tracking-widest mb-1">City *</p>
                    <input
                      type="text"
                      value={form.city}
                      onChange={(e) => setForm({ ...form, city: e.target.value })}
                      className={inputClass}
                      placeholder="Your city"
                    />
                  </div>
                </div>

                <label className="flex items-start gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={form.agreePrivacy}
                    onChange={(e) => setForm({ ...form, agreePrivacy: e.target.checked })}
                    className="mt-1 w-4 h-4 rounded border-[#906B3A] accent-[#906B3A]"
                  />
                  <span className="font-inter text-[11px] leading-tight" style={{ color: "#7C716A" }}>
                    I agree to receive updates via call/WhatsApp and accept the Privacy Policy.
                  </span>
                </label>
                
                <button
                  type="submit"
                  disabled={loading}
                  className="group w-full py-4 rounded-full font-inter text-[11px] font-bold tracking-[0.2em] uppercase transition-all duration-300 active:scale-95 flex items-center justify-center gap-3 disabled:opacity-50 shadow-lg"
                  style={{ backgroundColor: '#906B3A', color: '#FFF7ED' }}
                >
                  {loading ? "Processing..." : "Submit Application"}
                  <Send className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>

            {/* Support Buttons */}
            <div className="mt-10 pt-6 border-t flex flex-col sm:flex-row gap-3" style={{ borderColor: 'rgba(144, 107, 58, 0.2)' }}>
               <a 
                href="tel:+919234569999" 
                className="flex items-center justify-center gap-3 px-6 py-4 rounded-full bg-[#2C2521] text-white font-inter text-[11px] font-bold tracking-widest uppercase hover:bg-black transition-all flex-1"
               >
                 <Phone className="w-4 h-4" /> Call Now
               </a>
               <a 
                href="https://wa.me/919234569999" 
                target="_blank" 
                className="flex items-center justify-center gap-3 px-6 py-4 rounded-full bg-[#25D366] text-white font-inter text-[11px] font-bold tracking-widest uppercase hover:opacity-90 transition-all flex-1"
               >
                 <MessageCircle className="w-4 h-4" /> WhatsApp
               </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LeadForm;