import { type ReactNode, useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "./searchable-layout.module.css";

export default function SearchableLayout({
  children,
}: {
  children: ReactNode;
}) {
  const [searchKeyword, setSearchKeyword] = useState("");
  const router = useRouter();

  const q = router.query.q as string;

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchKeyword(event.target.value);
  };

  const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!searchKeyword) return;
    if (searchKeyword === q) return;

    router.push(`/search?q=${searchKeyword}`);
  };

  useEffect(() => {
    setSearchKeyword(q);
  }, [q]);

  return (
    <div>
      <form onSubmit={handleOnSubmit} className={styles.search_form}>
        <input
          value={searchKeyword || ""}
          onChange={handleOnChange}
          type="search"
          placeholder="검색어를 입력하세요..."
        />
        <button type="submit">{"검색"}</button>
      </form>
      {children}
    </div>
  );
}
