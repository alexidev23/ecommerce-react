import { Link, useParams } from "react-router-dom";


type Params = { category?: string };


export default function Category() {
const { category } = useParams<Params>();
const title = toTitle(category ?? "");


const demoProducts = [
{ slug: "iphone-15-pro", name: "iPhone 15 Pro" },
{ slug: "macbook-air-m2", name: "MacBook Air M2" },
];


return (
<section className="space-y-6">
<h1 className="text-2xl font-bold">Categoría: {title}</h1>
<ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
{demoProducts.map((p) => (
<li key={p.slug} className="rounded-2xl border p-4">
<h2 className="font-semibold">{p.name}</h2>
<Link className="underline" to={`/${category}/${p.slug}`}>
Ver detalle
</Link>
</li>
))}
</ul>
</section>
);
}


function toTitle(slug: string) {
return decodeURIComponent(slug)
.split("-")
.map((s) => s.charAt(0).toUpperCase() + s.slice(1))
.join(" ");
}