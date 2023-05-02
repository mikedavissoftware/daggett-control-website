import { useState, useEffect, useContext } from "react"

import TestimonialCard from "./TestimonialCard"
import { GlobalContext } from "../App"


export default function Testimonials() {
  const [testimonials, setTestimonials] = useState([])

  useEffect(() => {
    fetch(`https://daggett-control-website.onrender.com/testimonials.json`)
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