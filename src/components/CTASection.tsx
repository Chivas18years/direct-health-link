import { MessageCircle, ArrowRight } from "lucide-react";
import { openWhatsApp } from "@/lib/whatsapp";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section id="contato" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-gradient-hero rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-40 h-40 bg-white rounded-full -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-60 h-60 bg-white rounded-full translate-x-1/3 translate-y-1/3" />
          </div>

          <div className="relative z-10">
            <div className="w-16 h-16 rounded-2xl bg-primary-foreground/20 flex items-center justify-center mx-auto mb-6">
              <MessageCircle className="w-8 h-8 text-primary-foreground" />
            </div>
            
            <h2 className="text-2xl md:text-4xl font-bold text-primary-foreground mb-4">
              Precisa de ajuda agora?
            </h2>
            <p className="text-primary-foreground/90 text-lg mb-8 max-w-xl mx-auto">
              Nossa equipe está pronta para atender você pelo WhatsApp. 
              Rápido, fácil e sem burocracia.
            </p>
            
            <Button
              onClick={() => openWhatsApp("default")}
              size="lg"
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold px-8 py-6 text-lg rounded-full transition-all duration-300 hover:scale-105"
            >
              Iniciar Conversa
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
