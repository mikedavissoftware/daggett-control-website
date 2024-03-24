import TestimonialCard from "./TestimonialCard"


export default function Testimonials({ testimonials }) {

  const testimonialComponents = testimonials.map((testimonial) => {
    return <TestimonialCard key={testimonial.id} testimonial={testimonial} api={api} />
  })

  return (
    <div className="my-8">
      {testimonialComponents}
    </div>
  )
}