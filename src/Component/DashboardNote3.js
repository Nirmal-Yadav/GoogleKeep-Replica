import React, { useRef } from "react";
import "../CSS/DashboardNote3.css";
import DashboardNote3Icons from "./DashboardNote3Icons";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Remind from "../assests/note2/notification.jpeg";
import Collaborator from "../assests/note2/addfriend.jpeg";
import Paint from "../assests/note2/paint.jpeg";
import Gallery from "../assests/note2/gallery.jpeg";
import Archive from "../assests/note2/download.jpeg";
import More from "../assests/note2/dot.jpeg";
import { UpdateNotes } from "../service/DataServices";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function DashboardNote3(props) {
  const [isShown, setIsShown] = React.useState(false);

  const titleData = useRef(null);
  const descriptionData = useRef(null);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);

  const handleClose = () => {
    // console.log(titleData.current.value)
    // console.log(descriptionData.current.value)
    setOpen(false);

    const data = new FormData();
    data.append("noteId", props.note.id);
    data.append("title", titleData.current.value);
    data.append("description", descriptionData.current.value);

    UpdateNotes(data)
      .then((response) => {
        console.log(response);
        props.updateModal(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <div
        className="dashboardnote3-main"
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
        style={{ backgroundColor: props.note.color }}
      >
        <input
          className="title3"
          type="text"
          placeholder={props.note.title}
          style={{ backgroundColor: props.note.color }}
          onClick={handleOpen}
        ></input>
        <input
          className="note3"
          type="text"
          placeholder={props.note.description}
          style={{ backgroundColor: props.note.color }}
          onClick={handleOpen}
        ></input>
        {isShown && (
          <DashboardNote3Icons
            noteId={props.note.id}
            listenToColor={props.listenToColor}
            ListentoTakeNote1={props.ListentoTakeNote1}
            deleteTrash={props.deleteTrash}
            listenToArchive={props.listenToArchive}
            ListenDrawerDelete={props.ListenDrawerDelete}
            ListenDrawerArchive={props.ListenDrawerArchive}
          />
        )}
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={style}
          style={{
            backgroundColor: props.note.color,
            padding: "5px",
          }}
        >
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <input
              className="title99"
              type="text"
              ref={titleData}
              defaultValue={props.note.title}
              style={{
                backgroundColor: props.note.color,
                border: "none",
                outline: "none",
                margin: "0%",
                height: "30px",
                width: "380px",
                fontSize: "25px",
                marginBottom: "0px",
              }}
            ></input>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <input
              className="note98"
              type="text"
              ref={descriptionData}
              defaultValue={props.note.description}
              // style={{ backgroundColor: props.note.color }}
              style={{
                backgroundColor: props.note.color,
                border: "none",
                padding: "0px",
                outline: "none",
                margin: "0%",
                height: "50px",
                width: "380px",
                fontSize: "18px",
              }}
            ></input>
          </Typography>
          <div className="icon2-container">
            <div className="icons2">
              <div className="remind1">
                <img className="remind1-img" src={Remind} alt="" />
              </div>
              <div className="collaborator1">
                <img className="collaborator1-img" src={Collaborator} alt="" />
              </div>
              <div className="paint1">
                <img className="paint1-img" src={Paint} alt="" />
              </div>
              <div className="gallery2">
                <img className="gallery2-img" src={Gallery} alt="" />
              </div>
              <div className="archive1">
                <img className="archive1-img" src={Archive} alt="" />
              </div>
              <div className="more1">
                <img className="more1-img" src={More} alt="" />
              </div>
            </div>
            <button className="close1" onClick={handleClose}>
              Close
            </button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
export default DashboardNote3;
