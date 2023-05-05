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

    <footer className="footer footer-center p-5 bg-base-200 text-base-content rounded">
      <nav className="grid grid-flow-col gap-4">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About Us</NavLink>
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/contact">Contact Us</NavLink>
      </nav>
      <div>
        <img src={Logo} className="w-3/4 drop-shadow-sm-white"/>
      </div> 
      <div>
        <p className="">Copyright © 2023 - All rights reserved by Daggett Control Company, LLC</p>
      </div>
    </footer>

    
  )
}