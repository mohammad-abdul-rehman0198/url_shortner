export const getShortUrl = async (shortUrl: string) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/${shortUrl}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  if (!response.ok) {
    throw new Error("Failed to get short URL");
  }
  const data = await response.json();
  return data;
};
