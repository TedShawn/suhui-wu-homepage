import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypeHighlight from "rehype-highlight";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/Container";
import { formatPostDate, getBlogPostBySlug, getBlogSlugs } from "@/lib/blog";

type BlogPostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return getBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Blog post not found",
    };
  }

  return {
    title: post.title,
    description: post.description,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <Container className="py-10 sm:py-12">
      <article className="mx-auto max-w-3xl rounded-lg border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <Link
          href="/blog"
          className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-ocean hover:underline"
        >
          <ArrowLeft size={16} /> Back to blog
        </Link>

        <header className="border-b border-slate-200 pb-8">
          <p className="text-sm font-medium uppercase tracking-[0.16em] text-ocean/70">
            {formatPostDate(post.date)} · {post.readingTime}
          </p>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            {post.title}
          </h1>
          <p className="mt-4 text-lg leading-8 text-slate-600">{post.description}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span key={tag} className="rounded-full bg-glacier px-3 py-1 text-xs font-medium text-ocean">
                {tag}
              </span>
            ))}
          </div>
        </header>

        <div className="blog-content mt-9">
          <MDXRemote
            source={post.content}
            options={{
              mdxOptions: {
                remarkPlugins: [remarkMath],
                rehypePlugins: [rehypeKatex, rehypeHighlight],
              },
            }}
          />
        </div>
      </article>
    </Container>
  );
}
