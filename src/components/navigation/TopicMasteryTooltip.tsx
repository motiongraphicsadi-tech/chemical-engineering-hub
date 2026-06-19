"use client";

type Props = {
  topicId: string;
};

export default function TopicMasteryTooltip({
  topicId,
}: Props) {

  return (

    <div>

      <p
        className="
          font-semibold
          text-white
        "
      >
        How to reach 100%
      </p>

      <div
        className="
          mt-3
          space-y-2
          text-zinc-400
        "
      >

        <p>
          ✓ Complete Quiz
        </p>

        <p>
          ✓ Score 80%+
        </p>

        <p>
          ✓ Complete revisions
        </p>

        <p>
          ✓ Maintain mastery
        </p>

      </div>

    </div>

  );

}