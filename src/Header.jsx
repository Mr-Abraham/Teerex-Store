import { Link, NavLink } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { FaFilter } from "react-icons/fa";
import { RiSearchFill } from "react-icons/ri";

function Header() {
  return (
    <div className="w-full sticky top-0 bg-white">
      <header className="px-5 py-2">
        <nav className="flex justify-between items-center">
          <h1 className="text-2xl font-semibold text-gray-700">TeeRex Store</h1>
          <div className="flex items-center gap-5">
            <a href="">Products</a>
            <FaCartShopping className="text-4xl text-gray-400 cursor-pointer" />
          </div>
        </nav>
        <div className="w-2/3 m-auto my-4 flex justify-between items-center gap-5 p-2 lg:w-[50%] max-md:w-full">
          <input
            type="text"
            placeholder="Search for Products"
            className="border-b-2 outline-none w-full mr-2"
          />
          <div className="flex gap-4">
            <RiSearchFill className="text-4xl mb-1 cursor-pointer hover:text-gray-700" />
            <FaFilter className="text-3xl cursor-pointer xl:hidden mt-1" />
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
