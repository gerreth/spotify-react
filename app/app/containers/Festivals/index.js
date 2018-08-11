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

import Icon from 'components/Icon/index'
import Festival from 'containers/Festival/index'

import {
  FestivalsWrapper,
  Filter,
  MonthSeperator,
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
      countrySelect: false,
      filter: false,
      hiddenCountries: [],
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

  toggle() {
    this.setState((state, props) => {
      return { filter: !state.filter }
    });
  }

  toggleCountrySelect() {
    this.setState((state, props) => {
      return { countrySelect: !state.countrySelect }
    });
  }

  toggleCountry(country) {
    const { hiddenCountries } = this.state
    const index = hiddenCountries.indexOf(country)

    if (index === -1) {
      hiddenCountries.push(country)
    } else {
      hiddenCountries.splice(index, 1)
    }

    this.setState((state, props) => {
      return { hiddenCountries }
    });
  }

  render() {
    const {
      festivals,
      token
    } = this.props;

    const {
      countrySelect,
      hiddenCountries,
      level,
    } = this.state;

    let month = '01'

    const countries = festivals.filter(festival => applyThreshold(festival, level)).reduce((countries, festival) => {
      if (countries.indexOf(festival.location.country) === -1) countries.push(festival.location.country)
      return countries
    }, [])

    const countriesSelect = countries.map(country => {
      const count = festivals
        .filter(festival => applyThreshold(festival, level))
        .reduce((count, festival) => {
          return festival.location.country === country ? count+1 : count
        }, 0)
      if (hiddenCountries.indexOf(country) === -1) {
        return <p style={{ border: 'solid #FEE839 4px', fontSize: '1em', marginTop: '-4px', padding: '9px 9px' }} onClick={this.toggleCountry.bind(this, country)}>{country} ({count})</p>
      } else {
        return <p style={{ background: '#FEE837', border: 'solid #FEE839 4px', fontSize: '1em', marginTop: '-4px', padding: '9px 9px', textDecoration: 'line-through' }} onClick={this.toggleCountry.bind(this, country)}>{country} ({count})</p>
      }
    })

    const FestivalList = festivals.sort(sortByDate)
      .filter(festival => hiddenCountries.indexOf(festival.location.country) === -1)
      .filter(festival => applyThreshold(festival, level))
      .map((festival, index) => {
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

    const filter = this.state.filter ? "active" : ""

    return (
      <React.Fragment>
        <Filter className={filter}>
          <Icon style={{ background: '#FFFFFF' }} type="filter" onClick={this.toggle.bind(this)} />
          <div className="filterWrapper">
            <div className="filter-label">
              <span style={{ display: 'inline-block', lineHeight: '36px', padding: '0 9px' }}>Min Matches:</span>
              <span className="filter" style={{ display: 'inline-block' }}>
                <Icon type="arrow-left" onClick={this.decreaseLevel.bind(this)} />
                <span style={{ display: 'inline-block', padding: '0 9px' }}>{ level }</span>
                <Icon type="arrow-right" onClick={this.increaseLevel.bind(this)} />
              </span>
            </div>
            <div className="filter-label">
              <span style={{ display: 'inline-block', lineHeight: '36px', padding: '0 9px' }}>Countries:</span>
              <div className="filter" style={{ display: 'inline-block', position: 'relative', width: '150px' }}>
                <span style={{ background: '#FFFFFF', border: 'solid #FEE839 2px', marginTop: '-2px', display: 'inline-block', padding: '0 9px', width: '150px' }} onClick={this.toggleCountrySelect.bind(this)}>Select</span>
                {countrySelect &&
                  <div style={{ background: '#FFFFFF', position: 'absolute', bottom: '36px', left: '0px', width: '150px' }}>
                    {countriesSelect}
                  </div>
                }
              </div>
            </div>
          </div>
        </Filter>
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
