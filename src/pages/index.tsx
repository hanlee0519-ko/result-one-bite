import { ReactNode } from "react";
import { InferGetServerSidePropsType } from "next";
import styles from "./index.module.css";

import BookItem from "@/components/book-item";
import SearchableLayout from "@/components/searchable-layout";

import fetchBooks from "@/lib/fetch-books";
import fetchRandomBooks from "@/lib/fetch-random-books";

export const getServerSideProps = async () => {
  const [allBooks, randomBooks] = await Promise.all([
    fetchBooks(),
    fetchRandomBooks(),
  ]);

  return { props: { allBooks, randomBooks } };
};

export default function Home({
  allBooks,
  randomBooks,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div className={styles.container}>
      <article>
        <h3>{"지금 추천하는 도서"}</h3>
        <nav>
          {randomBooks.map((book) => (
            <BookItem key={book.id} {...book} />
          ))}
        </nav>
      </article>

      <article>
        <h3>{"등록된 모든 도서"}</h3>
        <nav>
          {allBooks.map((book) => (
            <BookItem key={book.id} {...book} />
          ))}
        </nav>
      </article>
    </div>
  );
}

Home.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
