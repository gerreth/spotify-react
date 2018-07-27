/**
 *
 * Login
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

import querystring from 'querystring'

// Styled components
const LoginWrapper = styled.div`
  height: 100%;
`;

const SpotifyLoginWrapper = styled.div`
  background: #FFF;
  border: solid #000 4px;
  cursor: pointer;
  line-height: 30px;
  margin: -15px -150px 0 0;
  padding: 10px 20px;
  position: absolute;
  right: 50%;
  text-align: center;
  top: 50%;
  width: 260px;

  &:hover {
    background: #FEE837;
  }

  a {
    color: #333;
    font-weight: 600;
    padding: 0 10px;
    text-decoration: none;
    text-transform: uppercase;
  }
`;


/* eslint-disable react/prefer-stateless-function */
export default class Login extends React.Component {
  constructor(props) {
    super(props);

    this.spotifyLogin = this.spotifyLogin.bind(this);
  }

  spotifyLogin() {
    const config = {
      client_id: 'b7c40a45f58849a2a33c90b70ca8a222', // Your client id
      redirect_uri: 'http://localhost:8000/spotify/callback', // Your redirect uri
      response_type: 'token',
      scope: 'user-read-private user-read-email user-top-read user-modify-playback-state user-read-playback-state playlist-modify-public playlist-modify-private',
      show_dialog: false,
    }
    const url = `https://accounts.spotify.com/authorize?${querystring.stringify(config)}`
    window.location.href = url;
  }

  render() {
    return (
      <LoginWrapper>
        <Helmet>
          <title>Login</title>
          <meta name="description" content="Description of Login" />
        </Helmet>

        <SpotifyLoginWrapper onClick={this.spotifyLogin}>
          <a>Log in with spotify</a>
        </SpotifyLoginWrapper>
      </LoginWrapper>
    );
  }
}
