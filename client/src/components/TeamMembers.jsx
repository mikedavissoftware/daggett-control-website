import { useState, useEffect, useContext } from "react"

import TeamMemberCard from "./TeamMemberCard"
import { GlobalContext } from "../App"


export default function TeamMembers({ teamMembers }) {

  const { api } = useContext(GlobalContext)

  const filteredTeamMembers = teamMembers.filter((teamMember) => {
    return teamMember.username !== "mike"
  })

  const teamMemberComponents = filteredTeamMembers.map((teamMember) => {
    return <TeamMemberCard key={teamMember.id} teamMember={teamMember} api={api} />
  })

  return (
    <div>
      {teamMemberComponents}
    </div>
  )
}