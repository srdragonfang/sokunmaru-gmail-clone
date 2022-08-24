import React from 'react';
import { IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MoveToInboxIcon from '@mui/icons-material/MoveToInbox';
import ErrorIcon from '@mui/icons-material/Error';
import DeleteIcon from '@mui/icons-material/Delete';
import EmailIcon from '@mui/icons-material/Email';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
import PrintIcon from '@mui/icons-material/Print';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

import { useNavigate } from 'react-router-dom';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
function Mail() {
	const navigate = useNavigate();

	return (
		<div className='email'>
			<div className='email__tools'>
				<div className='email__tools--left'>
					<IconButton onClick={() => navigate('/')}>
						<ArrowBackIcon />
					</IconButton>
					<IconButton>
						<MoveToInboxIcon />
					</IconButton>
					<IconButton>
						<ErrorIcon />
					</IconButton>
					<IconButton>
						<DeleteIcon />
					</IconButton>
					<IconButton>
						<EmailIcon />
					</IconButton>
				</div>
				<div className='email__tools--right'>
					<IconButton>
						<UnfoldMoreIcon />
					</IconButton>
					<IconButton>
						<PrintIcon />
					</IconButton>
					<IconButton>
						<ExitToAppIcon />
					</IconButton>
				</div>
			</div>
			<div className='email__body'>
				<div className='email__body--header'>
					<h4>Subject</h4>
					<LabelImportantIcon className='email__important' />
					<p>Title</p>
					<p>10pm</p>
				</div>
				<div className='email__body--message'></div>
			</div>
		</div>
	);
}

export default Mail;
