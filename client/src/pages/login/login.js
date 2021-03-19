import React from "react";


function Login() {
    return (
        <div>
            <img src="" alt="idc-eats logo" />
            <form className={classes.root} noValidate autoComplete="off">
                <TextField id="email" label="email" />
                <TextField id="password" label="password" />
                <Button variant="contained" color="secondary">
                    Secondary
        </Button>
            </form>
            <h1>Login with Google</h1>
            <i class="fab fa-google"></i>
        </div>
    )
}

export default Login;