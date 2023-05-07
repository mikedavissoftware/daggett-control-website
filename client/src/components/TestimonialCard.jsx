



export default function TestimonialCard({ testimonial }) {
  const { name, content, website, image, product_line } = testimonial

  return (
    // <div className="grid grid-cols-3 my-5 bg-slate-600 hover:bg-slate-500 rounded-xl">
    //   <div>
    //     <img src={image} className="ml-auto" />
    //   </div>
    //   <div className="col-span-2 text-left mr-10 my-auto">
    //     <h3 className="text-2xl">{name}</h3>
    //     <a href={website} className="drop-shadow-sm">{website}</a>
    //     <p>{content}</p>
    //   </div>
    // </div>
    <div className="card sm:card-side bg-base-100 shadow-xl m-5 items-center">
      <figure className="w-full bg-slate-600 sm:max-w-xs">
        <a href={image} target="_blank" className="flex">
          <img src={product_line.logo} alt={name} className="w-48 block my-5 sm:m-auto"/>
        </a>
      </figure>
      <div className="card-body lg:text-left">
        <h2 className="font-bold text-xl">{name}</h2>
        <h3 className="italic text-lg">{product_line.company}</h3>
        <p>{content}</p>
        <a href={product_line.website} target="_blank">{product_line.website}</a>
      </div>
    </div>
  )
}