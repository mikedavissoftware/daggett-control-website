import { createContext, useState } from 'react'
import { Switch, Route, Link } from "react-router-dom"

import Header from "./components/Header"
import HomePage from "./components/HomePage"
import AboutUsPage from "./components/AboutUsPage"
import ProductsPage from "./components/ProductsPage"
import ContactPage from "./components/ContactPage"
import LoginPage from "./components/LoginPage"
import Footer from "./components/Footer"

const UserContext = createContext(null)


export default function App() {
  const [user, setUser] = useState(null)


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
          <Route path="/login">
            <LoginPage />
          </Route>
        </Switch>
      ) : (
        <>
        <Switch>
          <Route path="/login">
            <LoginPage />
          </Route>
        </Switch>
        </>
      )}

      <Footer />
    </UserContext.Provider>
  )
}