import "./ProjectAndCpunters.css";
import ProjectIcon from "../../Assets/Homepage/ProjectIcon.png";
import BtnBase from "../Buttons/BtnBase";
import {IoIosArrowDroprightCircle} from "react-icons/io";
import ProjectCard from "../Cards/ProjectCard";

const ProjectAndCpunters = () => {
  return(
    <div className={"ProjectAndCpuntersContainer"}>
      <div className={"ProjectContent"}>
        <div className={"ProjectHeading"}>
          <img src={ProjectIcon} alt={"Services Icon"} className={"ProjectIconIcon"} />
          <div className={"ProjectHeadingMain"}>
            <section className={"SubTitleSec"}>
              <span className={"SubTitleBars"}>
                //
              </span>
              <h3 className={"SubTitleTextWhite"}>05 . case studies</h3>
            </section>
            <div>
              <h1 className={"ProjectHeadingTitle"}>High-impact services to take your business to the next level</h1>
              <BtnBase text={"More Cacestudys"}
                       type={"BtnWhitePrimary"}
                       icon={<IoIosArrowDroprightCircle className={"BtnIconArrowCircle"}/>}
              />
            </div>
          </div>
        </div>
        {/**/}
        <div className={"ProjectCardSection"}>
          <ProjectCard />

        </div>

      </div>

    </div>
  )
};export default ProjectAndCpunters