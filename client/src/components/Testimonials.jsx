import { useState, useEffect, useContext } from "react"

import TestimonialCard from "./TestimonialCard"
import { GlobalContext } from "../App"


export default function Testimonials() {
  const [testimonials, setTestimonials] = useState([])
  const { user, setUser, api } = useContext(GlobalContext)

  useEffect(() => {
    fetch(`${api}/testimonials.json`)
    .then(r => r.json())
    .then(testimonialsData => {
      setTestimonials(testimonialsData)
    })
  }, [])
  console.log(testimonials)

  const testimonialComponents = testimonials.map((testimonial) => {
    return <TestimonialCard key={testimonial.id} testimonial={testimonial} />
  })

  return (
    <div>
      {testimonialComponents}
    </div>
  )
}