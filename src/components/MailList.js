import { Checkbox, IconButton } from '@mui/material';
import React from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import RedoIcon from '@mui/icons-material/Redo';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import KeyboardHideIcon from '@mui/icons-material/KeyboardHide';
import SettingsIcon from '@mui/icons-material/Settings';
import Section from './Section';
import InboxIcon from '@mui/icons-material/Inbox';
import PeopleIcon from '@mui/icons-material/People';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import EmailRow from './EmailRow';

function MailList() {
	return (
		<div className='emailList'>
			<div className='emailList__settings'>
				<div className='emailList__settings--left'>
					<Checkbox />
					<IconButton>
						<ArrowDropDownIcon />
					</IconButton>
					<IconButton>
						<RedoIcon />
					</IconButton>
					<IconButton>
						<MoreVertIcon />
					</IconButton>
				</div>
				<div className='emailList__settings--right'>
					<IconButton>
						<ChevronLeftIcon />
					</IconButton>
					<IconButton>
						<ChevronRightIcon />
					</IconButton>
					<IconButton>
						<KeyboardHideIcon />
					</IconButton>
					<IconButton>
						<SettingsIcon />
					</IconButton>
				</div>
			</div>
			<div className='emailList__sections'>
				<Section
					Icon={InboxIcon}
					title='Primary'
					color='red'
					selected
				/>
				<Section Icon={PeopleIcon} title='Social' color='green' />
				<Section
					Icon={LocalOfferIcon}
					title='Promotion'
					color='yellow'
				/>
			</div>
			<div className='emailList__list'>
				<EmailRow
					title='Sokunmaru'
					subject='Hello S.R Dragonfang'
					desciption='This is a mail test'
					time='15:30'
				/>
				<EmailRow
					title='Sokunmaru'
					subject='Hello S.R Dragonfang'
					desciption='This is a mail test'
					time='15:30'
				/>
			</div>
		</div>
	);
}

export default MailList;
