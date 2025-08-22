// src/pages/Product.tsx
import { useParams } from "react-router-dom";

type Params = {
  category?: string;
  product?: string;
};

export default function Product() {
  const { category, product } = useParams<Params>();

  return (
    <section className="space-y-4">
      {/* Categoría */}
      <p className="text-sm text-muted-foreground">
        Categoría:{" "}
        <span className="font-medium">
          {toTitle(category ?? "")}
        </span>
      </p>

      {/* Nombre del producto */}
      <h1 className="text-2xl font-bold">
        {toTitle(product ?? "")}
      </h1>

      {/* Placeholder para detalle */}
      <p>
        Acá iría el detalle del producto: precio, imágenes, descripción
        y botón para agregar al carrito.
      </p>
    </section>
  );
}

// Utilidad para formatear slugs (ej: "iphone-15-pro" → "Iphone 15 Pro")
function toTitle(slug: string): string {
  return decodeURIComponent(slug)
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
