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
import { spotifyTopBands, spotifySimilarBands, songkickFestivals } from '..//SpotifyCallback/selectors';
import reducer from '..//SpotifyCallback/reducer';

import Bands from 'containers/Bands';
// Styled components
const SpotifyWrapper = styled.div`
  height: 100%;
  padding-top: 70px;
`;

/* eslint-disable react/prefer-stateless-function */
export class Spotify extends React.Component {
  render() {
    return (
      <SpotifyWrapper>
        <Helmet>
          <title>Spotify</title>
          <meta name="description" content="Description of Spotify" />
        </Helmet>

        {this.props.topBands &&
          <Bands topBands={this.props.topBands} />
        }
      </SpotifyWrapper>
    );
  }
}

Spotify.propTypes = {
  topBands: PropTypes.array,
  similarBands: PropTypes.array,
};

const mapStateToProps = createStructuredSelector({
  similarBands: spotifySimilarBands(),
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

// Spotify.propTypes = {
//   similarBands: PropTypes.array,
//   topBands: PropTypes.array,
// };
//
// const mapStateToProps = createStructuredSelector({
//   topBands: spotifyTopBands(),
//   similarBands: spotifySimilarBands(),
// });
//
// const withConnect = connect(
//   mapStateToProps,
// );
//
// const withReducer = injectReducer({ key: 'data', reducer });
//
// export default compose(
//   withReducer,
//   withConnect,
// )(Spotify);
