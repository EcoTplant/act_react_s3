export default function DocsPage({ params }) {
  const { slug } = params;

  if (!slug || slug.length === 0) {
    return (
      <div>
        <h1>Documentación</h1>
        <p>Bienvenido a la documentación principal.</p>
      </div>
    );
  }

  const breadcrumbs = ["Docs", ...slug];

  return (
    <div>
      <h1>Documentación: {slug.join(" / ")}</h1>
      <p>{breadcrumbs.join(" > ")}</p>
      <p>Contenido básico de la sección {slug[slug.length - 1]}.</p>
    </div>
  );
}
