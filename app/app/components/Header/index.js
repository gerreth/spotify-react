/**
 *
 * Header
 *
 */

import PropTypes from 'prop-types';
import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import injectReducer from 'utils/injectReducer';

// Local imports
import messages from './messages';
import makeSelectSpotifyCallback from '../../containers/SpotifyCallback/selectors';
import reducer from '../../containers/SpotifyCallback/reducer';
// Styled components
const HeaderWrapper = styled.div`
  // background: #FEE837;
  background: #FFFFFF;
  // border-bottom: solid #000 2px;
  box-shadow: 0 -1px 3px rgba(0,0,0,0.25);
  line-height: 30px;
  padding: 20px;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 1;

  a {
    color: #333;
    font-weight: 600;
    padding: 0 10px;
    text-decoration: none;
    text-transform: uppercase;
  }
`;

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
            <Link to="/spotify">Spotify</Link>
            <Link to="/songkick">Songkick</Link>
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
