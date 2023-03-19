import { useState } from 'react'
import { Switch, Route, Link } from "react-router-dom"

import Header from "./components/Header"
import HomePage from "./components/HomePage"
import AboutUsPage from "./components/AboutUsPage"
import Testimonials from './components/Testimonials'
import ProductsPage from "./components/ProductsPage"
import ContactPage from "./components/ContactPage"
import AccountPage from "./components/AccountPage"
import LoginPage from "./components/LoginPage"
import Footer from "./components/Footer"


export default function App() {
  const [user, setUser] = useState(null)

  return (
    <div>
      <Header user={user} setUser={setUser} />
      
      {(user) ? (
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/about">
            <AboutUsPage />
            <Testimonials />
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
          <Route path="/login">
            <LoginPage user={user} setUser={setUser} />
          </Route>
        </Switch>
        </>
      )}

      <Footer />
    </div>
  )
}