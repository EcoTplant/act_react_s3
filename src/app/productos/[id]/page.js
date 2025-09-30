import Link from "next/link";

export default function ProductoPage({ params }) {
  return (
    <div>
      <h1>Producto: {params.id}</h1>
      <p>Este es un producto con ID {params.id}.</p>
      <Link href="/productos">← Volver a productos</Link>
    </div>
  );
}
