import React,{Component} from 'react'
import News from './news/News.js'
import axios from 'axios'
import * as moment from 'moment'
import Search from './Autocomplete.js'
import Suggestions from './Suggestion'

class Today  extends Component {

  constructor(props) {
      super(props)
      this.state = {
        inputField:'',
        count:1
      }

this.currentWeatherIcon=this.currentWeatherIcon.bind(this)
this.getNextDays=this.getNextDays.bind(this)
this.handleChange = this.handleChange.bind(this)
this.submitHandler = this.submitHandler.bind(this)
this.keyMaker=this.keyMaker.bind(this)
  }


  submitHandler(event) {
    event.preventDefault();
    // pass the input field value to the event handler passed
    // as a prop by the parent (App)
    this.props.handlerFromHead(this.state.inputField);

    this.setState({
      inputField: ''
    });
  }

  keyMaker(){
    this.setState({
      count:this.state.count+1
    });
return this.state.count
  }

  handleChange(event) {
    fetch("http://api.apixu.com/v1/search.json?key=82fe923258fa4530a5e235322192604&q=" + event.target.value).then((res) => res.json())
    .then((info) => this.setState({
        results:info.map(r => <p className="options" key={this.keyMaker()}> {r.name} </p> )
    }))
        .catch((err) => console.log(err.message));


    this.setState({
      inputField: event.target.value
    });
  }

getNextDays(number){
  let before = moment().isoWeekday();
    let nextDay= before + number;
    let now = moment().day(nextDay).format("dddd");
   return now
}

  currentWeatherIcon(state) {
  if(this.props.todayInfo){
    switch (state) {
      // Sunny
      case 1000:
       return "images/icons/icon-1.svg"
        break;

      // Cloudy
        case 1003: return "images/icons/icon-3.svg";
        case 1006: return "images/icons/icon-3.svg";
        case 1009: return "images/icons/icon-3.svg";
        case 1030: return "images/icons/icon-3.svg";
        break;

        // Rain
        case 1063: return "images/icons/icon-12.svg";
        case 1069: return "images/icons/icon-12.svg";
        case 1072: return "images/icons/icon-12.svg";
        case 1087: return "images/icons/icon-12.svg";
        case 1150: return "images/icons/icon-12.svg";
        case 1153: return "images/icons/icon-12.svg";
        case 1168: return "images/icons/icon-12.svg";
        case 1171: return "images/icons/icon-12.svg";
        case 1180: return "images/icons/icon-12.svg";
        case 1183: return "images/icons/icon-12.svg";
        case 1186: return "images/icons/icon-12.svg";
        case 1189: return "images/icons/icon-12.svg";
        case 1192: return "images/icons/icon-12.svg";
        case 1195: return "images/icons/icon-12.svg";
        case 1198: return "images/icons/icon-12.svg";
        case 1201: return "images/icons/icon-12.svg";
        case 1204: return "images/icons/icon-12.svg";
        case 1207: return "images/icons/icon-12.svg";
        case 1240: return "images/icons/icon-12.svg";
        case 1243: return "images/icons/icon-12.svg";
        case 1246: return "images/icons/icon-12.svg";
        case 1249: return "images/icons/icon-12.svg";
        case 1252: return "images/icons/icon-12.svg";
        case 1273: return "images/icons/icon-12.svg";
        case 1276: return "images/icons/icon-12.svg";
        case 1261: return "images/icons/icon-12.svg";
        case 1264: return "images/icons/icon-12.svg";
        break;

        // Snow
        case 1255: return "images/icons/icon-14.svg"
        case 1258: return "images/icons/icon-14.svg"
        case 1066: return "images/icons/icon-14.svg"
        case 1114: return "images/icons/icon-14.svg"
        case 1117: return "images/icons/icon-14.svg"
        case 1210: return "images/icons/icon-14.svg"
        case 1213: return "images/icons/icon-14.svg"
        case 1216: return "images/icons/icon-14.svg"
        case 1219: return "images/icons/icon-14.svg"
        case 1222: return "images/icons/icon-14.svg"
        case 1225: return "images/icons/icon-14.svg"
        case 1237: return "images/icons/icon-14.svg"
        case 1279: return "images/icons/icon-14.svg"
        case 1282: return "images/icons/icon-14.svg"
        break;
        default: return "images/icons/icon-3.svg"
        break;
    }
  }else{
    return "https://image.flaticon.com/icons/svg/861/861059.svg"
  }
  }



