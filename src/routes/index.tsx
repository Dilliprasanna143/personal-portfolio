import { createFileRoute } from "@tanstack/react-router";
import { FloatingNav, ScrollToTop } from "@/components/portfolio/Navigation";
import { ParticleBackground } from "@/components/portfolio/ParticleBackground";
import {
  Hero,
  About,
  Skills,
  Projects,
  Certificates,
  Contact,
  Footer,
} from "@/components/portfolio/sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dilliprasanna Mulavagila | AI & ML Developer Portfolio" },
      {
        name: "description",
        content:
          "Portfolio of Dilliprasanna Mulavagila — AI & Machine Learning student, Python developer and full stack web developer building intelligent software solutions.",
      },
      { property: "og:title", content: "Dilliprasanna Mulavagila | AI & ML Developer Portfolio" },
      {
        property: "og:description",
        content:
          "Portfolio of Dilliprasanna Mulavagila — AI & Machine Learning student, Python developer and full stack web developer building intelligent software solutions.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <ParticleBackground />
      <FloatingNav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certificates />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Dilliprasanna Mulavagila",
            jobTitle: "Aspiring Software Developer, AI & Machine Learning Student",
            email: "mailto:dilliprasannamulavagila@gmail.com",
            telephone: "+91 8904075250",
            address: { "@type": "PostalAddress", addressRegion: "Andhra Pradesh", addressCountry: "IN" },
            alumniOf: "Vemu Institute of Technology",
            knowsAbout: ["Python", "Machine Learning", "Artificial Intelligence", "React", "OpenCV"],
          }),
        }}
      />
    </>
  );
}
