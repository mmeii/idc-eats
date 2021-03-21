import React, { useState } from "react";
import axios from "axios";
import Motion from "../../components/Motion";
import { makeStyles } from "@material-ui/core/styles";
import Btn from "../../components/Btn";
import ContainerWrapper from "../../components/ContainerWrapper";
import "./style.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const credentials = { username, password };
    axios.post("/auth/signup", credentials);
    setUsername("");
    setPassword("");
  };

  return (
    <ContainerWrapper>
      <Motion />
      <form onSubmit={(event) => handleSubmit(event)}>
        <input
          id="username"
          label="username"
          value={username}
          onChange={({ target: { value } }) => setUsername(value)}
          placeholder="username"
        />
        <input
          id="password"
          label="password"
          value={password}
          onChange={({ target: { value } }) => setPassword(value)}
          placeholder="password"
        />
        <Btn type="submit" label="Login" id="loginbtn"></Btn>
        <p>Don't have an account? Make one!</p>
        <Btn label="Create Account" id="createbtn"></Btn>
      </form>
      <div id="googlelogin">
        <h1>Login with Google</h1>
        <a href="/auth/google">
          <i class="fab fa-google"></i>
        </a>
      </div>
    </ContainerWrapper>
  );
}

export default Login;
