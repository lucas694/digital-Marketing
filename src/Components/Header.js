import "./Header.css";
import {NavLink} from "react-router-dom";
import HeaderLogo from "../Assets/HeaderLogo.png";

const Header = () => {
  return(
    <div className={"HeaderContainer"}>
      <div className={"HeaderContent"}>
        <img src={HeaderLogo} alt={"HeaderLogo"} className={"HeaderLogo"} />
        <div className={"HeaderLinks"}>
          <NavLink to={"/"} className={"HeaderLink"} activeClassName={"active"}>Home</NavLink>
          <NavLink to={"/About"} className={"HeaderLink"} activeClassName={"active"}>About</NavLink>
          <NavLink to={"/Services"} className={"HeaderLink"} activeClassName={"active"}>Services</NavLink>
          <NavLink to={"/Blog"} className={"HeaderLink"} activeClassName={"active"}>Blog</NavLink>
        </div>

      </div>

    </div>
  )
};export default Header;