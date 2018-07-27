/**
 *
 * Logout
 *
 */

import React from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectReducer from 'utils/injectReducer';
// Local imports
import { logout } from '../SpotifyCallback/actions';
import makeSelectSpotifyCallback from '../SpotifyCallback/selectors';
import reducer from '../SpotifyCallback/reducer';

/* eslint-disable react/prefer-stateless-function */
export class Logout extends React.Component {

  componentDidMount() {
    this.props.logout()
  }

  render() {
    return <Redirect to='/' />
  }

}

Logout.propTypes = {
  logout: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  test: makeSelectSpotifyCallback(),
});

function mapDispatchToProps(dispatch) {
  return {
    logout: () => dispatch(logout())
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
)(Logout);
