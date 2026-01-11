// WhatsApp Configuration
export const WHATSAPP_NUMBER = "5511961408162"; // Substitua pelo número real

export interface WhatsAppMessage {
  action: string;
  customMessage?: string;
}

const defaultMessages: Record<string, string> = {
  default: "Olá! Vim pelo portal Unimed Click e gostaria de atendimento.",
  exames: "Olá! Vim pelo portal Unimed Click e gostaria de consultar meus resultados de exames.",
  boleto: "Olá! Vim pelo portal Unimed Click e preciso da 2ª via do meu boleto.",
  guia: "Olá! Vim pelo portal Unimed Click e gostaria de encontrar um médico ou especialista.",
  autorizacao: "Olá! Vim pelo portal Unimed Click e preciso de ajuda com autorizações.",
};

export function openWhatsApp(action: keyof typeof defaultMessages = "default", customMessage?: string): void {
  const message = customMessage || defaultMessages[action] || defaultMessages.default;
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
  
  window.open(whatsappUrl, "_blank", "noopener,noreferrer");
}

export function getWhatsAppUrl(action: keyof typeof defaultMessages = "default"): string {
  const message = defaultMessages[action] || defaultMessages.default;
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
}
