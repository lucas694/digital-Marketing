import "./ProccessHP.css";
import ProccessIcon from "../../Assets/Homepage/ProccesshpIcon.png";
import MarketPlanProcess from "../../Assets/Homepage/MarketPlanProcess.png";
import WorkExecProcess from "../../Assets/Homepage/WorkExecProcess.png";
import GrowthProcess from "../../Assets/Homepage/GrowthProcess.png";

const ProccessHP = () => {
  return(
    <div className={"ProccessHPContainer"}>
      <div className={"ProcessContent"}>
        <div className={"ProccessHPHeading"}>
          <img src={ProccessIcon} alt={"Proccess Icon"} className={"ProccessIcon"}/>
          <section className={"SubTitleSec justify-center"}>
              <span className={"SubTitleBarsBlue "}>
                //
              </span>
            <h3 className={"SubTitleTextBlack"}>03 . proccess</h3>
          </section>
          <h1 className={"ProccessHPTitle"}>A simple, yet powerful and efficient process</h1>
        </div>
        {/*******/}
        <div className={"ProcessSect"}>
          <div className={"ProcessSectLeft"}>
            <img src={MarketPlanProcess} alt={"a"} className={"ProcessSectImg"}/>
          </div>
          <div className={"ProcessSectRight"}>
            <h1 className={"ProcessSectTitle"}>Market Plan</h1>
            <p className={"ProcessSectText"}>consectetur amet dolor sit comeneer ilremsilom dolce issilm acalrm </p>
          </div>
        </div>
        {/*******/}

        <div className={"ProcessSect"}>
          <div className={"ProcessSectLeft"}>
            <h1 className={"ProcessSectTitleEnd"}>Work Execution</h1>
            <p className={"ProcessSectTextEnd"}>consectetur amet dolor sit comeneer ilremsilom dolce issilm acalrm </p>
          </div>
          <div className={"ProcessSectRight"}>
            <img src={WorkExecProcess} alt={"a"} className={"ProcessSectImg"}/>
          </div>
        </div>
        {/*******/}

        <div className={"ProcessSect"}>
          <div className={"ProcessSectLeft"}>
            <img src={GrowthProcess} alt={"a"} className={"ProcessSectImg"}/>
          </div>
          <div className={"ProcessSectRight"}>
            <h1 className={"ProcessSectTitle"}>Growth & Scale</h1>
            <p className={"ProcessSectText"}>consectetur amet dolor sit comeneer ilremsilom dolce issilm acalrm </p>
          </div>
        </div>
      </div>
    </div>
  )
};export default ProccessHP;