import { Link } from "react-router-dom";
export default function NotFound() {
return (
<div className="space-y-4">
<h1 className="text-2xl font-bold">404 – Página no encontrada</h1>
<Link className="underline" to="/home">Volver al Home</Link>
</div>
);
}