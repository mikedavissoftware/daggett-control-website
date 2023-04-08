import { useState, createContext } from 'react'
import { Switch, Route } from "react-router-dom"

import Header from "./components/Header"
import HomePage from "./components/HomePage"
import AboutUsPage from "./components/AboutUsPage"
import ProductsPage from "./components/ProductsPage"
import ContactPage from "./components/ContactPage"
import AccountPage from "./components/AccountPage"
import LoginPage from "./components/LoginPage"
import Footer from "./components/Footer"

export const UserContext = createContext()


export default function App() {
  const [user, setUser] = useState(null)
  console.log(user)

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Header />
      
      {(user) ? (
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/about">
            <AboutUsPage />
          </Route>
          <Route path="/products">
            <ProductsPage />
          </Route>
          <Route path="/contact">
            <ContactPage />
          </Route>
          <Route path="/account">
            <AccountPage />
          </Route>
        </Switch>
      ) : (
        <>
        <Switch>
          <Route path="/">
            <LoginPage user={user} setUser={setUser} />
          </Route>
        </Switch>
        </>
      )}

      <Footer />
    </UserContext.Provider>
  )
}