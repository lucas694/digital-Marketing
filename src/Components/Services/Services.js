import "./Services.css";
import ServicesBanner from "./ServicesBanner";
import OurServices from "./OurServices";
import AboutThisServices from "./AboutThisServices";
import CTA from "./CTA";
import {useEffect} from "react";


const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return(
    <div className={"ServicesContainer"}>
      <ServicesBanner />
      <OurServices />
      <AboutThisServices />
      <CTA />
    </div>
  )
};export default Services;