import type { Metadata } from "next";
import { ExternalLink } from "lucide-react";
import { Card } from "@/components/Card";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Projects"
        title="Research project entries"
        description="These cards are structured placeholders for current and future research documentation. Specific papers, funding identifiers, and public repositories can be added when available."
      />

      <Container className="py-12 sm:py-14">
        <div className="grid gap-6">
          {projects.map((project) => (
            <Card key={project.title}>
              <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
                <div>
                  <div className="mb-3 inline-flex rounded-full bg-glacier px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-ocean">
                    {project.status}
                  </div>
                  <h2 className="text-xl font-semibold text-ink">{project.title}</h2>
                  <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">{project.description}</p>
                  <a
                    href={project.codeUrl}
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-ocean hover:underline"
                  >
                    Code link placeholder <ExternalLink size={15} />
                  </a>
                </div>

                <div className="grid gap-4 rounded-md border border-slate-200 bg-slate-50 p-4 text-sm">
                  <div>
                    <p className="font-semibold text-ink">Data</p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {project.data.map((item) => (
                        <span key={item} className="rounded-full bg-white px-3 py-1 text-slate-700 ring-1 ring-slate-200">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold text-ink">Methods</p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {project.methods.map((method) => (
                        <span key={method} className="rounded-full bg-glacier px-3 py-1 text-ocean">
                          {method}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </>
  );
}
