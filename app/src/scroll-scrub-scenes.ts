import { createElement } from "react";
import type {
  ScrollScrubScene,
  ScrollScrubTheme,
} from "@/components/scroll-scrub/scroll-scrub";

export const scrollScrubTheme: ScrollScrubTheme = {
  accent: "#E2EC55",
  background: "#153F30",
  ink: "#F5F8F1",
  muted: "#D0DECF",
};

const whatsappUrl =
  "https://wa.me/5553991086944?text=Ol%C3%A1%21%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%20jardinagem.";

export const scrollScrubScenes: ScrollScrubScene[] = [
  {
    body: "Roçada de terrenos, limpeza de quintais e manutenção de jardins em Pelotas e região.",
    clip: "/assets/world/scene-01.mp4",
    id: "inicio",
    kicker: "MORALES JARDINAGEM",
    label: "Início",
    mobileClip: "/assets/world/scene-01-mobile.mp4",
    mobilePoster: "/assets/world/scene-01-mobile-poster.png",
    poster: "/assets/world/scene-01-poster.png",
    actions: createElement(
      "a",
      { className: "hero-contact", href: whatsappUrl, target: "_blank", rel: "noreferrer" },
      createElement("span", { className: "hero-contact__symbol", "aria-hidden": true }, "↗"),
      createElement("span", null, "Solicitar orçamento"),
    ),
    align: "left",
    scroll: 1.45,
    objectPosition: "center center",
    mobileObjectPosition: "center center",
    title: "Seu jardim merece cuidado.",
  },
];
