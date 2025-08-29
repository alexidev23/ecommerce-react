import { CarruselLoopMarcas } from "@/features/CarruselLoopMarcas";
import { CarruselAdds } from "@/features/home/Carrusel-adds";
import ProductTabs from "@/features/TabsProducts";

export default function Home() {
  return (
    <section className="space-y-6">
      <CarruselAdds />
      <ProductTabs />
      <CarruselLoopMarcas />
    </section>
  );
}