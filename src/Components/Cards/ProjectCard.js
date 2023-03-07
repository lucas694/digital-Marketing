import "./ProjectCard.css";
import {useState} from "react";
import {IoIosArrowForward} from "react-icons/io";
import OnlineMediaTopic from "../../Assets/Homepage/OnlineMediaTopic.jpg";

const ProjectCard = () => {
  const [OnMedia, setOnMedia] = useState(false);
  const [ExpMarketing, setExpMarketing] = useState(false);
  const [EmailMarketing, setEmailMarketing] = useState(false);

  const handleOnMedia = () => {
    setOnMedia(!OnMedia);
  }
  const handleExpMarketing = () => {
    setExpMarketing(!ExpMarketing);
  }
  const handleEmailMarketing = () => {
    setEmailMarketing(!EmailMarketing);
  }

  return(
    <div className={"ProjectCardContainer"}>
      <div className={"ProjectCardLeft"}>
        <div className={OnMedia ? "ProjectTopicOpen" : "ProjectTopic"}>
          {OnMedia ? <span className={"ProjectTopicSpan"}>Branding / Marketing</span>: null}
          <section className={"ProjectSectionCardMain"}>
            <h1 className={OnMedia ? "ProjectTopicTitleOpen" :"ProjectTopicTitle"}>Online Media Management</h1>
            <button className={OnMedia ? "ProjectTopicBtnOpen" :"ProjectTopicBtn"}
                    onClick={handleOnMedia}>
              <IoIosArrowForward className={OnMedia ? "ProjectTopicBtnIconOpen":"ProjectTopicBtnIcon"} />
            </button>
          </section>
          {OnMedia ? <p className={"ProjectTopicDesc"}>Lorem Ipsum has been the industry's standard from dummy text ever since the unknown printer to galley of type and make.</p> : null}
        </div>

        {/**/}
        <div className={ExpMarketing ? "ProjectTopicOpen" : "ProjectTopic"}>
          {ExpMarketing ? <span className={"ProjectTopicSpan"}>Branding / Marketing</span>: null}
          <section className={"ProjectSectionCardMain"}>
            <h1 className={ExpMarketing ? "ProjectTopicTitleOpen" :"ProjectTopicTitle"}>Experimental Marketing</h1>
            <button className={ExpMarketing ? "ProjectTopicBtnOpen" :"ProjectTopicBtn"}
                    onClick={handleExpMarketing}>
              <IoIosArrowForward className={ExpMarketing ? "ProjectTopicBtnIconOpen":"ProjectTopicBtnIcon"} />
            </button>
          </section>
          {ExpMarketing ? <p className={"ProjectTopicDesc"}>Lorem Ipsum has been the industry's standard from dummy text ever since the unknown printer to galley of type and make.</p> : null}
        </div>

        {/**/}
        <div className={EmailMarketing ? "ProjectTopicOpen" : "ProjectTopic"}>
          {EmailMarketing ? <span className={"ProjectTopicSpan"}>Branding / Marketing</span>: null}
          <section className={"ProjectSectionCardMain"}>
            <h1 className={EmailMarketing ? "ProjectTopicTitleOpen" :"ProjectTopicTitle"}>Email Marketing</h1>
            <button className={EmailMarketing ? "ProjectTopicBtnOpen" :"ProjectTopicBtn"}
                    onClick={handleEmailMarketing}>
              <IoIosArrowForward className={EmailMarketing ? "ProjectTopicBtnIconOpen":"ProjectTopicBtnIcon"} />
            </button>
          </section>
          {EmailMarketing ? <p className={"ProjectTopicDesc"}>Lorem Ipsum has been the industry's standard from dummy text ever since the unknown printer to galley of type and make.</p> : null}
        </div>
      </div>

      <div className={"ProjectCardRight"}>
        <div className={"ProjectCardRightContent"}>
          {(OnMedia || ExpMarketing || EmailMarketing) && <img src={OnlineMediaTopic} alt={"Online Media Topic"} className={"ProjectCardRightImg"} />}
        </div>
      </div>

    </div>
  )
};export default ProjectCard