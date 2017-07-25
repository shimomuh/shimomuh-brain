const frontalLobe = {
  dots: [
    { x: 152, y:  22, size: 'S' },
    { x: 117, y:  32, size: 'S' },
    { x:  87, y:  52, size: 'S' },
    { x:  77, y:  82, size: 'S' },
    { x:  87, y: 112, size: 'S' },
    { x: 117, y: 117, size: 'S' },
    { x: 137, y:  92, size: 'M' },
    { x: 172, y:  82, size: 'L' },
    { x: 167, y:  52, size: 'M' },
    { x: 187, y:  22, size: 'S' }
  ],
  connectors: [
    { x1: 148, y1:  23, x2: 120, y2:  31 },
    { x1: 113, y1:  34, x2:  89, y2:  49 },
    { x1:  85, y1:  56, x2:  78, y2:  79 },
    { x1:  78, y1:  86, x2:  86, y2: 109 },
    { x1:  91, y1: 114, x2: 114, y2: 118 },
    { x1: 120, y1: 114, x2: 132, y2:  96 },
    { x1: 143, y1:  90, x2: 167, y2:  82 },
    { x1: 171, y1:  75, x2: 167, y2:  56 },
    { x1: 169, y1:  46, x2: 183, y2:  25 },
    { x1: 183, y1:  22, x2: 156, y2:  22 }
  ],
  hoveredDots: [
    { x: 152, y:   7, size:  'S' },
    { x: 102, y:  12, size:  'S' },
    { x:  57, y:  37, size:  'S' },
    { x:  47, y:  87, size:  'S' },
    { x:  82, y: 127, size:  'S' },
    { x: 117, y: 117, size:  'S' },
    { x: 137, y:  92, size:  'M' },
    { x: 172, y:  82, size:  'L' },
    { x: 167, y:  52, size:  'M' },
    { x: 187, y:  22, size:  'S' }
  ],
  innerDots: [
    { x: 109, y:  81, size: 'M' },
    { x: 135, y:  59, size: 'M' }
  ],
  innerConnectors: [
    { x1:  87, y1:  52, x2: 109, y2:  81 },
    { x1:  77, y1:  82, x2: 109, y2:  81 },
    { x1:  87, y1: 114, x2: 109, y2:  81 },
    { x1: 117, y1: 117, x2: 109, y2:  81 },
    { x1: 137, y1:  92, x2: 109, y2:  81 },
    { x1: 109, y1:  81, x2: 135, y2:  59 },
    { x1:  87, y1:  52, x2: 135, y2:  59 },
    { x1: 117, y1:  32, x2: 135, y2:  59 },
    { x1: 152, y1:  22, x2: 135, y2:  59 },
    { x1: 167, y1:  52, x2: 135, y2:  59 },
    { x1: 172, y1:  82, x2: 135, y2:  59 },
    { x1: 137, y1:  92, x2: 135, y2:  59 },
    { x1: 152, y1:  22, x2: 167, y2:  52 }
  ],
  color: 'red',
  fieldName: 'frontalLobe'
}

const parietalLobe = {
  dots: [
    { x: 187, y:  22, size: 'S' },
    { x: 167, y:  52, size: 'M' },
    { x: 172, y:  82, size: 'L' },
    { x: 207, y:  82, size: 'M' },
    { x: 247, y:  67, size: 'S' },
    { x: 227, y:  37, size: 'S' }
  ],
  connectors: [
    { x1: 168, y1:  48, x2: 183, y2:  26 },
    { x1: 171, y1:  77, x2: 168, y2:  58 },
    { x1: 179, y1:  82, x2: 202, y2:  82 },
    { x1: 212, y1:  79, x2: 244, y2:  67 },
    { x1: 246, y1:  63, x2: 229, y2:  39 },
    { x1: 223, y1:  35, x2: 192, y2:  23 }
  ],
  hoveredDots: [
    { x: 187, y:  22, size:  'S' },
    { x: 167, y:  52, size:  'M' },
    { x: 172, y:  82, size:  'L' },
    { x: 207, y:  82, size:  'M' },
    { x: 247, y:  67, size:  'S' },
    { x: 247, y:  17, size:  'S' }
  ],
  innerDots: [
    { x: 195, y:  55, size: 'M' },
    { x: 220, y:  60, size: 'M' }
  ],
  innerConnectors: [
    { x1: 187, y1:  22, x2: 195, y2:  55 },
    { x1: 167, y1:  52, x2: 195, y2:  55 },
    { x1: 172, y1:  82, x2: 195, y2:  55 },
    { x1: 207, y1:  82, x2: 195, y2:  55 },
    { x1: 227, y1:  37, x2: 195, y2:  55 },
    { x1: 207, y1:  82, x2: 220, y2:  60 },
    { x1: 227, y1:  37, x2: 220, y2:  60 },
    { x1: 247, y1:  67, x2: 220, y2:  60 },
    { x1: 195, y1:  55, x2: 220, y2:  60 }
  ],
  color: 'yellow',
  fieldName: 'parietalLobe'
}

