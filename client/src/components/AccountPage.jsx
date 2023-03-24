import { useContext } from "react"
import { UserContext } from "../App"


export default function AccountPage() {
  const { user, setUser } = useContext(UserContext)

  const apiDomain = "http://localhost:3000"


  return (
    <div>
      <h2 className="text-3xl">Current User:</h2>
      <p>The current user is {user.name} (username: {user.username}). They are the {user.role} for Daggett Control. Check out their <a href={user.website}>website</a>.</p>

      <h3 className="text-xl">Bio:</h3>
      <p>{user.bio}</p>

      <hr/>
      <a href={`${apiDomain}/users`} target="_blank" >Edit Users</a>
      <br/>

      <a href={`${apiDomain}/tesimonials`} target="_blank" >Edit Testimonials</a>
      <br/>

      <a href={`${apiDomain}/product_lines`} target="_blank" >Edit Product Lines</a>
    </div>
  )
}