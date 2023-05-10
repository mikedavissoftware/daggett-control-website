import { useEffect, useState, useContext } from "react"
import { useHistory } from "react-router-dom"

import { GlobalContext } from "../App"


export default function ContactPage() {

  const { api } = useContext(GlobalContext)

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

  // console.log(JSON.stringify({contact_form: formData}))

  function handleSubmit(e) {
    e.preventDefault()
    console.log(formData)
    fetch(`${api}/contact_forms`, {
      method: "POST",
      // mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then((r) => {
      if (r.ok) {
        r.json().then((res) => {
          console.log(res)
          setErrors([])
          setSuccess(res.success)
        });
        setFormData(newForm)
        console.log(success)
        console.log("contact successful")
      } else {
        (r.status === 500) ? (
          setErrors(["Database unreachable."])
        ) : (
          r.json().then((res) => {
            setSuccess([])
            setErrors(res.errors)
          })
        )
        console.log(errors)
        console.log("contact unsuccessful")
      }
    });
  }


  return (
    <div>
      <h2 className="text-3xl font-semibold mt-10">Contact Us</h2>
      <h4 className="success">{success}</h4>
      {(errors.length > 0) ? (
        <>
          {errors.map((error) => {
            return <h4 className="error">{error}</h4>
          })}
          <h4 className="error">Please try again or email us directly at <a href='mailto:rondaggett@daggettcontrol.com'>ron@daggettcontrol.com</a>.</h4>
        </>
      ) : (null)}
      
      <div className="p-5 rounded-2xl">
        <form onSubmit={handleSubmit}>

          <div className="form-control max-w-2xl mx-auto">
            <label className="label">
              <span className="label-text">What is your name?</span>
            </label>
            <input id="name" name="name" type="text" placeholder="Type name here..." value={formData.name} onChange={handleChange} className="input input-bordered w-full max-w-xs" />
          </div>

          <div className="form-control max-w-2xl mx-auto">
            <label className="label">
              <span className="label-text">What is your email?</span>
            </label>
            <input id="email" name="email" type="text" placeholder="Type email here..." value={formData.email} onChange={handleChange} className="input input-bordered w-full max-w-xs" />
          </div>

          <div className="form-control max-w-2xl mx-auto">
            <label className="label">
              <span className="label-text">How can we help you?</span>
            </label>
            <textarea id="content" name="content" className="textarea textarea-bordered h-48" placeholder="Type message here..." value={formData.content} onChange={handleChange} ></textarea>
          </div>

          <div className="grid my-5 max-w-2xl mx-auto justify-items-end">
            <div>
              <button type="submit" className="bg-gray-500 hover:bg-black">Send</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}