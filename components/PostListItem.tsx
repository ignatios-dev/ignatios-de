import Link from "next/link";
import type { PostCard } from "@/lib/posts";

export function PostListItem({ post, dateLabel }: { post: PostCard; dateLabel: string }) {
  const categoryDisplay =
    post.category === "__root__" ? "General" : post.category.charAt(0).toUpperCase() + post.category.slice(1);

  return (
    <Link
      href={`/blog/${post.slug}/`}
      data-reveal
      className="group flex flex-col gap-[10px] md:flex-row md:gap-8 md:items-start bg-background nb-border nb-shadow nb-press rounded-2xl p-6 md:p-8 no-underline text-foreground hover:text-foreground"
    >
      <div className="self-start bg-foreground text-background rounded-lg font-mono text-[13px] whitespace-nowrap px-2.5 py-1 transition-transform duration-200 group-hover:-rotate-3">
        {dateLabel}
      </div>
      <div>
        <div className="font-mono text-[12px] text-accent uppercase tracking-[0.05em] mb-2">{categoryDisplay}</div>
        <h3 className="text-[22px] md:text-[24px] font-bold m-0 mb-[10px]">{post.title}</h3>
        <span className="font-bold text-[14px] text-accent">
          Weiterlesen <span className="inline-block transition-transform duration-200 group-hover:translate-x-1.5">→</span>
        </span>
      </div>
    </Link>
  );
}
