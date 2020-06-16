import React from 'react'
import {SocialIcon} from 'react-social-icons';
import {IoIosMail} from 'react-icons/io'

const topBarStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  backgroundColor : '',
  fontFamily: 'Roboto ,sans-serif',
  display : 'flex',
  flexDirection: 'row',
  spaceBetween: '10px',
  color: 'black',
  boxShadow:'3px 8px #DDDDDD',
}

function toppart() {
    return (
        <div className='TopBar' style={topBarStyle}>
            <span style={
               {
                    textAlign:'center',
                    paddingLeft: '9%',
                    width:'11%',
                    paddingTop:'0.8%',
                    height:'parent'
                }
                //Edit subject and body here 
            } onClick={()=>{window.open('mailto:karundawadi00@gmaill.com?subject=subject&body=body')}}><IoIosMail size="3em"/></span>
            <h3 style={{
                textAlign:'center',
                paddingLeft: '15%',
                width:'15%',
            }}>
                Personal website
            </h3>
            <div style={{
                alignContent:'right',
                paddingLeft:'9%',
                width:'35%',
                height:'parent',
                paddingTop:'0.25%',
            }}>
                 <SocialIcon url="https://twitter.com/dawadikarun" />
                 <SocialIcon url="https://www.linkedin.com/in/karundawadi/" />
                 <SocialIcon url="https://github.com/karundawadi"/>
            </div>
        </div>
    )
}
export default toppart
