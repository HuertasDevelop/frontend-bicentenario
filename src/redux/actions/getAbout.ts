import { cache } from "react";
import "server-only";

export const getAbout = cache(async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/about/`, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });

  const about = (await res.json()) as About;
  return about;
});
