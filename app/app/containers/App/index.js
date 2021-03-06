/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react'
import { Route, Switch } from 'react-router-dom'

// Project imports
import Header from 'containers/Header'
import HomePage from 'containers/HomePage/Loadable'
import Login from 'containers/Login/Loadable'
import Logout from 'containers/Logout'
import Songkick from 'containers/Songkick/Loadable'
import FestivalDetails from 'containers/FestivalDetails/Loadable'
import Spotify from 'containers/Spotify/Loadable'
import SpotifyCallback from 'containers/SpotifyCallback'
import NotFoundPage from 'containers/NotFoundPage/Loadable'

import { AppWrapper, ContentWrapper } from './styled'

export default function App() {
  return (
    <AppWrapper>
      <Header />
      <ContentWrapper>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/logout" component={Logout} />
          <Route exact path="/festivals" component={Songkick} />
          <Route exact path="/festivals/:path" component={FestivalDetails} />
          <Route exact path="/spotify/callback" component={SpotifyCallback} />
          <Route exact path="/bands" component={Spotify} />
          <Route component={NotFoundPage} />
        </Switch>
      </ContentWrapper>
    </AppWrapper>
  )
}
