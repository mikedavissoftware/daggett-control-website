import AvatarPlaceholder from "../assets/images/avatar_placeholder.png"



export default function TeamMemberCard({ teamMember, api }) {

  const { name, role, bio, website, image, image_as_thumbnail } = teamMember

  console.log(api)

  console.log(image)
  

  return (
    <div className="card lg:card-side bg-base-100 shadow-xl m-5 p-3 lg:p-0 flex items-center">
      <figure className="w-full max-w-xs">
        {(image) ? (
          <a href={`${api}${image}`} target="_blank" className="">
            <img src={`${api}${image}`} alt={name} className="rounded-xl lg:rounded-r-none"/>
          </a>
        ) : (
          <a href={AvatarPlaceholder} target="_blank" className="flex">
            <img src={AvatarPlaceholder} alt={name} className="rounded-xl lg:rounded-r-none"/>
          </a>
        )}
      </figure>
      <div className="card-body lg:text-left">
        <h2 className="font-bold text-xl">{name}</h2>
        <h3 className="italic text-lg">{role}</h3>
        <p>{bio}</p>
        <a href={website} target="_blank">{website}</a>
      </div>
    </div>
  )
}