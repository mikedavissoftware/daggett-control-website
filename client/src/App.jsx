import { createContext } from 'react'
import React, { useRef, useEffect, useState } from "react"
import { Switch, Route } from "react-router-dom"

import Header from "./components/Header"
import HomePage from "./components/HomePage"
import AboutUsPage from "./components/AboutUsPage"
import ProductsPage from "./components/ProductsPage"
import ContactPage from "./components/ContactPage"
import Footer from "./components/Footer"

export const GlobalContext = createContext()


export default function App() {

  const api = import.meta.env.PROD ? "https://daggett-control-website.onrender.com" : "/api"

  console.log(api)

  // Beginning of viewport code
  const containerRef = useRef(null)
  const [ isVisible, setIsVisible ] = useState(false)
  const callbackFunction = (entries) => {
    const [ entry ] = entries
    if (entry.isIntersecting) {
      setIsVisible(true)
    }
  }
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.05
  }
  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options)
    if (containerRef.current) observer.observe(containerRef.current)
    
    return () => {
      if(containerRef.current) observer.unobserve(containerRef.current)
    }
  }, [containerRef, options])
  // Ending of viewport code

  return (
    <GlobalContext.Provider value={{ api }} >
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
      </Switch>

      <Footer />
    </GlobalContext.Provider>
  )
}