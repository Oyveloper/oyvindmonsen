import Link from "next/link";
export default function Navbar() {
  return (
    <nav>
      <Link href="/">
        <a>Home</a>
      </Link>

      <Link href="/blog">
        <a>Blog</a>
      </Link>
    </nav>
  );
}
