import { cache } from "react";
import "server-only";

export const getCarousel = cache(async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/web/carousel/`,
    {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }
  );

  const carousel = (await res.json()) as Carousel[];
  return carousel;
});
