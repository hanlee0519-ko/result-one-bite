import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <section>
      <h1>{`Page: Book ${id}`}</h1>
      <p>{"Optional Catch All Segments"}</p>
    </section>
  );
}
