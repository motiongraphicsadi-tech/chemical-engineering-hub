"use client";

import { useState } from "react";

import { X } from "lucide-react";

type Question = {
  question: string;

  options: string[];

  answer: string;
};

type Props = {
  questions: Question[];

  onClose: () => void;
};

export default function QuizModal({
  questions,
  onClose,
}: Props) {

  const [current, setCurrent] =
    useState(0);

  const [selected, setSelected] =
    useState<string | null>(null);

  const [score, setScore] =
    useState(0);

  const [submitted, setSubmitted] =
    useState(false);

  const question =
    questions[current];

  function handleSubmit() {

    if (!selected) return;

    if (
      selected === question.answer
    ) {
      setScore((prev) => prev + 1);
    }

    setSubmitted(true);
  }

  function handleNext() {

    setSelected(null);

    setSubmitted(false);

    setCurrent((prev) => prev + 1);
  }

  /*
    Quiz Completed
  */
  if (
    current >= questions.length
  ) {

    return (

      <div
        className="
          fixed
          inset-0
          z-[99999]

          flex
          items-center
          justify-center

          bg-black/80
          backdrop-blur-sm
        "
      >

        <div
          className="
            w-full
            max-w-2xl

            rounded-3xl
            border
            border-gray-800

            bg-gray-950

            p-10
            text-center
            text-white
          "
        >

          <h2
            className="
              text-4xl
              font-bold
            "
          >
            Quiz Completed
          </h2>

          <p
            className="
              mt-8
              text-6xl
              font-bold
              text-green-500
            "
          >
            {score} / {questions.length}
          </p>

          <button
            onClick={onClose}

            className="
              mt-10
              rounded-xl
              bg-blue-600
              px-6
              py-3
              font-semibold
              text-white
            "
          >
            Close Quiz
          </button>

        </div>

      </div>
    );
  }

  return (

    <div
      className="
        fixed
        inset-0
        z-[99999]

        flex
        items-center
        justify-center

        bg-black/80
        backdrop-blur-sm

        p-4
      "
    >

      <div
        className="
          relative

          w-full
          max-w-3xl

          rounded-3xl
          border
          border-gray-800

          bg-gray-950

          p-8
          text-white
        "
      >

        {/* Close */}
        <button
          onClick={onClose}

          className="
            absolute
            right-4
            top-4
          "
        >

          <X className="h-6 w-6" />

        </button>

        {/* Progress */}
        <div
          className="
            mb-8
            flex
            items-center
            justify-between
          "
        >

          <h2
            className="
              text-2xl
              font-bold
            "
          >
            Quiz
          </h2>

          <span
            className="
              text-gray-400
            "
          >
            Question {current + 1}
            {" / "}
            {questions.length}
          </span>

        </div>

        {/* Question */}
        <h3
          className="
            text-3xl
            font-semibold
            leading-relaxed
          "
        >
          {question.question}
        </h3>

        {/* Options */}
        <div
          className="
            mt-8
            space-y-4
          "
        >

          {question.options.map(
            (option) => {

              const isCorrect =
                submitted &&
                option === question.answer;

              const isWrong =
                submitted &&
                option === selected &&
                option !== question.answer;

              return (

                <button
                  key={option}

                  onClick={() =>
                    !submitted &&
                    setSelected(option)
                  }

                  className={`
                    w-full
                    rounded-2xl
                    border

                    px-5
                    py-4

                    text-left
                    text-lg

                    transition-all

                    ${
                      selected === option
                        ? "border-blue-500 bg-blue-500/20"
                        : "border-gray-800 bg-gray-900"
                    }

                    ${
                      isCorrect
                        ? "border-green-500 bg-green-500/20"
                        : ""
                    }

                    ${
                      isWrong
                        ? "border-red-500 bg-red-500/20"
                        : ""
                    }
                  `}
                >

                  {option}

                </button>

              );
            }
          )}

        </div>

        {/* Buttons */}
        <div
          className="
            mt-10
            flex
            justify-end
          "
        >

          {!submitted ? (

            <button
              onClick={handleSubmit}

              className="
                rounded-xl
                bg-green-600
                px-6
                py-3
                font-semibold
                text-white
              "
            >
              Submit Answer
            </button>

          ) : (

            <button
              onClick={handleNext}

              className="
                rounded-xl
                bg-blue-600
                px-6
                py-3
                font-semibold
                text-white
              "
            >
              Next Question
            </button>

          )}

        </div>

      </div>

    </div>
  );
}