import "./AboutServices.css";
import ServicesIcon from "../../Assets/About/ServicesIcon.png";
import AboutServicesCard from "../Cards/AboutServicesCard";
import ServicesCardImgOne from "../../Assets/About/AboutServicesImg/Icon1.png";
import ServicesCardImgTwo from "../../Assets/About/AboutServicesImg/Icon2.png";
import ServicesCardImgThree from "../../Assets/About/AboutServicesImg/Icon3.png";
import ServicesCardImgFour from "../../Assets/About/AboutServicesImg/Icon4.png";
import BtnBase from "../Buttons/BtnBase";
import {IoIosArrowDroprightCircle} from "react-icons/io";

const AboutServices = () => {
  const cardData =[
    {id:1,title:"Efficiency", desc:"Lorem ipsum dolor sit amet consecte tur adipiscing elit olme do semper dalaracc lacus vel facilisis volutpat est velitolm.", img:ServicesCardImgOne},
    {id:2,title:"Accountability", desc:"Lorem ipsum dolor sit amet consecte tur adipiscing elit olme do semper dalaracc lacus vel facilisis volutpat est velitolm.", img:ServicesCardImgTwo},
    {id:3,title:"Commitment", desc:"Lorem ipsum dolor sit amet consecte tur adipiscing elit olme do semper dalaracc lacus vel facilisis volutpat est velitolm.", img:ServicesCardImgThree},
    {id:4,title:"Team Work", desc:"Lorem ipsum dolor sit amet consecte tur adipiscing elit olme do semper dalaracc lacus vel facilisis volutpat est velitolm.", img:ServicesCardImgFour},
  ]
  return(
    <div className={"AboutServicesContainer"}>
      <div className={"AboutServicesContent"}>
        <div className={"AboutServicesHeading"}>
          <img src={ServicesIcon} alt={" Icon"} className={"AboutServicesIcon"}/>
          <section className={"SubTitleSec justify-center"}>
              <span className={"SubTitleBars "}>
                //
              </span>
            <h3 className={"SubTitleTextWhite"}>02 . our values</h3>
          </section>
          <h1 className={"AboutServicesTitle"}>The core values behind our work</h1>
        </div>
      </div>
      <div className={"AboutServicesCardsContainer"}>
        {cardData.map((item) => {
        return(
          <AboutServicesCard key={item.id}
                             ServicesCardImg={item.img}
                             ServicesCardTitle={item.title}
                             ServicesCardDesc={item.desc}
          />
        )})
        }
      </div>
      <div className={"ControlBtnSec mt-6"}>
        <BtnBase text={"Get In Touch"}
                 type={"text-white"}
        />
        <BtnBase text={"Our Services"}
                 type={"BtnWhitePrimary"}
                 icon={<IoIosArrowDroprightCircle className={"BtnIconArrowCircle"}/>}
        />
      </div>
    </div>
  )
};export default AboutServices;