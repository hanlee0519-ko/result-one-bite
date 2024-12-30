import { BookData } from "@/types";

export default async function fetchOneBook(
  id: number
): Promise<BookData | null> {
  const URL = `http://localhost:12345/book/${id}`;

  try {
    const response = await fetch(URL);

    if (!response.ok) throw new Error();
    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
}
