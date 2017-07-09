export function SVGBrain (props) {
  return (
    <div className='brainNav'>
      <svg width="570px" height="614px">
        <SVGSkin />
        <a xlinkHref='/brainstems'>
          <SVGBrainBrainstem />
        </a>
        <a xlinkHref='/cerebellums'>
          <SVGBrainCerebellum />
        </a>
        <a xlinkHref='/temporal_lobes'>
          <SVGBrainTemporalLobe />
        </a>
        <a xlinkHref='/occipital_lobes'>
          <SVGBrainOccipitalLobe />
        </a>
        <a xlinkHref='/parietal_lobes'>
          <SVGBrainParietalLobe />
        </a>
        <a xlinkHref='/frontal_lobes'>
          <SVGBrainFrontalLobe />
        </a>
      </svg>
    </div>
  )
}

function SVGBrainFrontalLobe (props) {
  const dots = [
    { x: 374, y:  44, size: 'middle' },
    { x: 304, y:  44, size: 'middle' },
    { x: 234, y:  64, size: 'middle' },
    { x: 174, y: 104, size: 'middle' },
    { x: 154, y: 164, size: 'middle' },
    { x: 174, y: 224, size: 'middle' },
    { x: 234, y: 234, size: 'middle' },
    { x: 274, y: 184, size:  'large' },
    { x: 344, y: 164, size:  'giant' },
    { x: 334, y: 104, size:  'large' }
  ]
  const connectors = [
    { x1: 369, y1:  43, x2: 312, y2:  43 },
    { x1: 296, y1:  45, x2: 240, y2:  61 },
    { x1: 228, y1:  67, x2: 179, y2:  99 },
    { x1: 170, y1: 110, x2: 155, y2: 158 },
    { x1: 155, y1: 171, x2: 171, y2: 218 },
    { x1: 183, y1: 228, x2: 228, y2: 235 },
    { x1: 240, y1: 230, x2: 268, y2: 192 },
    { x1: 282, y1: 182, x2: 334, y2: 168 },
    { x1: 342, y1: 154, x2: 336, y2: 112 },
    { x1: 340, y1:  96, x2: 369, y2:  50 }
  ]
  const color = 'red'
  return <SVGBrainField dots={dots} connectors={connectors} color={color } />
}

function SVGBrainParietalLobe (props) {
  const dots = [
    { x: 374, y:  44, size: 'middle' },
    { x: 334, y: 104, size:  'large' },
    { x: 344, y: 164, size:  'giant' },
    { x: 414, y: 164, size:  'large' },
    { x: 494, y: 134, size: 'middle' },
    { x: 454, y:  74, size: 'middle' }
  ]
  const connectors = [
    { x1: 340, y1:  96, x2: 369, y2:  50 },
    { x1: 342, y1: 154, x2: 336, y2: 112 },
    { x1: 354, y1: 164, x2: 404, y2: 164 },
    { x1: 424, y1: 162, x2: 488, y2: 137 },
    { x1: 491, y1: 127, x2: 458, y2:  79 },
    { x1: 447, y1:  72, x2: 380, y2:  46 }
  ]
  const color = 'yellow'
  return <SVGBrainField dots={dots} connectors={connectors} color={color } />
}

function SVGBrainOccipitalLobe (props) {
  const dots = [
    { x: 414, y: 164, size:  'large' },
    { x: 494, y: 134, size: 'middle' },
    { x: 514, y: 204, size: 'middle' },
    { x: 474, y: 264, size: 'middle' },
    { x: 414, y: 224, size:  'large' }
  ]
  const connectors = [
    { x1: 424, y1: 162, x2: 488, y2: 137 },
    { x1: 496, y1: 139, x2: 513, y2: 197 },
    { x1: 510, y1: 210, x2: 478, y2: 258 },
    { x1: 468, y1: 262, x2: 420, y2: 229 },
    { x1: 414, y1: 216, x2: 414, y2: 172 }
  ]
  const color = 'aqua'
  return <SVGBrainField dots={dots} connectors={connectors} color={color } />
}

function SVGBrainTemporalLobe (props) {
  const dots = [
    { x: 474, y: 264, size: 'middle' },
    { x: 414, y: 224, size:  'large' },
    { x: 414, y: 164, size:  'large' },
    { x: 344, y: 164, size:  'giant' },
    { x: 274, y: 184, size:  'large' },
    { x: 234, y: 234, size: 'middle' },
    { x: 274, y: 284, size: 'middle' },
    { x: 334, y: 284, size: 'middle' },
    { x: 404, y: 284, size: 'middle' }
  ]
  const connectors = [
    { x1: 468, y1: 262, x2: 420, y2: 229 },
    { x1: 414, y1: 216, x2: 414, y2: 172 },
    { x1: 354, y1: 164, x2: 404, y2: 164 },
    { x1: 282, y1: 182, x2: 334, y2: 168 },
    { x1: 240, y1: 230, x2: 268, y2: 192 },
    { x1: 238, y1: 238, x2: 268, y2: 278 },
    { x1: 280, y1: 284, x2: 328, y2: 284 },
    { x1: 340, y1: 284, x2: 398, y2: 284 },
    { x1: 410, y1: 283, x2: 468, y2: 268 }
  ]
  const color = 'green'
  return <SVGBrainField dots={dots} connectors={connectors} color={color } />
}

