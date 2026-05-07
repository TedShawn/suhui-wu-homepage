import type { Metadata } from "next";
import Link from "next/link";
import { Card } from "@/components/Card";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { formatPostDate, getAllBlogPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
};

export default function BlogPage() {
  const blogPosts = getAllBlogPosts();

  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Research Blog"
        description="A space for technical notes, reading summaries, data-processing workflows, and future Markdown or MDX research posts."
      />

      <Container className="py-12 sm:py-14">
        <div className="mb-8 rounded-lg border border-dashed border-slate-300 bg-white p-5 text-sm leading-6 text-slate-600">
          Markdown / MDX-ready content can be placed under <code className="font-semibold">content/blog</code>.
          The list below is generated directly from article frontmatter.
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <Card key={post.slug} className="flex h-full flex-col">
              <p className="text-xs font-medium uppercase tracking-[0.14em] text-slate-500">
                {formatPostDate(post.date)} · {post.readingTime}
              </p>
              <h2 className="mt-3 text-lg font-semibold leading-7 text-ink">
                <Link href={`/blog/${post.slug}`} className="hover:text-ocean">
                  {post.title}
                </Link>
              </h2>
              <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">{post.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span key={tag} className="rounded-full bg-glacier px-3 py-1 text-xs font-medium text-ocean">
                    {tag}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </>
  );
}
