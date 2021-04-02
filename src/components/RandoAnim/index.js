import React, { useEffect } from "react";
import { motion } from "framer-motion";
import "./style.css";


 
function RandoAnim() {
  
  return (
    <motion.div
      className="rando"
      animate={{ rotate: 360 }}
      transition={{ duration: 3, loop: Infinity, ease: "linear" }}
    />
  );
}

export default RandoAnim;
