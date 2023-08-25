import "./login.css";
import vectorImg from "../../assets/images/Vector.png";
import closeIcon from "../../assets/icons/closeIcon.png";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
// import ForgotPassword from "../ForgotPassword/ForgotPassword";
import axios from 'axios';


function Login(){
  var [email, setEmail] = useState("");
  var [password, setPassword] = useState("");

  const handlelogin = () => {

    axios.post('http://localhost:5000/',
      {
        email: email,
        password: password
      })
      .then(function (response) {
        // handle success
        console.log(response.data.token);

        if (response.data.status === "Login Success") {
          localStorage.setItem('token', response.data.token)
          window.location = "/home";
        }
        else if (response.data.status === "Password not match") {
          alert("Sorry UserId and password are wrong...");

        }
      })
      .catch(function (error) {
        console.log(error);
      })

  }




  return (

    <div className="" >
      <div className="login_form" >
        <div className="btn_1">
          <button className="btn_close" >
            <img src={closeIcon} alt="" className="close_img" />
          </button>
        </div>
        <img src={vectorImg} alt="" className="img-1" />

        <div className="main_form ">
          <h3 className="top_text">
            Let’s take the first step and create your account:
          </h3>

          <div className="user_form">
              <div className="section_1">
                <label className="user_name">Email</label>
                <input type="email" name="email" className="login_name" placeholder="Type email" required onChange={(e) => setEmail(e.target.value)} />
                <label className="user_phone">Password</label>
                <input type="passowrd" name="password" className="login_number" placeholder="Type password" onChange={(e) => setPassword(e.target.value)} />
                <h3 className="middle_notes">
                  <Link to="/">Forgot Password?</Link>
                </h3>
                <button className="btn_submit" onClick={handlelogin}>Continue</button>
                <h4 className="bottom_notes">
                  If you don't have an account. Please <Link to="/register" >Register</Link> here.
                </h4>
              </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Login;
