import { useState } from "react";
import { IoClose } from "react-icons/io5";

function InfoBar() {
  const [isOpen, setIsOpen] = useState(true); // 是否關閉 InfoBar (先作為動畫效果)
  const [isElExist, setIsElExist] = useState(true); // 是否存在 InfoBar

  const handleClick = () => {
    setIsOpen((prev) => !prev);
    setTimeout(() => {
      setIsElExist(false);
    }, 500);
  };

  if (!isElExist) return null;

  return (
    <div className={`bg-black text-white overflow-hidden transition-all duration-500 ${isOpen ? "opacity-100 max-h-9.5" : "opacity-0 max-h-0"}`}>
      <div className="max-w-310 mx-auto flex justify-between items-center py-2">
        <div className="w-3" aria-hidden="true"></div>
        <p className="font-light">
          Sign up and get 20% off to your first order.{" "}
          <a className="underline font-medium hover-fade" href="">
            Sign Up Now
          </a>
        </p>

        <button type="button" onClick={handleClick} className="w-5 h-5 flex items-center justify-center hover-fade">
          <IoClose className="text-base" />
        </button>
      </div>
    </div>
  );
}
export default InfoBar;
