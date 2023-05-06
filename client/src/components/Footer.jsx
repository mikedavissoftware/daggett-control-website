import { NavLink } from "react-router-dom"

import Logo from "../assets/daggett-control-logo-1.png"


export default function Footer() {

  
  return (
    // <div>
    //   <nav>
    //     <NavLink to="/">Home</NavLink>
    //     <NavLink to="/about">About Us</NavLink>
    //     <NavLink to="/products">Products</NavLink>
    //     <NavLink to="/contact">Contact Us</NavLink>
    //   </nav>
    //   <div className="grid lg:grid-cols-2">
    //     <div>
    //       <img src={Logo} className="mx-auto w-1/2 lg:w-fit lg:ml-auto drop-shadow-sm-white"/>
    //     </div>
    //     <div className="">
    //       <h1 className="text-3xl lg:text-left">Daggett Control Company, LLC</h1>
    //       <h3>Industrial Controls & Consulting</h3>
    //     </div>
    //   </div>
    // </div>

    <footer className="p-5 bg-base-300 text-base-content rounded-2xl">
      <div className="collapse lg:hidden">
        <input type="checkbox"/>
        <div className="collapse-title bg-base-100 rounded-lg px-1">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-full h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </div>
        <div className="collapse-content">
          <ul className="menu bg-base-100 rounded-b-xl">
            <li><NavLink exact to="/" className="block">Home</NavLink></li>
            <li><NavLink to="/about" className="block">About Us</NavLink></li>
            <li><NavLink to="/products" className="block">Products</NavLink></li>
            <li><NavLink to="/contact" className="block">Contact Us</NavLink></li>
          </ul>
        </div>
      </div>
      <div className="invisible h-0 lg:visible lg:h-auto">
        <ul className="menu menu-horizontal bg-base-100 rounded-xl">
          <li><NavLink exact to="/">Home</NavLink></li>
          <li><NavLink to="/about">About Us</NavLink></li>
          <li><NavLink to="/products">Products</NavLink></li>
          <li><NavLink to="/contact">Contact Us</NavLink></li>
        </ul>
      </div>
      <div>
        <img src={Logo} className="w-full md:max-w-3xl mx-auto drop-shadow-md-white my-3"/>
      </div> 

      <div className="grid justify-items-center">
        <hr width="65%"/>
      </div>

      <div>
        <p className="mt-3">Copyright © 2023 - All rights reserved by Daggett Control Company, LLC</p>
      </div>
    </footer>
  )
}