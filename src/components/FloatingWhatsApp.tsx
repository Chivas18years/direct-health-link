import { MessageCircle } from "lucide-react";
import { openWhatsApp } from "@/lib/whatsapp";

const FloatingWhatsApp = () => {
  return (
    <button
      onClick={() => openWhatsApp("default")}
      className="float-button pulse-ring"
      aria-label="Abrir WhatsApp"
    >
      <MessageCircle className="w-7 h-7" fill="currentColor" />
    </button>
  );
};

export default FloatingWhatsApp;
