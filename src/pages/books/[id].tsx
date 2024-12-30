import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import styles from "./[id].module.css";

import fetchOneBook from "@/lib/fetch-one-book";

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const id = Number(context.params!.id);
  const book = await fetchOneBook(id);
  return { props: { book } };
};

export default function Page({
  book,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  if (!book) return <article>{"책을 찾을 수 없습니다."}</article>;
  const { id, title, subTitle, description, author, publisher, coverImgUrl } =
    book;

  return (
    <>
      <article
        className={styles.cover_image_container}
        style={{ backgroundImage: `url(${coverImgUrl})` }}
      >
        <img src={coverImgUrl} alt={title} />
      </article>

      <article className={styles.book_info_container}>
        <h3>{title}</h3>
        <h4>{subTitle}</h4>
        <footer>
          {author} | {publisher}
        </footer>
        <p>{description}</p>
      </article>
    </>
  );
}
