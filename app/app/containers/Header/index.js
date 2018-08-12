/**
 *
 * Header
 *
 */

import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { FormattedMessage } from 'react-intl';
import injectReducer from 'utils/injectReducer';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import React from 'react';

// Local imports
import messages from './messages';
import makeSelectSpotifyCallback from '../../containers/SpotifyCallback/selectors';
import reducer from '../../containers/SpotifyCallback/reducer';
// Styled components
import {
  HeaderWrapper
} from './styled'

/* eslint-disable react/prefer-stateless-function */
class Header extends React.Component {
  render() {
    const { data } = this.props

    return (
      <HeaderWrapper>
        <Link to="/">Home</Link>
        { !data.auth.loggedIn && <Link to="/login">Login</Link> }
        { data.auth.loggedIn &&
          <React.Fragment>
            <Link to="/bands">Bands</Link>
            <Link to="/festivals">Festivals</Link>
            <Link to="/logout">Logout</Link>
          </React.Fragment>
        }
      </HeaderWrapper>
    );
  }
}

Header.propTypes = {
  data: PropTypes.any,
};

const mapStateToProps = createStructuredSelector({
  data: makeSelectSpotifyCallback(),
});

const withConnect = connect(
  mapStateToProps,
);

const withReducer = injectReducer({ key: 'data', reducer });

export default compose(
  withReducer,
  withConnect,
)(Header);
