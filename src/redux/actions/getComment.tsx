import { cache } from "react";
import "server-only";

export const getComment = cache(async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/web/comment/`,
    {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }
  );

  const comments = (await res.json()) as Comment[];
  return comments;
});
