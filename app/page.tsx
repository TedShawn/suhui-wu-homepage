import Link from "next/link";
import { ArrowRight, Mail, MapPin } from "lucide-react";
import { Card } from "@/components/Card";
import { Container } from "@/components/Container";
import { SectionHeader } from "@/components/SectionHeader";
import { projects } from "@/data/projects";
import { researchAreas } from "@/data/research";
import { site } from "@/data/site";
import { formatPostDate, getAllBlogPosts } from "@/lib/blog";

export default function HomePage() {
  const latestPosts = getAllBlogPosts().slice(0, 3);
  const featuredProjects = projects.slice(0, 2);

  return (
    <>
      <section className="border-b border-slate-200 bg-white">
        <Container className="grid min-h-[calc(100vh-4.25rem)] gap-10 py-14 sm:py-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-ocean/75">
              PhD student at Nanjing University
            </p>
            <h1 className="text-4xl font-semibold tracking-tight text-ink sm:text-5xl lg:text-6xl">
              {site.name}
            </h1>
            <p className="mt-6 max-w-3xl text-xl font-medium leading-8 text-ocean">
              Polar cryosphere and hydrological remote sensing
            </p>
            <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
              I study polar snow and ice, sea ice freeboard and thickness, satellite altimetry,
              and GeoAI methods for Earth observation.
            </p>
            <div className="mt-7 flex flex-wrap gap-2">
              {site.researchKeywords.slice(0, 7).map((keyword) => (
                <span
                  key={keyword}
                  className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm text-slate-700"
                >
                  {keyword}
                </span>
              ))}
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/research"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-ocean px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#0b2948]"
              >
                Explore Research <ArrowRight size={16} />
              </Link>
              <a
                href={`mailto:${site.email}`}
                className="inline-flex items-center justify-center gap-2 rounded-md border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-ocean transition-colors hover:bg-slate-50"
              >
                <Mail size={16} /> Contact
              </a>
            </div>
          </div>

          <aside className="rounded-lg border border-slate-200 bg-slate-50 p-5 shadow-sm">
            <div className="rounded-md border border-slate-200 bg-white p-6">
              <div className="mb-6 flex items-center gap-4">
                <img
                  src={site.avatar}
                  alt="Suhui Wu profile portrait"
                  className="h-24 w-24 rounded-md border border-slate-200 object-cover object-top shadow-sm"
                />
                <div>
                  <p className="text-lg font-semibold text-ink">{site.name}</p>
                  <p className="mt-1 text-sm text-slate-500">PhD student</p>
                </div>
              </div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-ocean/70">
                Academic Profile
              </p>
              <div className="mt-5 space-y-5">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                    Affiliation
                  </p>
                  <p className="mt-2 text-base font-semibold text-ink">{site.school}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                    Focus
                  </p>
                  <p className="mt-2 text-base leading-7 text-slate-700">
                    Satellite altimetry, polar cryosphere, hydrological remote sensing, and GeoAI.
                  </p>
                </div>
                <div className="flex items-start gap-3 rounded-md bg-glacier p-4 text-sm text-ocean">
                  <MapPin className="mt-0.5 shrink-0" size={17} />
                  <p>Nanjing University · School of Geography and Ocean Science</p>
                </div>
              </div>
            </div>
          </aside>
        </Container>
      </section>

      <section className="py-14 sm:py-16">
        <Container>
          <SectionHeader
            eyebrow="Overview"
            title="Research Directions"
            description="My work centers on satellite observations of polar and high-altitude environments, with emphasis on altimetry, retrieval methods, and GeoAI."
          />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {researchAreas.slice(0, 3).map((area) => (
              <Card key={area.title}>
                <h3 className="text-lg font-semibold text-ink">{area.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{area.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-slate-200 bg-white py-14 sm:py-16">
        <Container>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeader eyebrow="Blog" title="Latest Notes" />
            <Link href="/blog" className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-ocean hover:underline">
              View all posts <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {latestPosts.map((post) => (
              <Card key={post.slug}>
                <p className="text-xs font-medium uppercase tracking-[0.14em] text-slate-500">
                  {formatPostDate(post.date)} · {post.readingTime}
                </p>
                <h3 className="mt-3 text-lg font-semibold text-ink">
                  <Link href={`/blog/${post.slug}`} className="hover:text-ocean">
                    {post.title}
                  </Link>
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{post.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-14 sm:py-16">
        <Container>
          <SectionHeader eyebrow="Projects" title="Featured Research Entries" />
          <div className="grid gap-5 lg:grid-cols-2">
            {featuredProjects.map((project) => (
              <Card key={project.title}>
                <h3 className="text-lg font-semibold text-ink">{project.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{project.description}</p>
                <Link href="/projects" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-ocean hover:underline">
                  Project details <ArrowRight size={16} />
                </Link>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-slate-200 bg-white py-12">
        <Container>
          <div className="rounded-lg bg-ocean px-6 py-8 text-white sm:px-8">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-100">
              Contact
            </p>
            <h2 className="mt-3 text-2xl font-semibold">Academic exchange and collaboration are welcome.</h2>
            <a href={`mailto:${site.email}`} className="mt-5 inline-flex items-center gap-2 font-medium underline">
              <Mail size={17} /> {site.email}
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}
