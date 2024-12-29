import { BookData } from "@/types";
import Link from "next/link";

import styles from "./book-item.module.css";

export default function BookItem({
  id,
  title,
  subTitle,
  description,
  author,
  publisher,
  coverImgUrl,
}: BookData) {
  return (
    <Link href={`/books/${id}`} className={styles.container}>
      <img src={coverImgUrl} alt={title} />
      <aside>
        <h4>{title}</h4>
        <h5>{subTitle}</h5>
        <footer>
          {author} | {publisher}
        </footer>
      </aside>
    </Link>
  );
}
