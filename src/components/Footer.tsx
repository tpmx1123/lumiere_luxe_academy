import { Phone, Globe, MessageCircle } from "lucide-react";

const Footer = () => (
  <footer className="py-16 bg-background border-t border-gold/10">
    <div className="container mx-auto px-4 text-center">
      <h3 className="font-display text-2xl text-gradient-gold mb-2">LUMIÈRE LUXE</h3>
      <p className="font-serif text-sm tracking-[0.3em] text-muted-foreground mb-8">SALON BY SASHA</p>
      <p className="font-serif text-lg italic text-gold-light mb-8">
        Where Beginners Become Skilled Professionals
      </p>

      <div className="flex flex-wrap items-center justify-center gap-6 mb-8">
        <a href="tel:+919234569999" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-body text-sm">
          <Phone className="w-4 h-4" /> +91 9234569999
        </a>
        <a href="https://wa.me/919234569999" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-body text-sm">
          <MessageCircle className="w-4 h-4" /> WhatsApp
        </a>
        <a href="https://lumiereluxe.in/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-body text-sm">
          <Globe className="w-4 h-4" /> lumiereluxe.in
        </a>
      </div>

      <div className="border-t border-border pt-8">
        <p className="font-body text-xs text-muted-foreground">
          © {new Date().getFullYear()} Lumière Luxe Salon by Sasha. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
