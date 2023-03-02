import "./CardServices.css"
import BtnBase from "../Buttons/BtnBase";
import { IoIosArrowDroprightCircle } from "react-icons/io";

const CardServices = (props) => {
  const{title, desc, img} = props;
    return(
        <div className={"CardServicesContainer"}>
          <div className={"CardServicesImgControl"}>
            <section>
              <img src={img} alt={"Phone"} className={"CardServicesImg"} />
            </section>
          </div>
          <div className={"CardServicesInf"}>
            <h1 className={"CardsServicesTitle"}>{title}</h1>
            <p className={"CardsServicesDesc"}>{desc}</p>
            <div className={"mt-4 w-full"}>
              <BtnBase text={"Read More"}
                       type={"BtnCardServices"}
                       icon={<IoIosArrowDroprightCircle className={"BtnIconArrowCircle"}/>}
              />
            </div>
          </div>

        </div>
    )
};export default CardServices;