import ControlCloseup from "../assets/images/home-page-carousel/control-close-up.jpg"
import Mountains from "../assets/images/home-page-carousel/mountains.jpg"
import SnowyRange from "../assets/images/home-page-carousel/snowy-range.jpg"


export default function HomePageCarousel() {



  return (
    <div className="carousel w-1/2 mx-auto drop-shadow-2xl">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={ControlCloseup} className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">❮</a> 
          <a href="#slide2" className="btn btn-circle">❯</a>
        </div>
      </div> 
      <div id="slide2" className="carousel-item relative w-full">
        <img src={Mountains} className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">❮</a> 
          <a href="#slide3" className="btn btn-circle">❯</a>
        </div>
      </div> 
      <div id="slide3" className="carousel-item relative w-full">
        <img src={SnowyRange} className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">❮</a> 
          <a href="#slide1" className="btn btn-circle">❯</a>
        </div>
      </div> 
    </div>
  )
}