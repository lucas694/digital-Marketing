import "./Blog.css"
import BlogBanner from "./BlogBanner";
import BlogArticles from "./BlogArticles";
import Subscribe from "./Subscribe";
import LatestPost from "./LatestPost";

const Blog = () => {
  return(
    <div className={"BlogContainer"}>
      <BlogBanner />
      <BlogArticles />
      <Subscribe />
      <LatestPost />
    </div>
  )
};export default Blog;