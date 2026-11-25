import { createFileRoute } from "@tanstack/react-router";
import { ScrollScrub } from "@/components/scroll-scrub/scroll-scrub";
import { StructuredData } from "@/components/StructuredData";
import { scrollScrubScenes, scrollScrubTheme } from "@/scroll-scrub-scenes";

const WHATSAPP = "https://wa.me/5553991086944?text=Ol%C3%A1%21%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%20jardinagem.";
const PHONE = "(53) 99108-6944";

export const Route = createFileRoute("/")({
  head: () => ({
    links: [{ rel: "canonical", href: "https://morales-jardinagem.netlify.app" }],
    meta: [
      { title: "Morales Jardinagem | Jardinagem em Pelotas e região" },
      {
        name: "description",
        content:
          "Roçada de terrenos, limpeza de quintais, jardinagem, pequenos reparos e manutenção de jardins em Pelotas e região. Solicite seu orçamento pelo WhatsApp.",
      },
    ],
  }),
  component: Index,
});

function BrandMark() {
  return (
    <a className="brand-mark" href="#inicio" aria-label="Morales Jardinagem, início">
      <img
        src="/assets/brand/logo-wordmark.webp"
        alt="Morales Jardinagem"
        width="700"
        height="420"
      />
    </a>
  );
}

function WhatsAppGlyph() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
      <path
        d="M20 11.7a8 8 0 0 1-11.8 7L4 20l1.3-4A8 8 0 1 1 20 11.7Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 8.5c.2-.4.4-.4.7-.4h.5c.2 0 .3.1.4.4l.7 1.5c.1.2.1.4-.1.6l-.6.7c-.2.2-.2.4 0 .6.4.7 1.1 1.4 1.8 1.8.2.1.4.1.6-.1l.7-.8c.2-.2.4-.2.6-.1l1.5.7c.3.1.4.3.4.5 0 .4-.2 1-.6 1.3-.4.4-1 .6-1.6.5-1-.1-2.3-.7-3.7-2.1-1.4-1.4-2-2.7-2.1-3.7-.1-.6.1-1.2.5-1.6Z"
        fill="currentColor"
      />
    </svg>
  );
}

const services = [
  {
    number: "01",
    title: "Roçada de terrenos",
    detail: "Cuidado de áreas externas e terrenos com vegetação alta.",
  },
  {
    number: "02",
    title: "Limpeza de quintais",
    detail: "Mais organização e cuidado para o espaço ao redor da casa.",
  },
  {
    number: "03",
    title: "Jardinagem",
    detail: "Atenção aos espaços verdes e aos detalhes do jardim.",
  },
  {
    number: "04",
    title: "Pequenos reparos",
    detail: "Ajustes simples para deixar a área externa em ordem.",
  },
  {
    number: "05",
    title: "Manutenção de jardins",
    detail: "Cuidados para conservar o jardim bonito e bem cuidado.",
  },
];

function Index() {
  return (
    <main className="morales-site">
      <StructuredData json={JSON.stringify({
        "@context": "https://schema.org",
        "@type": "HomeAndConstructionBusiness",
        name: "Morales Jardinagem",
        url: "https://morales-jardinagem.netlify.app",
        telephone: "+55 53 99108-6944",
        image: "https://morales-jardinagem.netlify.app/assets/og-morales.png",
        description: "Roçada de terrenos, limpeza de quintais, jardinagem, pequenos reparos e manutenção de jardins em Pelotas e região.",
        address: { "@type": "PostalAddress", addressLocality: "Pelotas", addressRegion: "RS", addressCountry: "BR" },
        areaServed: { "@type": "City", name: "Pelotas" },
        sameAs: []
      })} />
      <header className="site-header">
        <BrandMark />
        <nav className="desktop-nav" aria-label="Navegação principal">
          <a href="#servicos">Serviços</a>
          <a href="#equipamento">Nosso cuidado</a>
          <a href="#regiao">Atendimento</a>
        </nav>
        <a className="header-contact" href={WHATSAPP} target="_blank" rel="noreferrer">
          <span>Solicitar orçamento</span>
          <span aria-hidden="true">↗</span>
        </a>
      </header>

      <section className="journey" aria-label="Apresentação da Morales Jardinagem">
        <ScrollScrub scenes={scrollScrubScenes} theme={scrollScrubTheme} />
      </section>

      <section className="services-section" id="servicos">
        <div className="section-shell">
          <div className="section-intro">
            <p className="section-label">CUIDADO PARA CADA ESPAÇO</p>
            <h2>Do terreno ao jardim, conte com a gente.</h2>
            <p className="section-description">
              Serviços de jardinagem para deixar sua área externa mais limpa,
              organizada e agradável.
            </p>
          </div>

          <div className="service-list">
            {services.map((service) => (
              <article className="service-row" key={service.number}>
                <span className="service-number">{service.number}</span>
                <div className="service-copy">
                  <h3>{service.title}</h3>
                  <p>{service.detail}</p>
                </div>
                <span className="service-mark" aria-hidden="true">↗</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="equipment-section" id="equipamento">
        <div className="equipment-photo">
          <img
            src="/assets/worker-electric.jpg"
            alt="Imagem ilustrativa de trabalho de roçada com equipamento elétrico"
            loading="lazy"
            width="460"
            height="1140"
          />
          <span className="photo-note">Imagem ilustrativa</span>
        </div>
        <div className="equipment-copy">
          <h2>O cuidado aparece nos detalhes.</h2>
          <p>
            Trabalhamos com roçadeira elétrica e extensão de 40 metros para
            atender também áreas maiores, com atenção ao acabamento.
          </p>
          <a className="text-link" href={WHATSAPP} target="_blank" rel="noreferrer">
            Solicitar orçamento <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>

      <section className="local-section" id="regiao">
        <div className="local-image">
          <img
            src="/assets/garden-clean.jpg"
            alt="Imagem ilustrativa de um jardim residencial bem cuidado"
            loading="lazy"
            width="1099"
            height="520"
          />
        </div>
        <div className="local-copy">
          <h2>Pelotas e região.</h2>
          <p>
            Atendimento próximo para cuidar do seu espaço. Entre em contato e
            consulte a disponibilidade para sua localidade.
          </p>
        </div>
      </section>

      <section className="contact-section" id="orcamento">
        <div className="contact-orbit" aria-hidden="true">M</div>
        <div className="contact-content">
          <h2>Vamos cuidar do seu jardim?</h2>
          <p>
            Conte o que você precisa e solicite seu orçamento diretamente pelo
            WhatsApp.
          </p>
          <a className="contact-stamp" href={WHATSAPP} target="_blank" rel="noreferrer">
            <WhatsAppGlyph />
            <span>Solicitar orçamento</span>
            <span className="stamp-arrow" aria-hidden="true">↗</span>
          </a>
          <a className="phone-link" href="tel:+5553991086944">{PHONE}</a>
        </div>
      </section>

      <footer className="site-footer">
        <BrandMark />
        <p>Seu jardim sempre mais verde.</p>
        <a href={WHATSAPP} target="_blank" rel="noreferrer">Solicitar orçamento</a>
        <span>Pelotas e região</span>
      </footer>

      <a
        className="floating-whatsapp"
        href={WHATSAPP}
        target="_blank"
        rel="noreferrer"
        aria-label="Solicitar orçamento pelo WhatsApp"
      >
        <WhatsAppGlyph />
      </a>
    </main>
  );
}
