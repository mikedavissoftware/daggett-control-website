import { useState, useEffect } from "react"



export default function TeamMembers() {
  const [teamMembers, setTeamMembers] = useState({})

  useEffect(() => {
    fetch("/api/team_members")
    .then(r => r.json())
    .then(teamMembersData => {
      setTeamMembers(teamMembersData)
    })
  }, [])
  console.log(teamMembers)

  return (
    <div>
      <h2 className="text-3xl">This is the TeamMembers component</h2>
    </div>
  )
}