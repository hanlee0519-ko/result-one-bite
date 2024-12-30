import type { BookData } from "@/types";

export default async function fetchRandomBooks(): Promise<BookData[]> {
  const URL = "http://localhost:12345/book/random";

  try {
    const response = await fetch(URL);

    if (!response.ok) throw new Error();
    return await response.json();
  } catch (error) {
    console.error(error);
    return [];
  }
}
