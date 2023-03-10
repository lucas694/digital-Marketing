import "./CardLocation.css";
import{BsTelephone} from "react-icons/bs";
import{BsEnvelope} from "react-icons/bs";

const CardLocation = (props) => {
  const {img, title, address, phone, mail} = props;
  return(
    <div className={"CardLocationContainer"}>
      <div className={"CardLocationImgControl"}>
        <img src={img} alt={"locationFlag"} className={"CardLocationImg"} />
      </div>
      <div className={"CardLocationContent"}>
        <h1 className={"CardLocationTitle"}>{title}</h1>
        <p className={"CardLocationAddress"}>{address}</p>
        <p className={"CardLocationPhone"}>
          <span><BsTelephone className={"CardLocationIcons"}/></span>
          {phone}
        </p>
        <p className={"CardLocationMail"}>
          <span><BsEnvelope className={"CardLocationIcons"}/></span>
          {mail}
        </p>
      </div>
    </div>
  )
};export default CardLocation;