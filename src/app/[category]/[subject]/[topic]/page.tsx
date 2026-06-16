import { compileMDX } from "next-mdx-remote/rsc";

import { getMDXContent } from "@/lib/mdx";

import Breadcrumb from "@/components/navigation/Breadcrumb";

import Sidebar from "@/components/navigation/Sidebar";


import remarkGfm from "remark-gfm";

import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

import { quizzes } from "@/data/quizzes";

/* MDX Components */
import TopicHero from "@/components/mdx/TopicHero";

import IndustrialInsight from "@/components/mdx/IndustrialInsight";

import InterviewQuestion from "@/components/mdx/InterviewQuestion";

import EquationBlock from "@/components/mdx/EquationBlock";

import WarningBox from "@/components/mdx/WarningBox";

import DiagramBox from "@/components/mdx/DiagramBox";

import QuizCard from "@/components/mdx/QuizCard";

import QuizModal from "@/components/mdx/QuizModal";

import  InfoBox  from "@/components/mdx/InfoBox";

import TopicNavigation from "@/components/mdx/topic-navigation";





/*
  SEO Metadata
*/
export async function generateMetadata({
  params,
}: {
  params: Promise<{
    category: string;
    subject: string;
    topic: string;
  }>;
}) {

  const resolvedParams = await params;

  try {

    const filepath =
      `src/content/${resolvedParams.category}/${resolvedParams.subject}/${resolvedParams.topic}.mdx`;

    const { metadata } =
      await getMDXContent(filepath);

    return {
      title:
        metadata?.title ||
        resolvedParams.topic,

      description:
        metadata?.description ||
        "Chemical engineering topic",

      keywords:
        metadata?.keywords || [],
    };

  } catch {

    return {
      title: "ChemEng",
      description:
        "Chemical Engineering Platform",
    };
  }
}

/*
  Topic Page
*/
export default async function TopicPage({
  params,
}: {
  params: Promise<{
    category: string;
    subject: string;
    topic: string;
  }>;
}) {

  const resolvedParams = await params;

  const quiz =
  quizzes[
    resolvedParams.topic as keyof typeof quizzes
  ] || [];

  try {

    const filepath =
      `src/content/${resolvedParams.category}/${resolvedParams.subject}/${resolvedParams.topic}.mdx`;

    const { content } =
      await getMDXContent(filepath);

    /*
      Registered MDX Components
    */
    const components = {
      TopicHero,
      IndustrialInsight,
      InterviewQuestion,
      EquationBlock,
      WarningBox,
      DiagramBox,

      QuizCard: (props: any) => (
          <QuizCard
           {...props}
             questions={quiz}
           />
       ),

      QuizModal,
      InfoBox,
      TopicNavigation,
    };

    /*
      Compile MDX
    */
      console.log("remarkMath:", remarkMath);
      console.log("rehypeKatex:", rehypeKatex);

    const mdx = await compileMDX({
      source: content,

      components,

      options: {

        parseFrontmatter: true,
      
        mdxOptions: {
          remarkPlugins: [
            remarkGfm,
            remarkMath,
          ],
        
          rehypePlugins: [
            rehypeKatex,
          ],
        },
      
      },
    });

    return (

      <div className="flex flex-col min-h-screen">

     

        {/* Main Content Area */}
        <div className="flex flex-1">

          {/* Desktop Sidebar */}
          <Sidebar
            category={resolvedParams.category}
            subject={resolvedParams.subject}
          />

          {/* Main Content */}
          <main
              className="
              flex-1
              overflow-x-hidden
              px-6
              lg:px-10
              py-8
            "
          >

            <div className="  mx-auto max-w-6xl" >
              
               
              {/* Breadcrumb */}
              <Breadcrumb />

              {/* MDX Content */}
              <article
  className="
    prose
    prose-invert

    max-w-5xl

    mt-8

    [&_table]:w-full
    [&_table]:border-collapse

    [&_th]:border
    [&_td]:border

    [&_th]:border-gray-700
    [&_td]:border-gray-700

    [&_th]:px-4
    [&_td]:px-4

    [&_th]:py-3
    [&_td]:py-3

    [&_th]:text-left

    [&_th]:bg-gray-900
  "
>
  {mdx.content}
</article>

            </div>

          </main>

        </div>

      </div>
    );

  } catch (error) {

    console.error(error);

    return (

      <main
        className="
          mx-auto
          max-w-3xl
          px-6
          py-20
          text-white
        "
      >

        <h1 className="text-3xl font-bold">
          Topic Not Found
        </h1>

        <p className="mt-4 text-gray-400">
          The requested topic could not be loaded.
        </p>

      </main>
    );
  }
}