import { supabase } from "@/lib/supabase";

export async function trackEvent({
  topicId,
  eventType,
  score = null,
}: {
  topicId: string;
  eventType: string;
  score?: number | null;
}) {
  try {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    const { error } = await supabase
      .from("analytics_events")
      .insert({
        user_id: user?.id ?? null,
        topic_id: topicId,
        event_type: eventType,
        score,
      });

    if (error) {
      console.error(
        "Analytics Error:",
        error
      );
    }

  } catch (error) {
    console.error(
      "Analytics Error:",
      error
    );
  }
}