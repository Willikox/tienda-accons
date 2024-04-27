import ClientCart from "@/components/clientCart";
import products from "../data/product.json";

function Tienda() {
  return (
    <div>
      <h1 className="text-[30px]">Productos</h1>
      <ClientCart products={products} />
    </div>
  );
}
export default Tienda;
