import React from 'react';
import Container from '@material-ui/core/Container';

export default function ContainerWrapper(props) {
    return (
        <Container className="container"
            maxWidth="sm"
        // alignItems="center"
        // justifyContent="center"
        // display="flex"
        // style={{ minHeight: '100vh' }}
        >

            {props.children}

        </Container>
    );
}
