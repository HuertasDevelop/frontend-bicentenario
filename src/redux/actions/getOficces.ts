import { cache } from "react";
import "server-only";

export const getOffices = cache(async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/about/office/`,
    {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }
  );

  const offices = (await res.json()) as Office[];
  return offices;
});
