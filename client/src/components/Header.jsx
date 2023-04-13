import { useContext } from "react"
import { NavLink, useHistory } from "react-router-dom"

import { GlobalContext } from "../App"
import Logo from "../assets/daggett-control-logo-1.png"


export default function Header() {
  const { user, setUser } = useContext(GlobalContext)

  const history = useHistory()
  const loginRedirect = () => {
    history.push('/login')
  }

  function handleLogout() {
    fetch(`/api/logout`, { method: "DELETE" })
    .then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
    loginRedirect()
  }

  return (
    <div>
      <img src={Logo} className="mx-auto w-3/4 drop-shadow-md-white"/>
      <h1 className="text-5xl">Daggett Control Company, LLC</h1>
      <h3>Industrial Controls & Consulting</h3>

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
    </div>
  )
}