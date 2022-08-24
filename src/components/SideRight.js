import React from "react";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import {IconButton}  from "@mui/material";

const SideRight = () => {
  return (
    <div className="SideRight">
      <div className="SideRight-options">
        <IconButton>
          <CalendarMonthIcon size={20} />
        </IconButton>
        <IconButton>
          <NoteAddIcon size={20} />
        </IconButton>
        <IconButton>
          <CheckCircleOutlineIcon size={20} />
        </IconButton>
        <IconButton>
          <PermContactCalendarIcon size={20} />
        </IconButton>
      </div>
      <IconButton>
        <AddCircleOutlineIcon size={20} />
      </IconButton>
      <IconButton>
        <ArrowForwardIcon size={20} />
      </IconButton>
    </div>
  );
};

export default SideRight;
