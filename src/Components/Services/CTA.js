import "./CTA.css";
import pattern from "../../Assets/Services/Pattern.png";
import BtnBase from "../Buttons/BtnBase";

const CTA = () => {
  return(
    <div className={"CTAContainer"}>
      <div className={"CTAContent"}>
        <div className={"CtaLeft"}>
          <h1 className={"CtaTitle"}>Get in touch and <span>start growing</span> your startup today</h1>
          <div className={"ControlBtnSecCTA"}>
            <BtnBase text={"Get In Touch"} type={"BtnBlackPrimary"} />
            <BtnBase text={"Get In Touch"} type={"BtnWhitePrimary"} />
          </div>
        </div>
        <div className={"CtaRight"}>
          <img src={pattern} alt={"pattern"} className={"Pattern"}/>
        </div>
      </div>
    </div>
  )
};export default CTA;