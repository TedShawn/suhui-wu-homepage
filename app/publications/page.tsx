import type { Metadata } from "next";
import { Card } from "@/components/Card";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { publicationPlaceholder, publications } from "@/data/publications";

export const metadata: Metadata = {
  title: "Publications",
};

export default function PublicationsPage() {
  const publicationsByYear = publications.reduce<Record<number, typeof publications>>((groups, item) => {
    groups[item.year] = groups[item.year] ?? [];
    groups[item.year].push(item);
    return groups;
  }, {});
  const years = Object.keys(publicationsByYear)
    .map(Number)
    .sort((a, b) => b - a);

  return (
    <>
      <PageHero
        eyebrow="Publications"
        title="Selected Publications"
        description="Publication records are intentionally left as structured placeholders until confirmed bibliographic information is available."
      />

      <Container className="py-12 sm:py-14">
        {years.length === 0 ? (
          <Card className="max-w-3xl">
            <p className="text-lg font-semibold text-ink">{publicationPlaceholder}</p>
            <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
              The data model already reserves fields for DOI, PDF, Code, and BibTeX links, so verified
              publication entries can be added without changing the page structure.
            </p>
            <div className="mt-5 flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
              <span className="rounded-full border border-slate-200 px-3 py-1">DOI</span>
              <span className="rounded-full border border-slate-200 px-3 py-1">PDF</span>
              <span className="rounded-full border border-slate-200 px-3 py-1">Code</span>
              <span className="rounded-full border border-slate-200 px-3 py-1">BibTeX</span>
            </div>
          </Card>
        ) : (
          <div className="space-y-8">
            {years.map((year) => (
              <section key={year}>
                <h2 className="mb-4 text-2xl font-semibold text-ink">{year}</h2>
                <div className="space-y-4">
                  {publicationsByYear[year].map((publication) => (
                    <Card key={publication.title}>
                      <h3 className="text-lg font-semibold text-ink">{publication.title}</h3>
                      {publication.authors ? (
                        <p className="mt-2 text-sm leading-6 text-slate-600">{publication.authors}</p>
                      ) : null}
                      {publication.venue ? (
                        <p className="mt-2 text-sm font-medium text-slate-700">{publication.venue}</p>
                      ) : null}
                      <div className="mt-4 flex flex-wrap gap-3 text-sm font-medium text-ocean">
                        {publication.doi ? (
                          <a href={publication.doi} className="hover:underline">
                            DOI
                          </a>
                        ) : null}
                        {publication.source ? (
                          <a href={publication.source} className="hover:underline">
                            Source
                          </a>
                        ) : null}
                        {publication.pdf ? (
                          <a href={publication.pdf} className="hover:underline">
                            PDF
                          </a>
                        ) : null}
                        {publication.code ? (
                          <a href={publication.code} className="hover:underline">
                            Code
                          </a>
                        ) : null}
                        {publication.bibtex ? (
                          <a href={publication.bibtex} className="hover:underline">
                            BibTeX
                          </a>
                        ) : null}
                      </div>
                    </Card>
                  ))}
                </div>
              </section>
            ))}
          </div>
        )}
      </Container>
    </>
  );
}
