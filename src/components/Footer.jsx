import { Phone, Mail, MessageCircle, MapPin, Instagram, Facebook, Youtube } from "lucide-react";
import logo from "@/assets/logo.png";
import footerImage from "@/assets/footer_image.png";
import { useToast } from "@/hooks/use-toast.jsx";

const GOOGLE_MAPS_URL = "https://maps.google.com"; // Updated to valid placeholder
const INSTAGRAM_URL = "https://www.instagram.com/lumiereluxe_sasha";
const FACEBOOK_URL = "https://www.facebook.com/profile.php?id=61581971356937";

const footerLinks = [
  { label: "Hair Styling", id: "course" },
  { label: "Curriculum", id: "curriculum" },
  { label: "Careers", id: "careers" },
  { label: "Apply Now", id: "enroll-form" }, // Matches the ID used in LeadForm
];

const Footer = () => {
  const { toast } = useToast();
  
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleYoutubeClick = () => {
    toast({ title: "Coming soon", description: "YouTube channel is coming soon." });
  };

  return (
    <footer className="py-12 md:py-20 px-4 md:px-6 lg:px-14 relative overflow-hidden" style={{ background: "#906B3A" }}>
      
      {/* Background Image Overlay - Higher opacity for better texture visibility */}
      <div className="absolute inset-0 opacity-30 z-10 pointer-events-none">
        <img src={footerImage} alt="" className="w-full h-full object-cover" aria-hidden="true" />
      </div>

      <div className="container mx-auto relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Column 1: Branding & About */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1 flex flex-col items-center md:items-start text-center md:text-left">
            <img
              src={logo}
              alt="Lumière Luxe Sasha"
              className="h-16 md:h-20 w-auto mb-6 object-contain"
            />
            <p className="font-inter text-sm italic max-w-xs mb-8 leading-relaxed" style={{ color: "rgba(255,247,237,0.9)" }}>
              Premier Hair & Beauty Academy — Where passion meets precision, and beginners become masters.
            </p>
            
            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {[
                { icon: Instagram, url: INSTAGRAM_URL, type: 'link' },
                { icon: Facebook, url: FACEBOOK_URL, type: 'link' },
                { icon: Youtube, onClick: handleYoutubeClick, type: 'button' }
              ].map((social, i) => (
                social.type === 'link' ? (
                  <a
                    key={i}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-full bg-white/5 hover:bg-white/20 transition-all border border-white/10 hover:border-white/30"
                    style={{ color: "#FFF7ED" }}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ) : (
                  <button
                    key={i}
                    onClick={social.onClick}
                    className="p-2.5 rounded-full bg-white/5 hover:bg-white/20 transition-all border border-white/10 hover:border-white/30"
                    style={{ color: "#FFF7ED" }}
                  >
                    <social.icon className="w-5 h-5" />
                  </button>
                )
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links (Visible in 2-col grid on mobile) */}
          <div className="col-span-1">
            <h4 className="font-inter font-bold text-[10px] md:text-xs tracking-[0.2em] uppercase mb-6" style={{ color: "#FFF7ED" }}>
              Sitemap
            </h4>
            <ul className="space-y-4">
              {footerLinks.map(({ label, id }) => (
                <li key={id}>
                  <button 
                    onClick={() => scrollTo(id)} 
                    className="font-inter text-sm hover:translate-x-1 hover:text-white transition-all inline-block opacity-80 hover:opacity-100" 
                    style={{ color: "#FFF7ED" }}
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="col-span-1">
            <h4 className="font-inter font-bold text-[10px] md:text-xs tracking-[0.2em] uppercase mb-6" style={{ color: "#FFF7ED" }}>
              Contact
            </h4>
            <div className="space-y-5">
              <a href="tel:+919234569999" className="flex items-center gap-3 font-inter text-sm group" style={{ color: "rgba(255,247,237,0.8)" }}>
                <Phone className="w-4 h-4 shrink-0 text-[#FFF7ED]" /> 
                <span className="group-hover:text-white transition-colors">+91 92345 69999</span>
              </a>
              <a href="https://wa.me/919234569999" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 font-inter text-sm group" style={{ color: "rgba(255,247,237,0.8)" }}>
                <MessageCircle className="w-4 h-4 shrink-0 text-[#FFF7ED]" /> 
                <span className="group-hover:text-white transition-colors">WhatsApp Support</span>
              </a>
              <a href="mailto:lumiereluxe0030@gmail.com" className="flex items-center gap-3 font-inter text-sm group" style={{ color: "rgba(255,247,237,0.8)" }}>
                <Mail className="w-4 h-4 shrink-0 text-[#FFF7ED]" /> 
                <span className="group-hover:text-white transition-colors italic">lumiereluxe0030@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Column 4: Location */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1 pt-6 lg:pt-0 border-t lg:border-t-0 border-white/10 lg:border-none">
            <h4 className="font-inter font-bold text-[10px] md:text-xs tracking-[0.2em] uppercase mb-6" style={{ color: "#FFF7ED" }}>
              Academy Location
            </h4>
            <a
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-3 font-inter text-sm leading-relaxed group"
              style={{ color: "rgba(255,247,237,0.7)" }}
            >
              <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5 text-[#FFF7ED]" />
              <span className="group-hover:text-white transition-colors">
                Ground floor 3-184, Beside Hotel Serenity La Serene, <br className="hidden lg:block" />
                Kavuri hills, Madhapur, <br />
                Hyderabad, Telangana.
              </span>
            </a>
          </div>
        </div>

        {/* Bottom Bar: Legal & Credit */}
        <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4" style={{ borderColor: "rgba(255, 247, 237, 0.15)" }}>
          <p className="font-inter text-[10px] md:text-xs tracking-wider opacity-60 text-center md:text-left" style={{ color: "#FFF7ED" }}>
            © {new Date().getFullYear()} Lumière Luxe Academy by Sasha. All rights reserved.
          </p>
          <div className="flex gap-6 opacity-60">
            <button className="text-[10px] uppercase tracking-tighter hover:text-white" style={{ color: "#FFF7ED" }}>Privacy Policy</button>
            <button className="text-[10px] uppercase tracking-tighter hover:text-white" style={{ color: "#FFF7ED" }}>Terms of Service</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;