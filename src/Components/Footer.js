import "./Footer.css";
import FooterLogoOne from "../Assets/FooterLogo1.png";
import FooterLogoTwo from "../Assets/FooterLogo2.png";
import BtnBase from "./Buttons/BtnBase";
import {BsTelephone} from "react-icons/bs";
import {HiOutlineLocationMarker} from "react-icons/hi";
import FooterLinkPage from "../Assets/FooterLinkPage.png"
import FooterLinkUtitlity from "../Assets/FooterLinkUtitlity.png"
import FooterLinkFollows from "../Assets/FooterLinkFollows.png"

const Footer = () => {
  return(
    <div className={"FooterContainer"}>
      <div className={"FooterContent"}>
        <div className={"FooterLeft"}>
          <div className={"w-full"}>
            <img src={FooterLogoOne} alt={"FooterLogoOne"} className={"FooterLogoOne"}/>
          </div>
          <div className={"w-full"}>
            <img src={FooterLogoTwo} alt={"FooterLogoOne"} className={""}/>
          </div>
          <div>
            <h1 className={"FooterTitleLeft"}>Subscribe now</h1>
            <p className={"FooterDescLeft"}>Industry's standard from dummy and make a type book.</p>
          </div>
          <div className={"BtnSecFooterCard"}>
            <input className={"InputFooter"} type={"text"} placeholder={"Enter Your Email..."}/>
            <BtnBase text={"Subscribe"} type={"BtnFooterCard"}/>
          </div>
        </div>
        <div className={"FooterRight"}>
          <div className={"FooterInfSec"}>
            <div className={"FooterInfSides"}>
              <h1 className={"FooterInfTitle"}>
                {<BsTelephone className={"FooterInfTel"}/>}
                Get in touch with
              </h1>
              <div className={"FooterInfTelDiv"}>
                <p>+1 917 000 1212</p>
              </div>
            </div>
            <div className={"FooterInfSides"}>
                <h1 className={"FooterInfTitle"}>
                  {<HiOutlineLocationMarker className={"FooterInfLocation"}/>}
                  Get in touch with
                </h1>
                <div className={"FooterInfLocationDiv"}>
                  <p>10 Suna House 65 Rivington Street London EC2A 3QQ</p>
                </div>
            </div>
          </div>
          <hr className={"FooterHr"}/>

          <div className={"FooterLinks"}>
            <ul>
              <li className={"FooterLinksTitle"}>
                <img src={FooterLinkPage} alt={"FooterLinkPage"} className={"FooterLinskIcons"}/>
                Pages
              </li>
              <li className={"FooterLi"}>Home</li>
              <li className={"FooterLi"}>About</li>
              <li className={"FooterLi"}>Services</li>
              <li className={"FooterLi"}>Blog</li>
              <li className={"FooterLi"}>Contact</li>
            </ul>
            <ul>
              <li className={"FooterLinksTitle"}>
                <img src={FooterLinkUtitlity} alt={"FooterLinkPage"} className={"FooterLinskIcons"}/>
                Utility Pages
              </li>
              <li className={"FooterLi"}><a href={"#"}>Styleguide</a></li>
              <li className={"FooterLi"}><a href={"#"}>404 NotFound </a> </li>
              <li className={"FooterLi"}><a href={"#"}>Password protected</a></li>
              <li className={"FooterLi"}><a href={"#"}>Licenses</a></li>
              <li className={"FooterLi"}><a href={"#"}>Changelog</a></li>
            </ul>
            <ul>
              <li className={"FooterLinksTitle"}>
                <img src={FooterLinkFollows} alt={"FooterLinkPage"} className={"FooterLinskIcons"}/>
                Follows
              </li>
              <li className={"FooterLi"}><a href={"#"}>Facebook</a></li>
              <li className={"FooterLi"}><a href={"#"}>Twitter</a></li>
              <li className={"FooterLi"}><a href={"#"}>Instagram</a></li>
              <li className={"FooterLi"}><a href={"#"}>Linkedin</a></li>
              <li className={"FooterLi"}><a href={"#"}>Pinterest</a></li>
            </ul>
          </div>
          <hr className={"FooterHr "}/>

        </div>
      </div>
    </div>
  )
};export default Footer;