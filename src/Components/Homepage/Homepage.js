import "./Homepage.css"
import BannerHomepage from "./BannerHomepage";
import ServicesHP from "./ServicesHP";

const Homepage = () =>{
  return(
    <div className={"HomepageContainer"}>
      <BannerHomepage />
      <ServicesHP />

    </div>
  )
};export default Homepage;