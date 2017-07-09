export function SVGBrain (props) {
  return (
    <div className='brainNav'>
      <svg width="570px" height="614px">
        <SVGSkin />
          <SVGBrainBrainstem />
        <SVGBrainCerebellum />
        <SVGBrainTemporalLobe />
        <SVGBrainOccipitalLobe />
        <SVGBrainParietalLobe />
        <SVGBrainFrontalLobe />
      </svg>
    </div>
  )
}

function SVGBrainFrontalLobe (props) {
  return (
    <g>
      /* around */
      <SVGBrainDot cx={374} cy={44} color={'red'} size={'middle'} />
      <SVGBrainLine start={'369,43'} end={'312,43'} color={'red'} />
      <SVGBrainDot cx={304} cy={44} color={'red'} size={'middle'} />
      <SVGBrainLine start={'296,45'} end={'240,61'} color={'red'} />
      <SVGBrainDot cx={234} cy={64} color={'red'} size={'middle'} />
      <SVGBrainLine start={'228,67'} end={'179,99'} color={'red'} />
      <SVGBrainDot cx={174} cy={104} color={'red'} size={'middle'} />
      <SVGBrainLine start={'170,110'} end={'155,158'} color={'red'} />
      <SVGBrainDot cx={154} cy={164} color={'red'} size={'middle'} />
      <SVGBrainLine start={'155,171'} end={'171,218'} color={'red'} />
      <SVGBrainDot cx={174} cy={224} color={'red'} size={'middle'} />
      <SVGBrainLine start={'183,228'} end={'228,235'} color={'red'} />
      <SVGBrainDot cx={234} cy={234} color={'red'} size={'middle'} />
      <SVGBrainLine start={'240,230'} end={'268,192'} color={'red'} />
      <SVGBrainDot cx={274} cy={184} color={'red'} size={'large'} />
      <SVGBrainLine start={'282,182'} end={'334,168'} color={'red'} />
      <SVGBrainDot cx={344} cy={164} color={'red'} size={'giant'} />
      <SVGBrainLine start={'342,154'} end={'336,112'} color={'red'} />
      <SVGBrainDot cx={334} cy={104} color={'red'} size={'large'} />
      <SVGBrainLine start={'340,96'} end={'369,50'} color={'red'} />
      /* /around */
    </g>
  )
}

function SVGBrainParietalLobe (props) {
  return (
    <g>
      /* around */
      <SVGBrainDot cx={374} cy={44} color={'yellow'} size={'middle'} />
      <SVGBrainLine start={'340,96'} end={'369,50'} color={'yellow'} />
      <SVGBrainDot cx={334} cy={104} color={'yellow'} size={'large'} />
      <SVGBrainLine start={'342,154'} end={'336,112'} color={'yellow'} />
      <SVGBrainDot cx={344} cy={164} color={'yellow'} size={'giant'} />
      <SVGBrainLine start={'354,164'} end={'404,164'} color={'yellow'} />
      <SVGBrainDot cx={414} cy={164} color={'yellow'} size={'large'} />
      <SVGBrainLine start={'424,162'} end={'488,137'} color={'yellow'} />
      <SVGBrainDot cx={494} cy={134} color={'yellow'} size={'middle'} />
      <SVGBrainLine start={'491,127'} end={'458,79'} color={'yellow'} />
      <SVGBrainDot cx={454} cy={74} color={'yellow'} size={'middle'} />
      <SVGBrainLine start={'447,72'} end={'380,46'} color={'yellow'} />
      /* /around */
    </g>
  )
}

function SVGBrainOccipitalLobe (props) {
  return (
    <g>
      /* around */
      <SVGBrainDot cx={414} cy={164} color={'aqua'} size={'large'} />
      <SVGBrainLine start={'424,162'} end={'488,137'} color={'aqua'} />
      <SVGBrainDot cx={494} cy={134} color={'aqua'} size={'middle'} />
      <SVGBrainLine start={'496,139'} end={'513,197'} color={'aqua'} />
      <SVGBrainDot cx={514} cy={204} color={'aqua'} size={'middle'} />
      <SVGBrainLine start={'510,210'} end={'478,258'} color={'aqua'} />
      <SVGBrainDot cx={474} cy={264} color={'aqua'} size={'middle'} />
      <SVGBrainLine start={'468,262'} end={'420,229'} color={'aqua'} />
      <SVGBrainDot cx={414} cy={224} color={'aqua'} size={'large'} />
      <SVGBrainLine start={'414,216'} end={'414,172'} color={'aqua'} />
      /* /around */
    </g>
  )
}

