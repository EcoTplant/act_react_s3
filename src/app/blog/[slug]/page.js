import Link from "next/link";

export default function ArticuloPage({ params }) {
  return (
    <div>
      <h1>Artículo: {params.slug}</h1>
      <p>Contenido del artículo {params.slug}.</p>
      <Link href="/blog">← Volver al blog</Link>
    </div>
  );
}
