/**
 *
 * FestivalFilter
 *
 */

import React from 'react'
import PropTypes from 'prop-types'

import Icon from 'components/Icon/index'

import {
  CountrySelector,
  FestivalsFilterWrapper,
  LevelSelector,
} from './styled'

/* eslint-disable react/prefer-stateless-function */
class FestivalFilter extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      active: false,
      showCountries: false,
    }
  }

  decreaseLevel = () => {
    const {
      changeLevel,
      level
    } = this.props

    changeLevel(level > 1 ? level - 1 : 1)
  }

  increaseLevel = () => {
    const {
      changeLevel,
      level
    } = this.props

    changeLevel(level + 1)
  }

  toggleFilter() {
    this.setState((state, props) => {
      return { active: !state.active }
    })
  }

  toggleCountries() {
    this.setState((state, props) => {
      return { showCountries: !state.showCountries }
    })
  }

  render() {
    const {
      countries,
      decreaseLevel,
      increaseLevel,
      level
    } = this.props

    const active = this.state.active ? "active" : ""
    const showCountries = this.state.showCountries

    return (
      <FestivalsFilterWrapper className={active}>
        <div className="filter-icon" style={{ padding: '0 18px' }}>
          <Icon type="filter" onClick={this.toggleFilter.bind(this)} />
        </div>
        {this.state.active &&
          <LevelSelector>
            <span className="label">Min Matches:</span>
            <Icon type="arrow-left" onClick={this.decreaseLevel.bind(this)} />
            <span className="value">{level}</span>
            <Icon type="arrow-right" onClick={this.increaseLevel.bind(this)} />
          </LevelSelector>
        }
        {this.state.active &&
          <CountrySelector>
            <span className="label">Countries:</span>
            <div className="option-wrapper">
              <div className="option">
                <span onClick={this.toggleCountries.bind(this)}>Select</span>
                {showCountries &&
                  countries
                }
              </div>
            </div>
          </CountrySelector>
        }
      </FestivalsFilterWrapper>
    )
  }
}

FestivalFilter.propTypes = {
  changeLevel: PropTypes.func,
  level: PropTypes.string,
}

export default FestivalFilter
