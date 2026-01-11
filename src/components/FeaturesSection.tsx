import { Clock, Shield, Heart, Smartphone } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const features = [
  {
    icon: Clock,
    title: "Atendimento 24h",
    description: "Suporte disponível a qualquer momento para você e sua família",
  },
  {
    icon: Shield,
    title: "Segurança Total",
    description: "Seus dados protegidos com as melhores práticas de segurança",
  },
  {
    icon: Heart,
    title: "Cuidado Humanizado",
    description: "Profissionais dedicados ao seu bem-estar e saúde",
  },
  {
    icon: Smartphone,
    title: "100% Digital",
    description: "Resolva tudo pelo celular, sem filas ou burocracia",
  },
];

const FeaturesSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="sobre" className="py-16 md:py-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div 
          ref={ref}
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4">
            Por que escolher a <span className="text-primary">Unimed Click</span>?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Oferecemos uma experiência completa de atendimento, combinando tecnologia e cuidado humano
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`bg-card rounded-xl p-6 text-center border border-border hover:border-primary/20 transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100 + 200}ms` }}
            >
              <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-semibold text-lg text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
