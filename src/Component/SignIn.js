import React from "react";
import "../CSS/signin.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { UserSignIn } from "../service/USerService";

const passwordRegex = /^[a-z]{3,}$/;
const emailRegex =
  /^[a-zA-Z]+[a-zA-Z0-9]*[- . + _]?[a-zA-Z0-9]+[@]{1}[a-z0-9]+[.]{1}[a-z]+[.]?[a-z]+$/;

function SignIn() {
  const [emailhelper, setemailhelper] = React.useState("");
  const [passwordhelper, setPasswordhelper] = React.useState("");
  const [emailerror, setEmailerror] = React.useState(false);
  const [passworderror, setPassworderror] = React.useState(false);
  const [emailobj, setEmailobj] = React.useState({ email: "", password: "" });

  const takeEmail = (event) => {
    setEmailobj({ ...emailobj, email: event.target.value });
  };

  const takePassword = (event) => {
    setEmailobj({ ...emailobj, password: event.target.value });
  };

  const onsubmit = () => {
    console.log(emailobj);
    if (emailRegex.test(emailobj.email)) {
      setEmailerror(false);
      setemailhelper("");
    } else {
      setEmailerror(true);
      setemailhelper("enter correct email");
    }
    if (passwordRegex.test(emailobj.password)) {
      setPassworderror(false);
      setPasswordhelper("");
    } else {
      setPassworderror(true);
      setPasswordhelper("use correct format");
    }

    UserSignIn(emailobj)
      .then(function (response) {
        localStorage.setItem("token", response.data.id);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="main">
      <div className="main-container">
        <div className="body">
          <div className="google">
            <span className="g a">G</span>
            <span className="o a">o</span>
            <span className="o1 a">o</span>
            <span className="g a">g</span>
            <span className="l a">l</span>
            <span className="o a">e</span>
          </div>
          <div className="sign-in">Sign in</div>
          <div className="use">Use your google Account</div>
          <div className="email">
            <TextField
              onChange={takeEmail}
              error={emailerror}
              helperText={emailhelper}
              id="demo-helper-text-misaligned-no-helper"
              label="Email or Phone"
            />
            <a className="forgot" href=" ">
              Forgot email
            </a>
          </div>

          <div className="password">
            <TextField
              onChange={takePassword}
              error={passworderror}
              helperText={passwordhelper}
              fullWidth
              label="password"
              id="fullWidth"
              type="password"
              style={{ width: "305px" }}
            />
          </div>
          <div className="notyours">
            Not yours computer, Use guest mode to sign in privately.
          </div>
          <div className="learnmore">
            <a className="learn" href=" ">
              Learn More
            </a>
          </div>
          <div className="create-next">
            <a className="createaccount" href=" ">
              Create Account
            </a>
            <div>
              <Button
                onClick={onsubmit}
                variant="contained"
                href="#contained-buttons"
              >
                Next
              </Button>
            </div>
          </div>
        </div>
        <div className="footer"></div>
      </div>
    </div>
  );
}
export default SignIn;
