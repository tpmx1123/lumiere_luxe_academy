import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Send, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast.jsx";
import applyImage from "@/assets/apply-bg.png"; 

const LeadForm = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", phone: "", city: "", reason: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.city) {
      toast({ title: "Required fields missing", variant: "destructive" });
      return;
    }
    setLoading(true);
    setTimeout(() => {
      toast({ title: "Application Received", description: "Expect a callback within 5 minutes." });
      setForm({ name: "", phone: "", city: "", reason: "" });
      setLoading(false);
    }, 1000);
  };

  const inputClass =
    "w-full border-b border-[#906B3A] py-3 font-inter text-sm text-[#2C2521] placeholder:text-[#7C716A]/40 focus:outline-none focus:border-b-2 transition-all duration-300 bg-transparent";

  return (
    <section id="apply" className="py-10 px-4 md:px-6 lg:px-4 relative overflow-visible" style={{ background: '#FFF7ED' }}>
      {/* Removed the absolute black background accent here */}
      
      <div className="container mx-auto relative z-10">
        {/* Main Card */}
        <div className="flex flex-col lg:flex-row items-stretch bg-white shadow-xl rounded-[2rem] overflow-hidden min-h-[700px] border border-[#906B3A]/10">
          
          {/* Left Side: Form Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 p-8 md:p-12 lg:p-14 flex flex-col justify-between"
          >
            <div>
              <div className="mb-6">
                <p className="font-inter text-[10px] tracking-[0.5em] uppercase mb-3 font-bold" style={{ color: '#906B3A' }}>Application</p>
                <h2 className="font-playfair text-3xl md:text-5xl font-medium leading-tight mb-2" style={{ color: '#2C2521' }}>
                  Start Your <br />
                  <span className="italic" style={{ color: '#906B3A' }}>Professional Journey</span>
                </h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="relative">
                  <p className="text-[11px] text-[#2C2521] font-black uppercase tracking-[0.15em] mb-1">Full Name *</p>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className={inputClass}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative">
                    <p className="text-[11px] text-[#2C2521] font-black uppercase tracking-[0.15em] mb-1">Phone Number *</p>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className={inputClass}
                    />
                  </div>
                  <div className="relative">
                    <p className="text-[11px] text-[#2C2521] font-black uppercase tracking-[0.15em] mb-1">City *</p>
                    <input
                      type="text"
                      value={form.city}
                      onChange={(e) => setForm({ ...form, city: e.target.value })}
                      className={inputClass}
                    />
                  </div>
                </div>

                <div className="relative">
                  <p className="text-[11px] text-[#2C2521] font-black uppercase tracking-[0.15em] mb-1">Your aspirations (Optional)</p>
                  <textarea
                    value={form.reason}
                    onChange={(e) => setForm({ ...form, reason: e.target.value })}
                    rows={2}
                    className={inputClass + " resize-none"}
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={loading}
                  className="group w-full py-4 mt-2 rounded-full font-inter text-[11px] font-bold tracking-[0.3em] uppercase transition-all duration-500 hover:tracking-[0.4em] flex items-center justify-center gap-3 disabled:opacity-50 shadow-md"
                  style={{ backgroundColor: '#906B3A', color: '#FFF7ED' }}
                >
                  {loading ? "Registering..." : "Request a Callback"}
                  <Send className="w-3 h-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </div>

            {/* Bottom Contact Buttons */}
            <div className="mt-8 pt-6 border-t flex flex-col sm:flex-row gap-4" style={{ borderColor: 'rgba(144, 107, 58, 0.2)' }}>
               <a 
                href="tel:+919234569999" 
                className="flex items-center justify-center gap-3 px-6 py-4 rounded-full bg-[#906B3A] text-white font-inter text-[12px] font-bold tracking-widest uppercase hover:opacity-90 transition-all duration-300 flex-1 shadow-md"
               >
                  <Phone className="w-4 h-4" /> +91 9234569999
               </a>
               <a 
                href="https://wa.me/919234569999" 
                target="_blank" 
                className="flex items-center justify-center gap-3 px-6 py-4 rounded-full bg-[#25D366] text-white font-inter text-[12px] font-bold tracking-widest uppercase hover:opacity-90 transition-all duration-300 flex-1 shadow-md"
               >
                  <MessageCircle className="w-4 h-4" /> WhatsApp Support
               </a>
            </div>
          </motion.div>

          {/* Right Side: Visual Section */}
          <motion.div 
            className="w-full lg:w-1/2 relative min-h-[450px] lg:min-h-full"
          >
            {/* Removed the black overlays here */}
            <img 
              src={applyImage} 
              alt="Professional Stylist Training" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Adjusted text color and background for visibility without the black shade */}
            <div className="absolute inset-0 z-20 flex flex-col justify-end p-10 lg:p-16 ">
               
               <h3 className="font-playfair text-3xl md:text-5xl italic leading-tight" style={{ color: '#fbfafaff', textShadow: '0 4px 30px hsl(38 72% 50% / 0.15)' }}>
                "The future of hair <br /> styling starts here."
               </h3>
            </div>
          </motion.div>
        
        </div>
      </div>
    </section>
  );
};

export default LeadForm;