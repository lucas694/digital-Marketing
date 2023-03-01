import "./ServicesHP.css"
import ServicesIcon from "../../Assets/Homepage/ServicesIcon.png";
import BtnBase from "../Buttons/BtnBase";
const ServicesHP = () => {
  return(
    <div className={"ServicesHPContainer"}>
      <div className={"ServicesHPContent"}>

        <div className={"ServicesHPHeading"}>
          <img src={ServicesIcon} alt={"Services Icon"} className={"ServicesHPIcon"} />
          <div className={"ServicesHPHeadingMain"}>
            <section className={"SubTitleSec"}>
              <span className={"SubTitleBars"}>
                //
              </span>
              <h3 className={"SubTitleTextWhite"}>01 . services</h3>
            </section>
            <div>
              <h1 className={"ServicesHPHeadingTitle"}>High-impact services to take your business to the next level</h1>
              <BtnBase text={"Get Started"} type={"BtnWhitePrimary"} />
            </div>

          </div>
        </div>
        <div>
          cards
        </div>

      </div>

    </div>
  )
};export default ServicesHP;