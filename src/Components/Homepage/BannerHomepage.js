import "./BannerHomepage.css";
import BgBannerRight from "../../Assets/Homepage/BgBannerR2.png";
import BtnBase from "../Buttons/BtnBase";
const BannerHomepage = () => {
  return(
    <div className={"BannerHomepageContainer"}>
      <div className={"BannerHomepageContent"}>
        <div className={"BannerHpLeft"}>
          <section className={"SubTitleSec"}>
            <span className={"SubTitleBars"}>
              //
            </span>
            <h3 className={"SubTitleTextBlack"}>agency</h3>
          </section>
          <h1 className={"BannerHpTitle"}>A fully integrated digital <span>marketing</span> agency</h1>
          <p className={"BannerHpDesc"}>Lorem ipsum dolor sit amet, ea mundi malorum cum, ocurreret reprehendunt ius ex. Ut vis mazim erroribus forensibus.</p>
          <div className={"ControlBtnSec"}>
            <BtnBase text={"Our Services"} type={"BtnBlackPrimary"} />
            <BtnBase text={"Get Started"} type={"BtnWhitePrimary"} />

          </div>
        </div>
        <div className={"BannerHpRight"}>
          <img src={BgBannerRight} alt={"Banner Homepage Right"} className={"BannerHpRightImg"} />
        </div>

      </div>
    </div>
  )
};export default BannerHomepage;