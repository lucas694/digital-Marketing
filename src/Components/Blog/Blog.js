import "./Blog.css"
import BlogBanner from "./BlogBanner";
import BlogArticles from "./BlogArticles";
import Subscribe from "./Subscribe";
import LatestPost from "./LatestPost";
import {useEffect} from "react";

const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return(
    <div className={"BlogContainer"}>
      <BlogBanner />
      <BlogArticles />
      <Subscribe />
      <LatestPost />
    </div>
  )
};export default Blog;