import classNames from 'classnames'
import { Component } from 'react'
import { getComponentName } from '~/brains/helpers/componentManager'
import blueprint from '~/brains/config/svg/blueprint'
import { getBoundingClientRect } from '~/brains/helpers/domReader'

export class SVGBrain extends Component {
  constructor (props) {
    super(props)
  }
  componentWillReceiveProps () {
    const componentName = getComponentName(this.props.selectedComponent)
    if (!!componentName && this.props.selectedComponent === null) {
      this.props.selectComponent(componentName)
    }
  }
  componentDidMount () {
    window.addEventListener('resize', this.componentResize.bind(this))
    setTimeout(() => { this.props.didIntroAnimation() }, 2600)
    this.componentResize()
  }
  componentWillUnmount () {
    window.removeEventListener('resize', this.componentResize.bind(this))
  }
  componentResize () {
    const { width } = getBoundingClientRect(this.refs.brainNavComponent)
    this.props.resize(width)
  }
  render () {
    const width = `${blueprint[this.props.size].width}px`
    const height = `${blueprint[this.props.size].height}px`
    const brainNavClassName = classNames('brainNav', { '_introAnimation_': !this.props.introAnimation })
    return (
      <div className={brainNavClassName} ref='brainNavComponent'>
        <svg width={width} height={height}>
          <SVGSkin {...this.props} />
          <SVGBrainFields {...this.props} />
          <SVGBrainAnimation />
        </svg>
      </div>
    )
  }
}
SVGBrain.propTypes = {
  selectComponent: PropTypes.func,
  didIntroAnimation: PropTypes.func,
  introAnimation: PropTypes.bool,
  resize: PropTypes.func,
  selectedComponent: PropTypes.string,
  size: PropTypes.string
}

function SVGBrainAnimation (props) {
  const dot = { x: 0, y: 0, size: 'M' }
  return (
    <g pointerEvents='none'>
      {
        Array(5).fill().map((_, i) => {
          return <SVGBrainDot dot={dot} color='white' className={`circleAnimation${i + 1}`} key={i} />
        })
      }
    </g>
  )
}

function SVGBrainFields (props) {
  const { selectComponent, selectedComponent, introAnimation, size, hoverComponent, hoveredComponent } = props
  return (
    <g>
      {
        blueprint[size].field.map((c, i) => {
          const brainNavClassName = classNames(`brainNav__${c.fieldName}`, { '_animated_': introAnimation, '_selected_': selectedComponent === c.fieldName })
          const anchors = (hoveredComponent === c.fieldName) ? c.hoveredDots : c.dots
          return (
            <a className={brainNavClassName} xlinkHref='javascript:void(0)' onClick={(() => { if (introAnimation) return selectComponent(c.fieldName) })} onMouseOver={(() => { hoverComponent(c.fieldName) })} onMouseOut={(() => { hoverComponent(null) })} key={i}>
              <SVGBrainField dots={c.dots} connectors={c.connectors} color={c.color} innerDots={c.innerDots} innerConnectors={c.innerConnectors} anchors={anchors} />
            </a>
          )
        })
      }
    </g>
  )
}
SVGBrainFields.propTypes = {
  selectComponent: PropTypes.func,
  selectedComponent: PropTypes.string,
  introAnimation: PropTypes.bool,
  size: PropTypes.string,
  hoverComponent: PropTypes.func,
  hoveredComponent: PropTypes.string
}

function SVGBrainField (props) {
  const { dots, connectors, color, innerDots, innerConnectors, anchors } = props
  const shows = dots.concat(connectors)
  return (
    <g>
      <SVGBrainAnchorLine coordinates={anchors} />
      <g>
        {
          innerConnectors !== undefined ?
          innerConnectors.map((c, i) => {
            return <SVGBrainConnector coordinate={c} color={color} key={i} className={`innerLine${i + 1}`} />
          }) : false
        }
        {
          innerDots !== undefined ?
          innerDots.map((c, i) => {
            return <SVGBrainDot dot={c} color={color} key={i} className={`innerCircle${i + 1}`} />
          }) : false
        }
        {
          shows.map((c, i) => {
            const _i = parseInt(i / 2)
            if (i % 2 === 0) {
              return <SVGBrainDot dot={dots[_i]} color={color} key={i} className={`circle${_i + 1}`} />
            } else {
              return <SVGBrainConnector coordinate={connectors[_i]} color={color} key={i} className={`line${_i + 1}`} />
            }
          })
        }
      </g>
    </g>
  )
}
SVGBrainField.propTypes = {
  dots: PropTypes.array,
  connectors: PropTypes.array,
  color: PropTypes.string,
  innerDots: PropTypes.array,
  innerConnectors: PropTypes.array,
  anchors: PropTypes.array
}

function SVGBrainDot (props) {
  const { dot, color, className } = props
  const { r, width } = getSizeProperties(dot.size)
  return (
    <circle
      className={className}
      cx={dot.x}
      cy={dot.y}
      r={r}
      fill="#222222"
      stroke={color}
      strokeWidth={width} />
  )
}
SVGBrainDot.propTypes = {
  dot: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number
  }),
  color: PropTypes.string,
  className: PropTypes.string
}

function getSizeProperties (size) {
  switch (size) {
  case 'SS':
    return { r: 5, width: 2 }
  case 'S':
    return { r: 7, width: 3 }
  case 'M':
    return { r: 9, width: 4 }
  case 'L':
    return { r: 11, width: 5 }
  case 'LL':
    return { r: 13, width: 6 }
  }
}

function SVGBrainConnector (props) {
  const { coordinate, color, className } = props
  return (
    <line
      className={className}
      x1={coordinate.x1}
      y1={coordinate.y1}
      x2={coordinate.x2}
      y2={coordinate.y2}
      stroke={color}
      strokeWidth={4} />
  )
}
SVGBrainConnector.propTypes = {
  coordinate: PropTypes.shape({
    x1: PropTypes.number,
    y1: PropTypes.number,
    x2: PropTypes.number,
    x2: PropTypes.number
  }),
  color: PropTypes.string,
  className: PropTypes.string
}

function SVGBrainAnchorLine (props) {
  const { coordinates } = props
  const copiedCoordinates = Object.assign([], coordinates)
  const firstCoordinate = copiedCoordinates.shift()
  const connectedCoordinate = `${firstCoordinate.x},${firstCoordinate.y}`
  const m = `M ${connectedCoordinate},`
  const lastL = `L ${connectedCoordinate}`
  const ls = coordinates.map((c) => { return `L ${c.x},${c.y}` }).join(' ')
  const d = [m, ls, lastL].join(' ')
  return (
    <path
      stroke="rgba(0,0,0,0)"
      strokeWidth="4"
      fill="rgba(0,0,0,0)"
      d={d} />
  )
}
SVGBrainAnchorLine.propTypes = {
  coordinates: PropTypes.array
}

function SVGSkin (props) {
  const { size } = props
  return (
    <g className='brainNav__skin'>
      {
        blueprint[size].skin.paths.map((path, i) => {
          return (
            <path
              fill="rgba(0,0,0,0)"
              stroke={blueprint[size].skin.color}
              strokeWidth={blueprint[size].skin.width}
              d={path.join(' ')}
              key={i} />
          )
        })
      }
    </g>
  )
}
SVGSkin.propTypes = {
  size: PropTypes.string
}
