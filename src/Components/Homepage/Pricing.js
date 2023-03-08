import "./Pricing.css";
import PricingIcon from "../../Assets/Homepage/PricingIcon.png";
import PricingIconOne from "../../Assets/Homepage/PricingPlan1.png";
import PricingIconTwo from "../../Assets/Homepage/PricingPlan2.png";
import PricingIconThree from "../../Assets/Homepage/PricingPlan3.png";
import PricingCard from "../Cards/PricingCard";

const Pricing =() =>{
  const dataPlans = [
    {id:1,Plan:"Basic" ,email:true,MarketVoice:true,OptiSeon:true,ConsultVideo:false,MarketAdver:false, img:PricingIconOne,price:"$29"},
    {id:2,Plan:"Starter" ,email:true,MarketVoice:true,OptiSeon:true,ConsultVideo:true,MarketAdver:false, img:PricingIconTwo,price:"$49"},
    {id:3,Plan:"Pro" ,email:true,MarketVoice:true,OptiSeon:true,ConsultVideo:true,MarketAdver:true, img:PricingIconThree,price:"$99"},
  ]
  return(
    <div className={"PricingContainer"}>
      <div className={"PricingHeading"}>
        <img src={PricingIcon} alt={"Proccess Icon"} className={"PricingIcon"}/>
        <section className={"SubTitleSec justify-center"}>
              <span className={"SubTitleBarsBlue "}>
                //
              </span>
          <h3 className={"SubTitleTextBlack"}>06 . pricing & plan</h3>
        </section>
        <h1 className={"PricingTitle"}>Our Flexible Pricing Plans</h1>
      </div>
      <div className={"PricingCardsContent"}>
        {dataPlans.map((item) =>(
          <PricingCard key={item.id}
                       email={item.email}
                       MarketVoice={item.MarketVoice}
                       OptiSeon={item.OptiSeon}
                       ConsultVideo={item.ConsultVideo}
                       MarketAdver={item.MarketAdver}
                       img={item.img}
                       price={item.price}
                       plan={item.Plan}
          />
        ))}

      </div>

    </div>
  )
};export default Pricing;