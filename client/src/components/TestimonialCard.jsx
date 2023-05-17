import { useRef, useEffect, useState } from "react"

import AvatarPlaceholder from "../assets/images/avatar_placeholder.png"



export default function TestimonialCard({ testimonial, api }) {

  const { name, content, website, image, image_as_thumbnail, product_line } = testimonial
  
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
    threshold: 0.2
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
    <div className={isVisible ? ("card sm:card-side bg-base-100 shadow-xl m-5 p-3 sm:p-0 flex items-center animate slide-left") : ("opacity-0")} ref={containerRef}>
      <figure className="w-full max-w-xxs">
        {(image) ? (
          <a href={`${api}${image}`} target="_blank" className="flex">
            <img src={`${api}${image_as_thumbnail}`} className="rounded-xl sm:rounded-r-none"/>
          </a>
        ) : (
          <a href={AvatarPlaceholder} target="_blank" className="">
            <img src={AvatarPlaceholder} alt="There is no image." className="rounded-xl sm:rounded-r-none"/>
          </a>
        )}
      </figure>
      <div className="text-white card-body sm:text-left">
        <h2 className="font-bold text-white text-xl">{name}</h2>
        <h3 className="italic text-white text-lg">{product_line.company}</h3>
        <p>{content}</p>
        <a href={product_line.website} target="_blank" className="text-white underline">{product_line.website}</a>
      </div>
    </div>
  )
}