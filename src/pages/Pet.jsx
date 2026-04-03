import ProductGrid from "../components/ProductGrid";
import petData from "../data/petData";

export default function Pet() {
  return <ProductGrid data={petData} title="Pet Collection" />;
}