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
    return <ProductLineCard key={productLine.id} productLine={productLine} />
  })

  return (
    <div>
      <h2 className="text-3xl">This is the ProductsPage component</h2>
      {productLineComponents}
    </div>
  )
}