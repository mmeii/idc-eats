import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import RestaurantMenuIcon from "@material-ui/icons/RestaurantMenu";

export default function SimpleMenu() {
	const [anchorEl, setAnchorEl] = React.useState(null);

	const handleClick = event => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<div>
			<Button
				aria-controls="simple-menu"
				aria-haspopup="true"
				onClick={handleClick}
			>
				<RestaurantMenuIcon />
			</Button>
			<a href="/auth/logout">Logout</a>
			<Menu
				id="simple-menu"
				anchorEl={anchorEl}
				keepMounted
				open={Boolean(anchorEl)}
				onClose={handleClose}
			>
				<MenuItem onClick={handleClose}>
					{/* ADD in link to random foods/search page */}
					<Link to="eats">Eats</Link>
				</MenuItem>

				<MenuItem onClick={handleClose}>
					{/* ADD in link to preferences/profile page */}
					<Link to="preferences">Preferences</Link>
				</MenuItem>

				<MenuItem onClick={handleClose}>
					{/* ADD in link to logout page */}
					<Link to="logout">Logout</Link>
				</MenuItem>
			</Menu>
		</div>
	);
}
