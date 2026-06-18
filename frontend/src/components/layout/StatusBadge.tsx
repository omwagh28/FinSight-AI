interface StatusBadgeProps {
  label: string;
}

export default function StatusBadge({
  label,
}: StatusBadgeProps) {
  return (
    <div className="flex items-center gap-2">
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full rounded-full bg-[var(--accent)] opacity-75 animate-ping" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--accent)]" />
      </span>

      <span className="label text-[var(--ink-low)]">
        {label}
      </span>
    </div>
  );
}