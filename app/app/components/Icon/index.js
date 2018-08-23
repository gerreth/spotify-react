/**
 *
 * Icon
 *
 */

import PropTypes from 'prop-types'
import React from 'react'

const Icon = (props) => {
  const {
    onClick,
    type,
  } = props

  const style = {
    background: '#FFFFFF'
  }

  switch (type) {
    case 'filter': return <svg onClick={onClick} xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36"><title>ic_arrow_drop_up_36px</title>
        <g className="nc-icon-wrapper" fill="#111111">
          <rect x="8" y="12" width="20" height="2" />
          <rect x="8" y="18" width="20" height="2" />
          <rect x="8" y="24" width="20" height="2" />
          <circle cx="13" cy="13" r="2" strokeWidth="2" stroke="#111111" fill="white" />
          <circle cx="24" cy="19" r="2" strokeWidth="2" stroke="#111111" fill="white" />
          <circle cx="16" cy="25" r="2" strokeWidth="2" stroke="#111111" fill="white" />
        </g>
      </svg>
    case 'arrow-left': return <svg style={style} onClick={onClick} xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36"><title>ic_arrow_drop_up_36px</title>
        <g className="nc-icon-wrapper" fill="#111111">
          <polygon points="14,18,22,12,22,24"/>
        </g>
      </svg>
    case 'arrow-right': return <svg style={style} onClick={onClick} xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36"><title>ic_arrow_drop_up_36px</title>
        <g className="nc-icon-wrapper" fill="#111111">
          <polygon points="22,18,14,12,14,24"/>
        </g>
      </svg>
  }
};

export default Icon
