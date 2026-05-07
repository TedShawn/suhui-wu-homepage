import type { Metadata } from "next";
import { Card } from "@/components/Card";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
};

const education = [
  {
    degree: "PhD student",
    institution: site.school,
    institutionZh: site.schoolZh,
    note: "Researching polar cryosphere and hydrological remote sensing.",
  },
];

const skills = [
  "Satellite altimetry data processing",
  "Remote sensing image analysis",
  "Geospatial data analysis",
  "Python scientific computing",
  "Machine learning for Earth observation",
  "Cryosphere and hydrology applications",
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title={`${site.name} / ${site.nameZh}`}
        description="I am a PhD student at the School of Geography and Ocean Science, Nanjing University, working on polar cryosphere and hydrological remote sensing."
      />

      <Container className="py-12 sm:py-14">
        <div className="grid gap-6 lg:grid-cols-[1fr_0.8fr]">
          <Card>
            <h2 className="text-xl font-semibold text-ink">Profile</h2>
            <p className="mt-4 leading-7 text-slate-600">
              My research interests lie at the intersection of polar science, satellite altimetry,
              hydrological remote sensing, and GeoAI. I am especially interested in how multi-source
              satellite observations can improve our understanding of snow and ice processes, sea ice
              freeboard and thickness, and water-level variations in cold-region environments.
            </p>
            <p className="mt-4 leading-7 text-slate-600">
              This website serves as a compact academic homepage and research blog for sharing
              publications, project updates, technical notes, and reproducible workflows.
            </p>
          </Card>

          <Card>
            <h2 className="text-xl font-semibold text-ink">Education</h2>
            <div className="mt-4 space-y-5">
              {education.map((item) => (
                <div key={item.degree} className="border-l-2 border-glacier pl-4">
                  <p className="font-semibold text-ink">{item.degree}</p>
                  <p className="mt-1 text-sm text-slate-600">{item.institution}</p>
                  <p className="text-sm text-slate-500">{item.institutionZh}</p>
                  <p className="mt-2 text-sm text-slate-600">{item.note}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <Card>
            <h2 className="text-xl font-semibold text-ink">Research Interests</h2>
            <ul className="mt-4 space-y-3 text-slate-600">
              {[
                "Polar snow and sea ice remote sensing",
                "Sea ice freeboard and thickness retrieval",
                "Satellite altimetry over polar and high-altitude regions",
                "SWOT, ICESat-2, and CryoSat-2 data analysis",
                "GeoAI methods for Earth observation",
              ].map((interest) => (
                <li key={interest} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-ocean" />
                  <span>{interest}</span>
                </li>
              ))}
            </ul>
          </Card>

          <Card>
            <h2 className="text-xl font-semibold text-ink">Skills</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-sm text-slate-700"
                >
                  {skill}
                </span>
              ))}
            </div>
          </Card>
        </div>

        <Card className="mt-6">
          <h2 className="text-xl font-semibold text-ink">Academic Keywords</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {site.researchKeywords.map((keyword) => (
              <span key={keyword} className="rounded-md bg-glacier px-3 py-2 text-sm text-ocean">
                {keyword}
              </span>
            ))}
          </div>
        </Card>
      </Container>
    </>
  );
}
