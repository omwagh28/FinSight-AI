// Path: src/components/ui/AuroraBackground.tsx

export default function AuroraBackground() {
  return (
    <div
      aria-hidden
      className="absolute inset-0 overflow-hidden pointer-events-none"
    >
      <div
        className="
          absolute
          top-[-200px]
          left-[-150px]
          h-[500px]
          w-[500px]
          rounded-full
          blur-[120px]
          opacity-20
          bg-orange-500
        "
      />

      <div
        className="
          absolute
          top-[50px]
          right-[-200px]
          h-[600px]
          w-[600px]
          rounded-full
          blur-[160px]
          opacity-10
          bg-red-500
        "
      />

      <div
        className="
          absolute
          bottom-[-300px]
          left-[25%]
          h-[700px]
          w-[700px]
          rounded-full
          blur-[180px]
          opacity-[0.06]
          bg-yellow-500
        "
      />
    </div>
  );
}