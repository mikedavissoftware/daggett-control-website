import { useState, useEffect, useContext } from "react"
import { useHistory } from "react-router-dom"

import { GlobalContext } from "../App"


export default function ContactPage() {

  const { api } = useContext(GlobalContext)

  const history = useHistory()
  const redirect = () => {
    history.push("/login")
  }

  const [errors, setErrors] = useState([])

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    content: ""
  })

  function handleChange(e) {
    setFormData({...formData, [e.target.name]: e.target.value})
    console.log(formData)
  }

  function handleSubmit(e) {
    e.preventDefault()
    console.log(formData)
    // console.log(JSON.stringify(formData))
    fetch(`${api}/contact`, {
      mode: "no-cors",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then((r) => {
      if (r.ok) {
        r.json().then((currentUser) => setUser(currentUser));
        redirect()
        console.log("contact successful")
      } else {
        r.json().then((err) => setErrors(err.errors));
        console.log("contact unsuccessful")
      }
    });
  }


  return (
    <div>
      <h2 className="text-3xl">Contact Us</h2>
      <div>
        <form onSubmit={handleSubmit}>

          <div className="my-3">
            <label>Name: </label>
            <input id="name" name="name" type="text" value={formData.name} onChange={handleChange}></input>
          </div>

          <div className="my-3">
            <label>Email: </label>
            <input id="email" name="email" type="text" placeholder="email@example.com" value={formData.email} onChange={handleChange}></input>
          </div>

          <div className="my-3">
            <label>Message: </label>
            <input id="content" name="content" type="text" placeholder="Introduce yourself and tell us how we can help you!" value={formData.content} onChange={handleChange}  className=""></input>
          </div>

          <div className="my-3">
            <button type="submit" className="bg-gray-500 hover:bg-black" >Send</button>
          </div>
        </form>
      </div>
    </div>
  )
}