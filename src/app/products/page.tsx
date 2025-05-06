"use client";
import Basket from "@/icons/basket";
import Heart from "@/icons/heart";
import Logo from "@/icons/logo";
import Profile from "@/icons/profile";
import Search from "@/icons/search";
import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";

export default function Product() {
  const [open, setOpen] = useState(false);
  const [reopen, setreOpen] = useState(false);
  const [sidebarOpne, setSidebarOpen] = useState(false);
  const [products, setProducts] = useState([]); 


  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((data) => setProducts(data))
    .catch((err) => console.error("Failed to fetch:", err));
  }, [])

  return (
    <div>
    <div className="flex justify-center items-center h-20 ">
  <div className="flex justify-between items-center  w-full max-w-[960px] px-4">
   
    <Logo />
    <div className="text-black font-bold text-3xl">LOGO</div>

    <div className="flex items-center">
      <Search />
      <Heart />
      <Basket />
      <Profile />

      <div className="relative inline-block text-left">
        <div
          className="flex items-center gap-1 cursor-pointer text-black"
          onClick={() => setOpen(!open)}
        >
          <span>ENG</span>
          <ChevronDown size={16} />
        </div>

        {open && (
          <div className="absolute mt-2 w-28 bg-white border border-gray-300 shadow-lg rounded-md z-10">
            <div className="px-4 py-2 hover:bg-gray-100 text-black">HIN</div>
            <div className="px-4 py-2 hover:bg-gray-100 text-black">MAR</div>
          </div>
        )}

      </div>
    </div>
  </div>
</div>
<Navbar />

<div className="flex flex-col h-auto w-auto justify-center items-center">
  <h1 className="text-5xl p-4 mt-5" >DISCOVER OUR PRODUCTS</h1>
  <p className="p-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quas tempora autem excepturi odio vel. Cumque, ea?</p>
  <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quas tempora autem excepturi odio vel. Cumque, ea?</p>
</div>
<hr className="opacity-12 mt-8 mb-6"/>

<div className="flex justify-between px-4 md:px-8 py-4 items-center ">

<div className="flex items-center gap-4">

  <button className="mb-4 border px-3 py-2 rounded"
  onClick={() => setSidebarOpen(!sidebarOpne)}>
    ☰ Filters
</button>
<p className="text-md pb-3">20-ITEMS</p>
</div>

<div className="relative items-center">
<div className="flex items-center gap-1 cursor-pointer text-black"
          onClick={() => setreOpen(!reopen)}>
          <span>RECOMMEND</span>
          <ChevronDown size={16} />
        </div>

        {reopen && (      
      <div className="absolute mt-2 w-28 bg-white border border-gray-300 shadow-lg rounded-md z-10">
            <div className="px-4 py-2 hover:bg-gray-100 text-black">Popular</div>
            <div className="px-4 py-2 hover:bg-gray-100 text-black">Price: Low to High</div>
            <div className="px-4 py-2 hover:bg-gray-100 text-black">Price: Highto Low</div>
          </div>
        )}
</div>

</div>

<div className="flex">
<Sidebar isOpen={sidebarOpne}/>

<div className="flex-1 flex-col p-4">

<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
         {products.map((product) => (
          <ProductCard 
          key={product.id}
          image={product.image}
          title={product.title}
          price={product.price}
          />
         ))}
</div>

</div>
</div>

<Footer />

</div>
  );
}
