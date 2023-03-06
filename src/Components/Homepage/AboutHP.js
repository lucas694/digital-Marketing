import "./AboutHP.css"
import AboutHpImg from "../../Assets/Homepage/AboutHpImg.png";
import AboutIcon from "../../Assets/Homepage/AboutIcon.png";
import CardAboutHPOne from "../../Assets/Homepage/CardAboutHP1.png";
import CardAboutHPTwo from "../../Assets/Homepage/CardAboutHP2.png";

const AboutHP = () => {
  return(
    <div className={"AboutHPContainer"}>
      <div className={"AboutHPContent"}>
        <div className={"AboutHpLeft"}>
          <img src={AboutHpImg} alt={"About Hp Img"} className={"AboutHpImg"} />
        </div>
        <div className={"AboutHpRight"}>
          <div className={"AboutHpHeading"}>
            <img src={AboutIcon} alt={"About Icon"} className={"AboutHPIcon"} />
            <div className={"AboutHpHeadingMain"}>
              <section className={"SubTitleSec"}>
                <span className={"SubTitleBars"}>
                  //
                </span>
                <h3 className={"SubTitleTextBlack"}>02 . about us</h3>
              </section>
              <h1 className={"AboutHpTitle"}>The #1 digital marketing services company</h1>
            </div>
          </div>
          <hr className={"text-black w-full"}/>
          <div className={"AboutHpDesc"}>
            <p className={"AboutHpDescText"}>Lorem Ipsum is simply dummy text of the printing and typesetting industry ftyuu Ipsum has been the industry's standard book. It has survived not only five centuries, but also the leap into electronic typesetting.</p>
            <div className={"AboutHpCardsSec"}>
              <div className={"AboutHpCardContainer"}>
                <div className={"AboutHpCardImgControl"}>
                  <img src={CardAboutHPOne} alt={"Card About HP One"} className={"AboutHpCardImg"} />
                </div>
                <div className={"AboutHpCardInfs"}>
                  <h3 className={"AboutHpCardTitle"}>Digital Marketing</h3>
                  <hr className={"w-full h-[2px]"}/>
                  <p className={"AboutHpCardDesc"}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
              </div>
              <div className={"AboutHpCardContainer"}>
                <div className={"AboutHpCardImgControl"}>
                  <img src={CardAboutHPOne} alt={"Card About HP One"} className={"AboutHpCardImg"} />
                </div>
                <div className={"AboutHpCardInfs"}>
                  <h3 className={"AboutHpCardTitle"}>Team of Industry Experts</h3>
                  <hr className={"w-full h-[2px]"}/>
                  <p className={"AboutHpCardDesc"}>consectetur amet dolor sit comeneer ilremsilom dolce issilm acalrm consemleint lorem.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
};export default AboutHP;