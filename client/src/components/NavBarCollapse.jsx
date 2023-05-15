import { NavLink } from "react-router-dom"


export default function NavBarCollapse() {

  return (
    <div className="collapse md:hidden">
      <input type="checkbox"/>

      <div className="collapse-title bg-base-100 rounded-lg px-1">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-full h-6 stroke-current">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
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
  )
}