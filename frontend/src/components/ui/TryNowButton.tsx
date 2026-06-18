import Link from "next/link";

interface TryNowButtonProps {
  href?: string;
  label?: string;
}

export default function TryNowButton({
  href = "/scan",
  label = "Try FinSight now",
}: TryNowButtonProps) {
  return (
    <Link
      href={href}
      className="try-now group"
    >
      <span
        className="try-now-border"
        aria-hidden
      />

      <span className="try-now-inner">
        <span
          className="
            display-italic
            text-2xl
            md:text-3xl
            text-[var(--color-ink)]
          "
        >
          {label}
        </span>

        <span
          aria-hidden
          className="
            text-2xl
            text-[var(--color-accent)]

            transition-transform
            duration-300

            group-hover:translate-x-1
          "
        >
          ↗
        </span>
      </span>
    </Link>
  );
}