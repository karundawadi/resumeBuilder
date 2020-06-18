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
  spaceBetween: '1em',
  color: 'black',
  boxShadow:'0.0em 0.5em #DDDDDD',
}

function toppart(props) {
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
            } onClick={()=>{window.open(`mailto:${props.userDetailsTransferred.mailingEmail}?subject=Hire Me&body=Please Hire Me`)}}><IoIosMail size="3em"/></span>
            <h2 style={{
                textAlign:'center',
                paddingLeft: '15%',
                width:'20%',
            }}>
                {props.userDetailsTransferred.firstName}
            </h2>
            <div style={{
                alignContent:'right',
                paddingLeft:'15%',
                width:'35%',
                height:'parent',
                paddingTop:'0.5%',
                paddingBottom:'0.5%',
            }}>
                 <SocialIcon url={`${props.userDetailsTransferred.twitterUrl}`} />
                 <SocialIcon url={`${props.userDetailsTransferred.linkdinUrl}`} />
                 <SocialIcon url={`${props.userDetailsTransferred.githubUrl}`}/>
            </div>
        </div>
    )
}
export default toppart
