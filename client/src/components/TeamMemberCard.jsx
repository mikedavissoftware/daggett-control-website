



export default function TeamMemberCard({teamMember}) {
  const {name, role, bio, website, image, image_as_thumbnail} = teamMember

  console.log(teamMember)

  return (
    <div className="card lg:card-side bg-base-100 shadow-xl">
      <figure className=""><a href={image} target="_blank"><img src={image_as_thumbnail} alt={name}/></a></figure>
      <div className="card-body text-left">
        <h2 className="card-title">{name}</h2>
        <h3>{role}</h3>
        <p>{bio}</p>
      </div>
    </div>
    // <div className="grid grid-cols-3 my-5 bg-slate-600 hover:bg-slate-500 rounded-xl">
    //   <div>
    //     <img src={image_as_thumbnail} className="ml-auto" />
    //   </div>
    //   <div className="col-span-2 text-left mr-10 my-auto">
    //     <h3 className="text-2xl"><strong>{name}</strong> - {role}</h3>
    //     <a href={website} className="drop-shadow-sm">{website}</a>
    //     <p>{bio}</p>
    //   </div>
    // </div>
  )
}