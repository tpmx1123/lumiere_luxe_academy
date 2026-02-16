import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Send, MessageCircle } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const LeadForm = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", phone: "", city: "", reason: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.city) {
      toast({ title: "Please fill all required fields", variant: "destructive" });
      return;
    }
    setLoading(true);
    setTimeout(() => {
      toast({ title: "Thank you!", description: "We'll call you back within 5 minutes." });
      setForm({ name: "", phone: "", city: "", reason: "" });
      setLoading(false);
    }, 1000);
  };

  const inputClass =
    "w-full bg-muted border border-border px-4 py-3.5 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors";

  return (
    <section id="apply" className="py-24 bg-gradient-dark relative">
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(circle at 50% 50%, hsl(38 72% 50%), transparent 70%)" }} />
      <div className="container mx-auto px-4 relative">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="font-body text-sm tracking-[0.4em] text-primary uppercase mb-4">Apply Now</p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
              Take the <span className="text-gradient-gold">First Step</span>
            </h2>
            <p className="font-body text-muted-foreground">
              Get a Callback Within 5 Minutes • Limited Seats Available
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            onSubmit={handleSubmit}
            className="glass-card p-8 space-y-5"
          >
            <input
              type="text"
              placeholder="Full Name *"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className={inputClass}
            />
            <input
              type="tel"
              placeholder="Phone Number *"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className={inputClass}
            />
            <input
              type="text"
              placeholder="City *"
              value={form.city}
              onChange={(e) => setForm({ ...form, city: e.target.value })}
              className={inputClass}
            />
            <textarea
              placeholder="Why do you want to join? (Optional)"
              value={form.reason}
              onChange={(e) => setForm({ ...form, reason: e.target.value })}
              rows={3}
              className={inputClass + " resize-none"}
            />
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-gold text-primary-foreground py-4 font-body text-sm tracking-[0.2em] uppercase hover:opacity-90 transition-opacity shadow-gold flex items-center justify-center gap-2 disabled:opacity-50"
            >
              <Send className="w-4 h-4" />
              {loading ? "Submitting..." : "Get a Callback Within 5 Minutes"}
            </button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <a
              href="tel:+919234569999"
              className="flex items-center gap-2 text-primary font-body text-sm tracking-wider hover:text-gold-light transition-colors"
            >
              <Phone className="w-4 h-4" />
              +91 9234569999
            </a>
            <a
              href="https://wa.me/919234569999"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-primary font-body text-sm tracking-wider hover:text-gold-light transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp Us
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LeadForm;
