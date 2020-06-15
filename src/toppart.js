import React, { Component } from 'react';
import {AppBar, makeStyles} from '@material-ui/core'

class toppart extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             samaya : '',
        }
    }
    value = setInterval(() => {
        let today = new Date();
        let time = today.getHours() + ":" + today.getMinutes()+":"+today.getSeconds();
        this.setState(previousState=>({
            samaya : time,
        }))
    }, 1000);
    stylesDiv = {
        color :"red",
        backgroundColor : "pink",
        marginTop : "0%",
        borderTop: "0%",
        paddingTop:"0%",
        height: "10%",
    };
    userStyles = makeStyles({
        root:{
            background: 'red',
            border: 1,
        }
    })
    spanStyle = {
        paddingLeft : "40%",
    };
    render() {
        const classes = this.userStyles();
        return (
            <AppBar position="fixed" color="secondary" className={classes.root}>
            <div>
            <span> Karun Dawadi</span>
            <span style={this.spanStyle}>{this.state.samaya}</span>
            </div>
            </AppBar>
        )
    }
}

export default toppart
