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
import styled from 'styled-components'

import GoogleMapReact from 'google-map-react'

import { songkickFestivals } from '../SpotifyCallback/selectors'
import reducer from '../SpotifyCallback/reducer'
import Bands from 'components/Bands'
import FestivalHeader from 'components/FestivalHeader'

import {
  formatDate,
  sortByDate,
} from '../../helper/index'

const FestivalBands = styled.div`
  font-size: .8em;
  line-height: 1.75;

  a {
    color: #666;
    text-decoration: none;
  }
`;

const AnyReactComponent = ({ text }) =>                 <div
                  style={{
                    background: '#fff',
                    border: 'solid #FEE837 4px',
                    borderRadius: '20px',
                    display: 'inline-block',
                    height: '40px',
                    width: '40px',
                    textAlign: 'center',
                  }}
                ></div>;

/* eslint-disable react/prefer-stateless-function */
class FestivalDetails extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {
      festivals,
      history,
      match: {
        params: {
          path
        }
      }
    } = this.props

    const festival = festivals.find(_ => _.path === path)
    const bands = festival.artists && festival.artists.map((artist, index) =>
      <Bands key={index} last={index !== festival.artists.length-1} name={artist.name} type={artist.type} />
    )

    return (
      <div>
        <a style={{ cursor: 'pointer', display: 'block', fontSize: '.8em', fontWeight: '600', paddingLeft: '18px' }} onClick={history.goBack}>Zurück</a>
        <div style={{ padding: '18px', width: 20*36 + 'px' }}>
          <FestivalHeader
            festival={festival}
            link={false}
            path={festival.path} />
          <FestivalBands>
            {bands}
          </FestivalBands>
          <div style={{ lineHeight: '1.75' }}>
            <h3>Venue:</h3>
            <p style={{ fontSize: '1em', lineHeight: '1.75' }}>{festival.venue.displayName}</p>
            <div style={{ height: '400px' }}>
              <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyAGsh4npa4ARrdYC7GBj2btGXosbfENA70' }}
                defaultCenter={{ lat: festival.venue.lat, lng: festival.venue.lng }}
                defaultZoom={14}
              >
                <AnyReactComponent
                  lat={festival.venue.lat}
                  lng={festival.venue.lng}
                  text={festival.venue.displayName}
                />
              </GoogleMapReact>
            </div>
          </div>
        </div>
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
