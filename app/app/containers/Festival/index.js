/**
 *
 * Festival
 *
 */

import React from 'react'
import PropTypes from 'prop-types'

import { playBand } from '../../services'
import Bands from 'components/Bands'
import FestivalHeader from 'components/FestivalHeader'

import {
  formatDate
} from '../../helper/index'

import {
  FestivalBands,
  FestivalWrapper,
} from './styled'

/* eslint-disable react/prefer-stateless-function */
class Festival extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {
      festival,
      level,
      path,
      token,
    } = this.props

    const bands = festival.artists && festival.artists.map((artist, index) =>
      <Bands last={index !== festival.artists.length-1} name={artist.name} type={artist.type} />
      // <Band key={index} last={index !== festival.artists.length-1} name={artist.name} type={artist.type} />
    )

    return (
      <FestivalWrapper>
        <FestivalHeader festival={festival} path={path} />
        <FestivalBands>
          { bands }
        </FestivalBands>
      </FestivalWrapper>
    )
  }
}

Festival.propTypes = {
  festival: PropTypes.shape({
    artists: PropTypes.array,
    date: PropTypes.object,
    location: PropTypes.object,
    name: PropTypes.string,
  }),
  level: PropTypes.number,
  path: PropTypes.string,
  token: PropTypes.string,
}

export default Festival
