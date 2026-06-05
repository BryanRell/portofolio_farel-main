import { ReactNode } from "react";
import { Footer } from "./Footer";

export function PageContainer({ children, className = "" }: { children: ReactNode, className?: string }) {
  return (
    <div className={`min-h-screen pt-32 pb-24 lg:pl-32 lg:pr-8 px-6 flex flex-col ${className}`}>
      <main className="flex-1 max-w-[680px] w-full mx-auto">
        {children}
      </main>
      <Footer />
    </div>
  );
}
