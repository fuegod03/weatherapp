import React,{Component} from 'react';
import {Link} from 'react-router-dom'

class Header  extends Component {

  constructor(){
    super()
    this.state={
    inputField:''
    }
    this.openDrawerMenu= this.openDrawerMenu.bind(this)
    this.currentWeatherIcon=this.currentWeatherIcon.bind(this)
  }



  openDrawerMenu(){
  var x = document.getElementById("mainNavBar");
  if (x.className === "navBar"){
    x.className += " responsive";
  } else {
    x.className = "navBar";
  }
}

currentWeatherIcon(state) {
if(this.props.todayInfo){
  switch (state) {
    // Sunny
    case 1000:
     return "https://image.flaticon.com/icons/svg/1591/1591794.svg";
      break;

    // Cloudy
      case 1003: return "https://image.flaticon.com/icons/svg/1146/1146879.svg";
      case 1006: return "https://image.flaticon.com/icons/svg/1146/1146879.svg";
      case 1009: return "https://image.flaticon.com/icons/svg/1146/1146879.svg";
      case 1030: return "https://image.flaticon.com/icons/svg/1146/1146879.svg";
      break;
      // Rain
      case 1063: return "https://image.flaticon.com/icons/svg/641/641978.svg";
      case 1069: return "https://image.flaticon.com/icons/svg/641/641978.svg";
      case 1072: return "https://image.flaticon.com/icons/svg/641/641978.svg";
      case 1087: return "https://image.flaticon.com/icons/svg/641/641978.svg";
      case 1150: return "https://image.flaticon.com/icons/svg/641/641978.svg";
      case 1153: return "https://image.flaticon.com/icons/svg/641/641978.svg";
      case 1168: return "https://image.flaticon.com/icons/svg/641/641978.svg";
      case 1171: return "https://image.flaticon.com/icons/svg/641/641978.svg";
      case 1180: return "https://image.flaticon.com/icons/svg/641/641978.svg";
      case 1183: return "https://image.flaticon.com/icons/svg/641/641978.svg";
      case 1186: return "https://image.flaticon.com/icons/svg/641/641978.svg";
      case 1189: return "https://image.flaticon.com/icons/svg/641/641978.svg";
      case 1192: return "https://image.flaticon.com/icons/svg/641/641978.svg";
      case 1195: return "https://image.flaticon.com/icons/svg/641/641978.svg";
      case 1198: return "https://image.flaticon.com/icons/svg/641/641978.svg";
      case 1201: return "https://image.flaticon.com/icons/svg/641/641978.svg";
      case 1204: return "https://image.flaticon.com/icons/svg/641/641978.svg";
      case 1207: return "https://image.flaticon.com/icons/svg/641/641978.svg";
      case 1240: return "https://image.flaticon.com/icons/svg/641/641978.svg";
      case 1243: return "https://image.flaticon.com/icons/svg/641/641978.svg";
      case 1246: return "https://image.flaticon.com/icons/svg/641/641978.svg";
      case 1249: return "https://image.flaticon.com/icons/svg/641/641978.svg";
      case 1252: return "https://image.flaticon.com/icons/svg/641/641978.svg";
      case 1273: return "https://image.flaticon.com/icons/svg/641/641978.svg";
      case 1276: return "https://image.flaticon.com/icons/svg/641/641978.svg";
      case 1261: return "https://image.flaticon.com/icons/svg/641/641978.svg";
      case 1264: return "https://image.flaticon.com/icons/svg/641/641978.svg";
      break;

      // Snow
      case 1255: return "https://image.flaticon.com/icons/svg/661/661342.svg";
      case 1258: return "https://image.flaticon.com/icons/svg/661/661342.svg";
      case 1066: return "https://image.flaticon.com/icons/svg/661/661342.svg";
      case 1114: return "https://image.flaticon.com/icons/svg/661/661342.svg";
      case 1117: return "https://image.flaticon.com/icons/svg/661/661342.svg";
      case 1210: return "https://image.flaticon.com/icons/svg/661/661342.svg";
      case 1213: return "https://image.flaticon.com/icons/svg/661/661342.svg";
      case 1216: return "https://image.flaticon.com/icons/svg/661/661342.svg";
      case 1219: return "https://image.flaticon.com/icons/svg/661/661342.svg";
      case 1222: return "https://image.flaticon.com/icons/svg/661/661342.svg";
      case 1225: return "https://image.flaticon.com/icons/svg/661/661342.svg";
      case 1237: return "https://image.flaticon.com/icons/svg/661/661342.svg";
      case 1279: return "https://image.flaticon.com/icons/svg/661/661342.svg";
      case 1282: return "https://image.flaticon.com/icons/svg/661/661342.svg";
      break;
      default: return "https://image.flaticon.com/icons/svg/861/861059.svg";
      break;
  }
}else{
  return "https://image.flaticon.com/icons/svg/861/861059.svg"
}
}

submitHandler(evt) {
  evt.preventDefault();
  // pass the input field value to the event handler passed
  // as a prop by the parent (App)
  this.props.handlerFromHead(this.state.inputField);

  this.setState({
    inputField: ''
  });
}

handleChange(event) {
  this.setState({
    inputField: event.target.value
  });
}


