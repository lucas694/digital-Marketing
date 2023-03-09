import "./AboutUs.css";
import AboutUsImg from "../../Assets/About/AboutUsImg.png";
import AboutIcon from "../../Assets/Homepage/AboutIcon.png";
import AboutIconOne from "../../Assets/About/AboutPointIcon1.png"
import AboutIconTwo from "../../Assets/About/AboutPointIcon2.png"
import BtnBase from "../Buttons/BtnBase";
const AboutUs = () => {
  return(
    <div className={"AboutUsContainer"}>
      <div className={"AboutUsContent"}>
        <div className={"AboutUsLeft"}>
          <img src={AboutUsImg} alt={"AboutUsImg"} className={"AboutUsImg"} />
        </div>
        <div className={"AboutUsRight"}>
          <div className={"AboutHpHeading"}>
            <img src={AboutIcon} alt={"About Icon"} className={"AboutHPIcon"} />
            <div className={"AboutHpHeadingMain"}>
              <section className={"SubTitleSec"}>
                <span className={"SubTitleBars"}>
                  //
                </span>
                <h3 className={"SubTitleTextBlack"}>01 . about us</h3>
              </section>
              <h1 className={"AboutHpTitle"}>The #1 digital marketing services company</h1>
            </div>
          </div>
          <hr className={"AboutHr"} />

          <div className={"AboutUsPoints"}>
            <div className={"AboutUsPoint"}>
              <img src={AboutIconOne} alt={"AboutIconOne"} className={"AboutUsIcons"} />
              <h1 className={"AboutUsPointTitle"}>Development Scale</h1>
            </div>
            <div className={"AboutUsPoint"}>
              <img src={AboutIconTwo} alt={"AboutIconOne"} className={"AboutUsIcons "} />
              <h1 className={"AboutUsPointTitle"}>Research & Strategy</h1>
            </div>
          </div>
          <div className={"AboutUsPointsDesc"}>
            <p>Lorem ipsum dolors sit non amet consectetur adipiscing elit fringilla aliquam Aliquam vestibulum libero morbi blandit cursus risus. Laoreet non curabitur gravida arcu ac tortor semper vivera nam libero justo laoreet mollis aliquam ut porttitor leo a diam.</p>
          </div>
          <div className={"w-full mt-6"}>
            <BtnBase text={"Learn More"} type={"border-[#292930]"}/>

          </div>

        </div>

      </div>

    </div>
  )
};export default AboutUs;