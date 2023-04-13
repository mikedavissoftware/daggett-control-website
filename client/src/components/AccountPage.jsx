import { useContext } from "react"
import { GlobalContext } from "../App"


export default function AccountPage() {
  const { user, setUser, api } = useContext(GlobalContext)

  return (
    <div>
      <h2 className="text-3xl">Current User:</h2>
      <p>The current user is {user.name} (username: {user.username}). They are the {user.role} for Daggett Control. Check out their <a href={user.website}>website</a>.</p>

      <h3 className="text-xl">Bio:</h3>
      <p>{user.bio}</p>

      <hr/>
      <a href={`${api}/users`} target="_blank" >Edit Users</a>
      <br/>

      <a href={`${api}/testimonials`} target="_blank" >Edit Testimonials</a>
      <br/>

      <a href={`${api}/product_lines`} target="_blank" >Edit Product Lines</a>
    </div>
  )
}