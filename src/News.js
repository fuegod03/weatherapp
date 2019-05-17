import React,{Component} from 'react'
import {Link} from 'react-router-dom'


class News extends Component {
constructor(){
  super ()
  this.state={
   url:"https://newsapi.org/v2/top-headlines?country=us&apiKey=f8822ecd8b3d4ceb87c8b11367961689",
   currentCategory:""
  }
  this.handleNewsBusinessChange=this.handleNewsBusinessChange.bind(this)
  this.handleNewsEntertainmentChange=this.handleNewsEntertainmentChange.bind(this)
  this.handleNewsGeneralChange=this.handleNewsGeneralChange.bind(this)
  this.handleNewsHealthChange=this.handleNewsHealthChange.bind(this)
  this.handleNewsScienceChange=this.handleNewsScienceChange.bind(this)
  this.handleNewsSportsChange=this.handleNewsSportsChange.bind(this)
  this.handleNewsTechnologyChange=this.handleNewsTechnologyChange.bind(this)
  this.handleNewsTopChange=this.handleNewsTopChange.bind(this)
}

componentDidMount(){
  // Fetching news
  const req = new Request(this.state.url);
  fetch(req)
  .then((res) => res.json())
  .then((news) => this.setState({
      news:news.articles
  })).catch((err) => console.log(err.message));

}


componentDidUpdate(prevProps, prevState, snapshot) {

  if (this.state.url !== prevState.url) {
    switch (this.state.url) {
      case 'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=f8822ecd8b3d4ceb87c8b11367961689':
       return this.handleNewsBusinessChange()
        break;

        case 'https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=f8822ecd8b3d4ceb87c8b11367961689':
         return this.handleNewsEntertainmentChange()
          break;

          case 'https://newsapi.org/v2/top-headlines?country=us&category=general&apiKey=f8822ecd8b3d4ceb87c8b11367961689':
           return this.handleNewsGeneralChange()
            break;

            case 'https://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=f8822ecd8b3d4ceb87c8b11367961689':
             return this.handleNewsHealthChange()
              break;

              case 'https://newsapi.org/v2/top-headlines?country=us&category=science&apiKey=f8822ecd8b3d4ceb87c8b11367961689':
               return this.handleNewsScienceChange()
                break;

                case 'https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=f8822ecd8b3d4ceb87c8b11367961689':
                 return this.handleNewsSportsChange()
                  break;

                  case 'https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=f8822ecd8b3d4ceb87c8b11367961689':
                   return this.handleNewsTechnologyChange()
                    break;

                    case 'https://newsapi.org/v2/top-headlines?country=us&apiKey=f8822ecd8b3d4ceb87c8b11367961689':
                     return this.handleNewsTopChange()
                      break;
      default:

    }
  };

}



handleNewsTopChange(){
  this.setState({
    url:'https://newsapi.org/v2/top-headlines?country=us&apiKey=f8822ecd8b3d4ceb87c8b11367961689',
    currentCategory:""
  })
  const req = new Request(this.state.url);
  fetch(req)
  .then((res) => res.json())
  .then((news) => this.setState({
      news:news.articles
  })).catch((err) => console.log(err.message));
  }


handleNewsBusinessChange(){
this.setState({
  url:'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=f8822ecd8b3d4ceb87c8b11367961689',
  currentCategory:"in business"
})
const req = new Request(this.state.url);
fetch(req)
.then((res) => res.json())
.then((news) => this.setState({
    news:news.articles
})).catch((err) => console.log(err.message));
}

handleNewsEntertainmentChange(){

this.setState({
  url:'https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=f8822ecd8b3d4ceb87c8b11367961689',
  currentCategory:"in entertainment"
})
const req = new Request(this.state.url);
fetch(req)
.then((res) => res.json())
.then((news) => this.setState({
    news:news.articles
})).catch((err) => console.log(err.message));
}

handleNewsGeneralChange(){

this.setState({
  url:'https://newsapi.org/v2/top-headlines?country=us&category=general&apiKey=f8822ecd8b3d4ceb87c8b11367961689',
  currentCategory:"in general"
})
const req = new Request(this.state.url);
fetch(req)
.then((res) => res.json())
.then((news) => this.setState({
    news:news.articles
})).catch((err) => console.log(err.message));
}

handleNewsHealthChange(){

this.setState({
  url:'https://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=f8822ecd8b3d4ceb87c8b11367961689',
  currentCategory:"in health"
})
const req = new Request(this.state.url);
fetch(req)
.then((res) => res.json())
.then((news) => this.setState({
    news:news.articles
})).catch((err) => console.log(err.message));
}


handleNewsScienceChange(){

this.setState({
  url:'https://newsapi.org/v2/top-headlines?country=us&category=science&apiKey=f8822ecd8b3d4ceb87c8b11367961689',
  currentCategory:"in science"
})
const req = new Request(this.state.url);
fetch(req)
.then((res) => res.json())
.then((news) => this.setState({
    news:news.articles
})).catch((err) => console.log(err.message));
}

handleNewsSportsChange(){

this.setState({
  url:'https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=f8822ecd8b3d4ceb87c8b11367961689',
  currentCategory:"in sports"
})
const req = new Request(this.state.url);
fetch(req)
.then((res) => res.json())
.then((news) => this.setState({
    news:news.articles
})).catch((err) => console.log(err.message));
}

handleNewsTechnologyChange(){

this.setState({
  url:'https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=f8822ecd8b3d4ceb87c8b11367961689',
  currentCategory:"in technology"
})
const req = new Request(this.state.url);
fetch(req)
.then((res) => res.json())
.then((news) => this.setState({
    news:news.articles
})).catch((err) => console.log(err.message));
}





