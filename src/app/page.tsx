import Link from "next/link";

export default function Top() {
  return (
    <main>
      <div>トップ</div>
      <ul>
        <li>
          <Link href="/individual">一般の方</Link>
        </li>
        <li>
          <Link href="/business">行政・事業者の方</Link>
        </li>
        <li>
          <Link href="/press">プレスルーム</Link>
        </li>
        <li>
          <Link href="/en">Global Site</Link>
        </li>
        <li>
          <Link href="/search">検索</Link>
        </li>
      </ul>
    </main>
  );
}
