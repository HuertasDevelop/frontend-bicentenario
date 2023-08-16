import { cache } from "react";
import "server-only";

export const getProject = cache(async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/web/project/`,
    {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }
  );

  const project = (await res.json()) as Home[];
  return project;
});
