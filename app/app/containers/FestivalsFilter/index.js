/**
 *
 * FestivalFilter
 *
 */

import React from 'react'
import PropTypes from 'prop-types'

import Icon from 'components/Icon/index'
import VerticalSlider from 'components/VerticalSlider/index'

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
      showLevels: false,
    }
    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  /**
   * Set the wrapper ref
   */
  setWrapperRef(node) {
    this.wrapperRef = node;
  }

  /**
   * Alert if clicked on outside of element
   */
  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      this.setState((state, props) => {
        return { showCountries: false }
      })
    }
  }

  decreaseLevel = () => {
    this.changeLevel(this.props.level > 1 ? this.props.level - 1 : 1)
  }

  increaseLevel = () => {
    this.changeLevel(this.props.level + 1)
  }

  changeLevel(level) {
    this.props.changeLevel(level)
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

  toggleLevels() {
    this.setState((state, props) => {
      return { showLevels: !state.showLevels }
    })
  }

  onChange(value) {
    this.changeLevel(value)
  }

  render() {
    const {
      countries,
      decreaseLevel,
      increaseLevel,
      level,
      maxCount
    } = this.props

    const active = this.state.active ? "active" : ""

    const {
      showCountries,
      showLevels,
    } = this.state

    return (
      <FestivalsFilterWrapper className={active}>
        <div className="filter-icon" style={{ padding: '0 18px' }}>
          <Icon type="filter" onClick={this.toggleFilter.bind(this)} />
        </div>
        {this.state.active &&
          <LevelSelector>
            <span className="label">Min Matches:</span>
            <Icon type="arrow-left" onClick={this.decreaseLevel.bind(this)} />
            <div className="option-wrapper">
              <div className="option">
                <span className="value" onClick={this.toggleLevels.bind(this)}>{level}</span>
                {showLevels &&
                  <VerticalSlider level={level} maxCount={maxCount} onChange={this.onChange.bind(this)} />
                }
              </div>
            </div>
            <Icon type="arrow-right" onClick={this.increaseLevel.bind(this)} />
          </LevelSelector>
        }
        {this.state.active &&
          <CountrySelector>
            <span className="label">Countries:</span>
            <div className="option-wrapper" ref={this.setWrapperRef}>
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
  countries: PropTypes.array,
  level: PropTypes.number,
  maxCount: PropTypes.number,
}

export default FestivalFilter
