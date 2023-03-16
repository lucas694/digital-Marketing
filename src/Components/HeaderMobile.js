import "./HeaderMobile.css";
import {useState} from "react";
import {FaBars} from "react-icons/fa";
import HeaderLogo from "../Assets/FooterLogo1.png";
import { motion } from "framer-motion"
import {VscChromeClose} from "react-icons/vsc";
import {NavLink} from "react-router-dom";

const HeaderMobile = () =>{
  const[toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  }
  return(
    <div className={"HeaderMobileContainer"}>
      <motion.div className={toggle ? 'hidden' : "HeaderMobileContent"}
                  animate={ toggle ? { x: 200 } : { x: 0 }}
                  transition={{duration: 0.4}}>
        <img src={HeaderLogo} alt={"HeaderLogo"} className={"HeaderMobileLogo"}/>

          <button onClick={handleToggle}>
            <FaBars className={"MenuIconMobile"}/>
          </button>
      </motion.div>

      <motion.div className={toggle ? "ContentMobileMenu" : "hidden"}
                  animate={ toggle ? { y: 0 } : { y: -100 }}
                  transition={{duration: 0.2}}>
        <div className={toggle ? "HeaderMobileLinks" : "hidden"}>
          <NavLink to={"/"} className={"HeaderMobileLink"} activeClassName={"active"}>Home</NavLink>
          <NavLink to={"/About"} className={"HeaderMobileLink"} activeClassName={"active"}>About</NavLink>
          <NavLink to={"/Services"} className={"HeaderMobileLink"} activeClassName={"active"}>Services</NavLink>
          <NavLink to={"/Blog"} className={"HeaderMobileLink"} activeClassName={"active"}>Blog</NavLink>
          <NavLink >
            <button onClick={handleToggle} className={"BtnClose"}>
              <VscChromeClose className={"CloseIconMobile"}/>
            </button>
          </NavLink>
        </div>

      </motion.div>
    </div>
  )
};export default HeaderMobile;