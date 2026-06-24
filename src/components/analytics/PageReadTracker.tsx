"use client";

import { useEffect } from "react";
import { trackEvent } from "@/lib/analytics";

type Props = {
  topicId: string;
};

export default function PageReadTracker({
  topicId,
}: Props) {

  useEffect(() => {

    let tracked = false;

    function handleScroll() {

      if (tracked) return;

      const scrollTop = window.scrollY;

      const docHeight =
        document.documentElement.scrollHeight;

      const windowHeight =
        window.innerHeight;

      const scrollPercent =
        (scrollTop /
          (docHeight - windowHeight)) *
        100;

      if (scrollPercent >= 80) {

        tracked = true;

        trackEvent({
          topicId,
          eventType: "page_read",
        });

        console.log(
          "PAGE READ:",
          topicId
        );
      }
    }

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );

  }, [topicId]);

  return null;
}