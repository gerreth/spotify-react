/**
 *
 * Band
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const BandWrapper = styled.div`
  position: relative;
  transition: all 100ms ease-in;
  width: 10%;

  &.hide {
    opacity: 0;
  }

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

  constructor(props) {
    super(props)

    this.state = {
      hide: true,
    }
  }

  componentDidMount() {
    const {
      timeout,
    } = this.props

    const that = this

    setTimeout(function(){
      that.setState((state, props) => {
        return { hide: false }
      });
    }, timeout*20);
  }

  render() {
    const {
      image,
      name,
      timeout,
    } = this.props

    const className = this.state.hide ? 'hide' : '';
    const styles = { width: `${this.props.size}%` }

    return (
      <BandWrapper className={className} style={styles}>
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
  key: PropTypes.string,
  image: PropTypes.string,
  name: PropTypes.string.isRequired,
  size: PropTypes.number,
  timeout: PropTypes.number,
};

export default Band;
