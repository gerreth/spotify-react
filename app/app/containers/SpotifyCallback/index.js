/**
 *
 * SpotifyCallback
 *
 */

import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Helmet } from 'react-helmet';
import injectReducer from 'utils/injectReducer';
import PropTypes from 'prop-types';
import React from 'react';
import { Redirect } from 'react-router'


// Local imports
import { setBands, setFestivals, setSimilarBands, setToken } from './actions';
import makeSelectSpotifyCallback from './selectors';
import reducer from './reducer';
import { getBands, getFestivals, getSimilarBands, getToken } from '../../services';

/* eslint-disable react/prefer-stateless-function */
export class SpotifyCallback extends React.Component {

  componentWillMount() {
    const {
      setBands,
      setFestivals,
      setSimilarBands,
      setToken,
    } = this.props

    const token = getToken()

    setToken(token)

    getBands(token).then(topBands => {
      setBands(topBands)

      getSimilarBands(token, topBands).then(similarBands => {
        setSimilarBands(similarBands)

        getFestivals(topBands, similarBands).then(festivals => {
          festivals = festivals.map(festival => {
            festival.path = festival.name.toLowerCase().split(' ').join('-')
            festival.count = festival.artists.reduce((count, artist) =>
              count + 2*artist.highlight + artist.similar
            , 0)

            festival.artists = festival.artists.map(artist => {
              if (topBands.find(band => band.name === artist.name)) {
                artist.details = topBands.find(band => band.name === artist.name)
              }

              if (similarBands.find(band => band.name === artist.name)) {
                artist.details = similarBands.find(band => band.name === artist.name)
              }

              return artist
            })

            return festival
          })
          setFestivals(festivals)
        })
      }).catch(error => {

      })
    }).catch(error => {

    })
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>SpotifyCallback</title>
          <meta name="description" content="Description of SpotifyCallback" />
        </Helmet>
        <Redirect to="/"/>
        SpotifyCallback
      </div>
    );
  }
}

SpotifyCallback.propTypes = {
  setBands: PropTypes.func.isRequired,
  setFestivals: PropTypes.func.isRequired,
  setSimilarBands: PropTypes.func.isRequired,
  setToken: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  test: makeSelectSpotifyCallback(),
});

function mapDispatchToProps(dispatch) {
  return {
    setBands: (topBands) => dispatch(setBands(topBands)),
    setFestivals: (festivals) => dispatch(setFestivals(festivals)),
    setSimilarBands: (similarBands) => dispatch(setSimilarBands(similarBands)),
    setToken: (token) => dispatch(setToken(token))
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'data', reducer });

export default compose(
  withReducer,
  withConnect,
)(SpotifyCallback);
