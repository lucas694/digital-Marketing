import "./BlogArticles.css"
import BlogIcon from "../../Assets/Blog/Blog.png";
import BtnBase from "../Buttons/BtnBase";
import BlogARticlesImg from "../../Assets/Blog/BlogArticlesImg.png"
import {IoIosArrowDroprightCircle} from "react-icons/io";

const BlogArticles = () => {
  return(
    <div className={"BlogArticlesContainer"}>
      <div className={"BlogArticlesContent"}>

        {/* Blog Articles Heading */}
        <div className={"BlogArticlesHeading"}>
          <img src={BlogIcon} alt={" Icon"} className={"BlogArticlesIcon"} />
          <div className={"BlogArticlesHeadingMain"}>
            <section className={"SubTitleSec"}>
              <span className={"SubTitleBarsBlue"}>
                //
              </span>
              <h3 className={"SubTitleTextBlack"}>01 . articles</h3>
            </section>
            <div className={"BlogArticlesHeadingDiv"}>
              <div className={"HeadingMainControl"}>
                <h1 className={"BlogArticlesHeadingTitle"}>Browse our content on growth marketing</h1>
              </div>
              <div className={"HeadingMainControl"}>
                <input className={"InputBlogArt"} type={"text"} placeholder={"Search the blog..."}/>
                <BtnBase text={"Search"}
                         type={"BtnBlackPrimary"}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Blog Articles Main */}
        <div className={"BlogArticlesMain"}>
          <div className={"BlogArticlesLeft"}>
            <div className={"BlogArticlesTag"}>
              <span>Marketing</span>

              <h1>september 1, 2022</h1>
            </div>
            <h1 className={"BlogArticleTitle"}>How to increase your Twitter reach by over 200% with this simple trick</h1>
            <p className={"BlogArticleDesc"}>Tincidunt donec vulputate ipsum erat urna auctor. Eget phasellus ideirs.adipiscing elit. Tincidunt donec vulputate ipsum erat urna auctor.</p>
            <div className={"ControlBtnSec"}>
              <BtnBase text={"Read More"}
                       type={"BtnWhitePrimary"}
                       icon={<IoIosArrowDroprightCircle className={"BtnIconArrowCircle"}/>}
              />
            </div>
          </div>
          <div className={"BlogArticlesRight"}>
            <img src={BlogARticlesImg} alt={"Blog Articles"} className={"BlogArticlesImg"} />
          </div>
        </div>

      </div>
    </div>
  )
};export default BlogArticles;