import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(0),
        },
    },
}));

export default function ContainerWrapper(props) {
    const classes = useStyles();
    return (
        <div
            className={classes.root}
            align="center">
            <Container className="container" maxWidth="sm">
                {props.children}
            </Container>
        </div>
    );
}
