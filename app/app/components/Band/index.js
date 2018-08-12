/**
 *
 * Band
 *
 */

import PropTypes from 'prop-types'
import React from 'react'
// Styles
import './style.css'

const Band = (props) => {
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

export default Band

// /* eslint-disable react/prefer-stateless-function */
// export default class Band extends React.Component {
//   render() {
//     const {
//       name,
//       last,
//       type,
//     } = this.props
//
//     const seperator = last ? ', ' : ''
//
//     return (
//      <React.Fragment>
//        <span className={type}>{name}</span>{seperator}
//      </React.Fragment>
//     )
//   }
// }
//
// Band.propTypes = {
//   name: PropTypes.string,
//   last: PropTypes.bool,
//   type: PropTypes.string,
// }
