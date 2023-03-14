import "./OurServices.css"
import ServicesIcon from "../../Assets/Services/ServicesIcon.png";
import CardServicesPage from "../Cards/CardServicesPage";
//ServicesImgs
import ContentStrategy from "../../Assets/Services/ContentStrategy.png";
import BrandAwareness from "../../Assets/Services/BrandAwareness.png";
import VideoMarketing from "../../Assets/Services/VideoMarketing.png";
import SocialPaid from "../../Assets/Services/SocialPaid.png";
import SocialAudits from "../../Assets/Services/SocialAudits.png";
import SocialMedia from "../../Assets/Services/SocialMedia.png";
import BtnBase from "../Buttons/BtnBase";

const OurServices = () => {
  const ServicesData =[
    {id:1,ServicesName:"Content Strategy",ServicesImg:ContentStrategy, ServicesDesc:"Lorem ipsum dolor sit amet consecte tur adipiscing elit olme do semper dalaracc lacus vel facilisis volutpat est velitolm."},
    {id:2,ServicesName:"Brand Awareness",ServicesImg:BrandAwareness, ServicesDesc:"Lorem ipsum dolor sit amet consecte tur adipiscing elit olme do semper dalaracc lacus vel facilisis volutpat est velitolm."},
    {id:3,ServicesName:"Video Marketing",ServicesImg:VideoMarketing, ServicesDesc:"Lorem ipsum dolor sit amet consecte tur adipiscing elit olme do semper dalaracc lacus vel facilisis volutpat est velitolm."},
    {id:4,ServicesName:"Social Paid ",ServicesImg:SocialPaid, ServicesDesc:"Lorem ipsum dolor sit amet consecte tur adipiscing elit olme do semper dalaracc lacus vel facilisis volutpat est velitolm."},
    {id:5,ServicesName:"Social Audits",ServicesImg:SocialAudits, ServicesDesc:"Lorem ipsum dolor sit amet consecte tur adipiscing elit olme do semper dalaracc lacus vel facilisis volutpat est velitolm."},
    {id:6,ServicesName:"Social Media ",ServicesImg:SocialMedia, ServicesDesc:"Lorem ipsum dolor sit amet consecte tur adipiscing elit olme do semper dalaracc lacus vel facilisis volutpat est velitolm."},
  ]
  return(
    <div className={"OurServicesContainer"}>
      <div className={"OurServicesContent"}>
        <div className={"OurServicesHeading"}>
          <img src={ServicesIcon} alt={" Icon"} className={"OurServicesIcon"}/>
          <section className={"SubTitleSec justify-center"}>
              <span className={"SubTitleBars "}>
                //
              </span>
            <h3 className={"SubTitleTextWhite"}>01 . our services</h3>
          </section>
          <h1 className={"OurServicesTitle"}>We have extensive experience in Social Media Marketing</h1>
        </div>

        <div className={"OurServicesCardsContent"}>
          {ServicesData.map((item) => {
            return(
              <CardServicesPage key={item.id}
                                ServiceName={item.ServicesName}
                                ServiceImg={item.ServicesImg}
                                ServiceDesc={item.ServicesDesc}
              />
            )
          })}
        </div>
        <div className={"ControlBtnSec "}>
          <BtnBase text={"Get In Touch"}
                   type={"text-white mt-10"}
          />
        </div>

      </div>

    </div>
  )
};export default OurServices;