/**
 *
 * Band
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { playBand } from '../../services';

const BandWrapper = styled.div`
  position: relative;
  width: 10%;

  :before {
  	content: "";
  	display: block;
  	padding-top: 100%; 	/* initial ratio of 1:1*/
  }

  img {
    height: 100%;
    width: 100%;
  }
`;

const BandInnerWrapper = styled.div`
  bottom: 0;
  cursor: pointer;
  left: 0;
  padding: 30px;
  position: absolute;
  right: 0;
  top: 0;

  &:hover {
    opacity: .8;
    padding: 30px;
  }
`;

const BandName = styled.div`
  background: rgba(255,255,255,1);
  bottom: 0;
  font-weight: 600;
  line-height: 30px;
  position: absolute;
  right: 30px;
`;

const BandImage = styled.div`
  height: 100%;
  width: 100%;
`;

/* eslint-disable react/prefer-stateless-function */
class Band extends React.Component {
  render() {
    const {
      image,
      name,
      uri,
      token,
    } = this.props

    const styles = { width: `${this.props.size}%` }

    return (
      <BandWrapper style={styles} onClick={() => playBand(token, uri)}>
        <BandInnerWrapper>
          <BandName>
            <span>{name}</span>
          </BandName>
          <BandImage>
            <img src={image} />
          </BandImage>
        </BandInnerWrapper>
      </BandWrapper>
    );
  }
}

Band.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string.isRequired,
  size: PropTypes.number,
  token: PropTypes.string,
  uri: PropTypes.string,
};

export default Band;
