import { useState, useEffect, useContext } from "react"


import TeamMembers from "./TeamMembers"
import Testimonials from "./Testimonials"

import { GlobalContext } from "../App"


export default function AboutUsPage() {

  const { api } = useContext(GlobalContext)

  const [teamMembers, setTeamMembers] = useState([])
  const [testimonials, setTestimonials] = useState([])

  useEffect(() => {
    fetch(`${api}/users.json`)
    .then(r => r.json())
    .then(teamMembersData => {
      setTeamMembers(teamMembersData.sort((a, b) => a.id - b.id))
    })

    fetch(`${api}/testimonials.json`)
    .then(r => r.json())
    .then(testimonialsData => {
      setTestimonials(testimonialsData.sort((a, b) => (a.name > b.name) ? 1 : -1))
    })
  }, [])


  return (
    <div className="max-w-screen-xl mx-auto animate fade">
      <h3 className="text-3xl my-2 mt-6"><strong>ABOUT THE COMPANY</strong></h3>
      <p className="my-4 mx-6"><strong>Daggett Control Company</strong> is an industrial control distributor and operations consulting company. The company is owned by <strong>Ron Daggett</strong>, a seasoned professional in the industry. Established in 2022, Daggett Control looks forward to building even stronger relationships with customers in the Rocky Mountain Region.</p>

      <h3 className="text-3xl my-2 mt-8"><strong>OUR TEAM</strong></h3>
      {(teamMembers) ? (
        <TeamMembers teamMembers={teamMembers} />
      ) : (<></>)}

      {(testimonials.length > 0) ? (
        <>
          <h3 className="text-3xl my-2 mt-8"><strong>TESTIMONIALS</strong></h3>
          <Testimonials testimonials={testimonials} />
        </>
      ) : (<></>)}
      
    </div>
  )
}