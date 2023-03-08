import "./Homepage.css"
import BannerHomepage from "./BannerHomepage";
import ServicesHP from "./ServicesHP";
import AboutHP from "./AboutHP";
import ProccessHP from "./ProccessHP";
import Testimonial from "./Testimonial";
import ProjectAndCpunters from "./ProjectAndCpunters";
import Pricing from "./Pricing";

const Homepage = () =>{
  return(
    <div className={"HomepageContainer"}>
      <BannerHomepage />
      <ServicesHP />
      <AboutHP />
      <ProccessHP />
      <Testimonial />
      <ProjectAndCpunters />
      <Pricing />

    </div>
  )
};export default Homepage;