import React,{Component} from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import Header from './head/Header.js'
import Footer from './footer/Footer.js'
import Today from './body/Today.js'
import axios from 'axios';
import fetchMultiple from 'fetch-multiple';
import News from './News.js'
import Contact from './Contact.js'


class App extends Component {
constructor(){

super()
 this.state ={
  loadingText:"updating...",
    searchByLL:"",
    id:"",
    city:"",
    test:true,
    cierto:true
}
  this.handleData = this.handleData.bind(this);
  this.fetchOptionalCurrent=this.fetchOptionalCurrent.bind(this)
}


componentDidMount() {



  fetch("http://api.apixu.com/v1/forecast.json?key=82fe923258fa4530a5e235322192604&q=New York").then((res) => res.json())
  .then((info) => this.setState({
      newYork:info.current.temp_f

  }))
      .catch((err) => console.log(err.message));

      fetch("http://api.apixu.com/v1/forecast.json?key=82fe923258fa4530a5e235322192604&q=Shanghai").then((res) => res.json())
      .then((info) => this.setState({
          shanghai:info.current.temp_f

      }))
          .catch((err) => console.log(err.message));

          fetch("http://api.apixu.com/v1/forecast.json?key=82fe923258fa4530a5e235322192604&q=Washington").then((res) => res.json())
          .then((info) => this.setState({
              washington:info.current.temp_f

          }))
              .catch((err) => console.log(err.message));

              fetch("http://api.apixu.com/v1/forecast.json?key=82fe923258fa4530a5e235322192604&q=Moscow").then((res) => res.json())
              .then((info) => this.setState({
                  moscow:info.current.temp_f

              }))
                  .catch((err) => console.log(err.message));

                  fetch("http://api.apixu.com/v1/forecast.json?key=82fe923258fa4530a5e235322192604&q=Lima").then((res) => res.json())
                  .then((info) => this.setState({
                    lima:info.current.temp_f

                  }))
                      .catch((err) => console.log(err.message));

                      fetch("http://api.apixu.com/v1/forecast.json?key=82fe923258fa4530a5e235322192604&q=Mexico City").then((res) => res.json())
                      .then((info) => this.setState({
                        mexicoCity:info.current.temp_f

                      }))
                          .catch((err) => console.log(err.message));


    //   .catch((err) => console.log(err.message))
    // .then(data => {
    //   console.log(data['http://api.apixu.com/v1/forecast.json?key=82fe923258fa4530a5e235322192604&q=Lima']);
    // });
  // Fetching user location

  // fetch("http://ip-api.com/json").then((res) => res.json())
  // .then((info) => this.setState({
  //     currentLatitude:info.lat,
  //     currentLongitude:info.lon,
  //     currentPosition: info.lat.toString() + "," + info.lon.toString(),
  //     uri:'http://api.apixu.com/v1/forecast.json?key=82fe923258fa4530a5e235322192604&q='
  //
  // }));
  fetch( 'http://ip-api.com/json',{mode: 'cors'}).then((res) => res.json())
  .then((info) => this.setState({
      currentLatitude:info.lat,
      currentLongitude:info.lon,
      currentPosition: info.lat.toString() + "," + info.lon.toString(),
      uri:'http://api.apixu.com/v1/forecast.json?key=82fe923258fa4530a5e235322192604&q='

  }));



    // Fetching news
    const url = 'https://newsapi.org/v2/top-headlines?' +
              'country=us&' +
              'apiKey=f8822ecd8b3d4ceb87c8b11367961689';
    const req = new Request(url);
    fetch(req)
    .then((res) => res.json())
    .then((news) => this.setState({
        news:news.articles
    })).catch((err) => console.log(err.message));



    // Fetching advice
        fetch("https://cors-anywhere.herokuapp.com/" + "http://quotes.rest/qod.json").then((res) => res.json())
        .then((quote) => this.setState({
           quote:quote.contents.quotes[0]
        }))
            .catch((err) => console.log(err.message));
}


fetchOptionalCurrent(){

  fetch("https://cors-anywhere.herokuapp.com/" + this.state.uri + this.state.currentPosition + '&days=7').then((res) => res.json())
  .then((todayInfo) => this.setState({
      todayInfo,
      currentIcon:todayInfo.current.condition.code,
      forecast:todayInfo.forecast.forecastday,
      conditionOneDayAhead:todayInfo.forecast.forecastday[1].day.condition,
      conditionTwoDayAhead:todayInfo.forecast.forecastday[2].day.condition,
      conditionThreeDayAhead:todayInfo.forecast.forecastday[3].day.condition,
      conditionFourthDayAhead:todayInfo.forecast.forecastday[4].day.condition,
      conditionFifthDayAhead:todayInfo.forecast.forecastday[5].day.condition,
      conditionSixthDayAhead:todayInfo.forecast.forecastday[6].day.condition,
      currentCountry:todayInfo.location.country
  }))
      .catch((err) => console.log(err.message));
}


handleData(data) {
  this.setState({
    city: data
  });
  fetch( this.state.uri + this.state.city+ '&days=7').then((res) => res.json())
  .then((todayInfo) => this.setState({
      todayInfo,
      currentIcon:todayInfo.current.condition.code
  }))
      .catch((err) => console.log(err.message))
}

componentDidUpdate(prevProps, prevState, snapshot){
if(prevState.city != this.state.city){
if(this.state.city != null){
  fetch( this.state.uri + this.state.city+ '&days=7').then((res) => res.json())
  .then((todayInfo) => this.setState({
      todayInfo,
      currentIcon:todayInfo.current.condition.code,
  }))
      .catch((err) => console.log(err.message))
    }
  }
}





render (){
  {
if(this.state.currentPosition){
  if(this.state.test ){
 this.fetchOptionalCurrent();
 this.setState({
   test:false
 })}else{ console.log("no from current position")
 }
}
}
  return (
    <div>
    <Router >
   <Route exact path="/" render={props => (
       <React.Fragment>
         <Header todayInfo={this.state.todayInfo}  currentIcon={this.state.currentIcon}  currentLocation={this.state.currentLocation} loading={this.state.loading}/>
         <div className="App">
         <Today {...this.state} handlerFromHead={this.handleData} />
         </div>
         <Footer />
              </React.Fragment>
     )} />
     <Route  path="/about"
       render ={(routeProps) => ( <Header {...routeProps} todayInfo={this.state.todayInfo} handlerFromHead={this.handleData} currentIcon={this.state.currentIcon}  currentLocation={this.state.currentLocation} loading={this.state.loading}/> )}
       />
     <Route  path="/news"
    render ={(routeProps) => ( <News {...routeProps} currentCountry={this.state.currentCountry}/> )}
    />
  <Route  path="/contact"
      render ={(routeProps) => ( <Contact {...routeProps} todayInfo={this.state.todayInfo} handlerFromHead={this.handleData} currentIcon={this.state.currentIcon}  currentLocation={this.state.currentLocation} loading={this.state.loading}/> )}
      />
   </Router>


    </div>
  );
}
}
export default App;
