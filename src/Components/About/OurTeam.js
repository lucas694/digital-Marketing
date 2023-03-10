import "./OurTeam.css";
import OurTeamIcon from "../../Assets/About/OurTeamIcon.png";
import OurTeamCard from "../Cards/OurTeamCard";
import OurTeamOne from "../../Assets/Cards/OurTeam/OurTeam1.png"
import OurTeamTwo from "../../Assets/Cards/OurTeam/OurTeam2.jpg"
import OurTeamThree from "../../Assets/Cards/OurTeam/OurTeam3.jpg"

const OurTeam = () => {
  const OurTeamData = [
    {id:1, name: "Pippa Clarkson", job: "Lead Manager", facebook: true, instagram: false, twitter: true,img:OurTeamOne},
    {id:2, name: "Richard Walsh", job: "Lead Manager", facebook: true, instagram: true, twitter: false,img:OurTeamTwo},
    {id:3, name: "Fabiola Walsh", job: "Lead Manager", facebook: true, instagram: true, twitter: true,img:OurTeamThree},
  ]
  return(
    <div className={"OurTeamContainer"}>
      <div className={"OurTeamContent"}>
        <div className={"AboutServicesHeading"}>
          <img src={OurTeamIcon} alt={" Icon"} className={"OurTeamIcon"}/>
          <section className={"SubTitleSec justify-center"}>
              <span className={"SubTitleBarsBlue "}>
                //
              </span>
            <h3 className={"SubTitleTextBlack"}>03 . our team</h3>
          </section>
          <h1 className={"OurTeamTitle"}>The core values behind our work</h1>
        </div>
        <div className={"OurTeamCardsContent"}>
          {OurTeamData.map((item) => {
            return(
              <OurTeamCard
                key={item.id}
                name={item.name}
                job={item.job}
                facebook={item.facebook}
                instagram={item.instagram}
                twitter={item.twitter}
                img={item.img}
              />
            ) })
          }
        </div>
      </div>
    </div>
  )
};export default OurTeam;