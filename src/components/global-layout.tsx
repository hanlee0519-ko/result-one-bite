import type { ReactNode } from "react";
import Link from "next/link";
import styles from "./global-layout.module.css";

export default function GlobalLayout({ children }: { children: ReactNode }) {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Link href={"/"}>{"🚀 ONE__BITE"}</Link>
      </header>
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>{"@2025 HAN LEE"}</footer>
    </div>
  );
}
