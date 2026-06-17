import fs from "fs";
import path from "path";

import { getTopicNavigation }
from "@/lib/getTopicNavigation";

import TopicNavigation
from "@/components/navigation/TopicNavigation";

import {
  getTopicProgress
} from "@/lib/getTopicProgress";

import TopicProgress
from "@/components/navigation/TopicProgress";

import {
  extractHeadings
} from "@/lib/extractHeadings";

import TableOfContents
from "@/components/navigation/TableOfContents";

import { slugify }
from "@/lib/slugify";

import { redirect } from "next/navigation";

import { compileMDX } from "next-mdx-remote/rsc";

import { getMDXContent } from "@/lib/mdx";

import Breadcrumb from "@/components/navigation/Breadcrumb";

import Sidebar from "@/components/navigation/Sidebar";

import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

import TopicHero from "@/components/mdx/TopicHero";
import IndustrialInsight from "@/components/mdx/IndustrialInsight";
import InterviewQuestion from "@/components/mdx/InterviewQuestion";
import EquationBlock from "@/components/mdx/EquationBlock";
import WarningBox from "@/components/mdx/WarningBox";
import DiagramBox from "@/components/mdx/DiagramBox";
import QuizCard from "@/components/mdx/QuizCard";
import QuizModal from "@/components/mdx/QuizModal";
import InfoBox from "@/components/mdx/InfoBox";


import { quizzes } from "@/data/quizzes";

function resolveMdxPath(slug: string[]) {
  return path.join(
    process.cwd(),
    "src/content",
    ...slug
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{
    slug: string[];
  }>;
}) {

  const { slug } =
    await params;

  try {

    const mdxPath =
      `${resolveMdxPath(slug)}.mdx`;

    const { metadata } =
      await getMDXContent(
        path.relative(
          process.cwd(),
          mdxPath
        )
      );

    return {
      title:
        metadata?.title ??
        slug.at(-1),

      description:
        metadata?.description ??
        "Chemical Engineering Hub",
    };

  } catch {

    return {
      title: "ChemicalEngineeringHub",
    };
  }
}

export default async function Page({
  params,
}: {
  params: Promise<{
    slug: string[];
  }>;
}) {

  const { slug } =
    await params;

  let mdxFile =
    `${resolveMdxPath(slug)}.mdx`;

  /*
   Folder route support

   /thermodynamics
   =>
   /thermodynamics/introduction
  */

  if (!fs.existsSync(mdxFile)) {

    const introFile =
      path.join(
        resolveMdxPath(slug),
        "introduction.mdx"
      );

    if (
      fs.existsSync(introFile)
    ) {

      redirect(
        `/${slug.join("/")}/introduction`
      );
    }

    return (
      <main className="p-10 text-white">
        Not Found
      </main>
    );
  }

  const relativePath =
    path.relative(
      process.cwd(),
      mdxFile
    );

  const { content } =
    await getMDXContent(
      relativePath
    );


    const headings =
      extractHeadings(
        content
      );    
/*
  Previous / Next navigation
  generated from _meta.json
*/
const navigation =
  getTopicNavigation(
    mdxFile
  );

  const progress =
  getTopicProgress(
    mdxFile
  );

  const topic =
    slug.at(-1) ?? "";

  const quiz =
    quizzes[
      topic as keyof typeof quizzes
    ] || [];

    const components = {

      h1: (props: any) => {
    
        const text =
          String(
            props.children
          );
    
        return (
          <h1
            id={slugify(text)}
          >
            {props.children}
          </h1>
        );
      },
    
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

  const mdx =
    await compileMDX({
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

      <div className="flex">
    
        <Sidebar
          currentSlug={slug}
        />
    
        <div
          className="
            flex-1
    
            flex
            gap-10
          "
        >
    
          <main
            className="
              flex-1
              px-8
              py-8
            "
          >
    
            <Breadcrumb />
    
            {progress && (
             <TopicProgress
               current={progress.current}
               total={progress.total}
             />
           )}
           
           <div className="max-w-5xl">
           
             <article
               className="
                 prose
                 prose-invert
                 mt-8
               "
             >
               {mdx.content}
             </article>
           
             <TopicNavigation
               previous={navigation.previous}
               next={navigation.next}
             />
           
           </div>
    
          </main>
    
          <TableOfContents
            headings={
              headings
            }
          />
    
        </div>
    
      </div>
    
    );
}