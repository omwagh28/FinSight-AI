// Path: src/components/ui/SectionContainer.tsx

import { ReactNode } from "react";

interface SectionContainerProps {
  children: ReactNode;
}

export default function SectionContainer({
  children,
}: SectionContainerProps) {
  return (
    <div className="max-w-[1500px] mx-auto px-12 md:px-25 lg:px-50">
      {children}
    </div>
  );
}