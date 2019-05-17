import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import SimpleMap from './googleMap/GoogleMap.js'

class Contact extends Component {

  render () {
    return(
    <div className="site-content">
    			<div className="site-header">
    				<div className="container">
              <a  className="branding">
                <Link to="/">
                <img src="images/logo.png" alt="logo" className="logo" />
                <div className="logo-type">
                  <h1 className="site-title">Joses Weather</h1>
                  <small className="site-description">Current wheater</small>
                </div>
                </Link>
              </a>

              <div className="main-navigation">
                <button type="button" className="menu-toggle"><i className="fa fa-bars"></i></button>
                <ul className="menu">
                  <li className="menu-item"><Link to="/"> Home </Link></li>
                  <li className="menu-item "><Link to="/news"> News </Link></li>
                  <li className="menu-item current-menu-item"><Link to="/contact"> contact </Link></li>
                </ul>
              </div>

    					<div className="mobile-navigation"></div>

    				</div>
    			</div>

    			<main className="main-content">
    				<div className="container">
    					<div className="breadcrumb">
    						<a href="index.html">Home</a>
    						<span>Contact</span>
    					</div>
    				</div>

    				<div className="fullwidth-block">
    					<div className="container">
    						<div className="col-md-5">
    							<div className="contact-details">
    								<SimpleMap />
    								<div className="contact-info">
    									<address>
    										<img src="images/icon-marker.png" alt="icon" />
    										<p> Big Company <br />
    										2803 Victory Street,Linden , New Jersey</p>
    									</address>

    									<a href="#"><img src="images/icon-phone.png" alt="phone" />+1 800 314 235</a>
    									<a href="#"><img src="images/icon-envelope.png" alt="envelope" />contact@companyname.com</a>
    								</div>
    							</div>
    						</div>
    						<div className="col-md-6 col-md-offset-1">
    							<h2 className="section-title">Contact us</h2>
    							<p>Jose's Weather is committed to delivering the most reliable, accurate weather information possible.</p>
    							<form action="#" className="contact-form">
    								<div className="row">
    									<div className="col-md-6"><input type="text" placeholder="Your name..." /></div>
    									<div className="col-md-6"><input type="text" placeholder="Email Addresss..." /></div>
    								</div>
    								<div className="row">
    									<div className="col-md-6"><input type="text" placeholder="Company name..." /></div>
    									<div className="col-md-6"><input type="text" placeholder="Website..." /></div>
    								</div>
    								<textarea name="" placeholder="Message..."></textarea>
    								<div className="text-right">
    									<input type="submit" placeholder="Send message" />
    								</div>
    							</form>

    						</div>
    					</div>
    				</div>

    			</main>

          <footer className="site-footer">
            <div className="container">
              <div className="row">
                <div className="col-md-8">
                  <form action="#" className="subscribe-form">
                    <input type="text" placeholder="Enter your email to subscribe..." />
                    <input type="submit" value="Subscribe" />
                  </form>
                </div>
                <div className="col-md-3 col-md-offset-1">
                  <div className="social-links">
                    <a href="#"><i className="fab fa-facebook-square"></i></a>
                    <a href="#"><i className="fab fa-twitter"> </i></a>
                    <a href="#"><i className="fab fa-linkedin"></i></a>
                    <a href="#"><i className="fab fa-youtube"></i></a>
                  </div>
                </div>
              </div>

              <p className="colophon">Copyright 2014 Company name. Designed by Themezy. All rights reserved</p>
            </div>
          </footer>
    		</div>
      )
  }
}

export default Contact;
