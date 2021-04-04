import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#4E9DA6",
        },
    },
});

const Chkbox = ({ category }) => {

    return (
        <ThemeProvider theme={theme}>
            <div className="checkbox">
                <Checkbox
                    color="primary"
                    type="checkbox"
                    aria-label="checkbox"
                    id={category.displayName}
                    name={category.displayName}
                    value={category.categoryId}
                    defaultChecked={category.selected}
                />
                <label htmlFor={category.displayName}>{category.displayName}</label>
            </div>
        </ThemeProvider>
    );
}

export default Chkbox;
