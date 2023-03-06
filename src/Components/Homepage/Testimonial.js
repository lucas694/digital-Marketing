import "./Testimonial.css";
import TestimonialIcon from "../../Assets/Homepage/TestemonialIcon.png";
import CompanyLogo from "../../Assets/Homepage/Company.png";
import CompanyLogo2 from "../../Assets/Homepage/Company2.png";
import CardImgTestimonialOne from "../../Assets/Homepage/cardTestimonial1.png";
import CardImgTestimonialTwo from "../../Assets/Homepage/cardTestimonial2.png";
import TestimonialCard from "../Cards/TestimonialCard";

const Testimonial = () => {
  return(
    <div className={"TestimonialContainer"}>
      <div className={"TestimonialContent"}>
        <div className={"TestimonialHeading"}>
          <img src={TestimonialIcon} alt={"About Icon"} className={"TestimonialIcon"} />
          <div className={"TestimonialHeadingMain"}>
            <section className={"SubTitleSec"}>
                <span className={"SubTitleBars"}>
                  //
                </span>
              <h3 className={"SubTitleTextBlack"}>04 . testimonial</h3>
            </section>
            <h1 className={"TestimonialTitle"}>We work with customers across all industries</h1>
          </div>
        </div>
        <div className={"TestimonialCardsContent"}>
          <TestimonialCard imgLogo={CompanyLogo}
                           imgCard={CardImgTestimonialOne}
                           name={"John Carter"}
                           position={"Marketing Lead at Google"}
          />
          <TestimonialCard imgLogo={CompanyLogo2}
                           imgCard={CardImgTestimonialTwo}
                           name={"Peeter Pawl"}
                           position={"Designer"}
          />
        </div>
      </div>

    </div>
  )
};export default Testimonial;