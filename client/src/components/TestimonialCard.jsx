



export default function TestimonialCard({testimonial}) {
  const {name, content, website, image, product_line} = testimonial
  const productLine = product_line


  return (
    <div className="grid grid-cols-3 my-5 bg-slate-600 hover:bg-slate-500 rounded-xl">
      <div>
        <img src={image} className="ml-auto" />
      </div>
      <div className="col-span-2 text-left mr-10 my-auto">
        <h3 className="text-2xl">{name}</h3>
        <a href={website} className="drop-shadow-sm">{website}</a>
        <p>{content}</p>
      </div>
    </div>
  )
}