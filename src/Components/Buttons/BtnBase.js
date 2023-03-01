import "./BtnBase.css"
const BtnBase = (props) => {
  const {text, type, onClick, icon} = props;
  return(
    <button className={`BtnBase ${type}`} onClick={onClick}>{text}{icon}</button>

  )
};export default BtnBase;