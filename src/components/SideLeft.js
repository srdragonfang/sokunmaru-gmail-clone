import React from "react";
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import SendIcon from '@mui/icons-material/Send';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import DeleteIcon from '@mui/icons-material/Delete';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import DraftsIcon from '@mui/icons-material/Drafts';
import ScheduleSendIcon from '@mui/icons-material/ScheduleSend';
import CancelScheduleSendIcon from '@mui/icons-material/CancelScheduleSend';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import InboxIcon from '@mui/icons-material/Inbox';


import { Button, IconButton } from "@mui/material";

import SidebarOption from "./SidebarOption";
const SideLeft = () => {
  return (
    <div className="SideLeft">
      <div className="SideLeft-center">
        <Button
          className="option-item"
          startIcon={<AddCircleOutlineIcon className="react-icons" size={20} />}
        >
          Compose
        </Button>
        <div className="option-list">
          <SidebarOption
            icon={<InboxIcon className="react-icons selected" size={20} />}
            title="Inbox"
            number={54}
            selected={true}
          />
          <SidebarOption
            icon={<StarOutlineIcon className="react-icons" size={20} />}
            title="Starred"
            number={54}
          />
          <SidebarOption
            icon={<AccessAlarmIcon className="react-icons" size={20} />}
            title="Snoozed"
            number={54}
          />
          <SidebarOption
            icon={<LabelImportantIcon className="react-icons" size={20} />}
            title="Important"
            number={54}
          />
          <SidebarOption
            icon={<SendIcon className="react-icons" size={20} />}
            title="Sent"
            number={54}
          />
          <SidebarOption
            icon={<ScheduleSendIcon className="react-icons" size={20} />}
            title="Schedule"
            number={54}
          />
          <SidebarOption
            icon={<CancelScheduleSendIcon className="react-icons" size={20} />}
            title="Drafts"
            number={54}
          />
          <SidebarOption
            icon={<DraftsIcon className="react-icons" size={20} />}
            title="Spam"
            number={54}
          />
          <SidebarOption
            icon={<DeleteIcon className="react-icons" size={20} />}
            title="Trash"
            number={54}
          />
        </div>
      </div>
      <div className="SideLeft-bottom">
        <div className="meet">
          <h3>Meet</h3>
          <div className="meet-item">
            <CameraAltIcon className="react-icons mg-ri-10" size={20} />
            <h4>New Meeting</h4>
          </div>
          <div className="meet-item">
            <KeyboardIcon className="react-icons mg-ri-10" size={20} />
            <h4>Join Meet</h4>
          </div>
        </div>
        <div className="hangout">
          <h3>Hangouts</h3>
          <button>Log In</button>
        </div>
        <div className="contact">
          <IconButton>
            <PersonIcon className="react-icons" size={20} />
          </IconButton>
          <IconButton>
            <EmailIcon className="react-icons" size={20} />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default SideLeft;
