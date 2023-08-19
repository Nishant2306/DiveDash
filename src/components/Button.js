import "./Button.css"
// import test from "./test.js"
// import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
export default function Form(props) {
    // const navigate = useNavigate();
  
    function handleClick() {
  
        <Link to="/Test">Test</Link>
    }
  
    return <button type="button" onClick={handleClick} className = {props.className}>{props.name}</button>
  }
// const Button = (props) => {
//     const navigate = useNavigate();

//   function handleClick(event) {
//     navigate('/Test');
//   }
//     return (
//             <button name="button" type="button" onclick={handleClick} className={props.className}>{props.name}</button>  
//     )
// }

// export default Button

