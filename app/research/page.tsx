import type { Metadata } from "next";
import { Card } from "@/components/Card";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { researchAreas } from "@/data/research";

export const metadata: Metadata = {
  title: "Research",
};

export default function ResearchPage() {
  return (
    <>
      <PageHero
        eyebrow="Research"
        title="Remote sensing of polar cryosphere and hydrological systems"
        description="The research themes below outline the core directions of this academic homepage. Detailed project notes, data workflows, and reproducible examples can be added progressively through the blog and project pages."
      />

      <Container className="py-12 sm:py-14">
        <div className="grid gap-5 lg:grid-cols-2">
          {researchAreas.map((area, index) => (
            <Card key={area.title}>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-glacier text-sm font-semibold text-ocean">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-ink">{area.title}</h2>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{area.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </>
  );
}
