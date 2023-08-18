import { cache } from "react";
import "server-only";

export const getStats = cache(async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/about/stats/`,
    {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }
  );

  const stats = (await res.json()) as Stats[];
  return stats;
});
