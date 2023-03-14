import "./ServicesBanner.css"
import BannerImgRight from "../../Assets/Services/ServicesBannerImgR.png"

const ServicesBanner = () =>{
  return(
    <div className={"ServicesBannerContainer"}>
       <div className={"ServicesBannerContent"}>
         <div className={"ServicesBannerLeft"}>
           <h1 className={"ServicesBannerTitle"}>Social Media Marketing</h1>
           <p className={"ServicesBannerDesc"}>Lorem Ipsum is simply dummy text of the printing and industry ftyuu Ipsum has been the industry's not only five centuries, but also the leap into electronic typesetting.</p>
         </div>
         <div className={"ServicesBannerRight"}>
           <img src={BannerImgRight} alt={"BannerImgRight"} className={"ServicesBannerImg"}/>
         </div>

       </div>

    </div>
  )
};export default ServicesBanner;