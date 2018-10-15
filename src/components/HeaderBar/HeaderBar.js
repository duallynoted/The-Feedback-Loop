import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { withRouter } from "react-router";



const styles = {
    root: {
        flexGrow: 1,
        backgroundColor: "#335393",
        color:"#FFFFFF"
    },
    text: {
        color: "#FFFFFF",
    }
};

class HeaderBar extends Component {

handleHome =()=>{
    this.props.history.push('/start');
}    
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <AppBar position="static" color="default">
                    <Toolbar className={classes.root}>
                    <Typography className={classes.text}>
                        
                        </Typography>
                        <Typography variant="" className={classes.text}>
                            <Button onClick={this.handleHome}
                                    className={classes.text}
                                    color="default">Feedback</Button>
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

const headHome = withRouter(HeaderBar)

export default withStyles(styles)(headHome);