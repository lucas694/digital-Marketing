import "./Homepage.css"
import BannerHomepage from "./BannerHomepage";
import ServicesHP from "./ServicesHP";
import AboutHP from "./AboutHP";
import ProccessHP from "./ProccessHP";
import Testimonial from "./Testimonial";
import ProjectAndCpunters from "./ProjectAndCpunters";
import Pricing from "./Pricing";
import Benifits from "./Benifits";

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
      <Benifits />
    </div>
  )
};export default Homepage;