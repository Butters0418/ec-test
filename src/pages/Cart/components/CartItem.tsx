import type { CartItemType } from "@/types/productType";
import { PiTrashFill } from "react-icons/pi";
import { FiMinus, FiPlus } from "react-icons/fi";
import useCartStore from "@/stores/useCartStore";

interface CartItemProps {
  item: CartItemType;
}

function CartItem({ item }: CartItemProps) {
  const { cartItems, deleteItem, addItem, decreaseQuantity } = useCartStore();
  const { title, price, cover, discount } = item;
  const discountedPrice = discount ? Math.floor(price * (1 - discount / 100)) : price; // discount 先視為折扣百分比
  const marketPrice = discount ? price : null;
  return (
    <article className="flex gap-3.5 xl:gap-5">
      <div className="aspect-square w-full overflow-hidden rounded-[9px] max-w-25 xl:max-w-31">
        <img src={cover} className="h-full w-full object-cover" alt={title} />
      </div>

      <div className="flex-1 flex flex-col">
        {/* top */}
        <div className="flex items-center">
          <h3 className="text-base xl:text-xl font-medium mr-auto line-clamp-1">{title}</h3>
          <button aria-label={`刪除購物車 ${title}`} type="button" className="text-[#FF3333] hover-fade text-xl xl:text-2xl flex-0" onClick={() => deleteItem(title)}>
            <PiTrashFill />
          </button>
        </div>

        {/* bottom */}
        <div className="mt-auto flex items-center gap-1.5 xl:gap-2.5">
          <ins className="text-xl xl:text-2xl font-bold no-underline">${discountedPrice.toLocaleString()}</ins>
          {marketPrice && <del className="hidden md:block text-xl xl:text-2xl font-bold text-black/40">${marketPrice.toLocaleString()}</del>}
          {!!discount && <span className="hidden md:block text-[10px] xl:text-xs font-medium text-[#FF3333] py-1 px-2 xl:px-3 xl:py-1.5 bg-[#FF3333]/10 rounded-4xl">-{discount}%</span>}

          <div className="ml-auto flex items-center gap-0.5 xl:gap-1.5 bg-[#F0F0F0] rounded-full px-4 py-2 xl:py-2 xl:px-3.5">
            <button className="text-base p-1 xl:p-1.5 rounded-full hover:bg-black/5" type="button" aria-label={`減少購物車 ${title} 數量`} onClick={() => decreaseQuantity(title)}>
              <FiMinus />
            </button>
            <p className="text-sm w-8 text-center">{cartItems.find((cartItem) => cartItem.title === title)?.quantity || 0}</p>
            <button className="text-base p-1 xl:p-1.5 rounded-full  hover:bg-black/5" type="button" aria-label={`增加購物車 ${title} 數量`} onClick={() => addItem(item)}>
              <FiPlus />
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
export default CartItem;
