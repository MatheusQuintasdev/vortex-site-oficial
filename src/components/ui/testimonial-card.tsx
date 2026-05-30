import { cn } from "@/lib/utils";

export interface TestimonialAuthor {
  name: string;
  handle: string;
  /** image URL or short fallback initials */
  avatar: string;
}

interface TestimonialCardProps {
  author: TestimonialAuthor;
  text: string;
  href?: string;
  className?: string;
}

function isImageUrl(s: string) {
  return /^https?:\/\//.test(s) || s.startsWith("/") || s.startsWith("data:");
}

export function TestimonialCard({ author, text, href, className }: TestimonialCardProps) {
  const Comp = href ? "a" : "div";
  return (
    <Comp
      {...(href ? { href, target: "_blank", rel: "noopener noreferrer" } : {})}
      className={cn(
        "flex w-[320px] sm:w-[380px] shrink-0 flex-col gap-4 rounded-2xl border border-white/10 bg-card/60 p-6 text-left backdrop-blur transition-colors hover:border-primary/40",
        className,
      )}
    >
      <p className="text-sm leading-relaxed text-white/85">"{text}"</p>
      <div className="flex items-center gap-3 mt-auto">
        {isImageUrl(author.avatar) ? (
          <img
            src={author.avatar}
            alt={author.name}
            loading="lazy"
            className="h-11 w-11 rounded-full object-cover ring-2 ring-primary/30"
          />
        ) : (
          <div className="h-11 w-11 rounded-full bg-gradient-to-br from-primary to-red-900 flex items-center justify-center text-sm font-bold">
            {author.avatar}
          </div>
        )}
        <div>
          <p className="text-sm font-semibold">{author.name}</p>
          <p className="text-xs text-muted-foreground">{author.handle}</p>
        </div>
      </div>
    </Comp>
  );
}
