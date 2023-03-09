import "./Benifits.css";
import BenifitsIcon from "../../Assets/Homepage/BenifitsIcon.png";
import BenifitsImg from "../../Assets/Homepage/BenifitsImg.png";
import CardAboutHPOne from "../../Assets/Homepage/CardAboutHP1.png";
import BenefitsSiteIcon from "../../Assets/Homepage/BenifitsSiteIcon.png";
import BenefitsPageIcon from "../../Assets/Homepage/BenifitsPageIcon.png";
import BenefitsReportIcon from "../../Assets/Homepage/BenifitsReportIcon.png";

const Benifits = () => {
  return(
    <div className={"BenifitsContainer"}>
      <div className={"BenifitsContent"}>
        <div className={"BenifitsLeft"}>
          <div className={"BenifitsHeading"}>
            <img src={BenifitsIcon} alt={"Benifits Icon"} className={"BenifitsIcon"} />
            <div className={"BenifitsHeadingMain"}>
              <section className={"SubTitleSec"}>
                <span className={"SubTitleBars"}>
                  //
                </span>
                <h3 className={"SubTitleTextBlack"}>07 . benifits</h3>
              </section>
              <h1 className={"BenifitsTitle"}>Benifit of working with Maruncy</h1>
            </div>
          </div>
          <img src={BenifitsImg} alt={"Benifits Img"} className={"BenifitsImg"} />

        </div>
        <div className={"BenifitsRight"}>
          {/** Benifits Card */}
          <div className={"BenifitsCardContainer"}>
            <div className={"BenifitsCardImgControl"}>
              <img src={BenefitsPageIcon} alt={"Card About HP One"} className={"BenifitsCardImg"} />
            </div>
            <div className={"BenifitsCardInfs"}>
              <h3 className={"BenifitsCardTitle"}>Team of Industry Experts</h3>
              <hr className={"w-full h-[2px]"}/>
              <p className={"BenifitsCardDesc"}>consectetur amet dolor sit comeneer ilremsilom dolce issilm acalrm consemleint lorem.</p>
            </div>
          </div>
          {/** Benifits Card */}
          <div className={"BenifitsCardContainer"}>
            <div className={"BenifitsCardImgControl"}>
              <img src={BenefitsSiteIcon} alt={"Card About HP One"} className={"BenifitsCardImg"} />
            </div>
            <div className={"BenifitsCardInfs"}>
              <h3 className={"BenifitsCardTitle"}>Team of Industry Experts</h3>
              <hr className={"w-full h-[2px]"}/>
              <p className={"BenifitsCardDesc"}>consectetur amet dolor sit comeneer ilremsilom dolce issilm acalrm consemleint lorem.</p>
            </div>
          </div>
          {/** Benifits Card */}
          <div className={"BenifitsCardContainer"}>
            <div className={"BenifitsCardImgControl"}>
              <img src={BenefitsReportIcon} alt={"Card About HP One"} className={"BenifitsCardImg"} />
            </div>
            <div className={"BenifitsCardInfs"}>
              <h3 className={"BenifitsCardTitle"}>Team of Industry Experts</h3>
              <hr className={"w-full h-[2px]"}/>
              <p className={"BenifitsCardDesc"}>consectetur amet dolor sit comeneer ilremsilom dolce issilm acalrm consemleint lorem.</p>
            </div>
          </div>
        </div>

      </div>

    </div>
  )
};export default Benifits;