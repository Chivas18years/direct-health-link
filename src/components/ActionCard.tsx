import { LucideIcon } from "lucide-react";
import { openWhatsApp } from "@/lib/whatsapp";

interface ActionCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  action: "exames" | "boleto" | "guia" | "autorizacao";
  delay?: number;
}

const ActionCard = ({ icon: Icon, title, description, action, delay = 0 }: ActionCardProps) => {
  const delayClasses = [
    "animate-fade-up-delay-1",
    "animate-fade-up-delay-2",
    "animate-fade-up-delay-3",
    "animate-fade-up-delay-4",
  ];

  return (
    <button
      onClick={() => openWhatsApp(action)}
      className={`card-healthcare text-left w-full group cursor-pointer ${delayClasses[delay] || ""}`}
    >
      <div className="flex flex-col items-center text-center gap-4">
        <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
          <Icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
        </div>
        <div>
          <h3 className="font-semibold text-lg text-foreground mb-1">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </div>
    </button>
  );
};

export default ActionCard;
