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
import { Link } from 'react-router-dom';
import messages from './messages'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components';

import GoogleMapReact from 'google-map-react'

import { loading, spotifyTopBands, spotifySimilarBands, songkickFestivals } from '../SpotifyCallback/selectors'
import reducer from '../SpotifyCallback/reducer'
import {
  formatDate,
  sortByDate,
} from '../../helper/index'

import Bands from 'components/Bands'
import FestivalHeader from 'components/FestivalHeader'

const TopWrapper = styled.div`
  padding: 18px;
  width: ${10*36}px;
`;

const FestivalBands = styled.div`
  font-size: .8em;
  line-height: 1.75;

  a {
    color: #666;
    text-decoration: none;
  }
`;

const FestivalWrapper = styled.div`
  margin-top: 36px;
`;

const AnyReactComponent = ({ text, path }) => (<Link to={`/festivals/${path}`}
  style={{
    background: '#fff',
    // border: 'solid #FEE837 4px',
    border: 'solid red 4px',
    borderRadius: '20px',
    cursor: 'pointer',
    display: 'inline-block',
    height: '20px',
    margin: '-10px 0 0 -10px',
    width: '20px',
    textAlign: 'center',
  }}
></Link>);

/* eslint-disable react/prefer-stateless-function */
class HomePage extends React.Component {
  getTopFestivals(festivals) {
    return festivals.map(festival => {
        return (
          <FestivalWrapper>
            <FestivalHeader festival={festival} path={festival.path} />
            <FestivalBands>
              {this.getHighlightBands(festival.artists.filter(artist => artist.highlight))}
              {this.getSimilarBands(festival.artists.filter(artist => artist.similar))}
              <Link to={`/festivals/${festival.path}`}>
                ... {festival.artists.filter(artist => !artist.highlight && !artist.similar).length} mehr
              </Link>
            </FestivalBands>
          </FestivalWrapper>
        )
      })
  }

  getHighlightBands(artists) {
    return artists.map((artist, index) =>
      <Bands key={index} last={true} name={artist.name} type={artist.type} />
    )
  }

  getSimilarBands(artists) {
    return artists.map((artist, index) =>
      <Bands key={index} last={true} name={artist.name} type={artist.type} />
    )
  }

  render() {
    const {
      loading,
      festivals,
      similarBands,
      topBands,
    } = this.props

    const test = festivals.sort((a,b) => b.count - a.count).slice(0,5).sort(sortByDate)

    const topFestivals = this.getTopFestivals(test)

    const markers = test.map(festival => {
      return (<AnyReactComponent
        lat={festival.venue.lat}
        lng={festival.venue.lng}
        text={festival.name}
        path={festival.path}
      ></AnyReactComponent>)
    });

    return (
      <div style={{ display: 'flex' }}>
        <TopWrapper>
          {loading && <span>... loading ... </span>}
          {!loading &&
            <div>
              <h2 style={{ fontWeight: '600' }}>Top 5 Festivals</h2>
              {topFestivals}
              <div style={{ padding: '36px 0' }}>
                <Link to={`/festivals`} style={{ color: '#999', textDecoration: 'none' }}>Mehr Festivals</Link>
              </div>
            </div>
          }
        </TopWrapper>
        <div style={{ flex: '1' }}>
          <div style={{ height: '880px' }}>
            <GoogleMapReact
              bootstrapURLKeys={{ key: 'AIzaSyAGsh4npa4ARrdYC7GBj2btGXosbfENA70' }}
              defaultCenter={{ lat: 50, lng: 9 }}
              defaultZoom={4}
            >
              {markers}
            </GoogleMapReact>
          </div>
        </div>
      </div>

    )
  }
}

HomePage.propTypes = {
  festivals: PropTypes.array,
  loading: PropTypes.bool,
  similarBands: PropTypes.array,
  topBands: PropTypes.array,
}

const mapStateToProps = createStructuredSelector({
  festivals: songkickFestivals(),
  loading: loading(),
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
