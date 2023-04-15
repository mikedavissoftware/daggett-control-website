import { useState, useEffect, useContext } from "react"

import TeamMembers from "./TeamMembers"
import Testimonials from "./Testimonials"

import { GlobalContext } from "../App"


export default function AboutUsPage() {

  const { user, setUser, api } = useContext(GlobalContext)
  console.log(api)

  const [teamMembers, setTeamMembers] = useState([])
  useEffect(() => {
    fetch(`${api}/users.json`)
    .then(r => r.json())
    .then(teamMembersData => {
      setTeamMembers(teamMembersData)
    })
  }, [])
  console.log(teamMembers)

  return (
    <div>
      <h3 className="text-xl my-2"><strong>ABOUT THE COMPANY</strong></h3>
      <p className="my-4"><strong>Daggett Control Company</strong> is an industrial control distributor and operations consulting company. The company is owned by <strong>Ron Daggett</strong>, a seasoned professional in the industry. Established in 2022, Daggett Control looks forward to building even stronger relationships with customers in the Rocky Mountain Region.</p>

      <h3 className="text-xl my-2"><strong>OUR TEAM</strong></h3>
      {/* <TeamMembers /> */}

      <h3 className="text-xl my-2"><strong>TESTIMONIALS</strong></h3>
      {/* <Testimonials /> */}
    </div>
  )
}