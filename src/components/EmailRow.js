import React from 'react';

import StarOutlineIcon from '@mui/icons-material/StarOutline';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import { Checkbox, IconButton } from '@mui/material';
// react-router-dom
import { useNavigate } from 'react-router-dom';

function EmailRow({ title, subject, description, time }) {
	const navigation = useNavigate();
	return (
		<div className='emailRow'>
			<div className='emailRow__options'>
				<Checkbox />
				<IconButton>
					<StarOutlineIcon />
				</IconButton>
				<IconButton>
					<LabelImportantIcon />
				</IconButton>
			</div>
			<div
				className='emailRow__content'
				onClick={() => navigation('/mail')}
			>
				<div className='emailRow__content--title'>{title}</div>
				<div className='emailRow__content--message'>{subject}</div>
			</div>
			<div className='emailRow__time'>{time}</div>
		</div>
	);
}

export default EmailRow;
