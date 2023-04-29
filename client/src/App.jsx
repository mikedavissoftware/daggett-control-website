import { createContext } from 'react'
import { Switch, Route } from "react-router-dom"
import "./App.css"

import Header from "./components/Header"
import HomePage from "./components/HomePage"
import AboutUsPage from "./components/AboutUsPage"
import ProductsPage from "./components/ProductsPage"
import ContactPage from "./components/ContactPage"
import AccountPage from "./components/AccountPage"
import Footer from "./components/Footer"

export const GlobalContext = createContext()


export default function App() {

  return (
    <div>
      <Header />
      
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

      <Footer />
    </div>
  )
}