import Link from "next/link";

export default function BlogPage() {
  return (
    <div>
      <h1>Blog</h1>
      <ul>
        <li><Link href="/blog/introduccion-nextjs">Introducción a Next.js</Link></li>
        <li><Link href="/blog/react-server-components">React Server Components</Link></li>
        <li><Link href="/blog/app-router-guia">Guía del App Router</Link></li>
      </ul>
    </div>
  );
}
