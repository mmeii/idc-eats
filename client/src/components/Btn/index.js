import React from 'react';
import Button from '@material-ui/core/Button';

function Btn(props) {
    return (
        <Button
            variant="contained"
            color="primary"
            onClick={props.onClick}
        >
            {props.label}
        </Button>
    );
}

export default Btn;