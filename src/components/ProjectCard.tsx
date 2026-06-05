import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

type ProjectCardProps = {
  slug: string;
  title: string;
  category: string;
  shortDescription: string;
  image: string;
  featured?: boolean;
};

export function ProjectCard({ slug, title, category, shortDescription, image, featured = false }: ProjectCardProps) {
  return (
    <Link href={`/works/${slug}`} className="group flex flex-col gap-4">
      <div className={`relative w-full rounded-[24px] overflow-hidden bg-[#f5f5f5] aspect-[4/3] ${featured ? 'md:aspect-[16/9]' : ''}`}>
        <div className="absolute inset-0 bg-gradient-to-tr from-gray-200 to-gray-100 flex flex-col items-center justify-center text-gray-400">
          <span className="text-[13px] font-medium">{category}</span>
          <span className="text-[11px] mt-1">Image Placeholder</span>
        </div>
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-[600ms] ease-out group-hover:scale-[1.03]"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/5" />
      </div>
      <div className="flex flex-col gap-1.5 px-1">
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-mono text-gray-400 uppercase tracking-wider">{category}</span>
          <ArrowUpRight className="w-3.5 h-3.5 text-gray-300 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-black" />
        </div>
        <h3 className="text-[17px] font-medium leading-tight text-gray-900 group-hover:text-black transition-colors">{title}</h3>
        <p className="text-[14px] text-gray-500 line-clamp-2 mt-0.5 leading-relaxed">{shortDescription}</p>
      </div>
    </Link>
  );
}
