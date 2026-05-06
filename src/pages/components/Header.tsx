import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import logo from "@/assets/logo.svg";
import useCartStore from "@/stores/useCartStore";
import InfoBar from "./InfoBar";

function Header() {
  const count = useCartStore((state) => state.cartItems.length);
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md">
      <InfoBar />

      <div className="max-w-310 mx-auto px-4 xl:px-0">
        <div className="w-full flex justify-between items-center py-5 xl:pt-10 xl:pb-8 border-b border-black/10">
          <Link to="/">
            <img className="w-31.5 xl:w-40" src={logo} alt="Logo" />
          </Link>
          <Link to="/cart" className="mr-4 relative">
            <FiShoppingCart className="text-2xl" />

            {!!count && <span className="absolute -top-1 -right-3 bg-danger text-white rounded-full w-4.5 h-4.5 text-xs flex items-center justify-center">{count}</span>}
          </Link>
        </div>
      </div>
    </header>
  );
}
export default Header;
