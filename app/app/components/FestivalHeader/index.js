/**
 *
 * FestivalHeader
 *
 */

import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'
import React from 'react'

import {
  formatDate
} from '../../helper/index'

import {
  FestivalDate,
  FestivalHeadline,
  FestivalLocation,
} from './styled'

const FestivalHeader = (props) => {
  const {
    date,
    history,
    link,
    location,
    name,
    path,
  } = props

  const showLink = (link === undefined) ? true : link

  return (
    <React.Fragment>
      <FestivalLocation>
        <span>{location.city}, {location.country}</span>
      </FestivalLocation>
      <FestivalDate>
        <span>{formatDate(date.start)} - {formatDate(date.end)}</span>
      </FestivalDate>
      <FestivalHeadline>
        {showLink &&
          <Link to={`/festivals/${path}`}>{name}</Link>
        }
        {!showLink &&
          name
        }
      </FestivalHeadline>
    </React.Fragment>
  )
};

export default FestivalHeader
