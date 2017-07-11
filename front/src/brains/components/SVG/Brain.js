export function SVGBrain (props) {
  return (
    <div className='brainNav'>
      <svg width="570px" height="614px">
        <SVGSkin />
        <a className='brainNav__brainstem' xlinkHref='/brainstems'>
          <SVGBrainBrainstem />
        </a>
        <a className='brainNav__cerebellum' xlinkHref='/cerebellums'>
          <SVGBrainCerebellum />
        </a>
        <a className='brainNav__temporalLobe' xlinkHref='/temporal_lobes'>
          <SVGBrainTemporalLobe />
        </a>
        <a className='brainNav__occipitalLobe' xlinkHref='/occipital_lobes'>
          <SVGBrainOccipitalLobe />
        </a>
        <a className='brainNav__parietalLobe' xlinkHref='/parietal_lobes'>
          <SVGBrainParietalLobe />
        </a>
        <a className='brainNav__frontalLobe' xlinkHref='/frontal_lobes'>
          <SVGBrainFrontalLobe />
        </a>
        <SVGBrainAnimation />
      </svg>
    </div>
  )
}

function SVGBrainAnimation (props) {
  const lines = [
    [
      { x: 174, y: 224 },
      { x: 154, y: 164 },
      { x: 174, y: 104 },
      { x: 218, y: 162 },
      { x: 274, y: 184 },
      { x: 300, y: 234 },
      { x: 334, y: 284 },
      { x: 374, y: 374 }
    ],
    [
      { x: 454, y:  74 },
      { x: 494, y: 134 },
      { x: 440, y: 120 },
      { x: 414, y: 164 },
      { x: 344, y: 164 },
      { x: 360, y: 230 },
      { x: 334, y: 284 },
      { x: 414, y: 374 }
    ],
    [
      { x: 514, y: 204 },
      { x: 470, y: 200 },
      { x: 414, y: 224 },
      { x: 474, y: 264 },
      { x: 404, y: 284 },
      { x: 414, y: 374 }
    ],
    [
      { x: 374, y:  44 },
      { x: 304, y:  44 },
      { x: 270, y: 118 },
      { x: 274, y: 184 },
      { x: 234, y: 234 },
      { x: 274, y: 284 },
      { x: 334, y: 284 },
      { x: 374, y: 374 }
    ],
    [
      { x: 434, y: 324 },
      { x: 364, y: 324 },
      { x: 334, y: 284 },
      { x: 404, y: 284 },
      { x: 414, y: 374 }
    ]
  ]
  const dots = [
    { x: 0, y: 0, size: 'M' },
    { x: 0, y: 0, size: 'M' },
    { x: 0, y: 0, size: 'M' },
    { x: 0, y: 0, size: 'M' },
    { x: 0, y: 0, size: 'M' },
  ]
  return (
    <g pointerEvents='none'>
      {
        lines.map((c, i) => {
          return <SVGBrainAnimationLine coordinates={c} i={i} key={i} />
        })
      }
      {
        dots.map((c, i) => {
          return <SVGBrainAnimationDot dot={c} color={'white'} i={i} key={i} />
        })
      }
    </g>
  )
}

