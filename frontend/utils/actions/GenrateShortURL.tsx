export const generateShortUrl = (): string => {
  const randomString = Math.random().toString(36).substring(2, 9);
  return `${randomString}`;
};
