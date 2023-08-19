import "../Button.css";
import "./Home.css";
import Pic1 from "../images/pic1.png";
import Pic2 from "../images/pic2.png";
import { Link } from 'react-router-dom';
import { AuthContext } from "../Auth";
import { useContext } from "react";
// import { useNavigate } from 'react-router-dom';
const Home = () => {
  // const navigate = useNavigate();

  // function handleClick(event) {

  //   navigate('/Test');
  // }
  const { currentUser } = useContext(AuthContext);
  return (
    <>
      {currentUser ? (
        <p>
          You are logged - <Link to="./Dashboard">View Dashboard</Link>
        </p>
      ) : (
    <div>
      <div className="column1">
        <div className="head1">DIVE</div>
        <img src={Pic1} alt = "" className="image1"></img>
        Candidate Search
        {/* <Button className="button1" name="Login for Hiring Managers"></Button> */}
        <Link className="button1" to="/Login1">Login for Hiring Managers</Link>
      </div>
      <div className="column2">
        <div className="head2">DASH</div>
        <img src={Pic2} alt = "" className="image2"></img>
        Diversity Metrics and Forecasts
        {/* <Button className="button2" name="Login for BUs and HRAs "></Button> */}
        <Link className="button2" to="/Login2">Login for BUs and HRAs </Link>
      </div>
    </div>
      )}
    </>
  );
};

export default Home;
