import { ReactNode } from "react";
import SearchableLayout from "@/components/searchable-layout";

import books from "@/mock/books.json";
import BookItem from "@/components/book-item";

export default function Page() {
  return (
    <section>
      <section>
        {books.map((book) => (
          <BookItem key={book.id} {...book} />
        ))}
      </section>
    </section>
  );
}

Page.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
