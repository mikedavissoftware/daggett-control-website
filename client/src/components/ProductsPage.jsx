import { useState, useEffect, useContext } from "react"
import { Link } from "react-router-dom"

import ProductLineCard from "./ProductLineCard"
import { GlobalContext } from "../App"


export default function ProductsPage() {

  const { api } = useContext(GlobalContext)

  const [productLines, setProductLines] = useState([])

  useEffect(() => {
    fetch(`${api}/product_lines.json`)
    .then(r => r.json())
    .then(productLinesData => {
      setProductLines(productLinesData)
    })
  }, [])
  console.log(productLines)

  const productLineComponents = productLines.map((productLine) => {
    return <ProductLineCard key={productLine.id} productLine={productLine} api={api} />
  })

  return (
    <div className="max-w-screen-xl mx-auto animate fade">
      <h3 className="text-white text-3xl my-2 mt-6"><strong>BROWSE OUR PRODUCT LINES</strong></h3>

      <p className="text-white my-4">We distribute a wide array of different product lines, to fit all your industrial control needs!</p>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mb-4">
        {productLineComponents}
      </div>

      <p className="text-white my-4">To inquire about any of these products, or place an order, please visit our <Link to="/contact" className="font-bold underline">Contact Page</Link>.</p>
    </div>
  )
}