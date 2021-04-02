import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useReducedMotion } from "framer-motion";
import "./style.css";

//adding reduced motion for accessibilty

//let animate;
  //const shouldReduceMotion = useReducedMotion();
  //if (isOpen) {
    //animate = shouldReduceMotion ? { opacity: 1 } : { x: 0 }
  //} else {
    //animate = { rotate: 360 };
  //};
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
