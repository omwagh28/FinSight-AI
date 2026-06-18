"use client";

import Link from "next/link";

interface NavPillProps {
  href: string;
  label: string;
  active?: boolean;
}

export default function NavPill({
  href,
  label,
  active = false,
}: NavPillProps) {
  return (
    <Link
      href={href}
      className={`
        relative
        flex
        items-center
        justify-center

        px-8
        py-5

        rounded-full

        transition-all
        duration-300

        ${
          active
            ? `
              bg-[rgba(255,255,255,0.05)]
              border
              border-[rgba(255,255,255,0.06)]
              shadow-[0_0_30px_rgba(255,255,255,0.03)]
            `
            : `
              border
              border-transparent
              hover:bg-[rgba(255,255,255,0.025)]
            `
        }
      `}
    >
      <span
        className={`
          relative

          font-mono
          uppercase

          text-[13px]
          md:text-[14px]

          tracking-[0.18em]

          transition-colors
          duration-300

          ${
            active
              ? "text-[var(--color-ink)]"
              : "text-[var(--color-ink-mid)] hover:text-[var(--color-ink)]"
          }
        `}
      >
        {label}
      </span>

      {active && (
        <>
          {/* Active underline */}
          <span
            className="
              absolute
              left-[22%]
              right-[22%]
              bottom-[10px]

              h-px

              bg-[var(--color-accent)]

              shadow-[0_0_12px_rgba(217,106,58,.45)]
            "
            aria-hidden
          />

          {/* Subtle glow */}
          <span
            className="
              absolute
              inset-0
              rounded-full

              bg-[radial-gradient(circle_at_center,rgba(255,255,255,.04),transparent_70%)]

              pointer-events-none
            "
            aria-hidden
          />
        </>
      )}
    </Link>
  );
}