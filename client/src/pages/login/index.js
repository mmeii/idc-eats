import React from "react";
import { motion } from "framer-motion";

function Login() {
    const handleClick = (event) => {

    };
    return (

        <div>
            <motion.div
                animate={{ scale: 2 }}
                transition={{ duration: 0.5 }}
            />
            <img src="" alt="idc-eats logo" />
            <form>
                <input id="email" label="email" />
                <input id="password" label="password" />
                <button variant="contained" color="secondary" onClick={handleClick}>Login</button>
            </form>
            <h1>Login with Google</h1>
            <i class="fab fa-google" onClick={handleClick}></i>
        </div>
    )
}

export default Login;