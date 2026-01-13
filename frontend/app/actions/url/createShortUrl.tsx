import { ShortenedUrl } from "@/utils/interface/ShortenedURL";

export const createShortUrl = async (newUrl: ShortenedUrl) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({ original: newUrl.original, short: newUrl.short }),
  });

  if (!response.ok) {
    throw new Error("Failed to create short URL");
  }

  const data = await response.json();
  return data;
};
