import { useRef, useEffect, useState } from "react"
import { useHistory } from "react-router-dom"

import ControlCloseup from "../assets/images/home-page-carousel/control-close-up.jpg"
import Mountains from "../assets/images/home-page-carousel/mountains.jpg"
import SnowyRange from "../assets/images/home-page-carousel/snowy-range.jpg"


export default function HomePageCarousel() {

  const history = useHistory()
  const redirect = (id) => {
    history.push(`/${id}`)
  }

  const images = [ControlCloseup, Mountains, SnowyRange]
  const [imageIndex, setImageIndex] = useState(0)
  const changeImageIndex = (amount) => {
    setImageIndex(imageIndex + amount)
  }
  if (imageIndex > 2) setImageIndex(0);
  if (imageIndex < 0) setImageIndex(0);

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
    threshold: 0.01
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
    <div className={isVisible ? ("w-full max-w-screen-lg mx-auto drop-shadow-lg m-5") : ("opacity-0")} ref={containerRef}>
      <div className="relative">
        <img src={images[imageIndex]} className="mx-auto" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-2 right-2 top-1/2">
          <a onClick={() => {changeImageIndex(-1)}} className="btn btn-square w-[25px] h-[75px]">❮</a> 
          <a onClick={() => {changeImageIndex(1)}} className="btn btn-square w-[25px] h-[75px]">❯</a>
        </div>
      </div> 
    </div>
  )
}