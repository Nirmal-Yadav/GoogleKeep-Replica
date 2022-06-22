import axios from "axios";

let confiObjforaddNotes = {
  headers: {
    "Content-type": "multipart/form-data",
    Authorization: localStorage.getItem("token"),
  },
};

let confiObjforaddNotes1 = {
  headers: {
    Authorization: localStorage.getItem("token"),
  },
};

export const AddNotes = async (FormData) => {
  let response = await axios.post(
    "http://fundoonotes.incubation.bridgelabz.com/api/notes/addNotes",
    FormData,
    confiObjforaddNotes
  );
  return response;
};

export const GetNotes = async () => {
  let response = await axios.get(
    "http://fundoonotes.incubation.bridgelabz.com/api/notes/getNotesList",
    confiObjforaddNotes
  );
  return response;
};

// export const ArchiveNotes = async (obj2) =>{
//     // console.log(obj2)
//     // console.log("hi")
//     let response = await axios.post("http://fundoonotes.incubation.bridgelabz.com/api/notes/archiveNotes",
//     obj2,
//     confiObjforaddNotes1
//     );
//     return response;
// }

export const ArchiveNotes = async (archiveobj) => {
  let response = await axios.post(
    "http://fundoonotes.incubation.bridgelabz.com/api/notes/archiveNotes",
    archiveobj,
    confiObjforaddNotes1
  );
  return response;
};

export const changeColorNote = async (data) => {
  let response = await axios.post(
    "http://fundoonotes.incubation.bridgelabz.com/api/notes/changesColorNotes",
    data,
    confiObjforaddNotes1
  );
  return response;
};

export const UpdateNotes = async (FormData) => {
  let response = await axios.post(
    "http://fundoonotes.incubation.bridgelabz.com/api/notes/updateNotes",
    FormData,
    confiObjforaddNotes
  );
  return response;
};

export const TrashNotes = async (obj3) => {
  // console.log("hitrash")
  let response = await axios.post(
    "http://fundoonotes.incubation.bridgelabz.com/api/notes/trashNotes",
    obj3,
    confiObjforaddNotes1
  );
  return response;
};

export const GetTrashNotes = async () => {
  let response = await axios.get(
    "http://fundoonotes.incubation.bridgelabz.com/api/notes/getTrashNotesList",
    confiObjforaddNotes1
  );
  return response;
};

export const GetArchivedNotes = async () => {
  let response = await axios.get(
    "http://fundoonotes.incubation.bridgelabz.com/api/notes/getArchiveNotesList",
    confiObjforaddNotes1
  );
  return response;
};
