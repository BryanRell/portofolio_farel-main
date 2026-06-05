import { portfolioData } from "@/data/portfolio";
import { PageContainer } from "@/components/PageContainer";
import { Button } from "@/components/Button";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const work = portfolioData.works.find((w) => w.slug === resolvedParams.slug);
  if (!work) return { title: "Work Not Found" };
  
  return {
    title: `${work.title} | ${portfolioData.owner.name}`,
    description: work.shortDescription,
  };
}

export async function generateStaticParams() {
  return portfolioData.works.map((work) => ({
    slug: work.slug,
  }));
}

export default async function WorkDetail({ params }: Props) {
  const resolvedParams = await params;
  const work = portfolioData.works.find((w) => w.slug === resolvedParams.slug);

  if (!work) {
    notFound();
  }

  return (
    <PageContainer>
      <div className="flex flex-col gap-10">
        <div>
          <Button href="/works" variant="secondary" className="!px-4 !py-2 !text-sm mb-8">
            <ArrowLeft className="w-4 h-4" /> Back to works
          </Button>
          
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-mono uppercase tracking-wider rounded-full">
              {work.category}
            </span>
            <span className="text-sm text-gray-400 font-mono">{work.period}</span>
          </div>
          
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-balance leading-tight">
            {work.title}
          </h1>
        </div>

        <div className="relative w-full aspect-video rounded-3xl overflow-hidden bg-gray-100 border border-gray-200">
          <div className="absolute inset-0 bg-gradient-to-tr from-gray-200 to-gray-50 flex flex-col items-center justify-center text-gray-400">
            <span className="text-lg font-medium">{work.category}</span>
            <span className="text-sm mt-1">Image Placeholder</span>
          </div>
          <Image
            src={work.image}
            alt={work.title}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 760px"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8 border-y border-gray-100">
          <div className="flex flex-col gap-1">
            <span className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Role</span>
            <span className="text-gray-900 font-medium">{work.role}</span>
          </div>
          <div className="flex flex-col gap-1 md:col-span-2">
            <span className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Overview</span>
            <span className="text-gray-600 leading-relaxed">{work.overview}</span>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <h3 className="text-2xl font-semibold">Actions</h3>
          <ul className="list-disc list-outside ml-5 flex flex-col gap-3 text-gray-600">
            {work.actions.map((action, idx) => (
              <li key={idx} className="leading-relaxed pl-1">{action}</li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-6 bg-gray-50 p-6 md:p-8 rounded-3xl border border-gray-100">
          <h3 className="text-2xl font-semibold text-gray-900">Results & Impact</h3>
          <p className="text-gray-700 leading-relaxed text-lg">
            {work.results}
          </p>
        </div>

        {work.documentation && work.documentation.length>0 && (
        <div className="flex flex-col gap-6 pt-4"> 
          <h3 className="text-2xl font-semibold">Documentation </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4"> 
            {work.documentation.map((docImage: string, idx: number) => (
              <div key={idx} className="relative w-full aspect-video rounded-3x1 overflow-hidden bg-gray-100 border border-gray-200">
          
          <Image 
            src={docImage}
            alt={`${work.title} documentation ${idx + 1}`} 
            fill
            className="object-cover"
         
            sizes="(max-width: 768px) 100vw, 50vw"
          />
      
          </div> 
          ))}
        </div>
      </div>
        )}
      </div>  
    </PageContainer>
    );
    }
