import { FC, useState } from "react";

import {
  MagnifyingGlassIcon,
  Bars3Icon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";
import { useRouter } from "next/router";
import { useSelector } from 'react-redux'
import { selectItems } from '../slices/basketSlice'

interface HeaderProps {}

const Header: FC<HeaderProps> = ({}) => {
  const router = useRouter();
  const items = useSelector(selectItems)


 

  const [search, setSearch] =useState("");


  console.log(search)

  const searchHandler =(e:any) =>{
    router.push(`/search/${search}`)
  }

  const handleKeypress = (e: any) => {
    //it triggers by pressing the enter key
    if (e.keyCode === 13) {
      searchHandler(e);
    }
  };
  return (
    <header>
      {/* top nav */}
      <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
        {/* amazon logo -left */}
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0 ">
          <h1 className="text-white mx-2 text-xl font-semibold cursor-pointer" onClick={()=>router.push("/")}>
            Online Store
          </h1>
        </div>
        {/* search bar */}
        <div className="  flex rounded-md cursor-pointer flex-grow  bg-yellow-400 hover:bg-yellow-500 text-black  h-10 w-auto">
          <input
            className="focus:outline-none p-2 h-full w-auto flex-grow flex-shrink rounded-l-md px-4"
            type="text"
            value={search}
            onChange={(e)=>setSearch(e.target.value)}
            onKeyDown={handleKeypress}
          />
          <MagnifyingGlassIcon className="hidden sm:flex h-12 p-2 sm:p-4" onClick={searchHandler} />
        </div>

        {/* Right side */}
        <div className= " hidden text-white sm:flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
          <div className=" hidden sm:flex flex-col link">
            <p>Sign In</p>

            <p className="font-extrabold md:text-sm"> Account & Lists</p>
          </div>

          <div className="hidden sm:flex flex-col link">
            <p> Returns</p>
            <p className="font-extrabold md:text-sm">& Orders</p>
          </div>

          <div
            className=" relative link flex items-center "
            onClick={() => router.push(`/checkout/${search}`)}
          >
            <ShoppingCartIcon className="h-10" />
            <p className="hidden md:inline font-extrabold md:text-sm">Basket</p>
            <span className="flex items-center justify-center absolute top-0 right-0 md:right-11 h-4 w-4 rounded-full bg-yellow-400 text-black font-bold">
            {items.length}
            </span>
          </div>
        </div>
      </div>

      {/* bottom nav */}
      <div className="flex items-center bg-amazon_blue-light text-white text-sm space-x-3 p-2 pl-6">
        <p className="link flex items-center">
          <Bars3Icon className="h-6 mr-1" />
          All
        </p>

        <p className="link">Prime Video</p>
        <p className="link">Amazon Business</p>
        <p className="link">Today's Deals</p>
        <p className="hidden lg:inline-flex link ">Electronics</p>
        <p className="hidden lg:inline-flex link ">Food & Grocery</p>
        <p className="hidden lg:inline-flex link ">Prime</p>
        <p className="hidden lg:inline-flex link ">Buy Again</p>
        <p className="hidden lg:inline-flex link ">Shopper Toolkit</p>
        <p className="hidden lg:inline-flex link ">Health & Personal Care </p>
      </div>
    </header>
  );
};

export default Header;
