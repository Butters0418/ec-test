import { useEffect, useState } from "react";
import { LuSlidersVertical } from "react-icons/lu";

import type { ProductType } from "@/types/productType";
import Product from "./components/Product";

function Category() {
  const [products, setProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("/api/productions.json");
        const products = await response.json();
        setProducts(products.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="grid grid-col-1 xl:grid-cols-4 xl:gap-5">
      {/* filters */}
      <aside className="col-span-1 border border-black/10 rounded-[20px] p-5 h-89.25 hidden xl:block">
        <div className="flex justify-between items-center pb-6 border-b border-black/10">
          <h2 className="text-xl font-bold">Filters</h2>
          <button type="button" className="hover:bg-surface p-2 rounded-full transition-colors duration-300">
            <LuSlidersVertical className="w-5 h-5 text-black/40" />
          </button>
        </div>
      </aside>

      {/* 商品卡 */}
      <section className="col-span-3">
        <div className="flex justify-between items-end">
          <h1 className="font-bold text-2xl xl:text-4xl">Casual</h1>
          <p className="block xl:hidden text-sm text-black/60 pb-0.5">Showing 1-10 of 100 Products</p>
          <button type="button" className="bg-surface p-2 rounded-full block xl:hidden">
            <LuSlidersVertical className="w-3.5 h-3.5 text-black" />
          </button>
        </div>

        <ul className="grid grid-cols-2 md:grid-cols-3 gap-x-3.5 gap-y-6 md:gap-x-5 md:gap-y-9 mt-7 xl:mt-4">
          {!!products && products.map((product) => <Product key={product.title} product={product} />)}
        </ul>
      </section>
    </div>
  );
}
export default Category;
