import LogoPlaceholder from "../assets/images/logo-placeholder.png"


export default function ProductLineCard({ productLine, api }) {

  const { company, logo, description, website, testimonials, image } = productLine

  function buttonNewTab(link) {
    window.open(
      link,
      '_blank'
    );
  }

  return (
    <div className="card bg-white shadow-xl m-5 image-full items-center border-2 border-secondary border-opacity-0 hover:border-opacity-100 hover:drop-shadow-lg-white hover:scale-105 duration-150">
      <figure className="mx-auto">
        {(image) ? (
          <img src={`${api}${image}`} alt={company} className="blur-[1px] max-h-52 opacity-40"/>
        ) : (
          <img src={LogoPlaceholder} alt="Product Line Placeholder Image" className="blur-[1px] max-h-52 opacity-40"/>
        )}
      </figure>
      <div className="card-body">
        <h2 className="card-title justify-center text-primary drop-shadow-md-dark">{company}</h2>
        <p className="text-black font-bold">{description}</p>
        <div className="card-actions justify-center mt-3">
          <button className="btn btn-primary hover:shadow-lg text-white" onClick={() => {buttonNewTab(website)}}>Check Out Their Website</button>
        </div>
      </div>
    </div>
  )
}