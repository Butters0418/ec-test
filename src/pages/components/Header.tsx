import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import InfoBar from "./InfoBar";
import logo from "../../assets/logo.svg";

function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white">
      <InfoBar />
      <div className="max-w-310 mx-auto xl:px-0 pt-10 pb-8 flex justify-between items-center border-b border-black/10">
        <Link to="/">
          <img className="xl:w-40" src={logo} alt="Logo" />
        </Link>
        <Link to="/cart" className="mr-4 relative">
          <FiShoppingCart className="text-2xl" />
          <span className="absolute -bottom-1 -right-3 bg-[#FF3333] text-white rounded-full w-4.5 h-4.5 text-xs flex items-center justify-center">22</span>
        </Link>
      </div>
    </header>
  );
}
export default Header;
