import "./OurTeamCard.css";
import Facebook from "../../Assets/Cards/OurTeam/Facebook.png"
import Instagram from "../../Assets/Cards/OurTeam/Instagram.png"
import Twitter from "../../Assets/Cards/OurTeam/Twitter.png"


const OurTeamCards = (props) => {
  const {facebook, instagram, twitter, name,job,img} = props;

  return(
    <div className={"OurTeamCardContainer"}>
      <div className={"OurTeamCardContent"}>
        <img src={img} alt={"Our Team"} className={"OurTeamCardImg"}/>

        <hr className={"OurTeamCardHr"}/>

        <div className={"OurTeamInfs"}>
          <h1 className={"OurTeamCardName"}>{name}</h1>
          <h1 className={"OurTeamCardJob"}>{job}</h1>
        </div>
        <div className={"OurTeamSocial"}>
          {facebook && <a href={"https://www.facebook.com/"} target={"_blank"} >
            <img src={Facebook} alt={"Facebook"} className={"OurTeamCardSocialIcon"}/>
          </a>}
          {instagram && <a href={"https://www.instagram.com/"} target={"_blank"} >
            <img src={Instagram} alt={"Instagram"} className={"OurTeamCardSocialIcon"}/>
          </a>}
          {twitter && <a href={"https://www.Twitter.com/"} target={"_blank"} >
            <img src={Twitter} alt={"Twitter"} className={"OurTeamCardSocialIcon"}/>
          </a>}
        </div>

      </div>
    </div>
  )
};export default OurTeamCards;