const occipitalLobe = {
  dots: [
    { x: 247, y:  67, size: 'S' },
    { x: 207, y:  82, size: 'M' },
    { x: 207, y: 112, size: 'M' },
    { x: 237, y: 132, size: 'S' },
    { x: 257, y: 102, size: 'S' }
  ],
  connectors: [
    { x1: 242, y1:  67, x2: 212, y2:  79 },
    { x1: 207, y1: 107, x2: 207, y2:  88 },
    { x1: 234, y1: 131, x2: 210, y2: 117 },
    { x1: 256, y1: 105, x2: 241, y2: 129 },
    { x1: 249, y1:  71, x2: 257, y2:  97 }
  ],
  hoveredDots: [
    { x: 247, y:  67, size:  'S' },
    { x: 207, y:  82, size:  'M' },
    { x: 207, y: 112, size:  'M' },
    { x: 237, y: 132, size:  'S' },
    { x: 277, y: 112, size:  'S' }
  ],
  innerDots: [
    { x: 235, y: 100, size: 'M' }
  ],
  innerConnectors: [
    { x1: 247, y1:  67, x2: 235, y2: 100 },
    { x1: 207, y1:  82, x2: 235, y2: 100 },
    { x1: 207, y1: 112, x2: 235, y2: 100 },
    { x1: 237, y1: 132, x2: 235, y2: 100 },
    { x1: 257, y1: 102, x2: 235, y2: 100 }
  ],
  color: 'aqua',
  fieldName: 'occipitalLobe'
}

const temporalLobe = {
  dots: [
    { x: 172, y:  82, size: 'L' },
    { x: 137, y:  92, size: 'M' },
    { x: 117, y: 117, size: 'S' },
    { x: 137, y: 142, size: 'S' },
    { x: 167, y: 142, size: 'S' },
    { x: 202, y: 142, size: 'S' },
    { x: 237, y: 132, size: 'S' },
    { x: 207, y: 112, size: 'M' },
    { x: 207, y:  82, size: 'M' }
  ],
  connectors: [
    { x1: 141, y1:  90, x2: 164, y2:  82 },
    { x1: 120, y1: 113, x2: 132, y2:  95 },
    { x1: 119, y1: 121, x2: 134, y2: 139 },
    { x1: 141, y1: 142, x2: 164, y2: 142 },
    { x1: 172, y1: 142, x2: 199, y2: 142 },
    { x1: 207, y1: 141, x2: 234, y2: 133 },
    { x1: 233, y1: 130, x2: 210, y2: 117 },
    { x1: 207, y1: 106, x2: 207, y2:  86 },
    { x1: 179, y1:  82, x2: 200, y2:  82 }
  ],
  hoveredDots: [
    { x: 172, y:  82, size:  'L' },
    { x: 137, y:  92, size:  'M' },
    { x: 117, y: 117, size:  'S' },
    { x: 107, y: 167, size:  'S' },
    { x: 157, y: 162, size:  'S' },
    { x: 192, y: 152, size:  'S' },
    { x: 237, y: 132, size:  'S' },
    { x: 207, y: 112, size:  'M' },
    { x: 207, y:  82, size:  'M' }
  ],
  innerDots: [
    { x: 150, y: 117, size: 'M' },
    { x: 180, y: 115, size: 'M' }
  ],
  innerConnectors: [
    { x1: 172, y1:  82, x2: 150, y2: 117 },
    { x1: 137, y1:  92, x2: 150, y2: 117 },
    { x1: 117, y1: 117, x2: 150, y2: 117 },
    { x1: 137, y1: 142, x2: 150, y2: 117 },
    { x1: 137, y1: 142, x2: 150, y2: 117 },
    { x1: 167, y1: 142, x2: 150, y2: 117 },
    { x1: 167, y1: 142, x2: 180, y2: 115 },
    { x1: 202, y1: 142, x2: 180, y2: 115 },
    { x1: 207, y1: 112, x2: 180, y2: 115 },
    { x1: 207, y1:  82, x2: 180, y2: 115 },
    { x1: 172, y1:  82, x2: 180, y2: 115 },
    { x1: 150, y1: 117, x2: 180, y2: 115 },
    { x1: 202, y1: 142, x2: 207, y2: 112 }
  ],
  color: 'green',
  fieldName: 'temporalLobe'
}

