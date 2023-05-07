



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
    <div className="card bg-slate-500 shadow-xl m-5 image-full max-h-60">
      <figure className="p-5 mx-auto"><a href={productLine.website} target="_blank"><img src={productLine.logo} alt="Album" className="max-h-52"/></a></figure>
      <div className="card-body">
        <h2 className="card-title justify-center">{productLine.company}</h2>
        <p>{productLine.description}</p>
        <div className="card-actions justify-center mt-3">
          <button className="btn btn-primary hover:shadow-lg" onClick={() => {buttonNewTab(productLine.website)}}>Check Out Their Website</button>
        </div>
      </div>
    </div>
  )
}