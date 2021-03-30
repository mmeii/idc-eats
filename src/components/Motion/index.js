import React from "react";
import { motion } from "framer-motion";
import "./style.css";

const Motion = () => {
  return (
    <motion.div
      className="square"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 2.1 }}
    />
  );
};

export default Motion;
