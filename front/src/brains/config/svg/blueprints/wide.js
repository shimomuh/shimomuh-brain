const frontalLobe = {
  dots: [
    { x: 304, y:  44, size:  'M' },
    { x: 234, y:  64, size:  'M' },
    { x: 174, y: 104, size:  'M' },
    { x: 154, y: 164, size:  'M' },
    { x: 174, y: 224, size:  'M' },
    { x: 234, y: 234, size:  'M' },
    { x: 274, y: 184, size:  'L' },
    { x: 344, y: 164, size: 'LL' },
    { x: 334, y: 104, size:  'L' },
    { x: 374, y:  44, size:  'M' }
  ],
  connectors: [
    { x1: 297, y1:  46, x2: 241, y2:  62 },
    { x1: 229, y1:  67, x2: 181, y2:  99 },
    { x1: 172, y1: 110, x2: 156, y2: 158 },
    { x1: 156, y1: 171, x2: 172, y2: 218 },
    { x1: 181, y1: 225, x2: 228, y2: 233 },
    { x1: 238, y1: 228, x2: 268, y2: 191 },
    { x1: 282, y1: 182, x2: 334, y2: 167 },
    { x1: 342, y1: 154, x2: 336, y2: 112 },
    { x1: 340, y1:  96, x2: 369, y2:  50 },
    { x1: 367, y1:  44, x2: 312, y2:  44 }
  ],
  hoveredDots: [
    { x: 304, y:  14, size:  'M' },
    { x: 204, y:  24, size:  'M' },
    { x: 114, y:  74, size:  'M' },
    { x:  94, y: 174, size:  'M' },
    { x: 164, y: 254, size:  'M' },
    { x: 234, y: 234, size:  'M' },
    { x: 274, y: 184, size:  'L' },
    { x: 344, y: 164, size: 'LL' },
    { x: 334, y: 104, size:  'L' },
    { x: 374, y:  44, size:  'M' }
  ],
  innerDots: [
    { x: 218, y: 162, size:  'L' },
    { x: 270, y: 118, size:  'L' }
  ],
  innerConnectors: [
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
  ],
  color: 'red',
  fieldName: 'frontalLobe'
}

const parietalLobe = {
  dots: [
    { x: 374, y:  44, size:  'M' },
    { x: 334, y: 104, size:  'L' },
    { x: 344, y: 164, size: 'LL' },
    { x: 414, y: 164, size:  'L' },
    { x: 494, y: 134, size:  'M' },
    { x: 454, y:  74, size:  'M' }
  ],
  connectors: [
    { x1: 340, y1:  96, x2: 369, y2:  50 },
    { x1: 342, y1: 154, x2: 336, y2: 112 },
    { x1: 354, y1: 164, x2: 404, y2: 164 },
    { x1: 424, y1: 162, x2: 488, y2: 137 },
    { x1: 491, y1: 127, x2: 458, y2:  79 },
    { x1: 447, y1:  72, x2: 380, y2:  46 }
  ],
  hoveredDots: [
    { x: 374, y:  44, size:  'M' },
    { x: 334, y: 104, size:  'L' },
    { x: 344, y: 164, size: 'LL' },
    { x: 414, y: 164, size:  'L' },
    { x: 494, y: 134, size:  'M' },
    { x: 494, y:  34, size:  'M' }
  ],
  innerDots: [
    { x: 390, y: 110, size:  'L' },
    { x: 440, y: 120, size:  'L' }
  ],
  innerConnectors: [
    { x1: 374, y1:  44, x2: 390, y2: 110 },
    { x1: 334, y1: 104, x2: 390, y2: 110 },
    { x1: 344, y1: 164, x2: 390, y2: 110 },
    { x1: 414, y1: 164, x2: 390, y2: 110 },
    { x1: 454, y1:  74, x2: 390, y2: 110 },
    { x1: 414, y1: 164, x2: 440, y2: 120 },
    { x1: 454, y1:  74, x2: 440, y2: 120 },
    { x1: 494, y1: 134, x2: 440, y2: 120 },
    { x1: 390, y1: 110, x2: 440, y2: 120 }
  ],
  color: 'yellow',
  fieldName: 'parietalLobe'
}

const occipitalLobe = {
  dots: [
    { x: 494, y: 134, size:  'M' },
    { x: 414, y: 164, size:  'L' },
    { x: 414, y: 224, size:  'L' },
    { x: 474, y: 264, size:  'M' },
    { x: 514, y: 204, size:  'M' }
  ],
  connectors: [
    { x1: 488, y1: 137, x2: 424, y2: 162 },
    { x1: 414, y1: 216, x2: 414, y2: 172 },
    { x1: 468, y1: 262, x2: 420, y2: 229 },
    { x1: 510, y1: 210, x2: 478, y2: 258 },
    { x1: 496, y1: 139, x2: 513, y2: 197 }
  ],
  hoveredDots: [
    { x: 494, y: 134, size:  'M' },
    { x: 414, y: 164, size:  'L' },
    { x: 414, y: 224, size:  'L' },
    { x: 474, y: 264, size:  'M' },
    { x: 554, y: 224, size:  'M' }
  ],
  innerDots: [
    { x: 470, y: 200, size:  'L' }
  ],
  innerConnectors: [
    { x1: 494, y1: 134, x2: 470, y2: 200 },
    { x1: 414, y1: 164, x2: 470, y2: 200 },
    { x1: 414, y1: 224, x2: 470, y2: 200 },
    { x1: 474, y1: 264, x2: 470, y2: 200 },
    { x1: 514, y1: 204, x2: 470, y2: 200 }
  ],
  color: 'aqua',
  fieldName: 'occipitalLobe'
}

