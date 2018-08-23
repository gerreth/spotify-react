/**
 *
 * Festivals
 *
 */

import React from 'react'
import PropTypes from 'prop-types'

import { sortByDate } from '../../helper/index'

import Icon from 'components/Icon/index'
import Festival from 'containers/Festival/index'
import FestivalsFilter from 'containers/FestivalsFilter/index'

import { applyThreshold, getMonth, getMonthName } from './helper'
import { FestivalsWrapper, Filter, MonthSeperator } from './styled'

/* eslint-disable react/prefer-stateless-function */
class Festivals extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      countrySelect: false,
      filter: false,
      hiddenCountries: [],
      level: 5
    }
  }

  getCountries(filteredFestivals, level) {
    return filteredFestivals.reduce((countries, festival) => {
      if (countries.indexOf(festival.location.country) === -1) countries.push(festival.location.country)
      return countries
    }, [])
  }

  getCountriesSelect(filteredFestivals, hiddenCountries, level) {
    const countries = this.getCountries(filteredFestivals, level)

    return countries.map(country => {
      const count = filteredFestivals.filter(festival => festival.location.country === country).length
      if (hiddenCountries.indexOf(country) === -1) {
        return <span onClick={this.toggleCountry.bind(this, country)}>{country} ({count})</span>
      } else {
        return <span style={{ textDecoration: 'line-through' }} onClick={this.toggleCountry.bind(this, country)}>{country} ({count})</span>
      }
    })
  }

  getFestivalList(filteredFestivals, hiddenCountries, level, token) {
    let month = '01'

    return filteredFestivals
      .filter(festival => hiddenCountries.indexOf(festival.location.country) === -1)
      .map((festival, index) => {
        const currentMonth = getMonth(festival.date.start)
        const seperator = this.getMonthSeperator(currentMonth, month)
        month = currentMonth

        return <React.Fragment key={`Fragment_${index}`}>
          {seperator}
          <Festival
            key={index}
            artists={festival.artists}
            date={festival.date}
            festival={festival}
            name={festival.name}
            location={festival.location}
            level={level}
            path={festival.path}
            token={token}
          />
        </React.Fragment>
      })
  }

  getMonthSeperator(currentMonth, month) {
    return (currentMonth !== month)
      ? <MonthSeperator key={`MonthSeperator_${currentMonth}`}>{getMonthName(currentMonth)}</MonthSeperator>
      : undefined
  }

  changeLevel(level) {
    const { maxCount } = this.props
    this.setState((state, props) => {
      return { level: level < maxCount ? level : maxCount }
    })
  }

  toggle() {
    this.setState((state, props) => {
      return { filter: !state.filter }
    })
  }

  toggleCountrySelect() {
    this.setState((state, props) => {
      return { countrySelect: !state.countrySelect }
    })
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
    })
  }

  render() {
    const {
      festivals,
      token,
      maxCount
    } = this.props

    const {
      countrySelect,
      hiddenCountries,
      level,
    } = this.state

    const filteredFestivals = festivals.sort(sortByDate).filter(festival => applyThreshold(festival, level))
    const countries = this.getCountriesSelect(filteredFestivals, hiddenCountries, level)
    const festivalList = this.getFestivalList(filteredFestivals, hiddenCountries, level, token)
    const filter = this.state.filter ? "active" : ""

    return (
      <FestivalsWrapper>
        <FestivalsFilter changeLevel={this.changeLevel.bind(this)} countries={countries} level={level} maxCount={maxCount}/>
        { festivalList }
      </FestivalsWrapper>
    )
  }
}

Festivals.propTypes = {
  festivals: PropTypes.array.isRequired,
  token: PropTypes.string,
  maxCount: PropTypes.number,
}

export default Festivals
