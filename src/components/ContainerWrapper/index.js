import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    root: {
        boxShadow:
            "0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)",
    },
});

export default function ContainerWrapper(props) {
    const classes = useStyles();

    return (
        <div
            align="center"
            justify="center"
        >
            <Container id="container" className={classes.root} maxWidth="sm">
                {props.children}
            </Container>
        </div>
    );
}
