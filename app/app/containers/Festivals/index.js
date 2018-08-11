/**
 *
 * Festivals
 *
 */

import React from 'react'
import PropTypes from 'prop-types'


import {
  applyThreshold,
  getMonth,
  getMonthName,
  sortByDate,
} from './helper'

import Festival from 'containers/Festival/index'

import {
  FestivalsWrapper,
  MonthSeperator,
  LevelSelector,
} from './styled'

/* eslint-disable react/prefer-stateless-function */
class Festivals extends React.Component {
  constructor(props) {
    super(props);

    const maxCount = props.festivals.reduce((carry, festival) => {
      const count = festival.artists.reduce((carry, artist) => {
        return carry + 2*artist.highlight + artist.similar
      }, 0);
      return (count > carry) ? count : carry
    }, 0);

    this.state = {
      level: 5,
      maxCount
    };

    this.increaseLevel = this.increaseLevel.bind(this);
    this.decreaseLevel = this.decreaseLevel.bind(this);
  }

  increaseLevel() {
    this.setState((state, props) => {
      return { level: state.level < state.maxCount ? state.level + 1 : state.maxCount }
    });
  }

  decreaseLevel() {
    this.setState((state, props) => {
      return { level: state.level > 2 ? state.level - 1 : 1 }
    });
  }

  render() {
    const {
      festivals,
      token
    } = this.props;

    const {
      level
    } = this.state;

    let month = '01'

    const FestivalList = festivals.sort(sortByDate).filter(festival => applyThreshold(festival, level)).map((festival, index) => {
      const currentMonth = getMonth(festival.date.start)
      if (currentMonth !== month) {
        month = currentMonth
        return <React.Fragment key={`Fragment_${index}`}>
          <MonthSeperator key={`MonthSeperator_${month}`}>{getMonthName(month)}</MonthSeperator>
          <Festival
            key={index}
            artists={festival.artists}
            date={festival.date}
            name={festival.name}
            location={festival.location}
            level={level}
            token={token}
          />
        </React.Fragment>;
      } else {
        return <Festival
          key={index}
          artists={festival.artists}
          date={festival.date}
          name={festival.name}
          location={festival.location}
          level={level}
          token={token}
        />;
      }
    })

    return (
      <React.Fragment>
        <LevelSelector>
          <span onClick={this.increaseLevel}>
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36"><title>ic_arrow_drop_up_36px</title>
              <g className="nc-icon-wrapper" fill="#111111">
                <path d="M10.5 21l7.5-7.5 7.5 7.5z"/>
              </g>
            </svg>
          </span>
          <span>{ level }</span>
          <span onClick={this.decreaseLevel}>
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36"><title>ic_arrow_drop_down_36px</title>
              <g className="nc-icon-wrapper" fill="#111111">
                <path d="M10.5 15l7.5 7.5 7.5-7.5z"/>
              </g>
            </svg>
          </span>
        </LevelSelector>
        <FestivalsWrapper>
          { FestivalList }
        </FestivalsWrapper>
      </React.Fragment>
    );
  }
}

Festivals.propTypes = {
  festivals: PropTypes.array.isRequired,
  token: PropTypes.string,
};

export default Festivals;
