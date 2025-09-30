import Link from "next/link";

export default function BlogLayout({ children }) {
  return (
    <div>
      <h1>Sección de Blog</h1>
      <nav>
        <Link href="/blog">Lista de artículos</Link>
      </nav>
      <div style={{ marginTop: "20px" }}>{children}</div>
    </div>
  );
}
