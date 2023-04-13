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

export const GlobalContext = createContext()


export default function App() {
  const [user, setUser] = useState(null)

  const api = import.meta.env.PROD ? "https://daggett-control-website.onrender.com" : "http://localhost:3000"
  // const api = "https://daggett-control-website.onrender.com"

  return (
    <GlobalContext.Provider value={{ user, setUser, api }}>
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
            <LoginPage />
          </Route>
        </Switch>
        </>
      )}

      <Footer />
    </GlobalContext.Provider>
  )
}