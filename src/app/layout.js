import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "Mi App Next.js",
  description: "Ejercicio con App Router",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <nav style={{ marginBottom: "20px" }}>
          <Link href="/">Inicio</Link> |{" "}
          <Link href="/productos">Productos</Link> |{" "}
          <Link href="/blog">Blog</Link> |{" "}
          <Link href="/contacto">Contacto</Link>
        </nav>
        <main>{children}</main>
      </body>
    </html>
  );
}
