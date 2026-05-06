import yourcart from "@/assets/yourcart.svg";
import useCartStore from "@/stores/useCartStore";
import { FiArrowRight } from "react-icons/fi";
import CartItem from "./components/CartItem";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { Link } from "react-router-dom";

function Cart() {
  const cartItems = useCartStore((state) => state.cartItems);

  // subtotal (不含折扣)
  const subtotal = cartItems.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  // 折價金額
  const discountAmount = cartItems.reduce((total, item) => {
    if (item.discount) {
      const discountPrice = Math.floor(item.price * (item.discount / 100));
      return total + discountPrice * item.quantity;
    }
    return total;
  }, 0);

  // 總計金額
  const totalPrice = subtotal - discountAmount + 15;

  return (
    <>
      <h1 className="mt-1.5 xl:mt-2.5">
        <img className="w-51.75 xl:w-64.75" src={yourcart} alt="your cart" />
      </h1>

      <div className="grid grid-col-1 xl:grid-cols-12 gap-5 mt-5 xl:mt-6 items-start">
        {cartItems.length === 0 ? (
          <div className="bg-surface col-span-12 py-12 rounded-[20px] flex flex-col items-center gap-4">
            <p className="text-center text-xl xl:text-2xl font-normal">您的購物車為空</p>
            <Link to="/" className="hover-fade text-gray-500 flex justify-center items-center group">
              去逛逛 <MdOutlineArrowRightAlt className="ml-1 group-hover:translate-x-0.5 duration-100" />
            </Link>
          </div>
        ) : (
          <>
            {/* 購物車 */}
            <section className="xl:col-span-7 border border-black/10 rounded-[20px] p-3.5 xl:px-6 xl:py-5">
              <ul className="space-y-4 xl:space-y-6 divide-y divide-black/10">
                {!!cartItems &&
                  cartItems.map((item) => {
                    return (
                      <li className="pb-4 xl:pb-6 last:pb-0" key={item.title}>
                        <CartItem key={item.title} item={item} />
                      </li>
                    );
                  })}
              </ul>
            </section>

            {/* 結帳計算 */}
            <aside className="xl:col-span-5 border border-black/10 rounded-[20px] p-5 xl:px-6 xl:pt-5 xl:py-25">
              <h2 className="text-2xl font-medium">Order Summary</h2>
              <div className="mt-6 space-y-5 text-base xl:text-xl font-extralight">
                <p className="flex justify-between items-center">
                  <span className="text-black/60">Subtotal</span>
                  <span className="font-medium">${subtotal.toLocaleString()}</span>
                </p>
                <p className="flex justify-between items-center">
                  <span className="text-black/60">Discount</span>
                  <span className="font-medium text-danger">-${discountAmount.toLocaleString()}</span>
                </p>
                <p className="flex justify-between items-center">
                  <span className="text-black/60">Delivery Fee</span>
                  <span className="font-medium">$15</span>
                </p>
                <hr className="border-black/10" />
                <p className="flex justify-between items-center">
                  <span>Total</span>
                  <span className="text-xl xl:text-2xl font-medium">${totalPrice.toLocaleString()}</span>
                </p>
              </div>
              <button
                className="group hover:bg-black/75 transition-colors duration-300 gap-3 w-full mt-4 rounded-full py-4 xl:py-4.5 xl:mt-6 bg-black flex justify-center items-center text-white"
                type="button"
                aria-label="Go to Checkout"
              >
                <p className="text-sm xl:text-base">Go to Checkout</p>
                <FiArrowRight className="group-hover:translate-x-1 duration-300 text-xl xl:text-2xl" />
              </button>
            </aside>
          </>
        )}
      </div>
    </>
  );
}
export default Cart;