  render (props) {
   return(

   <div  >
     <div className="hero" data-bg-image={require("./images/banner.png")} >
     				<div className="container" >
     					<form action="#" className="find-location" onSubmit={this.submitHandler}>
     						<input type="text" placeholder="Cities around the world... New York, USA...Lima, Peru" value={this.state.inputField}  onChange={this.handleChange}/>
     						<input type="submit" value="Find" />
  <div className="optionsContainer">{ this.state.inputField.length <=1 ? this.state.results : null}</div>
     					</form>
     				</div>
     			</div>
     			<div className="forecast-table">
     				<div className="container">
     					<div className="forecast-container">
     						<div className="today forecast">
     							<div className="forecast-header">
     								<div className="day">{this.getNextDays(0)}</div>
     								<div className="date">Next 6 Days</div>
     							</div>
     							<div className="forecast-content">
     								<div className="location">{this.props.todayInfo ? this.props.todayInfo.location.name : this.props.loading}, {this.props.todayInfo ? this.props.todayInfo.location.region : this.props.loading}, {this.props.todayInfo ? this.props.todayInfo.location.country : this.props.loading}</div>
     								<div className="degree">
     									<div className="num">{this.props.todayInfo ? this.props.todayInfo.current.temp_f : this.props.loading}&#176; F</div>
     									<div className="forecast-icon">
     										<img src={this.props.todayInfo ? this.currentWeatherIcon(this.props.currentIcon) : this.props.loading} alt="algo" style={{width:"90"}} />
     									</div>
     								</div>
     								<span><img src="images/icon-umberella.png" alto="algo" />{this.props.todayInfo ? this.props.todayInfo.current.humidity: this.props.loading}&#37;</span>
     								<span><img src="images/icon-wind.png" alto="algo" />{this.props.todayInfo ? this.props.todayInfo.current.gust_kph: this.props.loading}km/h</span>
     								<span><img src="images/icon-compass.png" alto="algo" />  {this.props.todayInfo ? this.props.todayInfo.current.wind_dir : this.props.loading}</span>
     							</div>
     						</div>
     						<div className="forecast">
     							<div className="forecast-header">
     								<div className="day">{this.getNextDays(1)} </div>
     							</div>
     							<div className="forecast-content">
     								<div className="forecast-icon">
     									<img src={this.props.todayInfo ? this.currentWeatherIcon(this.props.todayInfo.forecast.forecastday[1].day.condition.code) : this.props.loading} alto="algo1" style={{width:"48"}}  />
     								</div>
     								<div className="degree">{ this.props.todayInfo ? this.props.todayInfo.forecast.forecastday[1] ? this.props.todayInfo.forecast.forecastday[1].day.avgtemp_f : this.props.loading : this.props.loading}&#176;F</div>
     								<small>{ this.props.todayInfo ? this.props.todayInfo.forecast.forecastday[1] ? this.props.todayInfo.forecast.forecastday[1].day.mintemp_f : this.props.loading : this.props.loading}&#176;</small>
     							</div>
     						</div>
     						<div className="forecast">
     							<div className="forecast-header">
     								<div className="day">{this.getNextDays(2)} </div>
     							</div>
     							<div className="forecast-content">
     								<div className="forecast-icon">
     									<img src={this.props.todayInfo ? this.currentWeatherIcon(this.props.todayInfo.forecast.forecastday[2].day.condition.code) : this.props.loading} alto="algo" style={{width:"48"}} />
     								</div>
     								<div className="degree">{ this.props.todayInfo ? this.props.todayInfo.forecast.forecastday[2] ? this.props.todayInfo.forecast.forecastday[2].day.avgtemp_f : this.props.loading : this.props.loading}&#176;F</div>
     								<small>{ this.props.todayInfo ? this.props.todayInfo.forecast.forecastday[2] ? this.props.todayInfo.forecast.forecastday[2].day.mintemp_f : this.props.loading : this.props.loading}&#176;</small>
     							</div>
     						</div>
     						<div className="forecast">
     							<div className="forecast-header">
     								<div className="day">{this.getNextDays(3)}</div>
     							</div>
     							<div className="forecast-content">
     								<div className="forecast-icon">
     									<img src={this.props.todayInfo ? this.currentWeatherIcon(this.props.todayInfo.forecast.forecastday[3].day.condition.code) : this.props.loading} alto="algo" stye={{width:"48"}} />
     								</div>
     								<div className="degree">{ this.props.todayInfo ? this.props.todayInfo.forecast.forecastday[3] ? this.props.todayInfo.forecast.forecastday[3].day.avgtemp_f : this.props.loading : this.props.loading}&#176;F</div>
     								<small>{ this.props.todayInfo ? this.props.todayInfo.forecast.forecastday[3] ? this.props.todayInfo.forecast.forecastday[3].day.mintemp_f : this.props.loading : this.props.loading}&#176;</small>
     							</div>
     						</div>
     						<div className="forecast">
     							<div className="forecast-header">
     								<div className="day">{this.getNextDays(4)}</div>
     							</div>
     							<div className="forecast-content">
     								<div className="forecast-icon">
     									<img src={this.props.todayInfo ? this.currentWeatherIcon(this.props.todayInfo.forecast.forecastday[4].day.condition.code) : this.props.loading} alto="algo" style={{width:"48"}} />
     								</div>
     								<div className="degree">{ this.props.todayInfo ? this.props.todayInfo.forecast.forecastday[4] ? this.props.todayInfo.forecast.forecastday[4].day.avgtemp_f : this.props.loading : this.props.loading}&#176;F</div>
     								<small>{ this.props.todayInfo ? this.props.todayInfo.forecast.forecastday[4] ? this.props.todayInfo.forecast.forecastday[4].day.mintemp_f : this.props.loading : this.props.loading}&#176;</small>
     							</div>
     						</div>
     						<div className="forecast">
     							<div className="forecast-header">
     								<div className="day">{this.getNextDays(5)}</div>
     							</div>
     							<div className="forecast-content">
     								<div className="forecast-icon">
     									<img src={this.props.todayInfo ? this.currentWeatherIcon(this.props.todayInfo.forecast.forecastday[5].day.condition.code) : this.props.loading} alto="algo" style={{width:"48"}} />
     								</div>
     								<div className="degree">{ this.props.todayInfo ? this.props.todayInfo.forecast.forecastday[5] ? this.props.todayInfo.forecast.forecastday[5].day.avgtemp_f : this.props.loading : this.props.loading}&#176;F</div>
     								<small>{ this.props.todayInfo ? this.props.todayInfo.forecast.forecastday[5] ? this.props.todayInfo.forecast.forecastday[5].day.mintemp_f : this.props.loading : this.props.loading}&#176;</small>
     							</div>
     						</div>
     						<div className="forecast">
     							<div className="forecast-header">
     								<div className="day">{this.getNextDays(6)}</div>
     							</div>
     							<div className="forecast-content">
     								<div className="forecast-icon">
     									<img src={this.props.todayInfo ? this.currentWeatherIcon(this.props.todayInfo.forecast.forecastday[6].day.condition.code) : this.props.loading} alto="algo" style={{width:"48"}} />
     								</div>
     								<div className="degree">{ this.props.todayInfo ? this.props.todayInfo.forecast.forecastday[6] ? this.props.todayInfo.forecast.forecastday[6].day.avgtemp_f : this.props.loading : this.props.loading}&#176;F</div>
     								<small>{ this.props.todayInfo ? this.props.todayInfo.forecast.forecastday[6] ? this.props.todayInfo.forecast.forecastday[6].day.mintemp_f : this.props.loading : this.props.loading}&#176;</small>
     							</div>
     						</div>
     					</div>
     				</div>
     			</div>
     			<main className="main-content">
     				<div className="fullwidth-block">
     					<div className="container">
     						<h2 className="section-title">Major Cities</h2>
     						<div className="row">
     							<div className="col-md-4 col-sm-6">
     								<div className="live-camera">
     									<figure className="live-camera-cover"><img src="https://images.unsplash.com/photo-1545761931-0d597948c4c3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alto="algo" /></figure>
     									<h3 className="location">Moscow, Russia</h3>
     									<small className="date">{this.props.todayInfo ? this.props.moscow : this.props.loading}&#176;F</small>
     								</div>
     							</div>
     							<div className="col-md-4 col-sm-6">
     								<div className="live-camera">
     									<figure className="live-camera-cover"><img src="https://images.unsplash.com/photo-1523374228107-6e44bd2b524e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alto="algo" /></figure>
     									<h3 className="location">New York, USA</h3>
     									<small className="date">{this.props.todayInfo ? this.props.newYork : this.props.loading}&#176;F</small>
     								</div>
     							</div>
     							<div className="col-md-4 col-sm-6">
     								<div className="live-camera">
     									<figure className="live-camera-cover"><img src="https://images.unsplash.com/photo-1463839346397-8e9946845e6d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=749&q=80" alto="algo" /></figure>
     									<h3 className="location">Washington, USA</h3>
     									<small className="date">{this.props.todayInfo ? this.props.washington : this.props.loading}&#176;F</small>
     								</div>
     							</div>
     						</div>
     					</div>
     				</div>


            <div className="fullwidth-block">
              <div className="container">
                <div className="row">
                  <div className="col-md-4 col-sm-6">
                    <div className="live-camera">
                      <figure className="live-camera-cover"><img src="https://images.unsplash.com/photo-1512813389649-acb9131ced20?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alto="algo" /></figure>
                      <h3 className="location">Mexico City, Mexico</h3>
                      <small className="date">{this.props.todayInfo ? this.props.mexicoCity : this.props.loading}&#176;F</small>
                    </div>
                  </div>

                  <div className="col-md-4 col-sm-6">
                    <div className="live-camera">
                      <figure className="live-camera-cover"><img src="https://images.unsplash.com/photo-1531968455001-5c5272a41129?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=781&q=80" alto="algo" /></figure>
                      <h3 className="location">Lima, Peru</h3>
                      <small className="date">{this.props.todayInfo ? this.props.lima : this.props.loading}&#176;F</small>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6">
                    <div className="live-camera">
                      <figure className="live-camera-cover"><img src="https://images.unsplash.com/photo-1538428494232-9c0d8a3ab403?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alto="algo" /></figure>
                      <h3 className="location">Shanghai, China</h3>
                      <small className="date">{this.props.todayInfo ? this.props.shanghai : this.props.loading}&#176;F</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>


     			</main>

                  <News {...this.props}/>





   </div>



   )


  }







}

export default Today ;
