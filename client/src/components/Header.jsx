import { NavLink } from "react-router-dom"


export default function Header() {



  return (
    <div className="header">
      <h1>Daggett Control Company, LLC</h1>
      <h3>Industrial Controls & Consulting</h3>

      <nav className="navbar">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/testimonials">Testimonials</NavLink>
        <NavLink to="/contact">Contact Us</NavLink>
      </nav>
    </div>
  )
}