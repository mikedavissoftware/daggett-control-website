import { useState, useEffect } from "react"

import TestimonialCard from "./TestimonialCard"


export default function Testimonials() {
  const [testimonials, setTestimonials] = useState([])

  useEffect(() => {
    fetch("/api/testimonials")
    .then(r => r.json())
    .then(testimonialsData => {
      setTestimonials(testimonialsData)
    })
  }, [])

  const testimonialComponents = testimonials.map((testimonial) => {
    return <TestimonialCard key={testimonial.id} testimonial={testimonial} />
  })

  return (
    <div>
      {testimonialComponents}
    </div>
  )
}