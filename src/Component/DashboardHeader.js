import React from "react";
import "../CSS/DashboardHeader.css";
import Keep from "../assests/dashboardheader/Keep.png";
import Menu from "../assests/dashboardheader/Menu.png";
import Search from "../assests/dashboardheader/search.png";
import Refresh from "../assests/dashboardheader/refresh1.png";
import Gridview from "../assests/dashboardheader/Gridview.png";
import Apps from "../assests/dashboardheader/appsview.png";
import Setting from "../assests/dashboardheader/setting.png";
import Profile from "../assests/dashboardheader/profile.png";
import { connect } from "react-redux";

function DashboardHeader(props) {
  const switchOpen = (event) => {
    event.preventDefault();
    props.changeDrawer(true);
  };

  return (
    <div className="dashboardheader1-main">
      <nav className="header1-icons">
        <a className="menu1" href=" ">
          {" "}
          <img className="menu1-img" src={Menu} onClick={switchOpen} alt="" />
        </a>
        <a className="keep1" href=" ">
          <img className="keep1-img" src={Keep} alt="" />
        </a>
        <span className="keep2-main">
          <a className="keep2" href=" ">
            {props.changeTitle}
          </a>
        </span>
        <div className="search1">
          <div className="search1-contain">
            <a className="search12" href=" ">
              <img className="search1-img" src={Search} alt="" />
            </a>
            <input
              class="gb_8e"
              aria-label="Search"
              autocomplete="off"
              placeholder="Search"
              role="combobox"
              value=""
              name="q"
              type="text"
              aria-hidden="false"
            ></input>
          </div>
        </div>
        <a className="refresh1" href=" ">
          {" "}
          <img className="refresh1-img" src={Refresh} alt="" />
        </a>
        <a className="gridview1" href=" ">
          <img className="gridview1-img" src={Gridview} alt="" />
        </a>
        <a className="setting1" href=" ">
          <img className="setting1-img" src={Setting} alt="" />
        </a>
        <a className="apps1" href=" ">
          <img className="apps1-img" src={Apps} alt="" />
        </a>
        <a className="profile1" href=" ">
          <img className="profile1-img" src={Profile} alt="" />
        </a>
      </nav>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    changeTitle: state.drawerReducer.title,
  };
};

export default connect(mapStateToProps)(DashboardHeader);
