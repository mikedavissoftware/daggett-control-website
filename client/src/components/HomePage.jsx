import HomePageCarousel from "./HomePageCarousel"


export default function HomePage() {

  return (
    <div className="m-10">
      <h3 className="text-white text-xl my-2"><strong>A little bit about us...</strong></h3>
      <p className="text-white my-4">Established in 2022, <strong>Daggett Control Company</strong> is your complete source and expertise for anaerobic digester gas safety equipment and instrumentation products for the process industries. Serving the Rocky Mountain Region, we distribute products, instruments, and equipment for storage tanks, including level, flow, temperature, & pressure measurement, digester gas safety equipment, bio-gas conditioning equipment, and waste gas flares. Daggett Control is owned and operated by <strong>Ron Daggett</strong>, a seasoned professional in the industry.</p>

      <p className="text-white my-4">Our trained team are experts and dedicated to helping you in product selection, sizing, safety, order placement, ensuring your needs are met - and your plant is safe! We take pride in our ability to find the correct and most cost effective product to monitor and control your processes. Call or email us today!</p>

      <hr width="50%" className="text-white mx-auto my-10" />
      <HomePageCarousel />
    </div>
  )
}