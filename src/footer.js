import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import facbook from './download.png'
import twitter from './twitter-logo.jpg'
import watsapp from './social-01-512.png'
import instagram from './1200x630wa.png'
export default class Footer extends Component {
    render(){
        return (
            
        <div className="main-div-footer">
          <center>
           <a href="https://www.facebook.com/"><img className="footer-logo" src= {facbook}></img></a>
           <a href="https://www.instagram.com/accounts/login/?hl=en"><img className="footer-logo" src= {instagram}></img></a>
           <a href="https://twitter.com/login"><img className="footer-logo"src= {twitter}></img></a>
           <a href="https://www.whatsapp.com/"><img className="footer-logo"src= {watsapp}></img></a>
           <h2> All CopyRight@ 2018-2019.STL Algo.. Team</h2>
           <h3>TERMS&CONDITION | PRIVACY</h3>
        </center>
        </div>
        )
    }
}