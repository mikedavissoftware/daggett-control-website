

import NavBarCollapse from "./NavBarCollapse"
import NavBarRegular from "./NavBarRegular"
import Logo from "../assets/daggett-control-logo-1.png"


export default function Footer() {

  
  return (
    <footer className="p-5 bg-slate-600 text-base-content">
      <div className="collapse md:hidden">
        <input type="checkbox"/>
        <div className="collapse-title bg-base-100 rounded-lg px-1">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-full h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </div>
        <NavBarCollapse />
      </div>

      <NavBarRegular />

      <div>
        <img src={Logo} className="w-full md:max-w-3xl mx-auto drop-shadow-md my-3"/>
      </div> 

      <div className="grid justify-items-center">
        <hr width="65%" className="border-slate-500"/>
      </div>

      <div>
        <p className="mt-3">Copyright © 2023 - All rights reserved by Daggett Control Company, LLC</p>
      </div>
    </footer>
  )
}