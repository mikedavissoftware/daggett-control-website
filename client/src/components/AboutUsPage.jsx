import TeamMembers from "./TeamMembers"
import Testimonials from "./Testimonials"


export default function AboutUsPage() {


  return (
    <div className="max-w-screen-xl mx-auto animate fade">
      <h3 className="text-white text-3xl my-2 mt-6"><strong>ABOUT THE COMPANY</strong></h3>
      <p className="text-white my-4 mx-6"><strong>Daggett Control Company</strong> is an industrial control distributor and operations consulting company. The company is owned by <strong>Ron Daggett</strong>, a seasoned professional in the industry. Established in 2022, Daggett Control looks forward to building even stronger relationships with customers in the Rocky Mountain Region.</p>

      <h3 className="text-white text-3xl my-2 mt-8"><strong>OUR TEAM</strong></h3>
      <TeamMembers />

      <h3 className="text-white text-3xl my-2 mt-8"><strong>TESTIMONIALS</strong></h3>
      <Testimonials />
    </div>
  )
}