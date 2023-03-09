import "./About.css";
import AboutBanner from "./AboutBanner";
import AboutUs from "./AboutUs";
import AboutServices from "./AboutServices";

const About = () => {
  return(
    <div className={"AboutContainer"}>
      <AboutBanner />
      <AboutUs />
      <AboutServices />

    </div>
  )
};export default About;