import SearchableLayout from "@/components/searchable-layout";
import { ReactNode } from "react";

import styles from "./index.module.css";
import books from "@/mock/books.json";
import BookItem from "@/components/book-item";

export default function Home() {
  return (
    <section className={styles.container}>
      <section>
        <h3>{"지금 추천하는 도서"}</h3>
        <nav>
          {books.map((book) => (
            <BookItem key={book.id} {...book} />
          ))}
        </nav>
      </section>
      <section>
        <h3>{"등록된 모든 도서"}</h3>
        <nav>
          {books.map((book) => (
            <BookItem key={book.id} {...book} />
          ))}
        </nav>
      </section>
    </section>
  );
}

Home.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
