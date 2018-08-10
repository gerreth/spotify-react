/**
 *
 * Header
 *
 */

import PropTypes from 'prop-types';
import React from 'react';

/* eslint-disable react/prefer-stateless-function */
export default class Band extends React.Component {
  render() {
    const {
      name,
      seperator,
      style
    } = this.props

    return (
      <React.Fragment>
        <span style={style}>
          {name}
        </span>{seperator && <i>, </i>}
      </React.Fragment>
    );
  }
}

Band.propTypes = {
  name: PropTypes.string,
  seperator: PropTypes.bool,
  style: PropTypes.object,
};
