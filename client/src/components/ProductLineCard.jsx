



export default function ProductLineCard({productLine}) {


  // return (
  //   <div className="my-4">
  //     <img src={productLine.logo} className="justify-center" />
  //     <h3 className="text-xl font-bold">{productLine.company}</h3>
  //     <p>{productLine.description}</p>
  //   </div>
  // )

  function buttonNewTab(link) {
    window.open(
      link,
      '_blank'
    );
  }

  return (
    <div className="card lg:card-side bg-base-100 shadow-xl m-10">
      <figure className="m-10 hover:opacity-50"><a href={productLine.website} target="_blank"><img src={productLine.logo} alt="Album"/></a></figure>
      <div className="card-body">
        <h2 className="card-title justify-center">{productLine.company}</h2>
        <p>{productLine.description}</p>
        <div className="card-actions justify-center">
          <button className="btn btn-primary" onClick={() => {buttonNewTab(productLine.website)}}>Check Out Their Website</button>
        </div>
      </div>
    </div>
  )
}