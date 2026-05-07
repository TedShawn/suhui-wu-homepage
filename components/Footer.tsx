import { Mail } from "lucide-react";
import { Container } from "@/components/Container";
import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <Container className="flex flex-col gap-4 py-8 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-semibold text-ink">
            {site.name} / {site.nameZh}
          </p>
          <p>{site.school}</p>
        </div>
        <a
          href={`mailto:${site.email}`}
          className="inline-flex items-center gap-2 font-medium text-ocean hover:underline"
        >
          <Mail size={16} />
          {site.email}
        </a>
      </Container>
    </footer>
  );
}
