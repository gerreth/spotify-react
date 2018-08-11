/**
 *
 * Festival
 *
 */

import React from 'react'
import PropTypes from 'prop-types'

import { playBand } from '../../services'

import Band from 'components/Band'

import {
  formatDate
} from './helper'

import {
  FestivalBands,
  FestivalDate,
  FestivalHeader,
  FestivalHeadline,
  FestivalLocation,
  FestivalWrapper,
} from './styled'

/* eslint-disable react/prefer-stateless-function */
class Festival extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {
      artists,
      date,
      level,
      location,
      name,
      token,
    } = this.props

    const bands = artists && artists.map((artist, index) =>
      <Band
        key={index}
        last={index !== artists.length-1}
        name={artist.name}
        type={artist.type}
      />
    )

    return (
      <FestivalWrapper>
        <FestivalHeader>
          <FestivalLocation>
            <span>{location.city}, {location.country}</span>
          </FestivalLocation>
          <FestivalDate>
            <span>{formatDate(date.start)} - {formatDate(date.end)}</span>
          </FestivalDate>
          <FestivalHeadline>{name}</FestivalHeadline>
        </FestivalHeader>

        <FestivalBands>
          { bands }
        </FestivalBands>
      </FestivalWrapper>
    )
  }
}

Festival.propTypes = {
  artists: PropTypes.array,
  date: PropTypes.object,
  level: PropTypes.number,
  location: PropTypes.string,
  name: PropTypes.string,
  token: PropTypes.string,
}

export default Festival
