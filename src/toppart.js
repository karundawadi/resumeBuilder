import React, { Component } from 'react'
import {AppBar, Card} from '@material-ui/core';
import styled from 'styled-components';

const HeadingLeft = styled.span`
    margin-left:1%;
    color : black;
    font-style: normal;
    font-weight:bold;
    color:#FF6347;
    font-family: 'Roboto', sans-serif;
    width: 50%;
    background-color: pink;

`;
const HeadingRight = styled.span`
    margin-left:90%;
    margin-right:1%;
    color : black;
    font-style: normal;
    font-weight:bold;
    color:#FF6347;
    font-family: 'Roboto', sans-serif;
    background-color: red;
    height: -50%;
`;
class toppart extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
             time : '10'
        }
    }
    
    render() {
        return (
            <div>
                <Card color="transparent" position="fixed">
                    <HeadingLeft> Karun Dawadi</HeadingLeft>
                </Card>
                <Card color="transparent" position="fixed">
                    <HeadingRight> Time Ola</HeadingRight>
                </Card>
            </div>
        )
    }
}

export default toppart
