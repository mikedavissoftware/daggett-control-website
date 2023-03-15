import { NavLink } from "react-router-dom"


export default function Header() {



  return (
    <div>
      <h1>Daggett Control Company, LLC</h1>
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