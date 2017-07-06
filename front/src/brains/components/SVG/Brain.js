export function SVGBrain (props) {
  return (
    <div className='brainNav'>
      <svg width="640px" height="680px">
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
      <SVGBrainDot cx={410} cy={80} color={'red'} size={'middle'} />
      <SVGBrainLine start={'405,79'} end={'348,79'} color={'red'} />
      <SVGBrainDot cx={340} cy={80} color={'red'} size={'middle'} />
      <SVGBrainLine start={'332,81'} end={'276,97'} color={'red'} />
      <SVGBrainDot cx={270} cy={100} color={'red'} size={'middle'} />
      <SVGBrainLine start={'264,103'} end={'215,135'} color={'red'} />
      <SVGBrainDot cx={210} cy={140} color={'red'} size={'middle'} />
      <SVGBrainLine start={'206,146'} end={'191,194'} color={'red'} />
      <SVGBrainDot cx={190} cy={200} color={'red'} size={'middle'} />
      <SVGBrainLine start={'191,207'} end={'207,254'} color={'red'} />
      <SVGBrainDot cx={210} cy={260} color={'red'} size={'middle'} />
      <SVGBrainLine start={'216,264'} end={'264,271'} color={'red'} />
      <SVGBrainDot cx={270} cy={270} color={'red'} size={'middle'} />
      <SVGBrainLine start={'276,266'} end={'304,228'} color={'red'} />
      <SVGBrainDot cx={310} cy={220} color={'red'} size={'large'} />
      <SVGBrainLine start={'318,218'} end={'370,204'} color={'red'} />
      <SVGBrainDot cx={380} cy={200} color={'red'} size={'giant'} />
      <SVGBrainLine start={'378,190'} end={'372,148'} color={'red'} />
      <SVGBrainDot cx={370} cy={140} color={'red'} size={'large'} />
      <SVGBrainLine start={'376,132'} end={'405,86'} color={'red'} />
      /* /around */
    </g>
  )
}

function SVGBrainParietalLobe (props) {
  return (
    <g>
      /* around */
      <SVGBrainDot cx={410} cy={80} color={'yellow'} size={'middle'} />
      <SVGBrainLine start={'376,132'} end={'405,86'} color={'yellow'} />
      <SVGBrainDot cx={370} cy={140} color={'yellow'} size={'large'} />
      <SVGBrainLine start={'378,190'} end={'372,148'} color={'yellow'} />
      <SVGBrainDot cx={380} cy={200} color={'yellow'} size={'giant'} />
      <SVGBrainLine start={'390,200'} end={'440,200'} color={'yellow'} />
      <SVGBrainDot cx={450} cy={200} color={'yellow'} size={'large'} />
      <SVGBrainLine start={'460,198'} end={'524,173'} color={'yellow'} />
      <SVGBrainDot cx={530} cy={170} color={'yellow'} size={'middle'} />
      <SVGBrainLine start={'527,163'} end={'494,115'} color={'yellow'} />
      <SVGBrainDot cx={490} cy={110} color={'yellow'} size={'middle'} />
      <SVGBrainLine start={'483,108'} end={'416,82'} color={'yellow'} />
      /* /around */
    </g>
  )
}

function SVGBrainOccipitalLobe (props) {
  return (
    <g>
      /* around */
      <SVGBrainDot cx={450} cy={200} color={'aqua'} size={'large'} />
      <SVGBrainLine start={'460,198'} end={'524,173'} color={'aqua'} />
      <SVGBrainDot cx={530} cy={170} color={'aqua'} size={'middle'} />
      <SVGBrainLine start={'532,175'} end={'549,233'} color={'aqua'} />
      <SVGBrainDot cx={550} cy={240} color={'aqua'} size={'middle'} />
      <SVGBrainLine start={'546,246'} end={'514,294'} color={'aqua'} />
      <SVGBrainDot cx={510} cy={300} color={'aqua'} size={'middle'} />
      <SVGBrainLine start={'504,298'} end={'456,265'} color={'aqua'} />
      <SVGBrainDot cx={450} cy={260} color={'aqua'} size={'large'} />
      <SVGBrainLine start={'450,252'} end={'450,208'} color={'aqua'} />
      /* /around */
    </g>
  )
}

