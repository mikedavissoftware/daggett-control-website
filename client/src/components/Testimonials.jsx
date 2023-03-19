import { useEffect } from "react"



export default function Testimonials() {

  useEffect(() => {
    fetch("/api/testimonials")
    .then(r => r.json())
    .then(testimonialsData => {
      console.log(testimonialsData)
    })
  })

  return (
    <div>
      <h2>This is the Testimonials component</h2>
    </div>
  )
}