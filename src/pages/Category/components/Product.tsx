import type { ProductType } from "@/types/productType";
import { LiaStarSolid, LiaStarHalf } from "react-icons/lia";
import { FiShoppingCart } from "react-icons/fi";
import useCartStore from "@/stores/useCartStore";

interface ProductProps {
  product: ProductType;
}

function Product({ product }: ProductProps) {
  const addItem = useCartStore((state) => state.addItem);
  const { title, price, score, cover, discount } = product;
  const floorScore = Math.floor(score);
  const hasHalfStar = score % 1 >= 0.5;
  const discountedPrice = discount ? Math.floor(price * (1 - discount / 100)) : price; // discount 先視為折扣百分比
  const marketPrice = discount ? price : null;

  return (
    <li>
      <article>
        <button aria-label={`加入購物車 ${title}`} type="button" className="group aspect-295/298 w-full overflow-hidden rounded-[14px] xl:rounded-[20px] relative" onClick={() => addItem(product)}>
          <img src={cover} alt={title} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300" />
          <FiShoppingCart className="absolute bottom-4 right-4 translate-y-2 opacity-0 text-black w-6 h-6 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300" />
        </button>

        {/* 品名 */}
        <h3 className="mt-2.5 xl:mt-4 text-base xl:text-xl font-medium text-black line-clamp-1">{title}</h3>

        {/* score */}
        <div className="flex items-center mt-1 xl:mt-2 gap-1.5 xl:gap-3">
          <ul className="flex items-center gap-1">
            {Array.from({ length: floorScore }).map((_, index) => (
              <li key={index}>
                <LiaStarSolid className="text-star w-4 h-4 xl:w-4.5 xl:h-4.5" />
              </li>
            ))}
            {hasHalfStar && (
              <li>
                <LiaStarHalf className="text-star w-4 h-4 xl:w-4.5 xl:h-4.5" />
              </li>
            )}
          </ul>
          <p className="text-sm xl:text-sm font-thin tracking-wide">
            {score.toFixed(1)}/<span className="opacity-60">5</span>
          </p>
        </div>

        {/* price */}
        <div className="mt-0.5 xl:mt-2 flex items-center gap-1.5 xl:gap-2.5">
          <ins className="text-xl xl:text-2xl font-bold no-underline">${discountedPrice.toLocaleString()}</ins>
          {marketPrice && <del className="text-xl xl:text-2xl font-bold line-through text-black/40">${marketPrice.toLocaleString()}</del>}
          {!!discount && <span className="text-[10px] xl:text-xs font-medium text-danger py-1 px-2 xl:px-3 xl:py-1.5 bg-danger/10 rounded-4xl">-{discount}%</span>}
        </div>
      </article>
    </li>
  );
}
export default Product;
