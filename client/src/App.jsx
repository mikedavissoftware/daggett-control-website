import { Switch, Route } from "react-router-dom"

import Header from "./components/Header"
import HomePage from "./components/HomePage"
import AboutUsPage from "./components/AboutUsPage"
import ProductsPage from "./components/ProductsPage"
import ContactPage from "./components/ContactPage"
import Footer from "./components/Footer"


export default function App() {



  return (
    <div>
      <Header />

      <h1>This is the App component</h1>

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
      </Switch>

      <Footer />
    </div>
  )
}