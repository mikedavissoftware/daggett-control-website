import { useState, useEffect } from "react"
import { useHistory } from "react-router-dom"



export default function ContactPage() {

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

  function handleContactSubmit() {

  }


  return (
    <div>
      <h2 className="text-3xl">Contact Us</h2>
      <div>
        <form onSubmit={handleContactSubmit}>
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
        </form>
      </div>
    </div>
  )
}