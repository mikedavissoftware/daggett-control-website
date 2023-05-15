import { NavLink } from "react-router-dom"

import NavBarCollapse from "./NavBarCollapse"
import NavBarRegular from "./NavBarRegular"

import Logo from "../assets/daggett-control-logo-1.png"


export default function Header() {


  return (
    <header className="p-5 bg-slate-600 text-base-content">
      <div>
        <img src={Logo} className="w-full md:max-w-3xl mx-auto drop-shadow-md mb-2"/>
      </div>
      
      <div>
        <h1 className="text-3xl font-bold mb-2 md:text-4xl text-accent drop-shadow-lg">
          Daggett Control Company, LLC
        </h1>
        <h3 className="text-lg font-semibold mb-6 drop-shadow-md">
          Industrial Controls & Consulting
        </h3>
      </div>

      <NavBarCollapse />
      <NavBarRegular />
    </header>
  )
}