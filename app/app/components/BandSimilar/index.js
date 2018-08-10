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
};

/* eslint-disable react/prefer-stateless-function */
export default class BandSimilar extends React.Component {
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

BandSimilar.propTypes = {
  name: PropTypes.string,
  seperator: PropTypes.bool,
};
