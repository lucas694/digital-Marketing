import "./PricingCard.css"
import PricingIconOne from "../../Assets/Homepage/PricingPlan1.png";
import {BsCheckCircleFill} from "react-icons/bs";
import {BsXCircleFill} from "react-icons/bs";

const PricingCard = (props) =>{
  const {email,MarketVoice,OptiSeon,ConsultVideo,MarketAdver,img,price,plan} = props;
  return(
    <div className={"PricingCardsContainer"}>
      <button className={"PricingCardStats"}>
        <span className={"PricingCardStatsSpan"}>Popular</span>
      </button>
      <div className={"PricingCardHeading"}>
        <img src={img} alt={"Pricing Icon"} className={"PricingCardIcon"}/>
        <section>
          <h3 className={"PricingCardTitle"}>Starter</h3>
          <h1 className={"PricingCardPrice"}>{price}<span>/Per Month</span></h1>
        </section>
      </div>
      <hr className={"w-full border mt-4 mb-4 border-[#D3D3D3]"}/>

      <ul className={"PricingCardUl"}>
        <li className={"PricingCardLi"}>
          {email ?<BsCheckCircleFill className={"CheckIconPricingCard"}/> : <BsXCircleFill className={"XIconPricingCard"}/>}
          Email MarketingContent
        </li>
        <li className={"PricingCardLi"}>
          {MarketVoice ?<BsCheckCircleFill className={"CheckIconPricingCard"}/> : <BsXCircleFill className={"XIconPricingCard"}/>}
          MarketingVoice
        </li>
        <li className={"PricingCardLi"}>
          {OptiSeon ?<BsCheckCircleFill className={"CheckIconPricingCard"}/> : <BsXCircleFill className={"XIconPricingCard"}/>}
          OptimizeSeo
        </li>
        <li className={"PricingCardLi"}>
          {ConsultVideo ?<BsCheckCircleFill className={"CheckIconPricingCard"}/> : <BsXCircleFill className={"XIconPricingCard"}/>}
          ConsultingVideo
        </li>
        <li className={"PricingCardLi"}>
          {MarketAdver ?<BsCheckCircleFill className={"CheckIconPricingCard"}/> : <BsXCircleFill className={"XIconPricingCard"}/>}
          MarketingAdvertising
        </li>
      </ul>
      <button className={"PricingCardBtn"}>Purchase Plan</button>

    </div>
  )
};export default PricingCard;