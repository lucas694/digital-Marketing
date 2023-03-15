import "./LatestPost.css"
import CardBlog from "../Cards/CardBlog";
import CardBlog1 from "../../Assets/Blog/CardBlog1.png"
import CardBlog2 from "../../Assets/Blog/CardBlog2.png"
import CardBlog3 from "../../Assets/Blog/CardBlog3.png"
import CardBlog4 from "../../Assets/Blog/CardBlog4.png"

const LatestPost = () => {
  const CardBlogData = [
    {id:1, img:CardBlog1, tag:"Marketing", date:"september 1, 2022", title:"How to increase your Twitter reach by over 200% with this simple trick"},
    {id:2, img:CardBlog2, tag:"Marketing", date:"september 1, 2022", title:"How to increase your Twitter reach by over 200% with this simple trick"},
    {id:3, img:CardBlog3, tag:"Marketing", date:"september 1, 2022", title:"How to increase your Twitter reach by over 200% with this simple trick"},
    {id:4, img:CardBlog4, tag:"Marketing", date:"september 1, 2022", title:"How to increase your Twitter reach by over 200% with this simple trick"},
  ]
  return(
    <div className={"LatestPostContainer"}>
      <div className={"LatestPostContent"}>
        <section className={"LastPostSec"}>
          <h1 className={"LastPostTitle"}>Latest posts</h1>
          <button className={"LastPostBtn"}>All</button>
        </section>

        <div className={"LastPostCardsContent"}>
          {CardBlogData.map((item) => {
            return(
              <CardBlog key={item.id} img={item.img} tag={item.tag} date={item.date} title={item.title} />
            )
          })}
        </div>
      </div>
    </div>
  )
};export default LatestPost;