function SVGBrainTemporalLobe (props) {
  return (
    <g>
      /* around */
      <SVGBrainDot cx={474} cy={264} color={'green'} size={'middle'} />
      <SVGBrainLine start={'468,262'} end={'420,229'} color={'green'} />
      <SVGBrainDot cx={414} cy={224} color={'green'} size={'large'} />
      <SVGBrainLine start={'414,216'} end={'414,172'} color={'green'} />
      <SVGBrainDot cx={414} cy={164} color={'green'} size={'large'} />
      <SVGBrainLine start={'354,164'} end={'404,164'} color={'green'} />
      <SVGBrainDot cx={344} cy={164} color={'green'} size={'giant'} />
      <SVGBrainLine start={'282,182'} end={'334,168'} color={'green'} />
      <SVGBrainDot cx={274} cy={184} color={'green'} size={'large'} />
      <SVGBrainLine start={'240,230'} end={'268,192'} color={'green'} />
      <SVGBrainDot cx={234} cy={234} color={'green'} size={'middle'} />
      <SVGBrainLine start={'238,238'} end={'268,278'} color={'green'} />
      <SVGBrainDot cx={274} cy={284} color={'green'} size={'middle'} />
      <SVGBrainLine start={'280,284'} end={'328,284'} color={'green'} />
      <SVGBrainDot cx={334} cy={284} color={'green'} size={'middle'} />
      <SVGBrainLine start={'340,284'} end={'398,284'} color={'green'} />
      <SVGBrainDot cx={404} cy={284} color={'green'} size={'middle'} />
      <SVGBrainLine start={'410,283'} end={'468,268'} color={'green'} />
      /* /around */
    </g>
  )
}

function SVGBrainCerebellum (props) {
  return (
    <g>
      /* around */
      <SVGBrainDot cx={474} cy={264} color={'blue'} size={'middle'} />
      <SVGBrainLine start={'410,283'} end={'468,268'} color={'blue'} />
      <SVGBrainDot cx={404} cy={284} color={'blue'} size={'middle'} />
      <SVGBrainLine start={'340,284'} end={'398,284'} color={'blue'} />
      <SVGBrainDot cx={334} cy={284} color={'blue'} size={'middle'} />
      <SVGBrainLine start={'338,290'} end={'361,321'} color={'blue'} />
      <SVGBrainDot cx={364} cy={324} color={'blue'} size={'small'} />
      <SVGBrainLine start={'369,324'} end={'429,324'} color={'blue'} />
      <SVGBrainDot cx={434} cy={324} color={'blue'} size={'small'} />
      <SVGBrainLine start={'437,321'} end={'471,270'} color={'blue'} />
      /* /around */
    </g>
  )
}

function SVGBrainBrainstem (props) {
  return (
    <g>
      /* around */
      <SVGBrainDot cx={404} cy={284} color={'purple'} size={'middle'} />
      <SVGBrainLine start={'339,284'} end={'399,284'} color={'purple'} />
      <SVGBrainDot cx={334} cy={284} color={'purple'} size={'middle'} />
      <SVGBrainLine start={'336,289'} end={'371,371'} color={'purple'} />
      <SVGBrainDot cx={374} cy={374} color={'purple'} size={'small'} />
      <SVGBrainLine start={'379,374'} end={'409,374'} color={'purple'} />
      <SVGBrainDot cx={414} cy={374} color={'purple'} size={'small'} />
      <SVGBrainLine start={'414,369'} end={'406,292'} color={'purple'} />
      /* /around */
    </g>
  )
}

function SVGBrainDot (props) {
  const { cx, cy, color, size } = props
  const { r, width } = getSizeProperties(size)
  return (
    <circle
      cx={cx}
      cy={cy}
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

function SVGSkin (props) {
  return (
    <g>
      <path
        stroke="#37536A"
        strokeWidth="8"
        fill="rgba(0,0,0,0)"
        d="
          M 364,4
          C 614,4 614,364 464,464
          Q 444,474 464,604
        " />
      <path
        stroke="#37536A"
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
