import { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { GlobalContext } from "../App"


export default function LoginPage() {
  // console.log(user)

  const { user, setUser, api } = useContext(GlobalContext)

  const [formData, setFormData] = useState({
    username: "",
    password: ""
  })
  const [errors, setErrors] = useState([])

  const history = useHistory()
  const redirect = () => {
    history.push('/')
  }

  function handleChange(e) {
    console.log(e.target.value)
    setFormData({...formData, [e.target.name]: e.target.value})
    console.log(formData)
  }

  function handleSubmit(e) {
    e.preventDefault()
    console.log(formData)
    fetch(`${api}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then((r) => {
      if (r.ok) {
        r.json().then((currentUser) => setUser(currentUser));
        redirect()
        console.log("login successful")
      } else {
        r.json().then((err) => setErrors(err.errors));
        console.log("login unsuccessful")
      }
    });
  }

  return (
    <div>
      {(errors.length >= 1) ? (
        <h3 className="text-xl text-red-500">{errors}</h3>
      ) : (
        <h3 className="text-xl text-green-500">Log in below.</h3>
      )}

      <form onSubmit={handleSubmit}>
        <div className="my-2">
          <label>Username: </label>
          <input type="text" name="username" value={formData.username} onChange={(e) => handleChange(e)}/>
        </div>
        
        <div className="my-2">
          <label>Password: </label>
          <input type="password" name="password" value={formData.password} onChange={(e) => handleChange(e)}/>
        </div>

        <button type="submit" className="bg-black text-white">Submit</button>
      </form>
    </div>
  )
}