import NavBarCollapse from "./NavBarCollapse"
import NavBarRegular from "./NavBarRegular"

import Logo from "../assets/daggett-control-logo-1.png"


export default function Footer() {

  const today = new Date()

  const year = today.getFullYear()
  
  return (
    <footer className="p-5 bg-slate-500 text-base-content">
      <NavBarCollapse />
      <NavBarRegular />

      <div>
        <img src={Logo} className="w-full md:max-w-3xl mx-auto drop-shadow-md my-3"/>
      </div> 

      <div className="grid justify-items-center">
        <hr width="65%" className="border-slate-600"/>
      </div>
      

      <div>
        <p className="mt-3">
          Copyright © {year} - All rights reserved by Daggett Control Company, LLC
        </p>
        <p className="mt-3">
          Issues with the site? Send an email to the site developer <a href="mailto:mikedavissoftware@gmail.com"  className="font-bold underline">mikedavissoftware@gmail.com</a>.
        </p>
      </div>
    </footer>
  )
}