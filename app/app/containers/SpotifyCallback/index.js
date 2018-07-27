/**
 *
 * SpotifyCallback
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectReducer from 'utils/injectReducer';
// Local imports
import { setBands, setFestivals, setSimilarBands, setToken } from './actions';
import makeSelectSpotifyCallback from './selectors';
import reducer from './reducer';
import { getBands, getFestivals, getSimilarBands, getToken } from '../../services';

/* eslint-disable react/prefer-stateless-function */
export class SpotifyCallback extends React.Component {

  componentDidMount() {
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