function SVGBrainFrontalLobe (props) {
  const dots = [
    { x: 304, y:  44, size: 'S' },
    { x: 234, y:  64, size: 'S' },
    { x: 174, y: 104, size: 'S' },
    { x: 154, y: 164, size: 'S' },
    { x: 174, y: 224, size: 'S' },
    { x: 234, y: 234, size: 'S' },
    { x: 274, y: 184, size: 'M' },
    { x: 344, y: 164, size: 'L' },
    { x: 334, y: 104, size: 'M' },
    { x: 374, y:  44, size: 'S' }
  ]
  const connectors = [
    { x1: 296, y1:  45, x2: 240, y2:  61 },
    { x1: 228, y1:  67, x2: 179, y2:  99 },
    { x1: 170, y1: 110, x2: 155, y2: 158 },
    { x1: 155, y1: 171, x2: 171, y2: 218 },
    { x1: 181, y1: 227, x2: 228, y2: 235 },
    { x1: 240, y1: 230, x2: 268, y2: 192 },
    { x1: 282, y1: 182, x2: 334, y2: 168 },
    { x1: 342, y1: 154, x2: 336, y2: 112 },
    { x1: 340, y1:  96, x2: 369, y2:  50 },
    { x1: 369, y1:  43, x2: 312, y2:  43 }
  ]
  const innerDots = [
    { x: 218, y: 162, size: 'M' },
    { x: 270, y: 118, size: 'M' }
  ]
  const innerConnectors = [
    { x1: 174, y1: 104, x2: 218, y2: 162 },
    { x1: 154, y1: 164, x2: 218, y2: 162 },
    { x1: 174, y1: 227, x2: 218, y2: 162 },
    { x1: 234, y1: 234, x2: 218, y2: 162 },
    { x1: 274, y1: 184, x2: 218, y2: 162 },
    { x1: 218, y1: 162, x2: 270, y2: 118 },
    { x1: 174, y1: 104, x2: 270, y2: 118 },
    { x1: 234, y1:  64, x2: 270, y2: 118 },
    { x1: 304, y1:  44, x2: 270, y2: 118 },
    { x1: 334, y1: 104, x2: 270, y2: 118 },
    { x1: 344, y1: 164, x2: 270, y2: 118 },
    { x1: 274, y1: 184, x2: 270, y2: 118 },
    { x1: 304, y1:  44, x2: 334, y2: 104 }
  ]
  const color = 'red'
  return <SVGBrainField dots={dots} connectors={connectors} color={color} innerDots={innerDots} innerConnectors={innerConnectors} />
}

function SVGBrainParietalLobe (props) {
  const dots = [
    { x: 374, y:  44, size: 'S' },
    { x: 334, y: 104, size: 'M' },
    { x: 344, y: 164, size: 'L' },
    { x: 414, y: 164, size: 'M' },
    { x: 494, y: 134, size: 'S' },
    { x: 454, y:  74, size: 'S' }
  ]
  const connectors = [
    { x1: 340, y1:  96, x2: 369, y2:  50 },
    { x1: 342, y1: 154, x2: 336, y2: 112 },
    { x1: 354, y1: 164, x2: 404, y2: 164 },
    { x1: 424, y1: 162, x2: 488, y2: 137 },
    { x1: 491, y1: 127, x2: 458, y2:  79 },
    { x1: 447, y1:  72, x2: 380, y2:  46 }
  ]
  const innerDots = [
    { x: 390, y: 110, size: 'M' },
    { x: 440, y: 120, size: 'M' },
  ]
  const innerConnectors = [
    { x1: 374, y1:  44, x2: 390, y2: 110 },
    { x1: 334, y1: 104, x2: 390, y2: 110 },
    { x1: 344, y1: 164, x2: 390, y2: 110 },
    { x1: 414, y1: 164, x2: 390, y2: 110 },
    { x1: 454, y1:  74, x2: 390, y2: 110 },
    { x1: 414, y1: 164, x2: 440, y2: 120 },
    { x1: 454, y1:  74, x2: 440, y2: 120 },
    { x1: 494, y1: 134, x2: 440, y2: 120 },
    { x1: 390, y1: 110, x2: 440, y2: 120 },
  ]
  const color = 'yellow'
  return <SVGBrainField dots={dots} connectors={connectors} color={color} innerDots={innerDots} innerConnectors={innerConnectors} />
}

