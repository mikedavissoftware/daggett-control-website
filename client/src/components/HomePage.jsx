import { useState, useEffect } from "react"


export default function HomePage() {
  const [companyInfo, setCompanyInfo] = useState({})

  useEffect(() => {
    fetch("/api/company_infos/1")
    .then(r => r.json())
    .then(companyInfoData => {
      setCompanyInfo(companyInfoData)
    })
  }, [])
  
  const {name, byline, bio} = companyInfo

  return (
    <div>
      <h2 className="text-3xl"><em>Company Name: </em>{name}</h2>
      <h3 className="text-xl my-2"><em>Byline: </em>{byline}</h3>
      <p className="my-4"><em>Bio: </em>{bio}</p>
    </div>
  )
}