  render (props) {
return(

  <div className="navBar" id="mainNavBar">

    			<div className="site-header">
    				<div className="container">
              <a  className="branding">
                <Link to="/home">
                <img src="images/logo.png" alto="algo" className="logo" />
                <div className="logo-type">
                  <h1 className="site-title">Joses Weather</h1>
                  <small className="site-description">Current wheater</small>
                </div>
                </Link>
              </a>

    					<div className="main-navigation">
    						<button type="button" className="menu-toggle"><i className="fa fa-bars"></i></button>
    						<ul className="menu">
    							<li className="menu-item current-menu-item"><Link to="/home"> Home </Link></li>
    							<li className="menu-item"><Link to="/news"> News </Link></li>
                  <li className="menu-item "><Link to="/contact"> contact </Link></li>
    						</ul>
    					</div>

    					<div className="mobile-navigation"></div>

    				</div>
    			</div>


  </div>
)
  }
}

export default Header;


//   <div className="top-nav ">
//   <div href="#service" className="headItem"> <img className="topNavImg" src="" alto="algo"/> </div>
//     <div href="#home" className="headItem">
//     <form onSubmit={this.submitHandler}>
//       <i className="fas fa-search-location"></i>
//      <input className="input"
//             value={this.state.inputField}
//             type="text"
//             name="search"
//             placeholder="Search by City"
//              onChange={this.handleChange}
//       />
//     <input type="submit" className="button-2"/>
//        </form>
//   </div>
//     <div href="https://www.google.com/" className="icon" onClick={this.openDrawerMenu}>&#9776;</div>
//   </div>
//
//   <div className="middleNav middleItem">
//    <p> <a href="https://www.google.com/"> <img src={this.props.todayInfo ? this.currentWeatherIcon(this.props.currentIcon) : this.props.loading} alt="weatherImg" height="30px" />  {this.props.todayInfo ? this.props.todayInfo.location.name : this.props.loading}, {this.props.todayInfo ? this.props.todayInfo.location.region : this.props.loading} </a>
//
//
//     </p>
//
//   </div>
//
//   <div className="bottomNav">
//
// <Link to="/about" className="bottomItem"> Link 1</Link>
// <Link to="/about" className="bottomItem"> Link 2</Link>
// <Link to="/about" className="bottomItem"> Link 3</Link>
//   <div className="dropdown bottomItem">
//     <button className="dropbtn">More</button>
//     <div className="dropdown-content">
//       <a href="https://www.google.com/">Link 1</a>
//       <a href="https://www.google.com/">Link 2</a>
//       <a href="https://www.google.com/">Link 3</a>
//     </div>
//   </div>
// </div>
