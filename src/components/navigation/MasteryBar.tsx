"use client";

import { useEffect, useState } from "react";

type Props = {
  topicId: string;
};

export default function MasteryBar({
  topicId,
}: Props) {

  const [mastery, setMastery] =
    useState(0);

  useEffect(() => {

    const saved =
      localStorage.getItem(
        `study-${topicId}`
      );

    if (!saved) return;

    try {

      const data =
        JSON.parse(saved);

      setMastery(
        data.mastery || 0
      );

    } catch {}

  }, [topicId]);

  return (

    <div
      className="
        flex
        items-center
        gap-2
        cursor-help
      "
    >

      <div
        className="
          h-1.5
          w-16
          overflow-hidden
          rounded-full
          bg-zinc-800
        "
      >

        <div
          className="
            h-full
            bg-green-500
            transition-all
          "
          style={{
            width: `${mastery}%`,
          }}
        />

      </div>

      <span
        className="
          text-xs
          text-zinc-400
        "
      >
        {mastery}%
      </span>

    </div>

  );

}