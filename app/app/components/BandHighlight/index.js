/**
 *
 * Header
 *
 */

import PropTypes from 'prop-types';
import React from 'react';
import Band from 'components/Band';

const style = {
  background: '#FEE837',
  cursor: 'pointer',
  fontSize: '1.1em',
  fontWeight: 600,
};

/* eslint-disable react/prefer-stateless-function */
export default class BandHighlight extends React.Component {
  render() {
    const {
      name,
      seperator
    } = this.props

    return (
      <Band name={name} seperator={seperator} style={style} />
    );
  }
}

BandHighlight.propTypes = {
  name: PropTypes.string,
  seperator: PropTypes.bool,
};
