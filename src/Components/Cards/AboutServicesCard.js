import "./AboutServicesCard.css";
import ServicesCardImg from "../../Assets/About/AboutServicesImg/Icon1.png";

const AboutServicesCard = (props) => {
  const {ServicesCardImg, ServicesCardTitle, ServicesCardDesc} = props;
  return(
    <div className={"ServicesCardContainer"}>
      <div className={"ServicesCardImgControl"}>
        <img src={ServicesCardImg} alt={"ServicesCardImg"} className={"ServicesCardImg"}/>
      </div>
      <h1 className={"ServicesCardTitle"}>{ServicesCardTitle}</h1>
      <p className={"ServicesCardDesc"}>{ServicesCardDesc}</p>
      <hr className={"ServicesCardHr"}/>
    </div>
  )
};export default AboutServicesCard;