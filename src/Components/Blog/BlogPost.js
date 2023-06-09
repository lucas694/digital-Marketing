import "./BlogPost.css";
import BLogPostImg from "../../Assets/Blog/BlogPostImg.png";
import BLogPostUser from "../../Assets/Blog/PostBlogUser.png";
import {BsInstagram, BsFacebook, BsTwitter,BsLinkedin} from "react-icons/bs";
import Quotes from "../../Assets/Blog/QuotesImg.png"
import {useEffect} from "react";

const BlogPost = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return(
    <div className="BlogPostContainer">
      <div className={"BlogPostBanner"}>
      </div>
      <div className={"BlogPostContent"}>
        {/*Card*/}
        <div className={"BlogCardPost"}>
          <section className={"BlogCardPostTag"}>
            <span>Marketing</span>
            <h3>September 1, 2022</h3>
          </section>
          <h1 className={"BlogCardPostTitle"}>How to increase your Twitter reach by over 200% with this simple trick</h1>
          <img src={BLogPostImg} alt={"Blog Post"} className={"BlogCardPostImg"}/>
          <div className={"BlogCardPostUser"}>
            <div className={"BlogCardPostLeft"}>
              <img src={BLogPostUser} alt={"Blog Post User"} className={"BlogCardPostUserImg"}/>
              <div>
                <h3 className={"BlogCardPostUserName"}>Nattasha</h3>
                <span className={"BlogCardPostUserJob"}>Designer</span>
              </div>
            </div>
            <div className={"BlogCardPostRight"}>
              <BsInstagram className={"BlogCardPostUserIcon"}/>
              <BsFacebook className={"BlogCardPostUserIcon"}/>
              <BsTwitter className={"BlogCardPostUserIcon"}/>
            </div>
          </div>
          <hr className={"BlogCardPostLine"}/>
        </div>

        {/*Content*/}
        <div className={"BlogPostContentText"}>
          <div className={"BlogPostTextSec"}>
            <h1 className={"BlogPostTitle"}>The Digital Marketing For All</h1>
            <p className={"BlogPostDesc"}>Veniam quae. Nostrum facere repellendus minus quod aut aliquam neque reiciendis. Qui beatae vel magnam repudiandae ipsum repellat repudiandae. Voluptate at dolores ut dolor sint occaecati similique. Velit eius ab delectus temporibus.</p>
            <p className={"BlogPostDesc"}>For dynamic content, add a rich text field to any collection and then connect a rich text element to that field in the settings panel. Headings, paragraphs, block-quotes, figures, images, and figure captions can all be styled.</p>
            <ul className={"BlogPostList"}>
              <li><span>01.</span> Neque sodales ut etiam sit amet nisl purus non tellus orci ac auctor.</li>
              <li><span>02.</span> Nostrum facere repellendus minus quod aut aliquam neque reiciendis.</li>
              <li><span>03.</span> A rich text element can be used with static or dynamic content.</li>
              <li><span>04.</span> Facere repellendus minus quod aut aliquam neque reiciendis.</li>
            </ul>
          </div>

          <div className={"BlogPostQuotes"}>
            <img src={Quotes} alt={"Quotes"} className={"BlogPostQuotesImg"}/>
            <h1 className={"QuotesText"}><span>W</span>hen an unknown printegalley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.</h1>
          </div>

          <div className={"BlogPostTextSec"}>
            <h1 className={"BlogPostTitle"}>Make real time a work improvements</h1>
            <p className={"BlogPostDesc"}>Bitcoin and blockchain technology introduce solutions for real-world issues, seeking to help the unbanked population, combat counterfeiting and improve cross-border transactions to name a few. Even if we disregard the notion of bitcoin as a speculative asset or store of value, it is likely here to stay and disrupt many sectors.</p>
            <ul className={"BlogPostList"}>
              <li><span>01.</span> the unbanked population, combat counterfeiting and improve cross-border .</li>
              <li><span>02.</span> transactions to name a few. Even if we disregard the notion of bitcoin as a speculative</li>
              <li><span>03.</span> Even if we disregard the notion of bitcoin as a speculative asset or store of value.</li>
            </ul>
          </div>

          <div className={"BlogSocial"}>
            <h1 >Share</h1>
            <div className={"BlogSocialRight"}>
              <BsInstagram className={"BlogCardPostUserIcon"}/>
              <BsFacebook className={"BlogCardPostUserIcon"}/>
              <BsTwitter className={"BlogCardPostUserIcon"}/>
              <BsLinkedin className={"BlogCardPostUserIcon"}/>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
};export default BlogPost;