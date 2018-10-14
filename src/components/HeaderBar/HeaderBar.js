import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const styles = {
    root: {
        flexGrow: 1,
        backgroundColor: "#353393",
    },
    text: {
        color: "#FFFFFF",
    }
};

class HeaderBar extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <AppBar position="static" color="default">
                    <Toolbar className={classes.root}>
                        <Typography variant="h6" className={classes.text}>
                            Feedback
          </Typography>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

HeaderBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HeaderBar);