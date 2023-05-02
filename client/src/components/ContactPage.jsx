import { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"


export default function ContactPage() {

  const history = useHistory()
  const redirect = () => {
    history.push("/")
  }

  const [success, setSuccess] = useState([])
  const [errors, setErrors] = useState([])

  const newForm = {
    name: "",
    email: "",
    content: ""
  }
  const [formData, setFormData] = useState(newForm)

  function handleChange(e) {
    setFormData({...formData, [e.target.name]: e.target.value})
    console.log(formData)
  }

  function handleSubmit(e) {
    e.preventDefault()
    console.log(formData)
    // console.log(JSON.stringify(formData))
    fetch(`/api/contact_forms`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then((r) => {
      // console.log(r)

      if (r.ok) {
        r.json().then((res) => {
          console.log(res)
          setErrors([])
          setSuccess(res.success)
        });
        setFormData(newForm)
        console.log("contact successful")
      } else {
        r.json().then((res) => {
          setSuccess([])
          setErrors(res.errors)
        });
        console.log(errors)
        console.log("contact unsuccessful")
      }
    });
  }


  return (
    <div>
      <h2 className="text-3xl">Contact Us</h2>
      <h4 className="success">{success}</h4>
      <h4 className="error">{errors}</h4>
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