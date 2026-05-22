import { compileMDX } from "next-mdx-remote/rsc";

import { getMDXContent } from "@/lib/mdx";

import Breadcrumb from "@/components/navigation/Breadcrumb";

import Sidebar from "@/components/navigation/Sidebar";

/* MDX Components */
import TopicHero from "@/components/mdx/TopicHero";

import IndustrialInsight from "@/components/mdx/IndustrialInsight";

import InterviewQuestion from "@/components/mdx/InterviewQuestion";

import EquationBlock from "@/components/mdx/EquationBlock";

import WarningBox from "@/components/mdx/WarningBox";

import DiagramBox from "@/components/mdx/DiagramBox";


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

    };

    /*
      Compile MDX
    */
    const mdx = await compileMDX({
      source: content,

      components,

      options: {
        parseFrontmatter: true,
      },
    });

    return (

      /*
        Main Layout
      */
      <div className="flex">

        {/* Desktop Sidebar */}
        <Sidebar
          subject={resolvedParams.subject}
        />

        {/* Main Content */}
        <main
          className="
            flex-1
            overflow-x-hidden
            px-6
            py-10
          "
        >

          <div
            className="
              mx-auto
              max-w-4xl
            "
          >

            {/* Breadcrumb */}
            <Breadcrumb />

            {/* MDX Content */}
            <article
              className="
                prose
                prose-invert
                max-w-none
                mt-8
              "
            >
              {mdx.content}
            </article>

          </div>

        </main>

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