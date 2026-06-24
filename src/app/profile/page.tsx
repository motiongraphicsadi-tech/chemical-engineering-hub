"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

type UserData = {
  email: string;
  fullName: string;
  avatarUrl: string;
  createdAt: string;
};

export default function ProfilePage() {

  const [userData, setUserData] =
    useState<UserData | null>(null);

    const [stats, setStats] =
    useState({
      topics: 0,
      mastery: 0,
      attempts: 0,
      bestScore: 0,
    });

  useEffect(() => {

    async function loadProfile() {

      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) return;

      const {
        data: progress,
      } = await supabase
        .from("user_topic_progress")
        .select("*")
        .eq("user_id", user.id);

        if (progress) {

            const topics =
              progress.length;
          
            const mastery =
              topics > 0
                ? Math.round(
                    progress.reduce(
                      (sum, item) =>
                        sum + item.mastery,
                      0
                    ) / topics
                  )
                : 0;
          
            const attempts =
              progress.reduce(
                (sum, item) =>
                  sum + item.attempts,
                0
              );
          
            const bestScore =
              progress.length > 0
                ? Math.max(
                    ...progress.map(
                      (item) =>
                        item.best_score
                    )
                  )
                : 0;
          
            setStats({
              topics,
              mastery,
              attempts,
              bestScore,
            });
          
          }

      setUserData({
        email:
          user.email || "",

        fullName:
          user.user_metadata?.full_name || "",

        avatarUrl:
          user.user_metadata?.avatar_url || "",

        createdAt:
          user.created_at || "",
      });

    }

    loadProfile();

  }, []);

  async function handleLogout() {

    await supabase.auth.signOut();

    window.location.href = "/";
  }

  if (!userData) {

    return (

      <main
        className="
          min-h-screen
          bg-black
          text-white
          p-8
        "
      >
        Loading...
      </main>

    );

  }

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
          text-4xl
          font-bold
          mb-8
        "
      >
        Profile
      </h1>

      <div
        className="
          max-w-3xl

          rounded-xl
          border
          border-zinc-800

          bg-zinc-950

          p-8
        "
      >

        {/* Avatar */}

        {userData.avatarUrl ? (

          <img
            src={userData.avatarUrl}
            alt={userData.fullName}
            className="
              h-24
              w-24
              rounded-full
              object-cover
              mb-6
            "
          />

        ) : (

          <div
            className="
              h-24
              w-24

              rounded-full
              bg-emerald-800

              flex
              items-center
              justify-center

              text-5xl
              text-white

              mb-6
            "
          >
            {userData.fullName
              ?.charAt(0)
              ?.toUpperCase()}
          </div>

        )}

        {/* Name */}

        <h2
          className="
            text-3xl
            font-bold
          "
        >
          {userData.fullName}
        </h2>

        {/* Email */}

        <p
          className="
            mt-2
            text-zinc-400
          "
        >
          {userData.email}
        </p>

        {/* Member Since */}



        <div
          className="
            mt-8
            rounded-lg
            border
            border-zinc-800
            bg-zinc-900
            p-4
          "
        >

          <p
            className="
              text-sm
              text-zinc-500
            "
          >
            Member Since
          </p>



          <p
            className="
              mt-1
              text-white
            "
          >
            {new Date(
              userData.createdAt
            ).toLocaleDateString()}
          </p>

        </div>


        <div
  className="
    mt-8
    grid
    gap-4
    md:grid-cols-4
  "
>

<StatCard
  title="Topics"
  value={stats.topics}
/>

<StatCard
  title="Mastery"
  value={`${stats.mastery}%`}
/>

<StatCard
  title="Attempts"
  value={stats.attempts}
/>

<StatCard
  title="Best Score"
  value={`${stats.bestScore}%`}
/>

</div>

        {/* Logout */}

        <button
          onClick={handleLogout}
          className="
            mt-8

            rounded-lg
            bg-red-600

            px-5
            py-3

            font-medium
            text-white

            hover:bg-red-700
          "
        >
          Logout
        </button>

      </div>

    </main>

  );

}

function StatCard({
    title,
    value,
  }: {
    title: string;
    value: string | number;
  }) {
  
    return (
  
      <div
        className="
          rounded-lg
          border
          border-zinc-800
          bg-zinc-900
          p-4
        "
      >
  
        <p
          className="
            text-sm
            text-zinc-500
          "
        >
          {title}
        </p>
  
        <p
          className="
            mt-2
            text-2xl
            font-bold
            text-blue-400
          "
        >
          {value}
        </p>
  
      </div>
  
    );
  
  }