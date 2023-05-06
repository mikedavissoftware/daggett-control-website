import { NavLink } from "react-router-dom"

import Logo from "../assets/daggett-control-logo-1.png"


export default function Header() {


  return (
    <header className="p-5 bg-base-300 text-base-content rounded-2xl">
      <div>
        <img src={Logo} className="w-full md:max-w-3xl mx-auto drop-shadow-md-white mb-2"/>
      </div> 
      <div>
        <h1 className="text-5xl font-bold mb-2">Daggett Control Company, LLC</h1>
        <h3 className="text-lg font-semibold mb-6">Industrial Controls & Consulting</h3>
      </div>
      <div className="collapse lg:hidden">
        <input type="checkbox"/>
        <div className="collapse-title bg-base-100 rounded-box px-1">
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
    </header>
  )
}