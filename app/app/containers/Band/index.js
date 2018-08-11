/**
 *
 * Band
 *
 */

import React from 'react'
import PropTypes from 'prop-types'

import { playBand } from '../../services'

import {
  BandWrapper,
  BandInnerWrapper,
  BandName,
  BandImage,
} from './styled'

/* eslint-disable react/prefer-stateless-function */
class Band extends React.Component {
  render() {
    const {
      image,
      name,
      uri,
      token,
    } = this.props

    const styles = { width: `${this.props.size}%` }

    return (
      <BandWrapper style={styles} onClick={() => playBand(token, uri)}>
        <BandInnerWrapper>
          <BandName>
            <span>{name}</span>
          </BandName>
          <BandImage>
            <img src={image} />
          </BandImage>
        </BandInnerWrapper>
      </BandWrapper>
    )
  }
}

Band.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string.isRequired,
  size: PropTypes.number,
  token: PropTypes.string,
  uri: PropTypes.string,
}

export default Band
