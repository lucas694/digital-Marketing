import "./CardServicesPage.css"

const CardServicesPage = (props) => {
  const {ServiceName, ServiceDesc, ServiceImg} = props;
  return(
    <div className={"CardServicesPageContainer"}>
      <div className={"CardServicesPageImgControl"}>
        <img src={ServiceImg} alt={"ServicesCardImg"} className={"CardServicesPageImg"}/>
      </div>
      <h1 className={"CardServicesPageTitle"}>{ServiceName}</h1>
      <p className={"CardServicesPageDesc"}>{ServiceDesc}</p>
    </div>
  )
};export default CardServicesPage;