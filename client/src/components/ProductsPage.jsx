import { useState, useEffect, useContext } from "react"
import { GlobalContext } from "../App"


export default function ProductsPage() {

  // const { api } = useContext(GlobalContext)
  const api = "http://localhost:3000"

  const [productLines, setProductLines] = useState([])

  useEffect(() => {
    fetch(`${api}/product_lines.json`)
    .then(r => r.json())
    .then(productLinesData => {
      console.log(productLinesData)
      setProductLines(productLinesData)
    })
  }, [])

  return (
    <div>
      <h2 className="text-3xl">This is the ProductsPage component</h2>
    </div>
  )
}