import { useState, useEffect, useContext } from "react"

import TeamMemberCard from "./TeamMemberCard"
import { GlobalContext } from "../App"


export default function TeamMembers({ teamMembers }) {

  const { api } = useContext(GlobalContext)

  const teamMemberComponents = teamMembers.map((teamMember) => {
    return <TeamMemberCard key={teamMember.id} teamMember={teamMember} api={api} />
  })

  return (
    <div>
      {teamMemberComponents}
    </div>
  )
}