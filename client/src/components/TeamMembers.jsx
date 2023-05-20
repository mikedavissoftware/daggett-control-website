import { useState, useEffect, useContext } from "react"

import TeamMemberCard from "./TeamMemberCard"
import { GlobalContext } from "../App"


export default function TeamMembers() {

  const { api } = useContext(GlobalContext)

  const [teamMembers, setTeamMembers] = useState([])
  useEffect(() => {
    fetch(`${api}/users.json`)
    .then(r => r.json())
    .then(teamMembersData => {
      setTeamMembers(teamMembersData)
    })
  }, [])

  const teamMemberComponents = teamMembers.map((teamMember) => {
    return <TeamMemberCard key={teamMember.id} teamMember={teamMember} api={api} />
  })

  return (
    <div>
      {teamMemberComponents}
    </div>
  )
}