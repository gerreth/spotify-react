/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import { compose } from 'redux'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { FormattedMessage } from 'react-intl'
import injectReducer from 'utils/injectReducer'
import messages from './messages'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components';

import { spotifyTopBands, spotifySimilarBands, songkickFestivals } from '../SpotifyCallback/selectors'
import reducer from '../SpotifyCallback/reducer'
import {
  formatDate,
  sortByDate,
} from '../../helper/index'

import Band from 'components/Band'

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
`;

/* eslint-disable react/prefer-stateless-function */
class HomePage extends React.Component {

  render() {
    const {
      festivals,
      similarBands,
      topBands,
    } = this.props

    const topFestivals = festivals.map(festival => {
      festival.count = festival.artists.reduce((count, artist) => {
        return count + 2*artist.highlight + artist.similar
      }, 0)

      return festival
    }).sort((a,b) => b.count - a.count).slice(0,3).sort(sortByDate)

    return (
      <div style={{ padding: '18px', width: '400px' }}>
        <h2 style={{ fontWeight: '600' }}>Top 3</h2>
        {topFestivals.map(festival => {
          return (
            <div style={{ marginTop: '18px' }}>
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
                {festival.artists.map((artist, index) => {
                  if (artist.highlight) {
                    return <Band
                      key={index}
                      last={true}
                      name={artist.name}
                      type={artist.type}
                    />
                  }
                })}

                {festival.artists.map((artist, index) => {
                  if (artist.similar) {
                    return <Band
                      key={index}
                      last={true}
                      name={artist.name}
                      type={artist.type}
                    />
                  }
                })}

                ...mehr
              </FestivalBands>
            </div>
          )
        })}
      </div>
    )
  }
}

HomePage.propTypes = {
  festivals: PropTypes.array,
  similarBands: PropTypes.array,
  topBands: PropTypes.array,
}

const mapStateToProps = createStructuredSelector({
  festivals: songkickFestivals(),
  similarBands: spotifySimilarBands(),
  topBands: spotifyTopBands(),
})

const withConnect = connect(
  mapStateToProps,
)

const withReducer = injectReducer({ key: 'data', reducer })

export default compose(
  withReducer,
  withConnect,
)(HomePage)
