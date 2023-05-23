import { useState, useEffect, useContext } from "react"

import TestimonialCard from "./TestimonialCard"
import { GlobalContext } from "../App"


export default function Testimonials() {

  const { api } = useContext(GlobalContext)

  const [testimonials, setTestimonials] = useState([])

  useEffect(() => {
    fetch(`${api}/testimonials.json`)
    .then(r => r.json())
    .then(testimonialsData => {
      setTestimonials(testimonialsData.sort((a, b) => (a.name > b.name) ? 1 : -1))
    })
  }, [])

  const testimonialComponents = testimonials.map((testimonial) => {
    return <TestimonialCard key={testimonial.id} testimonial={testimonial} api={api} />
  })

  return (
    <div className="my-8">
      {testimonialComponents}
    </div>
  )
}