const temporalLobe = {
  dots: [
    { x: 344, y: 164, size: 'LL' },
    { x: 274, y: 184, size:  'L' },
    { x: 234, y: 234, size:  'M' },
    { x: 274, y: 284, size:  'M' },
    { x: 334, y: 284, size:  'M' },
    { x: 404, y: 284, size:  'M' },
    { x: 474, y: 264, size:  'M' },
    { x: 414, y: 224, size:  'L' },
    { x: 414, y: 164, size:  'L' }
  ],
  connectors: [
    { x1: 282, y1: 182, x2: 334, y2: 168 },
    { x1: 240, y1: 230, x2: 268, y2: 192 },
    { x1: 238, y1: 238, x2: 268, y2: 278 },
    { x1: 280, y1: 284, x2: 328, y2: 284 },
    { x1: 340, y1: 284, x2: 398, y2: 284 },
    { x1: 410, y1: 283, x2: 468, y2: 268 },
    { x1: 468, y1: 262, x2: 420, y2: 229 },
    { x1: 414, y1: 216, x2: 414, y2: 172 },
    { x1: 354, y1: 164, x2: 404, y2: 164 }
  ],
  hoveredDots: [
    { x: 344, y: 164, size: 'LL' },
    { x: 274, y: 184, size:  'L' },
    { x: 234, y: 234, size:  'M' },
    { x: 214, y: 334, size:  'M' },
    { x: 314, y: 324, size:  'M' },
    { x: 384, y: 304, size:  'M' },
    { x: 474, y: 264, size:  'M' },
    { x: 414, y: 224, size:  'L' },
    { x: 414, y: 164, size:  'L' }
  ],
  innerDots: [
    { x: 300, y: 234, size:  'L' },
    { x: 360, y: 230, size:  'L' }
  ],
  innerConnectors: [
    { x1: 344, y1: 164, x2: 300, y2: 234 },
    { x1: 274, y1: 184, x2: 300, y2: 234 },
    { x1: 234, y1: 234, x2: 300, y2: 234 },
    { x1: 274, y1: 284, x2: 300, y2: 234 },
    { x1: 334, y1: 284, x2: 300, y2: 234 },
    { x1: 334, y1: 284, x2: 360, y2: 230 },
    { x1: 404, y1: 284, x2: 360, y2: 230 },
    { x1: 414, y1: 224, x2: 360, y2: 230 },
    { x1: 414, y1: 164, x2: 360, y2: 230 },
    { x1: 344, y1: 164, x2: 360, y2: 230 },
    { x1: 300, y1: 234, x2: 360, y2: 230 },
    { x1: 404, y1: 284, x2: 414, y2: 224 }
  ],
  color: 'green',
  fieldName: 'temporalLobe'
}

const cerebellum = {
  dots: [
    { x: 404, y: 284, size:  'S' },
    { x: 334, y: 284, size:  'S' },
    { x: 364, y: 324, size:  'S' },
    { x: 434, y: 324, size:  'S' },
    { x: 474, y: 264, size:  'S' }
  ],
  connectors: [
    { x1: 340, y1: 284, x2: 398, y2: 284 },
    { x1: 338, y1: 290, x2: 361, y2: 321 },
    { x1: 369, y1: 324, x2: 429, y2: 324 },
    { x1: 437, y1: 321, x2: 471, y2: 270 },
    { x1: 410, y1: 283, x2: 468, y2: 268 }
  ],
  hoveredDots: [
    { x: 404, y: 284, size:  'S' },
    { x: 334, y: 284, size:  'S' },
    { x: 394, y: 344, size:  'S' },
    { x: 474, y: 354, size:  'S' },
    { x: 474, y: 264, size:  'S' }
  ],
  innerConnectors: [
    { x1: 364, y1: 324, x2: 404, y2: 284 },
    { x1: 434, y1: 324, x2: 404, y2: 284 }
  ],
  color: 'blue',
  fieldName: 'cerebellum'
}

const brainstem = {
  dots: [
    { x: 404, y: 284, size:  'S' },
    { x: 334, y: 284, size:  'S' },
    { x: 374, y: 374, size:  'S' },
    { x: 414, y: 374, size:  'S' }
  ],
  connectors: [
    { x1: 339, y1: 284, x2: 399, y2: 284 },
    { x1: 336, y1: 289, x2: 371, y2: 371 },
    { x1: 379, y1: 374, x2: 409, y2: 374 },
    { x1: 414, y1: 369, x2: 406, y2: 292 }
  ],
  hoveredDots: [
    { x: 404, y: 284, size:  'S' },
    { x: 334, y: 284, size:  'S' },
    { x: 394, y: 394, size:  'S' },
    { x: 444, y: 394, size:  'S' }
  ],
  innerConnectors: [
    { x1: 334, y1: 284, x2: 414, y2: 374 }
  ],
  color: 'purple',
  fieldName: 'brainstem'
}

const skin = {
  color: '#272e35',
  width: '8',
  paths: [
    [
      'M 364,4',
      'C 614,4 614,364 464,464',
      'Q 444,474 464,604'
    ],
    [
      'M 364,4',
      'Q 114,4 44,214',
      'C 34,234 34,254 54,284',
      'L 4,404',
      'Q 4,414 14,414',
      'L 44,419',
      'Q 54,419 54,434',
      'L 54,454',
      'L 39,459',
      'Q 39,469 84,474',
      'L 54,474',
      'C 39,484 39,494 49,494',
      'Q 59,494 59,504',
      'L 49,534',
      'Q 44,544 64,554',
      'Q 84,559 214,564',
      'Q 234,564 234,584',
      'L 239,614'
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

const wide = {
  field: field,
  skin: skin,
  width: 570,
  height: 614
}

export default wide
