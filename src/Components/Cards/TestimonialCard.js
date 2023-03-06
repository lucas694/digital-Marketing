import "./TestimonialCard.css";
import CompanyLogo from "../../Assets/Homepage/Company.png";
import Start from "../../Assets/Homepage/Star.png";
import CardImgTestimonialOne from "../../Assets/Homepage/cardTestimonial1.png";

const TestimonialCard = (props ) =>{
  const {imgLogo, imgCard, name, position} = props;
  return(
    <div className={"TestimonialCardContainer"}>
      <div className={"TestimonialCardContent"}>
        <div className={"TestimonialCardHeading"}>
          <img src={imgLogo} alt={"Company Logo"} className={"TestimonialCardLogo"} />
          <img src={Start} alt={"Star"} className={"TestimonialCardStar"} />
        </div>
        <hr className={"mt-4"}/>
        <p className={"TestimonialCardText"}>
          Lorem Ipsum has been the industry's standard from dummy text ever since the unknown printer to galley of type and make a type specimen book.
        </p>
      </div>
      <div className={"TestimonialCardInfs"}>
        <img src={imgCard} alt={"Card Image"} className={"TestimonialCardImg"} />
        <section>
          <h3 className={"TestimonialCardName"}>{name}</h3>
          <p className={"TestimonialCardPosition"}>{position}</p>
        </section>
      </div>
    </div>
  )
};export default TestimonialCard;