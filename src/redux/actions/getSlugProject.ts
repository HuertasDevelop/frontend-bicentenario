import { cache } from "react";
import "server-only";

export const getSlugProject = cache(async (slug: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/projects/${slug}/`,
    {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }
  );
  const project = (await res.json()) as Project;
  return project;
});
