import { MessageCircle } from "lucide-react";
import { openWhatsApp } from "@/lib/whatsapp";

const FloatingWhatsApp = () => {
  return (
    <button
      onClick={() => openWhatsApp("default")}
      className="float-button pulse-ring group"
      aria-label="Abrir WhatsApp"
    >
      {/* Notification Badge */}
      <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold animate-bounce shadow-lg">
        1
      </span>
      <MessageCircle className="w-7 h-7 transition-transform group-hover:scale-110" fill="currentColor" />
    </button>
  );
};

export default FloatingWhatsApp;
