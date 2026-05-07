import { Container } from "@/components/Container";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="border-b border-slate-200 bg-white">
      <Container className="py-10 sm:py-12">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-ocean/70">
          {eyebrow}
        </p>
        <h1 className="mt-3 max-w-4xl text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          {title}
        </h1>
        <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg">
          {description}
        </p>
      </Container>
    </section>
  );
}
