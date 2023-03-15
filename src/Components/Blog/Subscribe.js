import "./Subscribe.css"
import BtnBase from "../Buttons/BtnBase";

const Subscribe = () => {
  return(
    <div className={"SubscribeContainer"}>
      <div className={"SubscribeContent"}>
        <h1 className={"SubscribeTitle"}>Subscribe to our <span>newsletter</span></h1>
        <div className={"SubscribeForm"}>
          <input type="text" placeholder={"Enter your email"} className={"InputSubscribe"}/>
          <BtnBase text={"Subscribe"} type={"BtnSubscribe"}/>
        </div>
      </div>
    </div>
  )
};export default Subscribe