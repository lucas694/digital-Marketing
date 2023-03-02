import "./ServicesHP.css"
import ServicesIcon from "../../Assets/Homepage/ServicesIcon.png";
import BtnBase from "../Buttons/BtnBase";
import CardServices from "../Cards/CardServices";
//Cards Img
import SocialMedia from "../../Assets/Cards/Services/SocialMedia.png"
import PaidAdvertising from "../../Assets/Cards/Services/PaidAdvertising.png"
import AdvancedAnaly from "../../Assets/Cards/Services/AdvancedAnaly.png"
import SeoOpt from "../../Assets/Cards/Services/SeoOpt.png"
import Funnel from "../../Assets/Cards/Services/Funnel.png"
import Marketing from "../../Assets/Cards/Services/CondentMarketing.png"

const ServicesHP = () => {
  const ServicesData = [
    {id:1, title:"Social Media Marketing", img:SocialMedia ,desc:"Lorem ipsum dolor sit amet, ea mundi malorum cum, ocurreret reprehendunt.",},
    {id:2, title:"Paid Advertising", img:PaidAdvertising ,desc:"Lorem ipsum dolor sit amet, ea mundi malorum cum, ocurreret reprehendunt.",},
    {id:3, title:"Advanced Analytics", img:AdvancedAnaly ,desc:"Lorem ipsum dolor sit amet, ea mundi malorum cum, ocurreret reprehendunt.",},
    {id:4, title:"Seo Optimization", img:SeoOpt ,desc:"Lorem ipsum dolor sit amet, ea mundi malorum cum, ocurreret reprehendunt.",},
    {id:5, title:"Funnel Optimization", img:Funnel ,desc:"Lorem ipsum dolor sit amet, ea mundi malorum cum, ocurreret reprehendunt.",},
    {id:6, title:"Condent Marketing", img:Marketing ,desc:"Lorem ipsum dolor sit amet, ea mundi malorum cum, ocurreret reprehendunt.",},
  ]
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
        <div className={"ServicesHPCardsContent"}>
          {ServicesData.map((item)=>{
            return(
              <CardServices key={item.id} title={item.title} img={item.img} desc={item.desc} />
            )
          })}
        </div>
      </div>
    </div>
  )
};export default ServicesHP;