import React from "react";
import { NavLink } from "react-router-dom";
import {useContext} from "react"
import { CartContextCard } from "../../context/CartContext";
import { LikeContextCard } from "../../context/LikeContext";
import lcon from "../../assets/Icon.svg"
import lupa from "../../assets/Lupa.svg"
import { BsFillCartPlusFill } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
const Header = () => {
  const { cart } = useContext(CartContextCard);
  const {like} = useContext(LikeContextCard)
  return (
    <nav class=" bg-[#1B6392] z-10 fixed w-full z-20 top-0 start-0 border-b border-default">
      <div class="container  flex flex-wrap items-center justify-between mx-auto p-4">
        <NavLink
          to={"/"}
          class="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <span class="self-center text-xl text-heading text-amber-50 font-semibold whitespace-nowrap flex gap-1 items-center">
            <img src={lcon} />CLICON
          </span>
        </NavLink>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-body rounded-base md:hidden hover:bg-neutral-secondary-soft hover:text-heading focus:outline-none focus:ring-2 focus:ring-neutral-tertiary"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-6 h-6"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-width="2"
              d="M5 7h14M5 12h14M5 17h14"
            />
          </svg>
        </button>
        <div className=" bg-white border-2  w-[646px] h-[48px] flex items-center px-0.5" >
          <input type="text" placeholder="Search for anything..." className=" w-[640px]  h-full border-b-zinc-50 "/><img src={lupa} className="w-[30px] h-[30px] "/> 
        </div>
        <div class="hidden te w-full md:block md:w-auto" id="navbar-default">
          <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-default rounded-base bg-neutral-secondary-soft md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-neutral-primary">
            <li>
              <NavLink
                to={"/"}
                class="block py-2 px-3 text-white bg-brand rounded md:bg-transparent md:text-fg-brand md:p-0"
                aria-current="page"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/cart"}
                className="block py-2 px-3 relative text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent"
              >
                 <BsFillCartPlusFill className="text-[24px] text-amber-50 " /> <span className=" w-[16px] h-[16px] rounded-[50%]  text-center items-center bg-white absolute  top-[-3px] right-[1px] ">{cart.length}</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                className="block py-2 px-3 text-heading rounded flex  hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent"
                to={"/like"}
              >
                <FaRegHeart className="text-red-50 text-[24px] flex-none " /><span>{like.length}</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/register"}
                class="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent"
              >
                Register
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
