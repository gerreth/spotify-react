/**
 *
 * Spotify
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { FormattedMessage } from 'react-intl';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';

import injectReducer from 'utils/injectReducer';
// Local imports
import messages from './messages';
import { spotifyTopBands, spotifySimilarBands, spotifyToken, songkickFestivals } from '../SpotifyCallback/selectors';
import reducer from '../SpotifyCallback/reducer';

import Bands from 'containers/Bands';
// Styled components
const SpotifyWrapper = styled.div`

`;

/* eslint-disable react/prefer-stateless-function */
export class Spotify extends React.Component {
  render() {
    const {
      token,
      topBands,
    } = this.props

    return (
      <SpotifyWrapper>
        <Helmet>
          <title>Spotify</title>
          <meta name="description" content="Description of Spotify" />
        </Helmet>

        {topBands &&
          <Bands topBands={topBands} token={token} />
        }
      </SpotifyWrapper>
    );
  }
}

Spotify.propTypes = {
  topBands: PropTypes.array,
  similarBands: PropTypes.array,
  token: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  similarBands: spotifySimilarBands(),
  token: spotifyToken(),
  topBands: spotifyTopBands(),
});

const withConnect = connect(
  mapStateToProps,
);

const withReducer = injectReducer({ key: 'data', reducer });

export default compose(
  withReducer,
  withConnect,
)(Spotify);
