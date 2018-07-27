/**
 *
 * Spotify
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectReducer from 'utils/injectReducer';
// Local imports
import messages from './messages';
import { spotifyTopBands, spotifySimilarBands } from '..//SpotifyCallback/selectors';
import reducer from '..//SpotifyCallback/reducer';

/* eslint-disable react/prefer-stateless-function */
export class Spotify extends React.Component {
  componentDidMount() {
    console.log(this.props)
	}

  render() {
    return (
      <div>
        <Helmet>
          <title>Spotify</title>
          <meta name="description" content="Description of Spotify" />
        </Helmet>

        Spotify
      </div>
    );
  }
}

Spotify.propTypes = {
  similarBands: PropTypes.array,
  topBands: PropTypes.array,
};

const mapStateToProps = createStructuredSelector({
  topBands: spotifyTopBands(),
  similarBands: spotifySimilarBands(),
});

const withConnect = connect(
  mapStateToProps,
);

const withReducer = injectReducer({ key: 'data', reducer });

export default compose(
  withReducer,
  withConnect,
)(Spotify);
