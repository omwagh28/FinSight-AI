// Path: src/components/ui/SectionContainer.tsx

import { ReactNode } from "react";

interface SectionContainerProps {
  children: ReactNode;
}

export default function SectionContainer({
  children,
}: SectionContainerProps) {
  return (
    <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16">
      {children}
    </div>
  );
}