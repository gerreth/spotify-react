/**
 *
 * Songkick
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
import { spotifyTopBands, spotifySimilarBands, songkickFestivals } from '..//SpotifyCallback/selectors';
import reducer from '..//SpotifyCallback/reducer';
// Components
import Festivals from 'containers/Festivals';

/* eslint-disable react/prefer-stateless-function */
export class Songkick extends React.Component {
  render() {
    const {
      festivals
    } = this.props

    return (
      <div>
        <Helmet>
          <title>Songick</title>
          <meta name="description" content="Description of Songick" />
        </Helmet>

        {festivals &&
          <Festivals festivals={festivals} />
        }
      </div>
    );
  }
}

Songkick.propTypes = {
  festivals: PropTypes.array,
  topBands: PropTypes.array,
  similarBands: PropTypes.array,
};

const mapStateToProps = createStructuredSelector({
  festivals: songkickFestivals(),
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
)(Songkick);
