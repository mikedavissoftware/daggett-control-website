import { useState, useEffect, useContext } from "react"

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
    <div className="max-w-screen-xl mx-auto">
      <h3 className="text-3xl my-2 mt-6"><strong>BROWSE OUR PRODUCT LINES</strong></h3>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {productLineComponents}
      </div>
    </div>
  )
}