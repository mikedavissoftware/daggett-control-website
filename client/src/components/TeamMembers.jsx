import { useState, useEffect } from "react"

import TeamMemberCard from "./TeamMemberCard"


export default function TeamMembers() {
  const [teamMembers, setTeamMembers] = useState([])

  useEffect(() => {
    fetch("/api/team_members")
    .then(r => r.json())
    .then(teamMembersData => {
      setTeamMembers(teamMembersData)
    })
  }, [])
  console.log(teamMembers)

  const teamMemberComponents = teamMembers.map((teamMember) => {
    return <TeamMemberCard key={teamMember.id} teamMember={teamMember} />
  })

  console.log(teamMemberComponents)

  return (
    <div>
      {teamMemberComponents}
    </div>
  )
}