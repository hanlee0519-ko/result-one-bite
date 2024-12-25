import SearchableLayout from "@/components/searchable-layout";
import { useRouter } from "next/router";
import { ReactNode } from "react";

export default function Page() {
  const router = useRouter();
  const q = router.query.q ?? "";

  console.log("Page: Search", q);

  return (
    <section>
      <h1>{`Page: Search ${q}`}</h1>
    </section>
  );
}

Page.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
