// Path: src/components/ui/AuroraBackground.tsx

export default function AuroraBackground() {
  return (
    <div
        aria-hidden
        className="
          absolute
          inset-0

          overflow-hidden
          pointer-events-none

          max-w-[1100px]
          mx-auto

          left-0
          right-0
        "
      >
      <div
        className="
          absolute
          inset-0
          top-[-160px]
          left-[-180px]
          h-[380px]
          w-[480px]
          rounded-full
          blur-[100px]
          opacity-10
          bg-orange-500
        "
      />

      <div
        className="
          absolute
          top-[-160px]
          right-[-250px]
          h-[380px]
          w-[450px]
          rounded-full
          blur-[100px]
          opacity-10
          bg-red-500
        "
      />

      <div
        className="
          absolute
          bottom-[-220px]
          left-[32%]
          h-[500px]
          w-[500px]

          rounded-full
          blur-[140px]
          opacity-[0.05]
          bg-yellow-500
        "
      />
    </div>
  );
}