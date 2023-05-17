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
    <div className="animate slide-left">
      <h3 className="text-white text-3xl my-2 mt-6"><strong>CONTACT US</strong></h3>

      <p className="my-4">At Daggett Control, we value <strong>relationships</strong> above all. We go above and beyond to provide our customers with the solutions that fit the needs of their business.</p>

      <p className="my-4">And this all starts with you! Please fill out our contact form below and describe your industrial control needs in detail, and we will get back to you as soon as possible!</p>

      <h4 className="text-accent">{success}</h4>
      {(errors.length > 0) ? (
        <>
          {errors.map((error) => {
            return <h4 className="text-error">{error}</h4>
          })}
          <h4 className="text-error">Please try again or email us directly at <a href='mailto:rondaggett@daggettcontrol.com' className="underline font-bold">ron@daggettcontrol.com</a>.</h4>
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
              <button type="submit" className="bg-accent text-white hover:bg-[#7f7]"><span className="drop-shadow-sm-dark">Send</span></button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}