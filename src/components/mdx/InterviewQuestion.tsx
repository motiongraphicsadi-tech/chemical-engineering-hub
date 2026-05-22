type Props = {
    question: string;
    answer: string;
  };
  
  export default function InterviewQuestion({
    question,
    answer,
  }: Props) {
    return (
  
      <div
        className="
          my-8
          rounded-xl
          border
          border-green-500/30
          bg-green-500/10
          p-6
        "
      >
  
        {/* Label */}
        <div
          className="
            mb-2
            text-sm
            font-semibold
            uppercase
            tracking-wide
            text-green-300
          "
        >
          Interview Question
        </div>
  
        {/* Question */}
        <h3
          className="
            text-xl
            font-semibold
            text-white
          "
        >
          {question}
        </h3>
  
        {/* Answer */}
        <p
          className="
            mt-4
            leading-8
            text-gray-200
          "
        >
          {answer}
        </p>
  
      </div>
    );
  }