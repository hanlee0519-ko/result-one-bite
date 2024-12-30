import type { BookData } from "@/types";

export default async function fetchBooks(q?: string): Promise<BookData[]> {
  let URL = "http://localhost:12345/book";

  if (q) URL = URL + `/search?q=${q}`;

  try {
    const response = await fetch(URL);

    if (!response.ok) throw new Error();
    return await response.json();
  } catch (error) {
    console.error(error);
    return [];
  }
}
