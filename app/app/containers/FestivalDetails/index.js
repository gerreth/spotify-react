/**
 *
 * Festival
 *
 */

import { compose } from 'redux'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import injectReducer from 'utils/injectReducer'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components';

import { songkickFestivals } from '../SpotifyCallback/selectors'
import reducer from '../SpotifyCallback/reducer'
import Band from 'components/Band'

import {
  formatDate,
  sortByDate,
} from '../../helper/index'

const FestivalHeader = styled.div`
  line-height: 1.4;
`;

const FestivalHeadline = styled.div`
  font-size: 1.5em;
`;

const FestivalLocation = styled.div`
  span {
    color: #999;
    font-size: .8em;
    font-weight: 600;
  }
`;

const FestivalDate = styled.div`
  span {
    color: #999;
    font-size: .8em;
  }
`;

const FestivalBands = styled.div`
  font-size: .8em;
  line-height: 1.75;

  a {
    color: #666;
    text-decoration: none;
  }
`;

/* eslint-disable react/prefer-stateless-function */
class FestivalDetails extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {
      festivals,
      match: {
        params: {
          path
        }
      }
    } = this.props

    const festival = festivals.find(_ => _.path === path)
    console.log('festival', festival)
    const bands = festival.artists && festival.artists.map((artist, index) =>
      <Band
        key={index}
        last={index !== festival.artists.length-1}
        name={artist.name}
        type={artist.type}
      />
    )

    return (
      <div style={{ padding: '18px', width: '400px' }}>
        <FestivalHeader>
          <FestivalLocation>
            <span>{festival.location.city}, {festival.location.country}</span>
          </FestivalLocation>
          <FestivalDate>
            <span>{formatDate(festival.date.start)} - {formatDate(festival.date.end)}</span>
          </FestivalDate>
          <FestivalHeadline>{festival.name}</FestivalHeadline>
        </FestivalHeader>
        <FestivalBands>
          {bands}
        </FestivalBands>
      </div>
    )
  }
}

FestivalDetails.propTypes = {
  festivals: PropTypes.any,
}

const mapStateToProps = createStructuredSelector({
  festivals: songkickFestivals(),
})

const withConnect = connect(
  mapStateToProps,
)

const withReducer = injectReducer({ key: 'data', reducer })

export default compose(
  withReducer,
  withConnect,
)(FestivalDetails)
