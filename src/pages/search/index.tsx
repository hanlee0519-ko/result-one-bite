import { ReactNode } from "react";
import { InferGetServerSidePropsType, GetServerSidePropsContext } from "next";

import SearchableLayout from "@/components/searchable-layout";
import BookItem from "@/components/book-item";

import fetchBooks from "@/lib/fetch-books";

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const q = (context.query.q ?? "") as string;
  const searchBooks = await fetchBooks(q);

  return { props: { searchBooks } };
};

export default function Page({
  searchBooks,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <article>
        {searchBooks.map((book) => (
          <BookItem key={book.id} {...book} />
        ))}
      </article>
    </>
  );
}

Page.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
