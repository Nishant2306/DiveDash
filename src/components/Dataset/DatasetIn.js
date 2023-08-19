import Pic4 from "../images/pic4.png"
import logo from "../images/logo.png"
import { Link } from "react-router-dom"
import back from "../images/back.png"
const DatasetIn = () => {
    return(
        <div>
          <div className="back">
        <Link to={"/Dashboard"}>
          <img src={back} alt="" className="backimg"></img>
        </Link>
      </div>
      <div>
          <div className="side2">
            <form className="formall">
              <input
                className="formInput"
                type="JobID"
                name="JobID"
                placeholder="Enter Dataset ID"
              />
              <Link className="submitbtn" to={"/Dataset"}>
                Submit
              </Link>
            </form>
          </div>
        </div>
      
      <div className="col allAbove">
        <div className="row text2">Dataset</div>
        <div className="row imgDiv">
          <img src={logo} className="midImg"></img>
        </div>
      </div>
        <div>
          <div className="side2">
            <img src={Pic4} alt="" className="image4"></img>
            {/* <Button className="button2" name="Login for BUs and HRAs "></Button> */}
            <button
              className="Nostyle ForcastText"
              onClick={() => {
                // setDI(true);
                console.log("fuk1");
              }}
            >
              <a className="Arrow1">←</a> Dataset
            </button>
          </div>
        </div>
    </div>
    )
}

export default DatasetIn;