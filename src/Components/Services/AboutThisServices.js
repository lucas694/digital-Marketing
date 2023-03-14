import "./AboutThisServices.css"
import AboutIcon from "../../Assets/Homepage/AboutIcon.png";
import AboutThisImg from "../../Assets/Services/AboutThisImg.png"
import {BsFillCheckCircleFill} from "react-icons/bs";

const AboutThisServices = () =>{
  return(
    <div className={"AboutThisServicesContainer"}>
      <div className={"AboutThisServicesContent"}>
        <div className={"AboutThisServicesLeft"}>
          <img src={AboutThisImg} alt={"AboutThisImg"} className={"AboutThisImg"} />
        </div>
        <div className={"AboutThisServicesRight"}>
          <div className={"AboutThisServicesHeading"}>
            <img src={AboutIcon} alt={"About Icon"} className={"AboutThisServicesIcon"} />
            <div className={"AboutThisServicesMain"}>
              <section className={"SubTitleSec"}>
                <span className={"SubTitleBars"}>
                  //
                </span>
                <h3 className={"SubTitleTextBlack"}>02 . about this service</h3>
              </section>
              <h1 className={"AboutThisServicesTitle"}>We take your business reach from thousands to millions</h1>
            </div>
          </div>
          <hr className={"AboutHr"} />
          <p className={"AboutThisDesc"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit sollicitudinbibendum senectus scelerisque non. Turpis matis morbi vivera ipsum adipiscing Mauris volutpat sagittis, sit nulla. Velit et augues vitae Mattis at nibh nullas placerat imperdiet cursus viverra justo amet. Ipsum duis tempor.</p>
          <div className={"AboutThisServicesTopics"}>
            <section className={"AboutThisTopic"}>
              <BsFillCheckCircleFill className={"AboutThisTopicIcon"} />
              <h3 className={"AboutThisTopicTitle"}>Dolor duis lorem enim eu turpis potenti nulla semper</h3>
            </section>
            <section className={"AboutThisTopic"}>
              <BsFillCheckCircleFill className={"AboutThisTopicIcon"} />
              <h3 className={"AboutThisTopicTitle"}>Lorem a eget blandit ac neque dapibus pulvinar biben</h3>
            </section>
            <section className={"AboutThisTopic"}>
              <BsFillCheckCircleFill className={"AboutThisTopicIcon"} />
              <h3 className={"AboutThisTopicTitle"}>Pellentesque non integer ac id imperdiet sit bibendum</h3>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
};export default AboutThisServices;