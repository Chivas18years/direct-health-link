import { Menu, X, Phone } from "lucide-react";
import { useState, useEffect } from "react";
import { openWhatsApp } from "@/lib/whatsapp";
import { Button } from "@/components/ui/button";
import logoUnimed from "@/assets/logo-unimed.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Início", href: "#inicio" },
    { label: "Serviços", href: "#servicos" },
    { label: "Sobre", href: "#sobre" },
    { label: "Contato", href: "#contato" },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
      isScrolled 
        ? "bg-card/80 backdrop-blur-xl shadow-lg border-b border-border/50" 
        : "bg-card/95 backdrop-blur-md border-b border-border"
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#inicio" className="flex items-center">
            <img 
              src={logoUnimed} 
              alt="Unimed Click" 
              className="h-10 md:h-12 w-auto"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-muted-foreground hover:text-primary font-medium transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Button - Desktop */}
          <div className="hidden md:block">
            <Button
              onClick={() => openWhatsApp("default")}
              className="btn-whatsapp flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              Fale Conosco
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-foreground hover:bg-muted rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border animate-fade-up">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-muted-foreground hover:text-primary hover:bg-muted px-4 py-3 rounded-lg font-medium transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
              <Button
                onClick={() => {
                  openWhatsApp("default");
                  setIsMenuOpen(false);
                }}
                className="btn-whatsapp mt-2 flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                Fale Conosco
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
