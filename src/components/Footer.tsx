import { portfolioData } from "@/data/portfolio";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="max-w-[760px] w-full mx-auto mt-24 pt-8 border-t border-gray-200 text-sm text-gray-500 flex flex-col sm:flex-row justify-between items-center gap-4">
      <p>{portfolioData.owner.location} ({portfolioData.owner.timezone})</p>
      <p>&copy; {currentYear} {portfolioData.owner.name}. All rights reserved.</p>
    </footer>
  );
}
