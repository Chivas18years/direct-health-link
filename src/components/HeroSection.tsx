import { Search, FlaskConical, FileText, Stethoscope, ShieldCheck } from "lucide-react";
import ActionCard from "./ActionCard";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const HeroSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.05);

  const actions = [
    {
      icon: FlaskConical,
      title: "Resultados de Exames",
      description: "Acesse seus resultados de forma rápida e segura",
      action: "exames" as const,
    },
    {
      icon: FileText,
      title: "2ª Via de Boleto",
      description: "Solicite uma nova via do seu boleto",
      action: "boleto" as const,
    },
    {
      icon: Stethoscope,
      title: "Guia Médico",
      description: "Encontre médicos e especialistas",
      action: "guia" as const,
    },
    {
      icon: ShieldCheck,
      title: "Autorizações",
      description: "Solicite e acompanhe suas autorizações",
      action: "autorizacao" as const,
    },
  ];

  return (
    <section id="inicio" className="pt-24 md:pt-32 pb-16 md:pb-24">
      <div className="container mx-auto px-4">
        {/* Hero Content */}
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 md:mb-6 animate-fade-up leading-tight">
            Como podemos{" "}
            <span className="text-gradient">ajudar você</span> agora?
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 animate-fade-up-delay-1">
            Atendimento rápido e humanizado ao seu alcance
          </p>

          {/* Search Bar (Visual Only) */}
          <div className="relative max-w-xl mx-auto animate-fade-up-delay-2">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Busque por serviços, médicos ou procedimentos..."
              className="search-input pl-14"
              readOnly
            />
          </div>
        </div>

        {/* Action Cards Grid */}
        <div 
          ref={ref}
          id="servicos" 
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto"
        >
          {actions.map((action, index) => (
            <div
              key={action.action}
              className={`transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <ActionCard
                icon={action.icon}
                title={action.title}
                description={action.description}
                action={action.action}
                delay={index}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