const cerebellum = {
  dots: [
    { x: 202, y: 142, size:  'S' },
    { x: 167, y: 142, size:  'S' },
    { x: 182, y: 162, size: 'SS' },
    { x: 217, y: 162, size: 'SS' },
    { x: 237, y: 132, size:  'S' }
  ],
  connectors: [
    { x1: 172, y1: 142, x2: 197, y2: 142 },
    { x1: 170, y1: 146, x2: 181, y2: 161 },
    { x1: 185, y1: 163, x2: 215, y2: 163 },
    { x1: 219, y1: 160, x2: 236, y2: 135 },
    { x1: 206, y1: 141, x2: 233, y2: 133 }
  ],
  hoveredDots: [
    { x: 202, y: 142, size: 'SS' },
    { x: 167, y: 142, size: 'SS' },
    { x: 197, y: 172, size: 'SS' },
    { x: 237, y: 177, size: 'SS' },
    { x: 237, y: 132, size: 'SS' }
  ],
  innerConnectors: [
    { x1: 182, y1: 162, x2: 202, y2: 142 },
    { x1: 217, y1: 162, x2: 202, y2: 142 }
  ],
  color: 'blue',
  fieldName: 'cerebellum'
}

const brainstem = {
  dots: [
    { x: 202, y: 142, size:  'S' },
    { x: 167, y: 142, size:  'S' },
    { x: 187, y: 187, size: 'SS' },
    { x: 207, y: 187, size: 'SS' }
  ],
  connectors: [
    { x1: 171, y1: 142, x2: 198, y2: 142 },
    { x1: 168, y1: 147, x2: 186, y2: 185 },
    { x1: 190, y1: 187, x2: 204, y2: 187 },
    { x1: 207, y1: 185, x2: 203, y2: 146 }
  ],
  hoveredDots: [
    { x: 202, y: 142, size: 'SS' },
    { x: 167, y: 142, size: 'SS' },
    { x: 197, y: 197, size: 'SS' },
    { x: 222, y: 197, size: 'SS' }
  ],
  innerConnectors: [
    { x1: 167, y1: 142, x2: 207, y2: 187 }
  ],
  color: 'purple',
  fieldName: 'brainstem'
}

const skin = {
  color: '#272e35',
  width: '8',
  paths: [
    [
      'M 188,8',
      'C 313,8 313,188 238,238',
      'Q 228,243 238,308'
    ],
    [
      'M 188,8',
      'Q 63,8 28,113',
      'C 23,123 23,133 33,148',
      'L 8,208',
      'Q 8,213 13,213',
      'L 28,215',
      'Q 33,215 33,223',
      'L 33,233',
      'L 25,235',
      'Q 25,241 48,243',
      'L 33,243',
      'C 25,248 25,253 31,253',
      'Q 35,253 35,258',
      'L 31,273',
      'Q 28,278 38,283',
      'Q 48,285 103,288',
      'Q 123,288 123,298',
      'L 125,313'
    ]
  ]
}

const field = [
  brainstem: brainstem,
  cerebellum: cerebellum,
  occipitalLobe: occipitalLobe,
  temporalLobe: temporalLobe,
  parietalLobe: parietalLobe,
  frontalLobe: frontalLobe
]

const compact = {
  field: field,
  skin: skin,
  width: 296,
  height: 514
}

export default compact
