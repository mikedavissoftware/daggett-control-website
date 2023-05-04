import { NavLink } from "react-router-dom"

import Logo from "../assets/daggett-control-logo-1.png"


export default function Footer() {

  
  return (
    <div>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About Us</NavLink>
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/contact">Contact Us</NavLink>
      </nav>
      <div className="grid lg:grid-cols-2">
        <div>
          <img src={Logo} className="mx-auto w-1/2 lg:w-fit lg:ml-auto drop-shadow-sm-white"/>
        </div>
        <div className="">
          <h1 className="text-3xl lg:text-left">Daggett Control Company, LLC</h1>
          <h3>Industrial Controls & Consulting</h3>
        </div>
      </div>
    </div>
  )
}