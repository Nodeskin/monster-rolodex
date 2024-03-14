import React, { Component } from 'react'
import "./searchbox.css"

export default class Searchbox extends Component {
  render() {
    const {SearchChange} = this.props;
    return (
      <div>
        <input
          className="search-box monster-searchbox"
          type="search"
          placeholder="search monster"
          onChange={SearchChange}
         />
      </div>
    )
  }
}
