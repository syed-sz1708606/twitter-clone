import React from "react";
import SidebarOption from "./SidebarOption";
import "./Sidebar.css";

import TwitterIcon from "@mui/icons-material/Twitter";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MailIcon from "@mui/icons-material/Mail";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import ListIcon from "@mui/icons-material/List";
import PersonIcon from "@mui/icons-material/Person";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Button } from '@mui/material';

function Sidebar() {
  return (
    <div className="sidebar">
      <TwitterIcon className="sidebar__twitter-icon"/>
      <SidebarOption  active text="Home" Icon={HomeIcon} />
      <SidebarOption text="Explore" Icon={SearchIcon} />
      <SidebarOption text="Notifications" Icon={NotificationsIcon} />
      <SidebarOption text="Messages" Icon={MailIcon} />
      <SidebarOption text="Bookmarks" Icon={BookmarkIcon} />
      <SidebarOption text="Lists" Icon={ListIcon} />
      <SidebarOption text="Profile" Icon={PersonIcon} />
      <SidebarOption text="More" Icon={MoreHorizIcon} />

      <Button variant="outlined" className="sidebar__tweet" fullWidth>Tweet</Button>
    </div>
  );
}

export default Sidebar;
