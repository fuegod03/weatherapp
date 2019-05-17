import React,{Component} from 'react'

class Footer extends Component {
  render () {
  return(
    <footer className="site-footer">
    				<div className="container">
    					<div className="row">
    						<div className="col-md-8">
    							<form action="#" className="subscribe-form">
    								<input type="text" placeholder="Enter your email to subscribe..."/>
    								<input type="submit" value="Subscribe"/>
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
  )
  }
}

export default Footer;
// <div className="socialMedia">
// <a href="https://www.google.com/">  <i className="fab fa-facebook-square"> </i> </a>
// <a href="https://www.google.com/"> <i className="fab fa-twitter"> </i> </a>
// <a href="https://www.google.com/"> <i className="fab fa-instagram"></i> </a>
// <a href="https://www.google.com/"> <i className="fab fa-linkedin"></i> </a>
// <a href="https://www.google.com/"> <i className="fab fa-youtube"></i> </a>
//  </div>
//
// <div className="info">
// <a href="https://www.google.com/"> Feedback </a>
// <a href="https://www.google.com/"> Careers </a>
// <a href="https://www.google.com/"> Download Apps </a>
// <a href="https://www.google.com/"> Press Room </a>
// <a href="https://www.google.com/"> Advertise With Us </a>
//  </div>
//
// <div className="rights">
// <a href="https://www.google.com/"> Terms of Use </a>
// <a href="https://www.google.com/"> Privacy </a>
// <a href="https://www.google.com/"> PolicyParental </a>
// <a href="https://www.google.com/"> ControlsAd </a>
// <a href="https://www.google.com/"> ChoicesAd </a>
// <a href="https://www.google.com/"> PartnersData </a>
//  </div>
//
// <div className="copyright"> <p> &#169; Copyright TWC Product and Technology LLC 2014, 2019 </p> </div>
