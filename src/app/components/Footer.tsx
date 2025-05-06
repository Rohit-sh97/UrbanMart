import Insta from "@/icons/insta";
import Fb from "@/icons/fb";


export default function Footer() {
    return <div className="bg-black text-white">
        <div className="flex bg-black justify-center text-white">
        <div className="flex gap-90 p-20">
        <div className="flex flex-col gap-3">
            <h1 className="font-bold text-lg">Be The First To Know</h1>
            <p className="font-thin text-sm">Subscrib for the latest update</p>
            <div className="flex gap-4">
                <input type="text" placeholder="Email" className="border text-black p-2 rounded-md bg-white"/>
                <button className="border bg-white font-bold text-black text-md rounded-md px-4">Subscribe</button>
            </div>
        </div>

        <div className="flex flex-col gap-1">
            <h1 className="font-bold text-lg">Contact Us</h1>
            <p className="text-sm font-thin">+44499822334</p>
            <p className="font-thin">coustomercare123@gmail.com</p>

            <h1 className="font-bold text-lg">CURRENCY</h1>
            <p className="font-thin">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        </div>
    </div>

    <div className="flex justify-center">
    <div className="w-280 h-0.5 bg-white"></div>
    </div>


<div className="w-280 flex justify-around mt-8">
    <div className="flex flex-col gap-1.5">
        <h1 className="mb-2 font-bold text-lg">Quick Links</h1>
        <li className="list-none font-thin text-sm">About us</li>
        <li className="list-none font-thin text-sm">Store</li>
        <li className="list-none font-thin text-sm">Career</li>
        <li className="list-none font-thin text-sm">Patners</li>
        <li className="list-none font-thin text-sm">FAQ</li>
        <li className="list-none font-thin text-sm">Privacy</li>
    </div>
    <div className="flex flex-col gap-1.5">
        <h1 className="mb-2 font-bold text-lg">Quick Links</h1>
        <li className="list-none font-thin text-sm">About us</li>
        <li className="list-none font-thin text-sm">Store</li>
        <li className="list-none font-thin text-sm">Career</li>
        <li className="list-none font-thin text-sm">Patners</li>
        <li className="list-none font-thin text-sm">FAQ</li>
        <li className="list-none font-thin text-sm">Privacy</li>
    </div>
    <div>
        <h1 className="mb-2 font-bold text-lg">Follow Us On</h1>
        <div className="flex gap-2">
            <div className="w-10 h-10 justify-center items-center flex rounded-2xl bg-white">
            <Insta />
            </div>
            <div className="w-10 h-10 justify-center items-center flex rounded-2xl bg-white">
            <Fb/>
            </div>
            
        </div>
    </div>

    </div>

    <div className="flex justify-center mt-3">
        <p className="font-thin text-sm p-2 ">Copyrights @ 2025 | All rights reserved</p>
    </div>

    </div>

    {/* <hr className="bg-white mt-8 mb-6"/> */}
    
}