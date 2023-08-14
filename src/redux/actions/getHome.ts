import { cache } from "react";
import "server-only";

export const getHome = cache(async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/web/home/`, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });

  const home = (await res.json()) as Home[];
  return home;
});
