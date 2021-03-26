import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MenuIcon from '@material-ui/icons/Menu';
import './style.css';

export default function SimpleMenu() {
	const [anchorEl, setAnchorEl] = React.useState(null);

	const handleClick = event => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<div className="nav">
			<Button
				aria-controls="simple-menu"
				aria-haspopup="true"
				onClick={handleClick}
			>
				<MenuIcon id="navIcon" fontSize="large" />
			</Button>

			{/* this is linked directly on the nav button menu dropdown 
			
			<a href="/auth/logout">Logout</a> */}

			<a href="/auth/google" id="loginlink"></a>


			<Menu
				id="simple-menu"
				anchorEl={anchorEl}
				keepMounted
				open={Boolean(anchorEl)}
				onClose={handleClose}
			>
				<MenuItem onClick={handleClose}>
					<Link to="eats">Eats</Link>
				</MenuItem>

				<MenuItem onClick={handleClose}>
					{/* ADD in link to preferences/profile page */}
					<Link to="preferences">Preferences</Link>
				</MenuItem>

				<MenuItem onClick={handleClose}>
					<a href="/auth/logout">Logout</a>
				</MenuItem>
			</Menu>

		</div>
	);
}