  render (props){
  return (
    <div className="site-content">
      <div className="navBar" id="mainNavBar">

        			<div className="site-header">
        				<div className="container">
        					<a  className="branding">
                    <Link to="/">
        						<img src="images/logo.png" alt="" className="logo" />
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
        							<li className="menu-item current-menu-item"><Link to="/news"> News </Link></li>
        							<li className="menu-item"><Link to="/contact"> contact </Link></li>
        						</ul>
        					</div>

        					<div className="mobile-navigation"></div>

        				</div>
        			</div>


      </div>

      <main className="main-content">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/home"> Home </Link>
            <span>News</span>
          </div>
        </div>


        <div className="fullwidth-block">
          <div className="container">
            <div className="row">
              <div className="content col-md-8">
                <div className="post">
                  <h2 className="entry-title">{ this.state.news ? this.state.news[3].title : this.props.loading}</h2>
                  <div className="featured-image"><img src={ this.state.news ? this.state.news[3] ? this.state.news[3].urlToImage : this.props.loading : this.props.loading} alt=" algo" /></div>
                  <p>{ this.state.news ? this.state.news[3].description : this.props.loading}</p>
                  <a href={ this.state.news ? this.state.news[3].url : this.props.loading}  className="button">Read more</a>
                </div>

                <div className="post">
                  <h2 className="entry-title">{ this.state.news ? this.state.news[4].title : this.props.loading}</h2>
                  <div className="featured-image"><img src={ this.state.news ? this.state.news[4] ? this.state.news[4].urlToImage : this.props.loading : this.props.loading} alt="algo" /></div>
                  <p>{ this.state.news ? this.state.news[4].description : this.props.loading}</p>
                  <a href={ this.state.news ? this.state.news[4].url : this.props.loading}  className="button">Read more</a>
                </div>

                <div className="post">
                  <h2 className="entry-title">{ this.state.news ? this.state.news[5].title : this.props.loading}</h2>
                  <div className="featured-image"><img src={ this.state.news ? this.state.news[5] ? this.state.news[5].urlToImage : this.props.loading : this.props.loading} alt="algo" /></div>
                  <p>{ this.state.news ? this.state.news[5].description : this.props.loading}</p>
                  <a href={ this.state.news ? this.state.news[5].url : this.props.loading} className="button">Read more</a>
                </div>
              </div>
              <div className="sidebar col-md-3 col-md-offset-1">

                <div className="widget">
                  <h3 className="widget-title">Categories</h3>
                  <ul className="arrow-list">
                    <li ><a onClick={this.props ? this.handleNewsTopChange : console.log("no from1")} >Top topics</a></li>
                    <li ><a onClick={this.props ? this.handleNewsBusinessChange : console.log("no from1")} >business</a></li>
                    <li><a onClick={this.props ? this.handleNewsEntertainmentChange :console.log("no from 2")} >entertainment</a></li>
                    <li><a onClick={this.props ? this.handleNewsGeneralChange :console.log("no from 2") }>general</a></li>
                    <li><a onClick={this.props ? this.handleNewsHealthChange :console.log("no from 2") }>health</a></li>
                    <li><a onClick={this.props ? this.handleNewsScienceChange :console.log("no from 2") }>science</a></li>
                    <li><a onClick={this.props ? this.handleNewsSportsChange :console.log("no from 2") }>sports</a></li>
                    <li><a onClick={this.props ? this.handleNewsTechnologyChange :console.log("no from 2") }>technology</a></li>
                  </ul>
                </div>

                <div className="widget">
                  <h3 className="widget-title">Hot News {this.state.currentCategory}</h3>
                  <ul className="arrow-list">
                    <li><a href={ this.state.news ? this.state.news[6].url : this.props.loading}>{ this.state.news ? this.state.news[6].title : this.props.loading}</a></li>
                    <li><a href={ this.state.news ? this.state.news[7].url : this.props.loading}>{ this.state.news ? this.state.news[7].title : this.props.loading}</a></li>
                    <li><a href={ this.state.news ? this.state.news[8].url : this.props.loading}>{ this.state.news ? this.state.news[8].title : this.props.loading}</a></li>
                    <li><a href={ this.state.news ? this.state.news[9].url : this.props.loading}>{ this.state.news ? this.state.news[9].title : this.props.loading}</a></li>
                    <li><a href={ this.state.news ? this.state.news[10].url : this.props.loading}>{ this.state.news ? this.state.news[10].title : this.props.loading}</a></li>
                  </ul>
                </div>

              </div>
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
export default News
