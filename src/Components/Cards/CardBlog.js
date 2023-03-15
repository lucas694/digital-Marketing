import "./CardBlog.css"
import {Link} from "react-router-dom";

const CardBlog = (props) => {
  const {img, tag, date, title} = props;
  return(
    <Link to={"/BlogPost"} className={"CardBlogContainer"}>
      <div className={"CardBlogContent"}>
        <img src={img} alt={"Card Blog"} className={"CardBlogImg"}/>

        <div className={"CardBlogInfs"}>
          <section className={"CardBlogTag"}>
            <span>{tag}</span>
            <h3>{date}</h3>
          </section>
          <h1 className={"CardBlogTitle"}>{title}</h1>
        </div>
      </div>
    </Link>
  )
};export default CardBlog;