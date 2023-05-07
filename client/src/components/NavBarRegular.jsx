import { NavLink } from "react-router-dom"



export default function NavBarRegular() {



  return (
    <div className="invisible h-0 md:visible md:h-auto">
      <ul className="menu menu-horizontal bg-base-100 rounded-xl">
        <li><NavLink exact to="/">Home</NavLink></li>
        <li><NavLink to="/about">About Us</NavLink></li>
        <li><NavLink to="/products">Products</NavLink></li>
        <li><NavLink to="/contact">Contact Us</NavLink></li>
      </ul>
    </div>
  )
}