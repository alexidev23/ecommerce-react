import { ModeToggle } from "@/components/mode-toggle";
import { Link } from "react-router-dom";

const demoCategories = ["electronica", "hogar", "juguetes"];

export default function Home() {
  return (
    <section className="space-y-6">
      <h1 className="text-2xl font-bold">Home</h1>
        <ModeToggle />
      <div className="space-y-2">
        <h2 className="text-lg font-semibold">Categorías</h2>
        <ul className="list-disc pl-5">
          {demoCategories.map((cat) => (
            <li key={cat}>
              <Link to={`/${cat}`}>{toTitle(cat)}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="space-y-2">
      <h2 className="text-lg font-semibold">Ejemplo de producto</h2>
      <p>
        <Link to="/electronica/iphone-15-pro">Ver iPhone 15 Pro</Link>
      </p>
      </div>
    </section>
  );
}


function toTitle(slug: string) {
  return decodeURIComponent(slug)
    .split("-")
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join(" ");
}