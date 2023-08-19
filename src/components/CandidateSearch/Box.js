import "./Box.css"
import userBlack from "../images/user_black.png"

const Box = (props) => {
    return(
        <div>
            <div className="col outerBox">
                <div className="row userBlack"><img className="userBlack" src={userBlack}></img></div>
                <div className="row boxText">{props.name}</div>
                <div className="row boxText">{props.age}</div>
                <div className="row boxText">{props.region}</div>
                <div className="row profileBtnDiv"><button className="profileBtn">View Profile</button></div>
            </div>
        </div>
    )
}

export default Box;