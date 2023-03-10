import "./Location.css"
import OfficeIcon from "../../Assets/About/OfficeIcon.png";
import BtnBase from "../Buttons/BtnBase";
import CardLocation from "../Cards/CardLocation";
import locationFlag from "../../Assets/Cards/Location/Flag1.png";
import locationFlagTwo from "../../Assets/Cards/Location/Flag2.png";


const Location = () => {
  const LocationData = [
    {id:1, img:locationFlag, title:"San Francisco, USA", address:"1650 Page. San Francisco, California(CA), 94117", phone:"(414) 809 - 2567", mail:"Contact@marketingagency.com"},
    {id:2, img:locationFlagTwo, title:"Toronto, CA", address:"1650 Page. San Francisco, California(CA), 94117", phone:"(414) 809 - 2567", mail:"Contact@marketingagency.com"},
    {id:3, img:locationFlag, title:"San Francisco, USA", address:"1650 Page. San Francisco, California(CA), 94117", phone:"(414) 809 - 2567", mail:"Contact@marketingagency.com"},
  ]
  return(
    <div className={"LocationContainer"}>
      <div className={"LocationContent"}>
        <div className={"LocationHeading"}>
          <img src={OfficeIcon} alt={"OfficeIcon"} className={"LocationIcon"} />
          <div className={"LocationHeadingMain"}>
            <section className={"SubTitleSec"}>
              <span className={"SubTitleBarsBlue"}>
                //
              </span>
              <h3 className={"SubTitleTextBlack"}>04 . our offices</h3>
            </section>
            <div>
              <h1 className={"LocationHeadingTitle"}>Come and visit us all around the world</h1>
              <BtnBase text={"Get in Touch"}
                       type={"BtnBlackPrimary"}
              />
            </div>
          </div>
        </div>
        {/**/}
        <div className={"LocationCardsContent"}>
          {LocationData.map((item) => {
            return(
              <CardLocation key={item.id}
                            img={item.img}
                            title={item.title}
                            address={item.address}
                            phone={item.phone}
                            mail={item.mail}
              />
            ) })}
        </div>

      </div>

    </div>
  )
};export default Location;