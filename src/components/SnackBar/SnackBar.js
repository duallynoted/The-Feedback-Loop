import React from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import { withRouter } from "react-router";


class PositionedSnackbar extends React.Component {
    state = {
        open: false,
        vertical: 'top',
        horizontal: 'center',
    };

    handleClick = state => () => {
        this.setState({ open: true, ...state });
    };

    handleClose = () => {
        this.setState({ open: false });
    };
    handleAdminButton = (event) => {
        event.preventDefault();
        this.props.history.push('/admin');
    }

    render() {
        const { vertical, horizontal, open } = this.state;
        return (
            <div>
                <Button onClick={this.handleClick({ vertical: 'top', horizontal: 'center' })}>
                    Admin
        </Button>
                <Snackbar
                    anchorOrigin={{ vertical, horizontal }}
                    open={open}
                    onClose={this.handleClose}
                    ContentProps={{
                        'aria-describedby': 'message-id',
                    }}
                    message={<span id="message-id">This feature is for employees only.
                    <Button onClick={this.handleAdminButton}
                            color="primary">Admin</Button></span>}
                />
            </div>
        );
    }
}

export default withRouter(PositionedSnackbar);