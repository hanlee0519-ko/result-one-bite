import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();
  const { q } = router.query;

  return (
    <section>
      <h1>{`Page: Search ${q}`}</h1>
    </section>
  );
}
