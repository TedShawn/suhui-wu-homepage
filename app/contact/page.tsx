import type { Metadata } from "next";
import { Mail } from "lucide-react";
import { Card } from "@/components/Card";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { academicNetwork } from "@/data/academic-network";
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

        <section className="mt-10">
          <h2 className="text-2xl font-semibold tracking-tight text-ink">Advisor and Collaborators</h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            Selected publications are listed for academic context. Profile links are included for complete and updated records.
          </p>
          <div className="mt-6 grid gap-6">
            {academicNetwork.map((person) => (
              <Card key={person.name}>
                <div className="flex flex-col gap-3 border-b border-slate-200 pb-5 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-ink">{person.name}</h3>
                    <p className="mt-1 text-sm font-medium text-ocean">{person.role}</p>
                  </div>
                  <a
                    href={person.profileUrl}
                    className="inline-flex w-fit rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-semibold text-ocean transition-colors hover:border-ocean hover:bg-white"
                  >
                    Profile link
                  </a>
                </div>

                <ol className="mt-5 space-y-4">
                  {person.publications.slice(0, 20).map((publication) => (
                    <li key={`${person.name}-${publication.title}`} className="grid gap-2 sm:grid-cols-[4rem_1fr]">
                      <span className="text-sm font-semibold text-slate-500">{publication.year}</span>
                      <div>
                        <p className="font-semibold leading-6 text-ink">{publication.title}</p>
                        <p className="mt-1 text-sm leading-6 text-slate-600">{publication.venue}</p>
                        {publication.url ? (
                          <a href={publication.url} className="mt-1 inline-flex text-sm font-medium text-ocean hover:underline">
                            Publication link
                          </a>
                        ) : null}
                      </div>
                    </li>
                  ))}
                </ol>
              </Card>
            ))}
          </div>
        </section>
      </Container>
    </>
  );
}
