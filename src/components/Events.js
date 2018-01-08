import React, { Component } from 'react'
import PropTypes from 'prop-types'

import '../style/style.css'
import Event from './Event'

class Events extends Component {
  render() {
    return (
      <div className="events">
        <h1 className="header2">Events</h1>
        <p className="hr2">OPO</p>

        <div className="events">
          { 
            Object.keys(this.props.eventsList)
              .map(key => <Event 
                            key={key} 
                            eventId={key}
                            {...this.props} 
                            details={this.props.eventsList[key]} 
            />)
          }
        </div>
        
        <button onClick={this.props.loadEvents}>Load Samples</button>
      </div>
    )
  }
}

Events.propTypes = {
  deleteEvent: PropTypes.func,
}

export default Events