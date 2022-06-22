import React from "react";
import "../CSS/DashBoardNote1.css";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Checkmark from "../assests/note1/checkmark.png";
import Brush from "../assests/note1/brush.png";
import Gallery from "../assests/note1/gallery.png";

function DashboardNote1(props) {
  const changenote = () => {
    props.ListentoTakeNote1(true);
  };
  return (
    <div className="DashboardNote1-main" onClick={changenote}>
      <div className="DashboardNote1-container">
        <Paper
          component="form"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            width: 600,
            height: 60,
          }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Take a note. . . "
            inputProps={{ "aria-label": "search " }}
          />

          <div className="dashboardNote1-logo">
            <a className="checkmark1" href=" ">
              <img className="checkmark1-img" src={Checkmark} alt="" />
            </a>
            <a className="brush1" href=" ">
              <img className="brush1-img" src={Brush} alt="" />
            </a>
            <a className="gallery1" href=" ">
              <img className="gallery1-img" src={Gallery} alt="" />
            </a>
          </div>
        </Paper>
      </div>
    </div>
  );
}

export default DashboardNote1;
