import React from "react";
import "../CSS/DashboardNote2.css";
import Remind from "../assests/note2/notification.jpeg";
import Collaborator from "../assests/note2/addfriend.jpeg";
import Gallery from "../assests/note2/gallery.jpeg";
import Archive from "../assests/note2/download.jpeg";
import More from "../assests/note2/dot.jpeg";
import Leftarrow from "../assests/note2/leftarrow.jpeg";
import Rightarrow from "../assests/note2/right.jpeg";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import { AddNotes } from "../service/DataServices";
import SimplePopper from "./ColorPopper";

function DashBoardNote2(props) {
  const [noteObj, setNoteObj] = React.useState({
    title: "",
    description: "",
    isArchived: false,
    color: "",
    isDeleted: false,
  });

  const takeTitle = (e) => {
    setNoteObj({ ...noteObj, title: e.target.value });
  };

  const takeDescription = (e) => {
    setNoteObj({ ...noteObj, description: e.target.value });
  };

  const submit = () => {
    console.log(noteObj);

    const data = new FormData();
    data.append("title", noteObj.title);
    data.append("description", noteObj.description);
    data.append("isArchived", noteObj.isArchived);
    data.append("color", noteObj.color);

    AddNotes(data)
      .then((response) => {
        console.log(response);
        props.ListentoTakeNote1(false);
      })
      .catch((error) => {
        console.log(error);
        props.ListentoTakeNote1(false);
      });
  };

  const handleClickAway = () => {
    // console.log("hii")
    props.ListentoTakeNote1(false);
  };

  const takeArchived = (e) => {
    e.preventDefault();
    setNoteObj({ ...noteObj, isArchived: !noteObj.isArchived });
    // props.ListentoTakeNote1(false)
  };

  const setColor = (color1) => {
    console.log(color1);
    setNoteObj({ ...noteObj, color: color1 });
  };
  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <div
        className="dashboardnote2-main"
        style={{ backgroundColor: noteObj.color }}
      >
        <div style={{ backgroundColor: noteObj.color }}>
          <div
            className="dashboardnote2-contain"
            style={{ backgroundColor: noteObj.color }}
          >
            <input
              className="title2"
              type="text"
              placeholder="title"
              onChange={takeTitle}
              style={{ backgroundColor: noteObj.color }}
            />
            <input
              className="takenote2"
              type="text"
              placeholder="Take a note ..."
              onChange={takeDescription}
              style={{ backgroundColor: noteObj.color }}
            />
          </div>
          <div
            className="icon2-container"
            style={{ backgroundColor: noteObj.color }}
          >
            <div className="icons2" style={{ backgroundColor: noteObj.color }}>
              <div className="remind1">
                <img className="remind1-img" src={Remind} alt="" />
              </div>
              <div className="collaborator1" href="">
                <img className="collaborator1-img" src={Collaborator} alt="" />
              </div>
              <SimplePopper setColor={setColor} action="create" />
              {/* <div className='paint1' href=''><img className='paint1-img' src={Paint} /></div> */}
              <div className="gallery2" href="">
                <img className="gallery2-img" src={Gallery} alt="" />
              </div>
              <div className="archive1" href="">
                <img
                  className="archive1-img"
                  src={Archive}
                  onClick={takeArchived}
                  alt=""
                />
              </div>
              <div className="more1" href="">
                <img className="more1-img" src={More} alt="" />
              </div>
              <div className="leftarrow1" href="">
                <img className="leftarrow1-img" src={Leftarrow} alt="" />
              </div>
              <div className="rightarrow1" href="">
                <img className="rightarrow1-img" src={Rightarrow} alt="" />
              </div>
            </div>
            <div className="close1" onClick={submit}>
              Close
            </div>
          </div>
        </div>
      </div>
    </ClickAwayListener>
  );
}

export default DashBoardNote2;
