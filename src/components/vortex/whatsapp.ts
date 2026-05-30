export const WHATSAPP_URL =
  "https://wa.me/5514997377300?text=" +
  encodeURIComponent("Olá VORTEX, vim pelo instagram e quero construir o site pra minha empresa!");

export const INSTAGRAM_URL = "https://instagram.com/vortex.webdesign";
export const INSTAGRAM_HANDLE = "@vortex.webdesign";

export function whatsappWithPlan(plan: string) {
  return (
    "https://wa.me/5514997377300?text=" +
    encodeURIComponent(`Olá VORTEX, vim pelo instagram e quero contratar o plano: ${plan}.`)
  );
}
