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
    <div className="wholenav">
      <div className="idclogo">
        <Link
          to="home"
          onClick={() => {
            window.location.href = "/home";
          }}
          className="start-over"
          aria-label="go back"
        ><i class="fas fa-angle-double-left" id="goback" style={{paddingTop: 0}}></i></Link>
      </div>
      <div className="menu">
        <motion.div initial="hidden" animate={isOpen ? "open" : "hidden"}>
          <Button
            aria-controls="menu"
            aria-haspopup="true"
            aria-label="menu"
            onClick={() => setIsOpen(!isOpen)}
          >
            <MenuIcon id="navIcon" fontSize="large" />
          </Button>
          <motion.div className="menu" variants={menu_variants}>
            <ul>
              <li>
                <Link
                  to="home"
                  onClick={() => {
                    window.location.href = "/home";
                  }}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="preferences"
                  onClick={() => {
                    window.location.href = "/preferences";
                  }}
                >
                  Preferences
                </Link>
              </li>
              <li>
                <a
                  href="/auth/logout"
                  onClick={() => {
                    window.location.href = "/logout";
                  }}
                >
                  Logout
                </a>
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
