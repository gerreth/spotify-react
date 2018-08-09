/**
 *
 * Bands
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const BandsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Resizer = styled.div`
  align-items: center;
  background: #FFFFFF;
  bottom: 0;
  display: flex;
  flex-direction: column;
  font-size: 1.25em;
  font-weight: 600;
  justify-content: center;
  line-height: 30px;
  position: absolute;
  width: 60px;

  svg {
    cursor: pointer;

    :hover {

      g {
        fill: #FEE837;
      }
    }
  }
`;

import Band from 'containers/Band/index';

/* eslint-disable react/prefer-stateless-function */
class Bands extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      size: 20
    };

    this.increaseSize = this.increaseSize.bind(this);
    this.decreaseSize = this.decreaseSize.bind(this);
  }

  increaseSize() {
    this.setState((state, props) => {
      return { size: 20 }
    });
  }

  decreaseSize() {
    this.setState((state, props) => {
      return { size: 10 }
    });
  }

  render() {
    const {
      topBands
    } = this.props

    const bands = topBands && topBands.map((band, index) => {
      return <Band
        genres={band.genres}
        image={band.image}
        key={band.id}
        name={band.name}
        timeout={index}
        size={this.state.size}
      />;
    })

    return (
      <BandsWrapper>
        {bands}
        <Resizer>
          {this.state.size === 10 &&
            <span onClick={this.increaseSize}>
              <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36"><title>ic_arrow_drop_up_36px</title>
                <g class="nc-icon-wrapper" fill="#111111">
                  <path d="M10.5 21l7.5-7.5 7.5 7.5z"/>
                </g>
              </svg>
            </span>
          }

          {this.state.size === 20 &&
            <span onClick={this.decreaseSize}>
              <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36"><title>ic_arrow_drop_down_36px</title>
                <g class="nc-icon-wrapper" fill="#111111">
                  <path d="M10.5 15l7.5 7.5 7.5-7.5z"/>
                </g>
              </svg>
            </span>
          }
        </Resizer>
      </BandsWrapper>

    );
  }
}

Bands.propTypes = {
  topBands: PropTypes.object.isRequired,
};

export default Bands;
