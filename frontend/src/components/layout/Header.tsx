import Link from "next/link";

import NavPill from "./NavPill";
import StatusBadge from "./StatusBadge";

interface HeaderProps {
  active: "home" | "scan" | "compare";
}

export default function Header({
  active,
}: HeaderProps) {
  return (
    <header className="relative z-10 px-8 md:px-8 lg:px-10 max-w-[1500px] mx-auto pt-10 flex items-center justify-between">
      <Link
        href="/"
        className="flex items-baseline gap-1"
      >
        <span className="display-italic text-3xl">
          Fin
        </span>

        <span className="display text-3xl">
          Sight
        </span>
      </Link>

      <nav
        className="
        flex items-center
        gap-3
        h-[65px]
        px-5
        border
        border-[var(--rule)]
        bg-[rgba(14,14,14,0.77)]
        backdrop-blur-md
        rounded-full
        shadow-[0_0_0_1px_rgba(255,255,255,.03)]
      "
      >
        <NavPill
          href="/"
          label="Home"
          active={active === "home"}
        />

        <NavPill
          href="/scan"
          label="Scan"
          active={active === "scan"}
        />

        <NavPill
          href="/compare"
          label="Compare"
          active={active === "compare"}
        />
      </nav>

      <StatusBadge label="Agentic RAG" />
    </header>
  );
}