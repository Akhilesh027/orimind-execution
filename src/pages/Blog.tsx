import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Reveal } from "@/components/shared/Reveal";
import { GradientOrbs } from "@/components/shared/GradientOrbs";
import { blogPosts } from "@/data/blog-posts";
import { ArrowRight, Search } from "lucide-react";

export default function Blog() {
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    if (!search) return blogPosts;
    const q = search.toLowerCase();
    return blogPosts.filter(
      (p) => p.title.toLowerCase().includes(q) || p.excerpt.toLowerCase().includes(q) || p.category.toLowerCase().includes(q)
    );
  }, [search]);

  return (
    <>
      <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden">
        <GradientOrbs />
        <div className="relative z-10 container-narrow px-6 py-20 text-center">
          <Reveal>
            <span className="text-xs font-medium uppercase tracking-widest text-cyan mb-4 block">Blog</span>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">Insights</h1>
            <p className="text-muted-foreground max-w-lg mx-auto mb-8">
              Perspectives on AI execution, multi-agent systems, and the future of work.
            </p>
            <div className="max-w-md mx-auto relative">
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search articles..."
                className="w-full h-12 pl-12 pr-4 rounded-xl bg-white/5 border border-white/10 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-violet"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-padding pt-8">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {filtered.map((post, i) => (
              <Reveal key={post.slug} delay={i * 0.08}>
                <Link to={`/blog/${post.slug}`} className="block group">
                  <div className="glass rounded-2xl p-6 h-full hover:border-violet/20 hover:bg-white/[0.06] transition-all">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-xs font-medium text-cyan px-2 py-0.5 rounded-full bg-cyan/10">{post.category}</span>
                      <span className="text-xs text-muted-foreground">{post.date}</span>
                    </div>
                    <h2 className="text-lg font-semibold text-foreground mb-2 group-hover:text-violet transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">{post.excerpt}</p>
                    <span className="inline-flex items-center gap-1 text-sm text-violet font-medium group-hover:gap-2 transition-all">
                      Read more <ArrowRight size={14} />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
          {filtered.length === 0 && (
            <p className="text-center text-muted-foreground py-12">No articles found matching your search.</p>
          )}
        </div>
      </section>
    </>
  );
}
