

"use client";



import { useEffect, useState } from "react";

type TopicData = {
  topicId: string;

  mastery: number;

  bestScore: number;

  lastScore: number;

  attempts: number;

  revisionStage: number;

  lastQuizDate: string;
};
export default function Dashboard() {

  const [topics, setTopics] =
    useState<TopicData[]>([]);

  useEffect(() => {

    const allTopics: TopicData[] = [];

    for (
      let i = 0;
      i < localStorage.length;
      i++
    ) {

      const key =
        localStorage.key(i);

      if (
        !key?.startsWith(
          "study-"
        )
      ) {
        continue;
      }

      const raw =
        localStorage.getItem(
          key
        );

      if (!raw) continue;

      try {

        const data =
          JSON.parse(raw);

          allTopics.push({
            topicId:
              key.replace(
                "study-",
                ""
              ),
          
            mastery:
              data.mastery ?? 0,
          
            bestScore:
              data.bestScore ?? 0,
          
            lastScore:
              data.lastScore ?? 0,
          
            attempts:
              data.attempts ?? 0,
          
            revisionStage:
              data.revisionStage ?? 0,
          
            lastQuizDate:
              data.lastQuizDate ?? "",
          });

      } catch {}
    }

    console.log(
      "Dashboard Topics:",
      allTopics
    );
    
    setTopics(
      allTopics
    );

  }, []);

  const totalTopics =
    topics.length;

    const completedTopics =
    topics.filter(
      (t) =>
        t.mastery >= 80
    ).length;

    const revisionPending =
    topics.filter(
      (t) =>
        t.mastery < 60
    ).length;

    const averageMastery =
    totalTopics
      ? (
          topics.reduce(
            (sum, t) =>
              sum + t.mastery,
            0
          ) / totalTopics
        ).toFixed(1)
      : "0";

 

  const completionPercent =
    totalTopics
      ? Math.round(
          (
            completedTopics /
            totalTopics
          ) * 100
        )
      : 0;

  const subjectMap: Record<
    string,
    {
      total: number;
      completed: number;
    }
  > = {};

  
  topics.forEach((topic) => {

    const parts =
      topic.topicId.split("/");

    const subject =
      parts[2]
        ?.replace(/-/g, " ")
        .replace(
          /\b\w/g,
          (c) =>
            c.toUpperCase()
        ) || "Unknown";

    if (!subjectMap[subject]) {

      subjectMap[subject] = {
        total: 0,
        completed: 0,
      };

    }

    subjectMap[subject].total++;

    if (topic.mastery >= 80) {
      subjectMap[subject].completed++;
    }

  });

  const revisionQueue =
  topics.filter(
    (topic) =>
      topic.mastery < 60
  );

  const todaysRevision =
  revisionQueue.slice(0, 5);

  return (

    <main
      className="
        min-h-screen
        bg-black
        text-white
        p-8
      "
    >

      <h1
        className="
          text-3xl
          font-bold
          mb-8
        "
      >
        Dashboard
      </h1>



      <div
        className="
          grid
          gap-6
          md:grid-cols-2
          xl:grid-cols-4
        "
      >

        <Card
          title="Topics Tracked"
          value={totalTopics}
        />

        <Card
          title="Completion"
          value={`${completionPercent}%`}
        />

        <Card
          title="Revision Pending"
          value={revisionPending}
        />

        <Card
          title="Average Mastery"
          value={`${averageMastery}%`}
        />             

      </div>

      {/* INSIGHTS */}

      <div
        className="
          mt-8
          rounded-xl
          border
          border-zinc-800
          bg-zinc-950
          p-6
        "
      >

        <h2
          className="
            text-lg
            font-semibold
            mb-4
          "
        >
          Study Insights
        </h2>

        <div
          className="
            space-y-3
            text-zinc-300
          "
        >

          <p>
            Topics Completed:
            {" "}
            {completedTopics}
          </p>

          <p>
            Average Mastery:
            {" "}
            {averageMastery}%
          </p>                  

          <p>
            Revision Needed:
            {" "}
            {revisionPending}
          </p>

         

        </div>

      </div>

      {/* WEAK TOPICS */}

      <div
        className="
          mt-8
          rounded-xl
          border
          border-zinc-800
          bg-zinc-950
          p-6
        "
      >

        <h2
          className="
            text-lg
            font-semibold
            mb-4
          "
        >
          Weak Topics
        </h2>

        <div
          className="
            space-y-2
          "
        >

          {topics
            .filter(
              (t) =>
                t.mastery < 60
            )
            .map((topic) => (

              <div
                key={
                  topic.topicId
                }
                className="
                  text-sm
                  text-red-400
                "
              >
                {topic.topicId
  .split("/")
  .slice(-2)
  .map(
    (s) =>
      s
        .replace(/-/g, " ")
        .replace(
          /\b\w/g,
          c => c.toUpperCase()
        )
  )
  .join(" → ")
}
              </div>

            ))}

        </div>

      </div>

      {/* SUBJECT PROGRESS */}

<div
  className="
    mt-8
    rounded-xl
    border
    border-zinc-800
    bg-zinc-950
    p-6
  "
>

  <h2
    className="
      text-lg
      font-semibold
      mb-5
    "
  >
    Subject Progress
  </h2>

  <div className="space-y-5">

    {Object.entries(subjectMap).map(
      ([subject, stats]) => {

        const percent =
          stats.total > 0
            ? Math.round(
                (
                  stats.completed /
                  stats.total
                ) * 100
              )
            : 0;

        return (

          <div
            key={subject}
          >

            <div
              className="
                flex
                items-center
                justify-between
                mb-2
              "
            >

              <span
                className="
                  text-sm
                  text-zinc-300
                "
              >
                {subject}
              </span>

              <span
                className="
                  text-sm
                  font-medium
                  text-blue-400
                "
              >
                {percent}%
              </span>

            </div>

            <div
              className="
                h-2.5
                rounded-full
                bg-zinc-800
                overflow-hidden
              "
            >

              <div
                className="
                  h-full
                  bg-blue-500
                  transition-all
                  duration-300
                "
                style={{
                  width: `${percent}%`,
                }}
              />

            </div>

          </div>

        );

      }
    )}

  </div>

</div>

{/* REVISION QUEUE */}

<div
  className="
    mt-8
    rounded-xl
    border
    border-zinc-800
    bg-zinc-950
    p-6
  "
>

  <div
    className="
      flex
      items-center
      justify-between
      mb-5
    "
  >

    <h2
      className="
        text-lg
        font-semibold
      "
    >
      Revision Queue
    </h2>

    <span
      className="
        rounded-full
        bg-red-500/10

        px-2
        py-1

        text-xs
        text-red-400
      "
    >
      {revisionQueue.length}
      {" "}
      Topics
    </span>

  </div>

  {revisionQueue.length === 0 ? (

    <div
      className="
        rounded-lg
        border
        border-zinc-800
        p-4
        text-zinc-500
      "
    >
      No revision pending 🎉
    </div>

  ) : (

    <div
      className="
        space-y-3
      "
    >

      {revisionQueue.map(
        (topic) => (

          <div
          key={topic.topicId}
            className="
              rounded-lg
              border
              border-zinc-800
              p-4

              transition-all

              hover:border-red-500/40
            "
          >

            <p
              className="
                break-all

                text-sm
                text-red-400
              "
            >
              {topic.topicId
  .split("/")
  .slice(-2)
  .map(
    (s) =>
      s
        .replace(/-/g, " ")
        .replace(
          /\b\w/g,
          c => c.toUpperCase()
        )
  )
  .join(" → ")
}
            </p>

            <div
              className="
                mt-2

                flex
                items-center
                gap-4

                text-xs
                text-zinc-500
              "
            >

              <span>
                Mastery:
                {topic.mastery}%
              </span>
              
              <span>
                Best Score:
                {topic.bestScore}%
              </span>
              
              <span>
                Attempts:
                {topic.attempts}
              </span>              

            </div>

          </div>

        )
      )}

    </div>

  )}

</div>

{/* TODAY'S REVISION */}

<div
  className="
    mt-8
    rounded-xl
    border
    border-zinc-800
    bg-zinc-950
    p-6
  "
>

  <h2
    className="
      text-lg
      font-semibold
      mb-5
    "
  >
    Today's Revision
  </h2>

  {todaysRevision.length === 0 ? (

    <p
      className="
        text-zinc-500
      "
    >
      Nothing scheduled today 🎉
    </p>

  ) : (

    <div
      className="
        space-y-3
      "
    >

      {todaysRevision.map(
        (topic) => (

          <div
            key={topic.topicId}
            className="
              rounded-lg
              border
              border-zinc-800
              p-4
            "
          >

            <p
              className="
                text-yellow-400
                text-sm
              "
            >
              📚 {" "}
              {
                topic.topicId
                  .split("/")
                  .slice(-2)
                  .map(
                    (s) =>
                      s
                        .replace(/-/g, " ")
                        .replace(
                          /\b\w/g,
                          c => c.toUpperCase()
                        )
                  )
                  .join(" → ")
              }
            </p>

          </div>

        )
      )}

    </div>

  )}

</div>

    </main>

  );
}

function Card({
  title,
  value,
}: {
  title: string;
  value: string | number;
}) {



  return (

    <div
      className="
        rounded-xl
        border
        border-zinc-800
        bg-zinc-950
        p-6
      "
    >

      <p
        className="
          text-sm
          text-zinc-400
        "
      >
        {title}
      </p>

      <p
        className="
          mt-2
          text-3xl
          font-bold
          text-blue-400
        "
      >
        {value}
      </p>

    </div>

  );
}

