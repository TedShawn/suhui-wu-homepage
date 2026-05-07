import type { Metadata } from "next";
import { Mail } from "lucide-react";
import { Card } from "@/components/Card";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
};

const profileLinks = [
  { label: "GitHub", href: site.links.github },
  { label: "Google Scholar", href: site.links.googleScholar },
  { label: "ResearchGate", href: site.links.researchGate },
  { label: "ORCID", href: site.links.orcid },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Get in touch"
        description="I welcome academic exchange, research discussion, and collaboration around polar cryosphere remote sensing, satellite altimetry, and GeoAI for Earth observation."
      />

      <Container className="py-12 sm:py-14">
        <div className="grid gap-6 lg:grid-cols-[1fr_0.8fr]">
          <Card>
            <h2 className="text-xl font-semibold text-ink">Email</h2>
            <a
              href={`mailto:${site.email}`}
              className="mt-4 inline-flex items-center gap-2 text-lg font-semibold text-ocean hover:underline"
            >
              <Mail size={20} /> {site.email}
            </a>
            <p className="mt-5 leading-7 text-slate-600">
              Please feel free to contact me for research conversations, data-processing questions,
              and possible collaboration related to polar and hydrological remote sensing.
            </p>
          </Card>

          <Card>
            <h2 className="text-xl font-semibold text-ink">Academic Profiles</h2>
            <div className="mt-4 grid gap-3">
              {profileLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="rounded-md border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700 transition-colors hover:border-ocean hover:bg-white hover:text-ocean"
                >
                  {link.label} placeholder
                </a>
              ))}
            </div>
          </Card>
        </div>
      </Container>
    </>
  );
}
