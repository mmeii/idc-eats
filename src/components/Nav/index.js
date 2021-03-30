import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import MenuIcon from "@material-ui/icons/Menu";
import { motion } from "framer-motion";
import "./style.css";

export default function Nav() {
  const [isOpen, setIsOpen] = React.useState(false);

  const menu_variants = {
    open: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: -700 },
  };

  return (
    <div className="menu">
      <motion.div initial="hidden" animate={isOpen ? "open" : "hidden"}>
        <Button
          aria-controls="menu"
          aria-haspopup="true"
          onClick={() => setIsOpen(!isOpen)}
        >
          <MenuIcon id="navIcon" fontSize="large" />
        </Button>

        <motion.div className="menu" variants={menu_variants}>
          <ul>
            <li>
              <Link to="home">Home</Link>
            </li>
            <li></li>
            <li>
              {/* ADD in link to preferences/profile page */}
              <Link to="preferences">Preferences</Link>
            </li>
            <li></li>
            <li>
              <a href="/auth/logout">Logout</a>
            </li>
          </ul>
        </motion.div>
      </motion.div>
    </div>
  );
}