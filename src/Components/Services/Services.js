import "./Services.css";
import ServicesBanner from "./ServicesBanner";
import OurServices from "./OurServices";
import AboutThisServices from "./AboutThisServices";
import CTA from "./CTA";


const Services = () => {
  return(
    <div className={"ServicesContainer"}>
      <ServicesBanner />
      <OurServices />
      <AboutThisServices />
      <CTA />
    </div>
  )
};export default Services;