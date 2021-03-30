import React from 'react';
import Container from '@material-ui/core/Container';

export default function ContainerWrapper(props) {
    return (
        <div
            align="center"
            justify="center"
        >
            <Container className="container" maxWidth="sm">
                {props.children}
            </Container>
        </div>
    );
}
