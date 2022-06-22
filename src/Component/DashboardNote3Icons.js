import React from "react";
import "../CSS/DashboardNote3Icons.css";
import Remind from "../assests/note2/notification.jpeg";
import Collaborator from "../assests/note2/addfriend.jpeg";
import Gallery from "../assests/note2/gallery.jpeg";
import Archive from "../assests/note2/download.jpeg";
import More from "../assests/note2/dot.jpeg";
import Trash from "../assests/note2/trash.png";
import { ArchiveNotes, TrashNotes } from "../service/DataServices";
import SimplePopper from "./ColorPopper";

function DashboardNote3Icons(props) {
  // console.log(props)

  const updateArchived = (event) => {
    event.preventDefault();
    // console.log(event.target)
    console.log(event.target.id);

    let obj2 = {
      noteIdList: [event.target.id],
      isArchived: true,
    };

    console.log(obj2);
    ArchiveNotes(obj2)
      .then((response) => {
        console.log(response);
        props.listenToArchive(true);
        //   let obj3 = {
        //     noteIdList: [event.target.id],
        //     isDeleted: false,
        //   };

        //   TrashNotes(obj3)
        //     .then((response) => {
        //       console.log(response);
        //       props.ListenDrawerDelete(true);
        //     })
        //     .catch((error) => {
        //       console.log(error);
        //     });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const updateTrash = (event) => {
    // console.log("hiii")

    let obj3 = {
      noteIdList: [event.target.id],
      isDeleted: true,
    };

    TrashNotes(obj3)
      .then((response) => {
        console.log(response);
        props.deleteTrash(true);

        let obj2 = {
          noteIdList: [event.target.id],
          isArchived: false,
        };

        ArchiveNotes(obj2)
          .then((response) => {
            console.log(response);
            props.ListenDrawerArchive(true);
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <div className="dashboardnote3icons-main">
        <div className="icons3-conatiner">
          <div className="remind1">
            <img className="remind1-img" src={Remind} alt="" />
          </div>
          <div className="collaborator1">
            <img className="collaborator1-img" src={Collaborator} alt="" />
          </div>
          <SimplePopper
            action="update"
            id={props.noteId}
            listenToColor={props.listenToColor}
          />
          {/* <div className='paint1'><img className='paint1-img' src={Paint} /></div> */}
          <div className="gallery2">
            <img className="gallery2-img" src={Gallery} alt="" />
          </div>
          <div className="archive1">
            <img
              className="archive1-img"
              src={Archive}
              onClick={updateArchived}
              id={props.noteId}
              alt=""
            />
          </div>
          <div className="more1">
            <img className="more1-img" src={More} alt="" />
          </div>
          <div className="trash1">
            <img
              className="trash1-img"
              src={Trash}
              onClick={updateTrash}
              id={props.noteId}
              alt=""
            />
          </div>
        </div>
        <button className="close4" href="">
          close
        </button>
      </div>
    </div>
  );
}
export default DashboardNote3Icons;
