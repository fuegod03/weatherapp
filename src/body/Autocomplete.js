import React, { Component } from 'react'
import axios from 'axios'
import Suggestions from './Suggestion'


class Search extends Component {
  state = {
  }

  getInfo = () => {
  fetch("http://api.apixu.com/v1/forecast.json?key=82fe923258fa4530a5e235322192604&q=").then((res) => res.json())
      .then(({ data }) => {
        this.setState({
          results: data.data
        })
      })
  }

  handleInputChange = () => {
    this.setState({
      query: this.search.value
    }, () => {
      if (this.state.query && this.state.query.length > 4) {
        if (this.state.query.length % 2 === 0) {
          this.getInfo()
        }
      } else if (!this.state.query) {
      }
    })
  }

  render() {
    return (
      <form>
        <input
          placeholder="Search for..."
          ref={input => this.search = input}
          onChange={this.handleInputChange}
        />
        <Suggestions results={this.state.results} />
      </form>
    )
  }
}

export default Search
