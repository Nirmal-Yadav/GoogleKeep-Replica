import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { connect } from "react-redux";
import { ChangeToNote } from "./action";
import { ChangeToArchive } from "./action";
import { ChangeToTrash } from "./action";

const drawerWidth = 180;

const marginTop = 75;

const openedMixin = (theme) => ({
  width: drawerWidth,
  marginTop: marginTop,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  marginTop: marginTop,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),

  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});

// const DrawerHeader = styled('div')(({ theme }) => ({
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'flex-end',
//     padding: theme.spacing(0, 1),
//     // necessary for content to be below app bar
//     ...theme.mixins.toolbar,
// }));

// const AppBar = styled(MuiAppBar, {
//     shouldForwardProp: (prop) => prop !== 'open',
// })(({ theme, open }) => ({
//     zIndex: theme.zIndex.drawer + 1,
//     transition: theme.transitions.create(['width', 'margin'], {
//         easing: theme.transitions.easing.sharp,
//         duration: theme.transitions.duration.leavingScreen,
//     }),
//     ...(open && {
//         marginLeft: drawerWidth,
//         width: `calc(100% - ${drawerWidth}px)`,
//         transition: theme.transitions.create(['width', 'margin'], {
//             easing: theme.transitions.easing.sharp,
//             duration: theme.transitions.duration.enteringScreen,
//         }),
//     }),
// }));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

function MiniDrawer(props) {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    console.log(props.openDrawer);
    if (props.openDrawer === true) {
      setOpen(true);
    } else if (props.openDrawer === false) {
      setOpen(false);
    }
  }, [props.openDrawer]);

  const getArchiveList = () => {
    console.log("isArchive");
    props.ListentoArchiveList("isArchive");
    props.dispatch(ChangeToArchive());
  };
  const getDeletedList = () => {
    props.ListentoDeleteList("isDeleted");
    props.dispatch(ChangeToTrash());
  };
  const getAllNote = () => {
    props.ListentoNotesList("getNotes");
    props.dispatch(ChangeToNote());
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Drawer variant="permanent" open={open}>
        <List>
          <ListItem button>
            <ListItemIcon>
              <img
                src="https://img.icons8.com/material-outlined/24/000000/light.png"
                onClick={getAllNote}
                alt=""
              />
            </ListItemIcon>
            <ListItemText primary="Notes" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <img
                src="https://img.icons8.com/material-outlined/24/000000/filled-appointment-reminders.png"
                alt=""
              />
            </ListItemIcon>
            <ListItemText primary="Remainder" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <img
                src="https://img.icons8.com/windows/32/000000/ball-point-pen.png"
                alt=""
              />
            </ListItemIcon>
            <ListItemText primary="Edit labels" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <img
                src="https://img.icons8.com/ios-glyphs/30/000000/downloads.png"
                onClick={getArchiveList}
                alt=""
              />
            </ListItemIcon>
            <ListItemText primary="Archeive" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <img
                src="https://img.icons8.com/material-outlined/24/000000/delete-trash.png"
                onClick={getDeletedList}
                alt=""
              />
            </ListItemIcon>
            <ListItemText primary="Trash" />
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
}
export default connect()(MiniDrawer);
