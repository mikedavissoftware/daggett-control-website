



export default function ProductLineCard({productLine}) {


  return (
    <div className="my-4">
      <img src={productLine.logo} className="justify-center" />
      <h3 className="text-xl font-bold">{productLine.company}</h3>
      <p>{productLine.description}</p>
    </div>
  )
}