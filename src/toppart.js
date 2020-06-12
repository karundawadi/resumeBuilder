import React, { Component } from 'react'
import {AppBar, Grid, makeStyles} from '@material-ui/core';
import styled from 'styled-components';
import axios from 'axios';
const AppBarTerm = styled.h1``;

class toppart extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
             time : [],
        }
    }
    componentDidMount(){
        axios.get('http://worldtimeapi.org/api/timezone/America/Chicago').then(res => {
            this.setState({
                time : res.data});
        });
    }
    render() {
        return (
        <AppBar color='secondary'>
            <Grid container spacing={10}>
                <Grid item xs={6}>
                    <h1>Karun Dawadi</h1>
                </Grid>
                <Grid item xs={6}>
                    <h1>Ola</h1>
                </Grid>
            </Grid>
        </AppBar>       
        )
    }
}

export default toppart