function SVGBrainOccipitalLobe (props) {
  const dots = [
    { x: 494, y: 134, size: 'S' },
    { x: 414, y: 164, size: 'M' },
    { x: 414, y: 224, size: 'M' },
    { x: 474, y: 264, size: 'S' },
    { x: 514, y: 204, size: 'S' }
  ]
  const connectors = [
    { x1: 488, y1: 137, x2: 424, y2: 162 },
    { x1: 414, y1: 216, x2: 414, y2: 172 },
    { x1: 468, y1: 262, x2: 420, y2: 229 },
    { x1: 510, y1: 210, x2: 478, y2: 258 },
    { x1: 496, y1: 139, x2: 513, y2: 197 }
  ]
  const innerDots = [
    { x: 470, y: 200, size: 'M' }
  ]
  const innerConnectors = [
    { x1: 494, y1: 134, x2: 470, y2: 200 },
    { x1: 414, y1: 164, x2: 470, y2: 200 },
    { x1: 414, y1: 224, x2: 470, y2: 200 },
    { x1: 474, y1: 264, x2: 470, y2: 200 },
    { x1: 514, y1: 204, x2: 470, y2: 200 }
  ]
  const color = 'aqua'
  return <SVGBrainField dots={dots} connectors={connectors} color={color} innerDots={innerDots} innerConnectors={innerConnectors} />
}

function SVGBrainTemporalLobe (props) {
  const dots = [
    { x: 344, y: 164, size: 'L' },
    { x: 274, y: 184, size: 'M' },
    { x: 234, y: 234, size: 'S' },
    { x: 274, y: 284, size: 'S' },
    { x: 334, y: 284, size: 'S' },
    { x: 404, y: 284, size: 'S' },
    { x: 474, y: 264, size: 'S' },
    { x: 414, y: 224, size: 'M' },
    { x: 414, y: 164, size: 'M' }
  ]
  const connectors = [
    { x1: 282, y1: 182, x2: 334, y2: 168 },
    { x1: 240, y1: 230, x2: 268, y2: 192 },
    { x1: 238, y1: 238, x2: 268, y2: 278 },
    { x1: 280, y1: 284, x2: 328, y2: 284 },
    { x1: 340, y1: 284, x2: 398, y2: 284 },
    { x1: 410, y1: 283, x2: 468, y2: 268 },
    { x1: 468, y1: 262, x2: 420, y2: 229 },
    { x1: 414, y1: 216, x2: 414, y2: 172 },
    { x1: 354, y1: 164, x2: 404, y2: 164 }
  ]
  const innerDots = [
    { x: 300, y: 234, size: 'M' },
    { x: 360, y: 230, size: 'M' }
  ]
  const innerConnectors = [
    { x1: 344, y1: 164, x2: 300, y2: 234 },
    { x1: 274, y1: 184, x2: 300, y2: 234 },
    { x1: 234, y1: 234, x2: 300, y2: 234 },
    { x1: 274, y1: 284, x2: 300, y2: 234 },
    { x1: 274, y1: 284, x2: 300, y2: 234 },
    { x1: 334, y1: 284, x2: 300, y2: 234 },
    { x1: 334, y1: 284, x2: 360, y2: 230 },
    { x1: 404, y1: 284, x2: 360, y2: 230 },
    { x1: 414, y1: 224, x2: 360, y2: 230 },
    { x1: 414, y1: 164, x2: 360, y2: 230 },
    { x1: 344, y1: 164, x2: 360, y2: 230 },
    { x1: 300, y1: 234, x2: 360, y2: 230 },
    { x1: 404, y1: 284, x2: 414, y2: 224 }
  ]
  const color = 'green'
  return <SVGBrainField dots={dots} connectors={connectors} color={color} innerDots={innerDots} innerConnectors={innerConnectors} />
}

function SVGBrainCerebellum (props) {
  const dots = [
    { x: 404, y: 284, size:  'S' },
    { x: 334, y: 284, size:  'S' },
    { x: 364, y: 324, size: 'SS' },
    { x: 434, y: 324, size: 'SS' },
    { x: 474, y: 264, size:  'S' }
  ]
  const connectors = [
    { x1: 340, y1: 284, x2: 398, y2: 284 },
    { x1: 338, y1: 290, x2: 361, y2: 321 },
    { x1: 369, y1: 324, x2: 429, y2: 324 },
    { x1: 437, y1: 321, x2: 471, y2: 270 },
    { x1: 410, y1: 283, x2: 468, y2: 268 }
  ]
  const innerConnectors = [
    { x1: 364, y1: 324, x2: 404, y2: 284 },
    { x1: 434, y1: 324, x2: 404, y2: 284 }
  ]
  const color = 'blue'
  return <SVGBrainField dots={dots} connectors={connectors} color={color} innerConnectors={innerConnectors} />
}

