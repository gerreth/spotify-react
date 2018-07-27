/**
 *
 * Festivals
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {
  applyThreshold,
  getMonth,
  getMonthName,
  sortByDate,
} from './helper';

import Festival from 'containers/Festival/index';

const FestivalsWrapper = styled.div`
  margin: 0 auto;
  text-align: center;
  width: 100%;
`;

const MonthSeperator = styled.div`
  font-size: 2.5em;
  margin: 50px auto 0;
  padding: 50px 0;
  text-transform: uppercase;
  width: 1200px;
`;

/* eslint-disable react/prefer-stateless-function */
class Festivals extends React.Component {
  render() {
    const {
      festivals
    } = this.props

    let month = '01'

    const FestivalList = festivals.sort(sortByDate).filter(festival => applyThreshold(festival, 5)).map((festival, index) => {
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
          />
        </React.Fragment>;
      } else {
        return <Festival
          key={index}
          artists={festival.artists}
          date={festival.date}
          name={festival.name}
          location={festival.location}
        />;
      }
    })

    return (
      <FestivalsWrapper>
        { FestivalList }
      </FestivalsWrapper>
    );
  }
}

Festivals.propTypes = {
  festivals: PropTypes.array.isRequired,
};

export default Festivals;
