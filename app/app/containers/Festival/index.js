/**
 *
 * Festival
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { playBand } from '../../services';

import Band from 'components/Band';
import BandHighlight from 'components/BandHighlight';
import BandSimilar from 'components/BandSimilar';

import {
  formatDate
} from './helper';

const FestivalWrapper = styled.div`
  line-height: 1.4;
  margin: 50px auto 0;
  width: 800px;
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
  constructor(props) {
    super(props);
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

    const bands = artists && artists.map((artist, index) => {
      if (artist.highlight) {
        return <BandHighlight key={index} name={artist.name} onClick={() => playBand(token, artist.details.uri)} seperator={index !== artists.length-1} />
      } else if (artist.similar) {
        return <BandSimilar key={index} name={artist.name} onClick={() => playBand(token, artist.details.uri)} seperator={index !== artists.length-1} />
      } else {
        return <Band key={index} name={artist.name} seperator={index !== artists.length-1} />
      }
    })

    return (
      <FestivalWrapper>
        <HeaderWrapper>
          <div>
            <span style={ locationStyle }>{location}</span>
          </div>
          <div>
            <span style={ dateStyle }>{formatDate(date.start)} - {formatDate(date.end)}</span>
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
  level: PropTypes.number,
  location: PropTypes.string,
  name: PropTypes.string,
  token: PropTypes.string,
};

export default Festival;
