import { cache } from "react";
import "server-only";

export const getProjects = cache(async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/projects/`, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });

  const projects = (await res.json()) as Project[];
  return projects;
});
