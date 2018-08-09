/**
 *
 * Festival
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { playBand } from '../../services';

const FestivalWrapper = styled.div`
  line-height: 1.4;
  margin: 50px auto 0;
  width: 800px;

  &.hide {
    display: none;
  }
`;

const HeaderWrapper = styled.div`

`;

const BandsWrapper = styled.div`
  line-height: 1.75;
`;

const headlineStyle = {
  fontSize: '1.5em',
  padding: '6px',
};

const highlightStyle = {
  background: '#FEE837',
  cursor: 'pointer',
  fontSize: '1.1em',
  fontWeight: 600,
};

const similarStyle = {
  background: '#FEE837',
  cursor: 'pointer',
};

const spanStyle = {

}

const locationStyle = {
  color: '#999',
  fontSize: '.8em',
  fontWeight: 600,
}

const dateStyle = {
  color: '#999',
  fontSize: '.8em',
}

/* eslint-disable react/prefer-stateless-function */
class Festival extends React.Component {
  formatDate(date) {
    const newDate = date.split('-')
    return [newDate[2],newDate[1],newDate[0]].join('.')
  }

  constructor(props) {
    super(props);

    // this.toggle = this.toggle.bind(this);
  }

  toggle(token, uri) {
    if (uri !== null) {
      playBand(token, uri)
    }
  }

  render() {
    const {
      artists,
      date,
      level,
      location,
      name,
      token,
    } = this.props

    const count = artists.reduce((carry, artist) => {
      return carry + 2*artist.highlight + artist.similar
    }, 0)


    const bands = artists && artists.map((artist, index) => {
      const seperator = (index === artists.length-1) ? '' : ', '
      if (artist.highlight) {
        return <React.Fragment><span onClick={() => this.toggle(token, artist.details.uri)} key={index} style={{ ...highlightStyle, ...spanStyle }}>{artist.name}</span>{ seperator } </React.Fragment>
      } else if (artist.similar) {
        return <React.Fragment><span onClick={() => this.toggle(token, artist.details.uri)} key={index} style={{ ...similarStyle, ...spanStyle }}>{artist.name}</span>{ seperator } </React.Fragment>
      } else {
        return <React.Fragment><span onClick={() => this.toggle(token, null)} key={index} style={ spanStyle }>{artist.name}</span>{ seperator } </React.Fragment>
      }
    })

    const className = count < level ? 'hide' : ''; // does not work so far, filtering needs to be done, since months seperator would not be correct otherwise

    return (
      <FestivalWrapper className={className}>
        <HeaderWrapper>
          <div>
            <span style={ locationStyle }>{location}</span>
          </div>
          <div>
            <span style={ dateStyle }>{this.formatDate(date.start)} - {this.formatDate(date.end)}</span>
          </div>
          <h3 style={ headlineStyle }>{name}</h3>
        </HeaderWrapper>

        <BandsWrapper>
          { bands }
        </BandsWrapper>
      </FestivalWrapper>
    );
  }
}

Festival.propTypes = {
  artists: PropTypes.array,
  date: PropTypes.object,
  level: PropTypes.string,
  location: PropTypes.string,
  name: PropTypes.string,
  token: PropTypes.string,
};

export default Festival;
