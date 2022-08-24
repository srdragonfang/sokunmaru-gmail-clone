import React from 'react';
import { Avatar, IconButton } from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import SettingsIcon from '@mui/icons-material/Settings';
import AppsIcon from '@mui/icons-material/Apps';
import HelpIcon from '@mui/icons-material/Help';
import TuneIcon from '@mui/icons-material/Tune';
function Header() {
	return (
		<div className='header'>
			<div className='header__left'>
				<IconButton>
					<MenuIcon size={27} />
				</IconButton>
				<div className='header__left--logo'>
					<div className='logo__image'>
						<img
							src='https://mailmeteor.com/logos/assets/PNG/Gmail_Logo_256px.png'
							alt='img__logo'
						/>
					</div>
					<div className='logo__title'>Gmail</div>
				</div>
			</div>
			<div className='header__middle'>
				<div className='header__middle--searchbox'>
					<IconButton>
						<SearchIcon size={20} />
					</IconButton>
					<input type='search' placeholder='seaching...' />
					<IconButton>
						<TuneIcon size={20} />
					</IconButton>
				</div>
			</div>
			<div className='header__right'>
				<IconButton>
					<HelpIcon size={27} />
				</IconButton>
				<IconButton>
					<SettingsIcon size={27}/>
				</IconButton>
				<IconButton>
					<AppsIcon size={27}/>
				</IconButton>
				<Avatar />
			</div>
		</div>
	);
}

export default Header;
