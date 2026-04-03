import ProductGrid from "../components/ProductGrid";
import ladiesData from "../data/ladiesData";

export default function Ladies() {
  return <ProductGrid data={ladiesData} title="Women's Collection" />;
}