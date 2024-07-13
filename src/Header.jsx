import { Link, NavLink } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { FaFilter } from "react-icons/fa";
import { RiSearchFill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { search } from "./components/store/useStore";

function Header() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.CartData);

  let searchText;
  return (
    <div className="w-full sticky top-0 bg-white">
      <header className="px-5 py-10">
        <nav className="flex justify-between items-center">
          <Link to={"/"} className="text-2xl font-semibold text-gray-700">
            TeeRex Store
          </Link>
          <div className="flex items-center gap-5">
            <Link to={""}>Products</Link>
            <Link to={"/cart"} className="relative">
              <FaCartShopping className="text-4xl text-gray-400 cursor-pointer" />
              <h1 className="absolute -top-5 left-3 font-semibold text-xl">
                {cartItems.length}
              </h1>
            </Link>
          </div>
        </nav>
        <div className="w-2/3 m-auto my-4 flex justify-between items-center gap-5 p-2 lg:w-[50%] max-md:w-full">
          <input
            type="text"
            placeholder="Search for Products"
            className="border-b-2 outline-none w-full mr-2"
            onChange={(e) => {
              searchText = e.target.value;
              dispatch(search(searchText));
            }}
          />
          <div className="flex gap-4">
            <RiSearchFill
              onClick={() => {
                dispatch(search(searchText));
              }}
              className="text-4xl search-button-container mb-1 cursor-pointer hover:text-gray-700"
            />
            <FaFilter className="text-3xl cursor-pointer xl:hidden mt-1" />
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
