import { Phone, Globe, MessageCircle } from "lucide-react";
import footerImage from "@/assets/footer_image.png";

const Footer = () => (
  <footer className="py-6 relative overflow-hidden" style={{ background: '#906B3A' }}>
    {/* Footer Background Image */}
    <div className="absolute inset-0 opacity-80 z-10">
      <img 
        src={footerImage} 
        alt="Lumière Luxe Footer" 
        className="w-full h-full object-contain"
      />
    </div>
    
    <div className="container mx-auto px-4 text-center relative z-20">
      <h3 className="font-playfair text-2xl mb-2" style={{ color: '#FFF7ED' }}>LUMIÈRE LUXE</h3>
      <p className="font-inter text-sm tracking-[0.3em] mb-8" style={{ color: '#FFF7ED' }}>SALON BY SASHA</p>
      <p className="font-inter text-lg italic mb-8" style={{ color: '#FFF7ED' }}>
        Where Beginners Become Skilled Professionals
      </p>

      <div className="flex flex-wrap items-center justify-center gap-6 mb-8">
        <a href="tel:+919234569999" className="flex items-center gap-2 hover:opacity-80 transition-opacity font-inter text-sm" style={{ color: '#FFF7ED' }}>
          <Phone className="w-4 h-4" /> +91 9234569999
        </a>
        <a href="https://wa.me/919234569999" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:opacity-80 transition-opacity font-inter text-sm" style={{ color: '#FFF7ED' }}>
          <MessageCircle className="w-4 h-4" /> WhatsApp
        </a>
        <a href="https://lumiereluxe.in/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:opacity-80 transition-opacity font-inter text-sm" style={{ color: '#FFF7ED' }}>
          <Globe className="w-4 h-4" /> lumiereluxe.in
        </a>
      </div>

      <div className="border-t pt-8" style={{ borderColor: 'rgba(255, 247, 237, 0.3)' }}>
        <p className="font-inter text-xs" style={{ color: '#FFF7ED' }}>
          © {new Date().getFullYear()} Lumière Luxe Salon by Sasha. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
