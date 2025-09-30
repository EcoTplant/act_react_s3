import Link from "next/link";

export default function ProductosLayout({ children }) {
  return (
    <div>
      <h1>Sección de Productos</h1>
      <nav>
        <Link href="/productos/electronicos">Electrónicos</Link> |{" "}
        <Link href="/productos/ropa">Ropa</Link>
      </nav>
      <div style={{ marginTop: "20px" }}>{children}</div>
    </div>
  );
}
