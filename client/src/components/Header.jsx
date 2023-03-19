import { NavLink, useHistory } from "react-router-dom"


export default function Header({ user, setUser }) {
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