
import { compileMDX } from "next-mdx-remote/rsc";

import { getMDXContent } from "@/lib/mdx";

import Breadcrumb from "@/components/navigation/Breadcrumb";

import Sidebar from "@/components/navigation/Sidebar";

import remarkGfm from "remark-gfm";

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

import InfoBox from "@/components/mdx/InfoBox";



/*
|--------------------------------------------------------------------------
| SEO Metadata
|--------------------------------------------------------------------------
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
|--------------------------------------------------------------------------
| Topic Page
|--------------------------------------------------------------------------
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
    |--------------------------------------------------------------------------
    | Registered MDX Components
    |--------------------------------------------------------------------------
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
    };

    /*
    |--------------------------------------------------------------------------
    | Compile MDX
    |--------------------------------------------------------------------------
    */
    const mdx = await compileMDX({
      source: content,

      components,

      options: {
        parseFrontmatter: true,

        mdxOptions: {
          remarkPlugins: [
            remarkGfm,
          ],
        },
      },
    });

    return (

      <>
        
{/* =======================================================
    DESKTOP LAYOUT
======================================================== */}

<div
  className="
    hidden
    lg:grid

    min-h-screen

    grid-cols-[320px_minmax(0,1fr)]
  "
>

  {/* ===================================================
      LEFT SIDEBAR
  ==================================================== */}
  <Sidebar
    category={resolvedParams.category}
    subject={resolvedParams.subject}
  />

  {/* ===================================================
      RIGHT SIDE
  ==================================================== */}
  <div
  className="
    min-w-0
  "
>

  <main
    className="
      overflow-x-hidden

      px-10
      py-8
    "
  >

      <div className="mx-auto max-w-5xl">

        {/* Breadcrumb */}
        <Breadcrumb />

        {/* MDX Content */}
        <article
          className="
            prose
            prose-invert

            max-w-4xl

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



        {/* =======================================================
            MOBILE LAYOUT
            Hamburger Navigation
        ======================================================== */}

        <div className="lg:hidden">

          <Sidebar
            category={resolvedParams.category}
            subject={resolvedParams.subject}
          />

          <main
            className="
              px-6
              py-8
              
            "
          >

            <div className="mx-auto max-w-4xl">

              {/* Breadcrumb */}
              <Breadcrumb />

              {/* MDX Article */}
              <article
                className="
                  prose
                  prose-invert

                  max-w-full

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

      </>
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

