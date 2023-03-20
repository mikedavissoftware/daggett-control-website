import { useContext } from "react"
import { NavLink, useHistory } from "react-router-dom"

import { UserContext } from "../App"
import Logo from "../assets/daggett-control-logo-1.png"


export default function Footer() {
  const {user, setUser} = useContext(UserContext)

  const history = useHistory()
  const loginRedirect = () => {
    history.push('/login')
  }

  function handleLogout() {
    fetch("/api/logout", { method: "DELETE" })
    .then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
    loginRedirect()
  }

  return (
    <div>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About Us</NavLink>
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/contact">Contact Us</NavLink>
        {(user) ? (
          <>
          <NavLink to="/account">Account</NavLink>
          <button onClick={handleLogout}>Log Out</button>
          </>
        ) : (
          <button onClick={loginRedirect}>Log In</button>
        )}
      </nav>

      <img src={Logo} className="mx-auto w-1/2 drop-shadow-sm-white"/>
      <h1 className="text-3xl">Daggett Control Company, LLC</h1>
      <h3>Industrial Controls & Consulting</h3>
    </div>
  )
}