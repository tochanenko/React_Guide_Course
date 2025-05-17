import Link from "next/link";

export default function NewsPage() {
  return <>
    <h1>The News Page</h1>
    <ul>
      <li><Link href="/news/first-article">First article</Link></li>
      <li>Second article</li>
    </ul>
  </>;
}