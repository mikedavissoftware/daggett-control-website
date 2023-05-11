import LogoPlaceholder from "../assets/images/logo-placeholder.png"



export default function ProductLineCard({ productLine }) {

  const { company, logo, description, website, testimonials, image } = productLine

  function buttonNewTab(link) {
    window.open(
      link,
      '_blank'
    );
  }

  return (
    <div className="card bg-black shadow-xl m-5 image-full items-center hover:border-2">
      <figure className="p-5 mx-auto">
        {(image) ? (
          <img src={image} alt="Album" className="blur-sm max-h-52"/>
        ) : (
          <img src={LogoPlaceholder} alt="Album" className="blur-sm max-h-52 hover:blur-none"/>
        )}
      </figure>
      <div className="card-body">
        <h2 className="card-title justify-center">{company}</h2>
        <p>{description}</p>
        <div className="card-actions justify-center mt-3">
          <button className="btn btn-primary hover:shadow-lg" onClick={() => {buttonNewTab(website)}}>Check Out Their Website</button>
        </div>
      </div>
    </div>
  )
}