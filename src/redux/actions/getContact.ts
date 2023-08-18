import { cache } from "react";
import "server-only";

export const getContact = cache(async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/contact/`, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });

  const contact = (await res.json()) as Contact;
  return contact;
});
