/**
 *
 * Bands
 *
 */

import PropTypes from 'prop-types'
import React from 'react'
// Styles
import './style.css'

const Bands = (props) => {
  const {
    name,
    last,
    type,
  } = props

  const seperator = last ? ', ' : ''

  return (
    <React.Fragment>
      <span className={`band ${type}`}>{name}</span>{seperator}
    </React.Fragment>
  )
};

export default Bands
