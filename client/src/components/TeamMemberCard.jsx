import React, { useRef, useEffect, useState } from "react"

import AvatarPlaceholder from "../assets/images/avatar_placeholder.png"


export default function TeamMemberCard({ teamMember, api }) {

  const { name, role, bio, website, image, image_as_thumbnail } = teamMember

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
    <div className={isVisible ? ("card lg:card-side bg-base-100 shadow-xl m-5 p-3 lg:p-0 flex items-center animate slide-left delay-1") : ("opacity-0")} ref={containerRef}>
      <figure className="w-full max-w-xs">
        {(image) ? (
          <a href={`${api}${image}`} target="_blank" className="">
            <img src={`${api}${image_as_thumbnail}`} alt={name} className="rounded-xl lg:rounded-r-none"/>
          </a>
        ) : (
          <a href={AvatarPlaceholder} target="_blank" className="flex">
            <img src={AvatarPlaceholder} alt={name} className="rounded-xl lg:rounded-r-none"/>
          </a>
        )}
      </figure>
      <div className="card-body lg:text-left">
        <h2 className="font-bold text-white text-xl">{name}</h2>
        <h3 className="italic text-white text-lg">{role}</h3>
        <p className="text-white">{bio}</p>
        <a href={website} target="_blank" className="text-white underline">{website}</a>
      </div>
    </div>
  )
}