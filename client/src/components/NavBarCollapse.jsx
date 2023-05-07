import { NavLink } from "react-router-dom"


export default function NavBarCollapse() {

  return (
    <div className="collapse-content">
      <ul className="menu bg-base-100 rounded-b-xl">
        <li><NavLink exact to="/" className="block">Home</NavLink></li>
        <li><NavLink to="/about" className="block">About Us</NavLink></li>
        <li><NavLink to="/products" className="block">Products</NavLink></li>
        <li><NavLink to="/contact" className="block">Contact Us</NavLink></li>
      </ul>
    </div>
  )
}