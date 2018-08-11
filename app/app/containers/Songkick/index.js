/**
 *
 * Songkick
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
import { playBand } from '../../services';
import reducer from '../SpotifyCallback/reducer';
// Component imports
import Festivals from 'containers/Festivals';
// Styled components
const SongkickWrapper = styled.div`

`;

/* eslint-disable react/prefer-stateless-function */
export class Songkick extends React.Component {
  render() {
    const {
      festivals,
      token
    } = this.props

    return (
      <SongkickWrapper>
        <Helmet>
          <title>Songick</title>
          <meta name="description" content="Description of Songick" />
        </Helmet>

        {festivals &&
          <Festivals festivals={festivals} token={token} />
        }
      </SongkickWrapper>
    );
  }
}

Songkick.propTypes = {
  festivals: PropTypes.array,
  similarBands: PropTypes.array,
  topBands: PropTypes.array,
  token: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  festivals: songkickFestivals(),
  similarBands: spotifySimilarBands(),
  topBands: spotifyTopBands(),
  token: spotifyToken(),
});

const withConnect = connect(
  mapStateToProps,
);

const withReducer = injectReducer({ key: 'data', reducer });

export default compose(
  withReducer,
  withConnect,
)(Songkick);
