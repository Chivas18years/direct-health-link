import { Heart } from "lucide-react";
import logoUnimed from "@/assets/logo-unimed.png";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src={logoUnimed}
              alt="Unimed Click"
              className="h-8 md:h-10 w-auto"
            />
          </div>

          {/* Copyright */}
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <span>Feito com</span>
            <Heart className="w-4 h-4 text-primary fill-primary" />
            <span>para cuidar de você</span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 text-sm">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Privacidade
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Termos
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
