import React,{Component} from 'react'

class SideBody extends Component {
  render (props) {
  return(
    <div className="sideBody">

      <div className="quote">
        <h3> Quote of the day</h3>
        <p>   {this.props.todayInfo ? this.props.quote.quote : this.props.loadingText} </p>
          <p> — {this.props.todayInfo ? this.props.quote.author :this.props.loadingText} </p>
      </div>

      <div className="joke">
        <h3> Advice of the day</h3>
        <p> {this.props.todayInfo ? this.props.advice : this.props.loadingText}</p>
      </div>
   </div>
  )
  }
}

export default SideBody ;
