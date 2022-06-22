import React, { useState } from "react";
import "../CSS/signup.css";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import { UserSignUp } from "../service/UserSignUpService";
import gmail1 from "../assests/signup/gmail1.svg";

const fNameRegex = /^[A-Z]{1}[a-z]{2,}/;
const lNameRegex = /^[A-Z]{1}[a-z]{2,}/;
const emailRegex =
  /^[a-zA-Z]+[a-zA-Z0-9]*[- . + _]?[a-zA-Z0-9]+[@]{1}[a-z0-9]+[.]{1}[a-z]+[.]?[a-z]+$/;
const passwordRegex = /^[a-z]{3,}$/;
function SignUp() {
  const [userObj, setUserObj] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    service: "advance",
  });
  const [firstNameError, setfirstNameError] = useState(false);
  const [lastNameError, setlastNameError] = React.useState(false);
  const [emailError, setEmailError] = React.useState(false);
  const [passwordError, setpasswordError] = React.useState(false);
  const [firstNameHelper, setfirstNameHelper] = React.useState("");
  const [lastNameHelper, setlastNameHelper] = React.useState("");
  const [emailHelper, setEmailHelper] = React.useState(
    "You can use letter, number and peroid"
  );
  const [passwordHelper, setpasswordHelper] = React.useState("");

  const takeFirst = (event) => {
    setUserObj({ ...userObj, firstName: event.target.value });
  };
  const takeLast = (event) => {
    setUserObj({ ...userObj, lastName: event.target.value });
  };
  const takeEmail = (event) => {
    setUserObj({ ...userObj, email: event.target.value });
  };
  const takepassword = (event) => {
    setUserObj({ ...userObj, password: event.target.value });
  };

  const onsubmit = () => {
    console.log(userObj);

    if (fNameRegex.test(userObj.firstName)) {
      setfirstNameError(false);
      setfirstNameHelper("");
    } else {
      setfirstNameError(true);
      setfirstNameHelper("enter correct name");
    }

    if (lNameRegex.test(userObj.lastName)) {
      setlastNameError(false);
      setlastNameHelper("");
    } else {
      setlastNameError(true);
      setlastNameHelper("enter correct name");
    }

    if (emailRegex.test(userObj.email)) {
      setEmailError(false);
      setEmailHelper("");
    } else {
      setEmailError(true);
      setEmailHelper("enter correct email");
    }
    if (passwordRegex.test(userObj.password)) {
      setpasswordError(false);
      setpasswordHelper("");
    } else {
      setpasswordError(true);
      setpasswordHelper("use correct format");
    }

    // if (emailRegex.test(userObj.Email) && passwordRegex.test(userObj.Password)) && fNameRegex.test(userObj.Firstname) && (lNameRegex.test(userObj.Lastname) {
    UserSignUp(userObj)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    // }
  };
  return (
    <div className="main1">
      <div className="main1-container">
        <div className="body1">
          <div className="body1-left">
            <div className="google1">
              <span className="g a">G</span>
              <span className="o a">o</span>
              <span className="o1 a">o</span>
              <span className="g a">g</span>
              <span className="l a">l</span>
              <span className="o a">e</span>
            </div>
            <div className="create1">Create your google Account</div>
            <div className="name1">
              <TextField
                id="demo-helper-text-aligned"
                onChange={takeFirst}
                error={firstNameError}
                helperText={firstNameHelper}
                label="Firstname"
                style={{ width: "173px" }}
              />
              <TextField
                id="demo-helper-text-aligned"
                onChange={takeLast}
                error={lastNameError}
                helperText={lastNameHelper}
                label="Lastname"
                style={{ width: "173px" }}
              />
            </div>
            <div className="email1">
              <TextField
                onChange={takeEmail}
                error={emailError}
                helperText={emailHelper}
                id="demo-helper-text-aligned"
                label="Username"
                // style={{height:"3px"}}
              />
            </div>

            <div className="current1-email">
              Use my current email address instead
            </div>
            <div className="password1">
              <TextField
                onChange={takepassword}
                error={passwordError}
                helperText={passwordHelper}
                id="fullWidth1"
                type="password"
                label="password"
              />

              <TextField id="fullWidth1" type="password" label="confirm" />
            </div>
            <div className="min1-max">
              Use 8 or more characters with a mix of a letter number & symbol
            </div>
            <div className="show1-password">
              <FormControlLabel
                value="end"
                control={<Checkbox />}
                label="show password"
                labelPlacement="end"
              />
            </div>
            <div className="sign1-next">
              <div>
                <a className="signin" href=" ">
                  Sign in instead
                </a>
              </div>
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
          <div className="body1-right">
            <div className="image1">
              <img src={gmail1} alt="" />
            </div>
            <div className="oneaccount1">
              One account. All of google working for you
            </div>
          </div>
        </div>
        <div className="footer1">
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
