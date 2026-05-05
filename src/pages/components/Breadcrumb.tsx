import { Link, useLocation } from "react-router-dom";
import { GoChevronRight } from "react-icons/go";

function Breadcrumb() {
  const location = useLocation();
  return (
    <nav className=" pt-5 pb-3 xl:py-6">
      <ul className="flex text-sm xl:text-base font-light text-black items-center">
        <li>
          <Link to="/" className="hover-fade opacity-60">
            Home
          </Link>
        </li>
        <li className="mx-1.5 xl:mx-2 opacity-60">
          <GoChevronRight />
        </li>
        <li>
          <p>{location.pathname === "/cart" ? "Cart" : "Casual"}</p>
        </li>
      </ul>
    </nav>
  );
}
export default Breadcrumb;
