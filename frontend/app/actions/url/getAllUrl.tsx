export const getAllUrl = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/all`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  });
  if (!response.ok) {
    throw new Error("Failed to get all URLs");
  }
  const data = await response.json();
  return data;
};
