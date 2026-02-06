import { useParams, Link } from "react-router-dom";
import { blogPosts } from "@/data/blog-posts";
import { Reveal } from "@/components/shared/Reveal";
import { GradientOrbs } from "@/components/shared/GradientOrbs";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Share2, Twitter, Linkedin, Clock } from "lucide-react";
import { useEffect, useState, useMemo } from "react";

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toc = useMemo(() => {
    if (!post) return [];
    const matches = post.content.match(/^## .+/gm);
    return matches?.map((m) => m.replace("## ", "")) || [];
  }, [post]);

  if (!post) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Post not found</h1>
          <Button variant="outline" asChild>
            <Link to="/blog"><ArrowLeft size={16} /> Back to Blog</Link>
          </Button>
        </div>
      </div>
    );
  }

  const shareUrl = typeof window !== "undefined" ? window.location.href : "";

  return (
    <>
      {/* Progress Bar */}
      <div
        className="fixed top-0 left-0 h-0.5 bg-gradient-to-r from-violet to-cyan z-[60] transition-all"
        style={{ width: `${progress}%` }}
      />

      <section className="relative overflow-hidden">
        <GradientOrbs />
        <div className="relative z-10 container-narrow px-6 py-20">
          <Reveal>
            <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors">
              <ArrowLeft size={16} /> Back to Blog
            </Link>

            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-medium text-cyan px-2 py-0.5 rounded-full bg-cyan/10">{post.category}</span>
              <span className="text-xs text-muted-foreground">{post.date}</span>
              <span className="text-xs text-muted-foreground flex items-center gap-1"><Clock size={12} /> {post.readTime}</span>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-8">{post.title}</h1>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* TOC */}
            {toc.length > 0 && (
              <aside className="hidden lg:block">
                <Reveal delay={0.2}>
                  <div className="sticky top-24">
                    <h4 className="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-4">Contents</h4>
                    <ul className="space-y-2">
                      {toc.map((item) => (
                        <li key={item}>
                          <span className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              </aside>
            )}

            {/* Content */}
            <div className={toc.length > 0 ? "lg:col-span-3" : "lg:col-span-4"}>
              <Reveal delay={0.1}>
                <article className="prose prose-invert prose-sm max-w-none">
                  {post.content.split("\n\n").map((paragraph, i) => {
                    if (paragraph.startsWith("## ")) {
                      return <h2 key={i} className="text-2xl font-bold text-foreground mt-10 mb-4">{paragraph.replace("## ", "")}</h2>;
                    }
                    return <p key={i} className="text-muted-foreground leading-relaxed mb-4">{paragraph}</p>;
                  })}
                </article>
              </Reveal>

              {/* Share */}
              <div className="mt-12 pt-8 border-t border-white/5 flex items-center gap-4">
                <span className="text-sm text-muted-foreground flex items-center gap-2">
                  <Share2 size={14} /> Share
                </span>
                <a href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(post.title)}`} target="_blank" rel="noopener" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Share on Twitter">
                  <Twitter size={18} />
                </a>
                <a href={`https://www.linkedin.com/shareArticle?url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(post.title)}`} target="_blank" rel="noopener" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Share on LinkedIn">
                  <Linkedin size={18} />
                </a>
              </div>

              {/* End CTA */}
              <div className="mt-12 glass rounded-2xl p-8 text-center">
                <h3 className="text-xl font-bold text-foreground mb-2">Ready to experience execution?</h3>
                <p className="text-sm text-muted-foreground mb-6">Join the waitlist and be first to try OriMind.</p>
                <Button variant="gradient" asChild>
                  <Link to="/waitlist">Join Waitlist</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
