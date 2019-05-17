
import React,{Component} from 'react'



class News extends Component {

  breakingDownNewsDate(a){
     a = a.slice(0, 10)
     return a
  }

  render (props) {
   return (
      <div className="news ">

        <div className="fullwidth-block">
          <div className="container">
            <h2 className="section-title">News</h2>
            <div className="row">
              <div className="col-md-4 col-sm-6">
                <div className="live-camera">
                  <figure className="live-camera-cover"><img src={ this.props.news ? this.props.news[0] ? this.props.news[0].urlToImage : this.props.loading : this.props.loading} alto="algo" /></figure>
                  <h3 className="location">{ this.props.news ? this.props.news[0].title : this.props.loading}</h3>
                  <small className="date"> { this.props.news ? this.breakingDownNewsDate(this.props.news[0].publishedAt) : this.props.loading}</small>
                </div>
              </div>
              <div className="col-md-4 col-sm-6">
                <div className="live-camera">
                  <figure className="live-camera-cover"><img src={ this.props.news ? this.props.news[1] ? this.props.news[1].urlToImage : this.props.loading : this.props.loading} alto="algo" /></figure>
                  <h3 className="location">{ this.props.news ? this.props.news[1].title : this.props.loading}</h3>
                  <small className="date"> { this.props.news ? this.breakingDownNewsDate(this.props.news[1].publishedAt) : this.props.loading}</small>
                </div>
              </div>
              <div className="col-md-4 col-sm-6">
                <div className="live-camera">
                  <figure className="live-camera-cover"><img src={ this.props.news ? this.props.news[2] ? this.props.news[2].urlToImage : this.props.loading : this.props.loading} alto="algo" /></figure>
                  <h3 className="location">{ this.props.news ? this.props.news[2].title : this.props.loading}</h3>
                  <small className="date"> { this.props.news ? this.breakingDownNewsDate(this.props.news[2].publishedAt) : this.props.loading}</small>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>

   )
  }
}

export default News ;


// <h3> News </h3>
// <div className="newsFirstRow">
//   <a href={ this.props.news ? this.props.news[0].url  : this.props.loading} className="first"> <img  src={ this.props.news ? this.props.news[0] ? this.props.news[0].urlToImage : this.props.loading : this.props.loading} alt="newspic" /> <p>{ this.props.news ? this.breakingDownNewsDate(this.props.news[0].publishedAt) : this.props.loading} </p> <h5> { this.props.news ? this.props.news[0].title : this.props.loading} </h5> </a >
//   <a href={ this.props.news ? this.props.news[1].url  : this.props.loading} className="first"> <img src={ this.props.news ? this.props.news[1].urlToImage : this.props.loading} alt="newspic2" /> <p>{ this.props.news ? this.breakingDownNewsDate(this.props.news[1].publishedAt) : this.props.loading} </p> <h5> { this.props.news ? this.props.news[1].title : this.props.loading} </h5> </a >
//   <a href={ this.props.news ? this.props.news[2].url  : this.props.loading} className="first"> <img src={ this.props.news ? this.props.news[2].urlToImage : this.props.loading} alt="newspic3" /> <p>{ this.props.news ? this.breakingDownNewsDate(this.props.news[2].publishedAt) : this.props.loading} </p> <h5> { this.props.news ? this.props.news[2].title : this.props.loading} </h5> </a >
// </div>
//
//
// <div className="newsSecondRow">
//  <a href={ this.props.news ? this.props.news[3].url  : this.props.loading} className="first"> <img src={ this.props.news ? this.props.news[3].urlToImage : this.props.loading} alt="newspic4"/> <p>{ this.props.news ? this.breakingDownNewsDate(this.props.news[3].publishedAt) : this.props.loading} </p> <h5> { this.props.news ? this.props.news[3].title : this.props.loading} </h5> </a >
//  <a href={ this.props.news ? this.props.news[4].url  : this.props.loading} className="first"> <img src={ this.props.news ? this.props.news[4].urlToImage : this.props.loading} alt="newspice5"/> <p>{ this.props.news ? this.breakingDownNewsDate(this.props.news[4].publishedAt) : this.props.loading} </p> <h5> { this.props.news ? this.props.news[4].title : this.props.loading} </h5> </a >
//  <a href={ this.props.news ? this.props.news[5].url  : this.props.loading} className="first"> <img src={ this.props.news ? this.props.news[5].urlToImage : this.props.loading} alt="newspic6"/> <p>{ this.props.news ? this.breakingDownNewsDate(this.props.news[5].publishedAt) : this.props.loading} </p> <h5> { this.props.news ? this.props.news[5].title : this.props.loading} </h5> </a >
// </div>
