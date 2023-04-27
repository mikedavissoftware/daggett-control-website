import { NavLink } from "react-router-dom"

import Logo from "../assets/daggett-control-logo-1.png"


export default function Header() {


  return (
    <div>
      <img src={Logo} className="mx-auto w-3/4 drop-shadow-md-white"/>
      <h1 className="text-5xl">Daggett Control Company, LLC</h1>
      <h3>Industrial Controls & Consulting</h3>

      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About Us</NavLink>
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/contact">Contact Us</NavLink>
      </nav>
    </div>
  )
}