import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  createRootRouteWithContext,
  HeadContent,
  Scripts,
  useRouter,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";
import appCss from "../styles.css?url";
import { reportHiggsfieldError } from "../lib/higgsfield-error-reporting";
import appMetaJson from "../app-meta.json";

declare const __HF_DESIGN_INSPECTOR__: boolean;

type AppMeta = {
  og_title?: string | null;
  og_description?: string | null;
  og_image_url?: string | null;
  favicon_url?: string | null;
  og_video_url?: string | null;
  marketplace_cover_url?: string | null;
};
const appMeta = appMetaJson as AppMeta;
const brandThemeColor = "#" + ["15", "3F", "30"].join("");

function buildHead(meta: AppMeta) {
  const title = meta.og_title || "Morales Jardinagem | Seu jardim bem cuidado";
  const description =
    meta.og_description ||
    "Roçada de terrenos, limpeza de quintais, jardinagem e manutenção de jardins em Pelotas e região.";
  const ogImage = meta.og_image_url || "/assets/og-morales.png";
  const favicon = meta.favicon_url || "/assets/brand/favicon.ico";
  return {
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title },
      { name: "description", content: description },
      { name: "author", content: "Morales Jardinagem" },
      { name: "theme-color", content: brandThemeColor },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Morales Jardinagem" },
      { property: "og:locale", content: "pt_BR" },
      { property: "og:title", content: title },
      { property: "og:url", content: "https://morales-jardinagem.netlify.app" },
      { property: "og:description", content: description },
      { property: "og:image", content: ogImage },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: ogImage },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" as const },
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: favicon, sizes: "32x32" },
      { rel: "icon", href: "/assets/brand/favicon-16.png", sizes: "16x16", type: "image/png" },
      { rel: "icon", href: "/assets/brand/favicon-32.png", sizes: "32x32", type: "image/png" },
      { rel: "icon", href: "/assets/brand/icon-192.png", sizes: "192x192", type: "image/png" },
      { rel: "apple-touch-icon", href: "/assets/brand/apple-touch-icon.png" },
      { rel: "manifest", href: "/assets/brand/site.webmanifest" },
      { rel: "canonical", href: "https://morales-jardinagem.netlify.app" },
    ],
  };
}

function NotFoundComponent() {
  return (
    <main className="site-error">
      <p className="section-label">MORALES JARDINAGEM</p>
      <h1>Esta página não foi encontrada.</h1>
      <a href="/">Voltar ao início</a>
    </main>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportHiggsfieldError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <main className="site-error">
      <p className="section-label">MORALES JARDINAGEM</p>
      <h1>Não foi possível carregar esta página.</h1>
      <p>Tente novamente em instantes.</p>
      <button
        type="button"
        onClick={() => {
          router.invalidate();
          reset();
        }}
      >
        Tentar novamente
      </button>
    </main>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => buildHead(appMeta),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" data-theme="morales" style={{ colorScheme: "dark" }}>
      <head>
        <HeadContent />
      </head>
      <body className="morales-body">
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  useEffect(() => {
    if (!__HF_DESIGN_INSPECTOR__) return;
    void import("../module/design-inspector/runtime")
      .then(({ installHiggsfieldDesignInspector }) => {
        installHiggsfieldDesignInspector();
      })
      .catch((error) => {
        reportHiggsfieldError(
          error instanceof Error ? error : new Error("Failed to load design inspector"),
          { boundary: "higgsfield_design_inspector_import" },
        );
      });
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