function SVGBrainCerebellum (props) {
  const dots = [
    { x: 474, y: 264, size: 'middle' },
    { x: 404, y: 284, size: 'middle' },
    { x: 334, y: 284, size: 'middle' },
    { x: 364, y: 324, size:  'small' },
    { x: 434, y: 324, size:  'small' }
  ]
  const connectors = [
    { x1: 410, y1: 283, x2: 468, y2: 268 },
    { x1: 340, y1: 284, x2: 398, y2: 284 },
    { x1: 338, y1: 290, x2: 361, y2: 321 },
    { x1: 369, y1: 324, x2: 429, y2: 324 },
    { x1: 437, y1: 321, x2: 471, y2: 270 }
  ]
  const color = 'blue'
  return <SVGBrainField dots={dots} connectors={connectors} color={color } />
}

function SVGBrainBrainstem (props) {
  const dots = [
    { x: 404, y: 284, size: 'middle' },
    { x: 334, y: 284, size: 'middle' },
    { x: 374, y: 374, size:  'small' },
    { x: 414, y: 374, size:  'small' }
  ]
  const connectors = [
    { x1: 339, y1: 284, x2: 399, y2: 284 },
    { x1: 336, y1: 289, x2: 371, y2: 371 },
    { x1: 379, y1: 374, x2: 409, y2: 374 },
    { x1: 414, y1: 369, x2: 406, y2: 292 }
  ]
  const color = 'purple'
  return <SVGBrainField dots={dots} connectors={connectors} color={color } />
}

function SVGBrainField (props) {
  const { dots, connectors, color } = props
  const shows = dots.concat(connectors)
  return (
    <g>
      {
        shows.map((c, i) => {
          const _i = parseInt(i/2)
          if (i % 2 == 0) {
            return <SVGBrainDot dot={dots[_i]} color={color} key={i} />
          } else {
            return <SVGBrainConnector coordinate={connectors[_i]} color={color} key={i} />
          }
        })
      }
      <SVGBrainAnchorLine coordinates={dots} />
    </g>
  )
}

function SVGBrainDot (props) {
  const { dot, color } = props
  const { r, width } = getSizeProperties(dot['size'])
  return (
    <circle
      cx={dot['x']}
      cy={dot['y']}
      r={r}
      fill="rgba(0,0,0,0)"
      stroke={color}
      strokeWidth={width} />
  )
}

function getSizeProperties (size) {
  switch (size) {
    case 'small':
      return { r: 5, width: 2 }
    case 'middle':
      return { r: 7, width: 3 }
    case 'large':
      return { r: 9, width: 4 }
    case 'giant':
      return { r: 11, width: 5 }
  }
}

function SVGBrainLine (props) {
  const { start, end, color } = props
  const [ x1, y1 ] = start.split(',')
  const [ x2, y2 ] = end.split(',')
  return (
    <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={color} strokeWidth={4} />
  )
}

function SVGBrainConnector (props) {
  const { coordinate, color } = props
  const c = coordinate
  return (
    <line
      x1={c['x1']}
      y1={c['y1']}
      x2={c['x2']}
      y2={c['y2']}
      stroke={color}
      strokeWidth={4} />
  )
}

function SVGBrainAnchorLine (props) {
  const { coordinates } = props
  const firstCoordinate = coordinates.shift()
  const connectedCoordinate = `${firstCoordinate['x']},${firstCoordinate['y']}`
  const m = `M ${connectedCoordinate},`
  const lastL = `L ${connectedCoordinate}`
  const ls = coordinates.map((c) => { return `L ${c['x']},${c['y']}` }).join(' ')
  const d = [m, ls, lastL].join(' ')
  return (
    <path
      stroke="rgba(0,0,0,0)"
      strokeWidth="8"
      fill="rgba(0,0,0,0)"
      d={d} />
  )
}

function SVGSkin (props) {
  return (
    <g>
      <path
        stroke="#272e35"
        strokeWidth="8"
        fill="rgba(0,0,0,0)"
        d="
          M 364,4
          C 614,4 614,364 464,464
          Q 444,474 464,604
        " />
      <path
        stroke="#272e35"
        strokeWidth="8"
        fill="rgba(0,0,0,0)"
        d="
          M 364,4
          Q 114,4 44,214
          C 34,234 34,254 54,284
          L 4,404
          Q 4,414 14,414
          L 44,419
          Q 54,419 54,434
          L 54,454
          L 39,459
          Q 39,469 84,474
          L 54,474
          C 39,484 39,494 49,494
          Q 59,494 59,504
          L 49,534
          Q 44,544 64,554
          Q 84,559 214,564
          Q 234,564 234,584
          L 239,614
        " />
    </g>
  )
}
