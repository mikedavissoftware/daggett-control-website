import AvatarPlaceholder from "../assets/images/avatar_placeholder.png"



export default function TestimonialCard({ testimonial }) {
  const { name, content, website, image, image_as_thumbnail, product_line } = testimonial

  return (
    <div className="card sm:card-side bg-base-100 shadow-xl m-5 items-center">
      <figure className="w-fit bg-slate-600 sm:max-w-xs">
        {(image) ? (
          <a href={image} target="_blank" className="flex">
            <img src={image_as_thumbnail} alt={name} className="w-48 block my-5 sm:m-auto"/>
          </a>
        ) : (
          <a href={AvatarPlaceholder} target="_blank" className="flex">
            <img src={AvatarPlaceholder} alt="There is no image." className="w-48 block my-5 sm:m-auto"/>
          </a>
        )}
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