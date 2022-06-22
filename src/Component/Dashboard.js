import React from "react";
import "../CSS/Dashboard.css";
import DashboardHeader from "./DashboardHeader";
import DashboardNote1 from "./DashboardNote1.js";
import DashBoardNote2 from "./DashBoardNote2.js";
import DashboardNote3 from "../Component/DashboardNote3";

import MiniDrawer from "./Drawer";
import { GetNotes } from "../service/DataServices";

function Dashboard() {
  const [switchNote1Note2, setswitchNote1Note2] = React.useState(false);
  const [currentPage, setCurrentPage] = React.useState("getNotes");

  const ListentoTakeNote1 = (data) => {
    if (data === true) setswitchNote1Note2(true);
    else if (data === false) setswitchNote1Note2(false);
    GetNote(currentPage);
  };

  const [openDrawer, setopenDrawer] = React.useState(false);

  const changeDrawer = (data) => {
    if (data === true) {
      setopenDrawer(!openDrawer);
    }
  };

  const GetNote = (data) => {
    GetNotes()
      .then((response) => {
        let filterArray = response.data.data.data.filter(function (note) {
          if (data === "getNotes") {
            if (note.isArchived === false && note.isDeleted === false) {
              return note;
            }
          } else if (data === "isArchive") {
            if (note.isArchived === true && note.isDeleted === false) {
              return note;
            }
          } else if (data === "isDeleted") {
            if (note.isArchived === false && note.isDeleted === true) {
              return note;
            }
          }
        });
        console.log(response.data.data.data);
        setNoteArray(filterArray);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const [noteArray, setNoteArray] = React.useState([]);

  React.useEffect(() => {
    GetNote(currentPage);
  }, [currentPage]);

  // list

  const ListentoArchiveList = (data) => {
    setCurrentPage(data);
    GetNote(data);
  };
  const ListentoDeleteList = (data) => {
    setCurrentPage(data);
    GetNote(data);
  };
  const ListentoNotesList = (data) => {
    setCurrentPage(data);
    GetNote(data);
  };

  //listend to drawer

  const ListenDrawerArchive = (data) => {
    if (data === true) {
      GetNote(currentPage);
    }
  };
  const ListenDrawerDelete = (data) => {
    if (data === true) {
      GetNote(currentPage);
    }
  };

  const listenToArchive = (data) => {
    // GetNote(data);
    if (data === true) {
      // setCurrentPage(currentPage)
      GetNote(currentPage);
    }
  };

  const listenToColor = (data) => {
    // GetNote(data);
    if (data === true) {
      // setCurrentPage(currentPage)
      GetNote(currentPage);
    }
  };

  const deleteTrash = (data) => {
    // GetNote(data)
    if (data === true) {
      // setCurrentPage(currentPage)
      GetNote(currentPage);
    }
  };

  const updateModal = (data) => {
    // GetNote(data)
    if (data === true) {
      // setCurrentPage(currentPage)
      GetNote(currentPage);
    }
  };

  return (
    <div className="dashboard1-main">
      <DashboardHeader changeDrawer={changeDrawer} />

      <div>
        <MiniDrawer
          openDrawer={openDrawer}
          ListentoArchiveList={ListentoArchiveList}
          ListentoDeleteList={ListentoDeleteList}
          ListentoNotesList={ListentoNotesList}
        />
      </div>

      <div className="TakeNoteContainer">
        {switchNote1Note2 ? (
          <DashBoardNote2 ListentoTakeNote1={ListentoTakeNote1} />
        ) : (
          <DashboardNote1 ListentoTakeNote1={ListentoTakeNote1} />
        )}
      </div>

      <div className="takenote3">
        {noteArray.map((note) => (
          <DashboardNote3
            note={note}
            listenToColor={listenToColor}
            ListentoTakeNote1={ListentoTakeNote1}
            deleteTrash={deleteTrash}
            updateModal={updateModal}
            listenToArchive={listenToArchive}
            ListenDrawerDelete={ListenDrawerDelete}
            ListenDrawerArchive={ListenDrawerArchive}
          />
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
