import React, { useState } from "react";
import Box from "@mui/material/Box";
import Popper from "@mui/material/Popper";
import Typography from "@mui/material/Typography";
import Fade from "@mui/material/Fade";
import CircleIcon from "@mui/icons-material/Circle";
import IconButton from "@mui/material/IconButton";
import ColorLensOutlinedIcon from "@mui/icons-material/ColorLensOutlined";
import "../CSS/ColorPopper.css";
import { changeColorNote } from "../service/DataServices";

export default function SimplePopper(props) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState();

  console.log("placement : ", placement);

  const handleClick = (newPlacement) => (event) => {
    setAnchorEl(event.currentTarget);
    setOpen((prev) => placement !== newPlacement || !prev);
    setPlacement(newPlacement);
  };

  const selectColor = (color) => {
    // console.log(color);
    // props.setColor(color);
    console.log(props.action);
    if (props.action === "create") {
      props.setColor(color);
    } else if (props.action === "update") {
      console.log(props);
      const data1 = {
        noteIdList: [props.id],
        color: color,
      };

      changeColorNote(data1)
        .then((response) => {
          console.log(response);
          props.listenToColor(true);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  let colorArray = [
    "#fff",
    "#f08080 ",
    "#fbbc04",
    "#fff475",
    "#ccff90",
    "#a7ffeb",
    "#cbf0f8",
    "#aecbfa",
    "#d7aefb",
    "#fdcfe8",
    "#e6c9a8",
    "#e8eaed",
  ];

  return (
    <Box onMouseLeave={() => setOpen(false)}>
      <Popper
        style={{ border: "1px solid #C2C3C3" }}
        open={open}
        anchorEl={anchorEl}
        placement={placement}
        transition
      >
        {({ TransitionProps }) => (
          <Fade {...TransitionProps}>
            <Typography
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
              }}
              sx={{ p: 1 }}
            >
              {colorArray.map((color) => (
                <CircleIcon
                  className="pop"
                  onClick={() => selectColor(color)}
                  style={{
                    border: "1px solid #f3f3f3",
                    color: color,
                  }}
                />
              ))}
            </Typography>
          </Fade>
        )}
      </Popper>
      <IconButton size="small" onMouseEnter={handleClick("top-start")}>
        <ColorLensOutlinedIcon style={{ color: "#5f6368" }} />
      </IconButton>
    </Box>
  );
}
