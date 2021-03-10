
import React, { Component } from 'react'
import { connect } from 'react-redux'

class BandInput extends Component {

  constructor(){
    super()
    this.state = {
      name: ''
    }
  }

  handleChange = event => {
    this.setState({
      name: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.addBand(this.state)
    this.setState({name: ''})
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type='input' name='text' onChange={this.handleChange} value={this.state.name} />
          <input type='submit'  />
        </form>
      </div>
    )
  }
}

const mapStateToProps = dispatch => {
  return {
    addBand: bandName => dispatch({type: 'ADD_BAND', bandName})
  }
}

export default connect(null, mapStateToProps)(BandInput)
