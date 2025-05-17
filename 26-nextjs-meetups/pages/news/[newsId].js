import { useRouter } from "next/router";

export default function SomethingImportantPage() {
  const router = useRouter();

  return <h1>The Something Important Page for {router.query.newsId}</h1>;
}