function SVGBrainBrainstem (props) {
  const dots = [
    { x: 404, y: 284, size:  'S' },
    { x: 334, y: 284, size:  'S' },
    { x: 374, y: 374, size: 'SS' },
    { x: 414, y: 374, size: 'SS' }
  ]
  const connectors = [
    { x1: 339, y1: 284, x2: 399, y2: 284 },
    { x1: 336, y1: 289, x2: 371, y2: 371 },
    { x1: 379, y1: 374, x2: 409, y2: 374 },
    { x1: 414, y1: 369, x2: 406, y2: 292 }
  ]
  const innerConnectors = [
    { x1: 334, y1: 284, x2: 414, y2: 374 }
  ]
  const color = 'purple'
  return <SVGBrainField dots={dots} connectors={connectors} color={color} innerConnectors={innerConnectors} />
}

function SVGBrainField (props) {
  const { dots, connectors, color, innerDots, innerConnectors } = props
  const shows = dots.concat(connectors)
  return (
    <g>
      <SVGBrainAnchorLine coordinates={dots} />
      {
        innerConnectors !== undefined ?
        innerConnectors.map((c, i) => {
          return <SVGBrainConnector coordinate={c} color={color} key={i} i={'Inner'} />
        }) : false
      }
      {
        innerDots !== undefined ?
        innerDots.map((c, i) => {
          return <SVGBrainDot dot={c} color={color} key={i} i={'Inner'} />
        }) : false
      }
      {
        shows.map((c, i) => {
          const _i = parseInt(i / 2)
          if (i % 2 === 0) {
            return <SVGBrainDot dot={dots[_i]} color={color} key={i} i={_i} />
          } else {
            return <SVGBrainConnector coordinate={connectors[_i]} color={color} key={i} i={_i} />
          }
        })
      }
    </g>
  )
}

function SVGBrainDot (props) {
  const { dot, color, i } = props
  const { r, width } = getSizeProperties(dot['size'])
  return (
    <circle
      className={`circle${i + 1}`}
      cx={dot['x']}
      cy={dot['y']}
      r={r}
      fill="#222222"
      stroke={color}
      strokeWidth={width} />
  )
}

function SVGBrainAnimationDot (props) {
  const { dot, color, i } = props
  const { r, width } = getSizeProperties(dot['size'])
  const dotAnimationClass = `circleAnimation${i + 1}`
  const lineAnimationClass = `lineAnimation${i + 1}`
  return (
    <circle
      className={dotAnimationClass}
      cx={dot['x']}
      cy={dot['y']}
      r={r}
      fill="#222222"
      stroke={color}
      strokeWidth={width}>
      <animateMotion dur="1s" repeatCount="indefinite">
        <mpath xlinkHref={`#${lineAnimationClass}`} />
      </animateMotion>
    </circle>
  )
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
  const { coordinate, color, i } = props
  const c = coordinate
  return (
    <line
      className={`line${i + 1}`}
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

function SVGBrainAnimationLine (props) {
  const { coordinates, i } = props
  const firstCoordinate = coordinates.shift()
  const m = `M ${firstCoordinate['x']},${firstCoordinate['y']}`
  const ls = coordinates.map((c) => { return `L ${c['x']},${c['y']}` }).join(' ')
  const d = [m, ls].join(' ')
  const lineAnimationClass = `lineAnimation${i + 1}`
  return (
    <path
      id={lineAnimationClass}
      stroke="rgba(0,0,0,0)"
      strokeWidth="1"
      fill="rgba(0,0,0,0)"
      d={d} />
  )
}

function SVGSkin (props) {
  const color = '#272e35'
  return (
    <g className='brainNav__skin'>
      <path
        stroke={color}
        strokeWidth="8"
        fill="rgba(0,0,0,0)"
        d="
          M 364,4
          C 614,4 614,364 464,464
          Q 444,474 464,604
        " />
      <path
        stroke={color}
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