function SVGBrainTemporalLobe (props) {
  return (
    <g>
      /* around */
      <SVGBrainDot cx={510} cy={300} color={'green'} size={'middle'} />
      <SVGBrainLine start={'504,298'} end={'456,265'} color={'green'} />
      <SVGBrainDot cx={450} cy={260} color={'green'} size={'large'} />
      <SVGBrainLine start={'450,252'} end={'450,208'} color={'green'} />
      <SVGBrainDot cx={450} cy={200} color={'green'} size={'large'} />
      <SVGBrainLine start={'390,200'} end={'440,200'} color={'green'} />
      <SVGBrainDot cx={380} cy={200} color={'green'} size={'giant'} />
      <SVGBrainLine start={'318,218'} end={'370,204'} color={'green'} />
      <SVGBrainDot cx={310} cy={220} color={'green'} size={'large'} />
      <SVGBrainLine start={'276,266'} end={'304,228'} color={'green'} />
      <SVGBrainDot cx={270} cy={270} color={'green'} size={'middle'} />
      <SVGBrainLine start={'274,274'} end={'304,314'} color={'green'} />
      <SVGBrainDot cx={310} cy={320} color={'green'} size={'middle'} />
      <SVGBrainLine start={'316,320'} end={'364,320'} color={'green'} />
      <SVGBrainDot cx={370} cy={320} color={'green'} size={'middle'} />
      <SVGBrainLine start={'376,320'} end={'434,320'} color={'green'} />
      <SVGBrainDot cx={440} cy={320} color={'green'} size={'middle'} />
      <SVGBrainLine start={'446,319'} end={'504,304'} color={'green'} />
      /* /around */
    </g>
  )
}

function SVGBrainCerebellum (props) {
  return (
    <g>
      /* around */
      <SVGBrainDot cx={510} cy={300} color={'blue'} size={'middle'} />
      <SVGBrainLine start={'446,319'} end={'504,304'} color={'blue'} />
      <SVGBrainDot cx={440} cy={320} color={'blue'} size={'middle'} />
      <SVGBrainLine start={'376,320'} end={'434,320'} color={'blue'} />
      <SVGBrainDot cx={370} cy={320} color={'blue'} size={'middle'} />
      <SVGBrainLine start={'374,326'} end={'397,357'} color={'blue'} />
      <SVGBrainDot cx={400} cy={360} color={'blue'} size={'small'} />
      <SVGBrainLine start={'405,360'} end={'465,360'} color={'blue'} />
      <SVGBrainDot cx={470} cy={360} color={'blue'} size={'small'} />
      <SVGBrainLine start={'473,357'} end={'507,306'} color={'blue'} />
      /* /around */
    </g>
  )
}

function SVGBrainBrainstem (props) {
  return (
    <g>
      /* around */
      <SVGBrainDot cx={440} cy={320} color={'purple'} size={'middle'} />
      <SVGBrainLine start={'375,320'} end={'435,320'} color={'purple'} />
      <SVGBrainDot cx={370} cy={320} color={'purple'} size={'middle'} />
      <SVGBrainLine start={'372,325'} end={'407,407'} color={'purple'} />
      <SVGBrainDot cx={410} cy={410} color={'purple'} size={'small'} />
      <SVGBrainLine start={'415,410'} end={'445,410'} color={'purple'} />
      <SVGBrainDot cx={450} cy={410} color={'purple'} size={'small'} />
      <SVGBrainLine start={'450,405'} end={'442,328'} color={'purple'} />
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
          M 400,40
          C 650,40 650,400 500,500
          Q 480,510 500,640
        " />
      <path
        stroke="#37536A"
        strokeWidth="8"
        fill="rgba(0,0,0,0)"
        d="
          M 400,40
          Q 150,40 80,250
          C 70,270 70,290 90,320
          L 40,440
          Q 40,450 50,450
          L 80,455
          Q 90,455 90,470
          L 90,480
          L 75,495
          Q 75,505 120,510
          L 90,510
          C 75,520 75,530 85,530
          Q 95,530 95,540
          L 85,570
          Q 80,580 100,590
          Q 120,595 250,600
          Q 270,600 270,620
          L 275,650
        " />
    </g>
  )
}
