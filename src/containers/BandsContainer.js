import React, { Component } from 'react'
import { connect } from 'react-redux'

class BandsContainer extends Component {
  render() {

    const bands = this.props.bands.map(band => {
     return <li>{band}</li>
    })
    return(
      <div>
        {bands}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    bands: state.bands
  }
}

export default connect(mapStateToProps)(BandsContainer)
