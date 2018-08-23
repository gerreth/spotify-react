import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Slider from '@material-ui/lab/Slider'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#333',
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      light: '#0066ff',
      main: '#0044ff',
      // dark: will be calculated from palette.secondary.main,
      contrastText: '#ffcc00',
    },
    // error: will use the default color
  },
});

const styles = {
  root: {
    borderBottom: '1px solid #d9dadc',
    borderLeft: '1px solid #d9dadc',
    borderRight: '1px solid #d9dadc',
    display: 'flex',
    height: 200,
    margin: '0 -1px',
    padding: '5px 0',
  },
  container: {
    backgroundColor: '#111'
  },
  track: {
    backgroundColor: '#111'
  },
  thumb: {
    backgroundColor: '#111'
  }
}

class VerticalSlider extends React.Component {
  state = {
    value: this.props.level,
  }

  handleChange = (event, value) => {
    this.setState({ value })
    this.props.onChange(value)
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ value: nextProps.level });
  }

  render() {
    const { classes, maxCount } = this.props
    const { value } = this.state
    
    return (
      <MuiThemeProvider theme={theme}>
        <div className={classes.root}>
          <Slider min={1} max={maxCount} step={1} value={value} onChange={this.handleChange} vertical reverse/>
        </div>
       </MuiThemeProvider>
    )
  }
}

VerticalSlider.propTypes = {
  classes: PropTypes.object.isRequired,
  level: PropTypes.number,
  maxCount: PropTypes.number,
  onChange: PropTypes.func,
}

export default withStyles(styles)(VerticalSlider)
