import NavBarCollapse from "./NavBarCollapse"
import NavBarRegular from "./NavBarRegular"

import Logo from "../assets/daggett-control-logo-1.png"


export default function Footer() {

  
  return (
    <footer className="p-5 bg-slate-600 text-base-content">
      <NavBarCollapse />
      <NavBarRegular />

      <div>
        <img src={Logo} className="w-full md:max-w-3xl mx-auto drop-shadow-md my-3"/>
      </div> 

      <div className="grid justify-items-center">
        <hr width="65%" className="border-slate-500"/>
      </div>

      <div>
        <p className="mt-3">
          Copyright © 2023 - All rights reserved by Daggett Control Company, LLC
        </p>
      </div>
    </footer>
  )
}