import AvatarPlaceholder from "../assets/images/avatar_placeholder.png"



export default function TestimonialCard({ testimonial }) {
  const { name, content, website, image, image_as_thumbnail, product_line } = testimonial

  return (
    <div className="card sm:card-side bg-base-100 shadow-xl m-5 p-3 sm:p-0 flex items-center">
      <figure className="w-full max-w-xxs">
        {(image) ? (
          <a href={image} target="_blank" className="flex">
            <img src={image_as_thumbnail} alt={name} className="rounded-xl sm:rounded-r-none"/>
          </a>
        ) : (
          <a href={AvatarPlaceholder} target="_blank" className="">
            <img src={AvatarPlaceholder} alt="There is no image." className="rounded-xl sm:rounded-r-none"/>
          </a>
        )}
      </figure>
      <div className="card-body sm:text-left">
        <h2 className="font-bold text-xl">{name}</h2>
        <h3 className="italic text-lg">{product_line.company}</h3>
        <p>{content}</p>
        <a href={product_line.website} target="_blank">{product_line.website}</a>
      </div>
    </div>
  )
}