import "./About.css";
import AboutBanner from "./AboutBanner";
import AboutUs from "./AboutUs";
import AboutServices from "./AboutServices";
import OurTeam from "./OurTeam";
import Location from "./Location";

const About = () => {
  return(
    <div className={"AboutContainer"}>
      <AboutBanner />
      <AboutUs />
      <AboutServices />
      <OurTeam />
      <Location />

    </div>
  )
};export default About;