"use client";

import { useState } from "react";

import QuizModal from "./QuizModal";

type Question = {
  question: string;

  options: string[];

  answer: string;
};

type Props = {
  title: string;

  description?: string;

  questions: Question[];

  topicId: string;
};

export default function QuizCard({
  title,
  description,
  questions = [],
  topicId,
}: Partial<Props>) {
    
  

  const [open, setOpen] =
    useState(false);

  return (

    <>

      {/* Quiz Preview Card */}
      <div
        className="
          mt-10
          rounded-3xl
          border
          border-gray-800
          bg-gray-950
          p-8
          text-white
        "
      >

        <h2
          className="
            text-3xl
            font-bold
          "
        >
          {title}
        </h2>

        {description && (

          <p
            className="
              mt-4
              text-gray-400
            "
          >
            {description}
          </p>

        )}

        <div
          className="
            mt-6
            flex
            items-center
            justify-between
          "
        >

          <span
            className="
              text-sm
              text-gray-500
            "
          >
            {questions?.length || 0} Questions
          </span>

          <button
            onClick={() =>
              setOpen(true)
            }

            className="
              rounded-xl
              bg-blue-600
              px-6
              py-3
              font-semibold
              text-white
            "
          >
            Start Quiz
          </button>

        </div>

      </div>

      {/* Modal */}
      {open && (

<QuizModal
questions={questions || []}
topicId={topicId || ""}

onClose={() =>
  setOpen(false)
}
/>

      )}

    </>
  );
}