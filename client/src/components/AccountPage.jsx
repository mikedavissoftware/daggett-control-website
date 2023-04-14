import { useContext } from "react"
import { GlobalContext } from "../App"


export default function AccountPage() {
  const { api } = useContext(GlobalContext)
  console.log(api)

  return (
    <div>
      <hr/>
      <a href={api} target="_blank" >Edit Database</a>
      <hr/>
    </div>
  )
}