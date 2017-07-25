import { Component } from 'react'
import { SVGBrain } from '~/brains/components/svg/brain'
import { Header } from '~/brains/components/header'
import { Footer } from '~/brains/components/footer'
import { FrontalLobe } from '~/brains/components/sections/frontalLobe'
import { TemporalLobe } from '~/brains/components/sections/temporalLobe'
import { ParietalLobe } from '~/brains/components/sections/parietalLobe'
import { OccipitalLobe } from '~/brains/components/sections/occipitalLobe'
import { Cerebellum } from '~/brains/components/sections/cerebellum'
import { Brainstem } from '~/brains/components/sections/brainstem'
import { getComponentName } from '~/brains/helpers/componentManager'

export function Body (props) {
  const { selectedComponent, size } = props
  const componentName = getComponentName(selectedComponent)
  const selected = !!selectedComponent
  return (
    <div>
      <Header {...props} />
      <SVGBrain {...props} />
      {(() => {
        switch (componentName) {
        case 'frontalLobe':
          return <FrontalLobe selected={selected} size={size} />
        case 'temporalLobe':
          return <TemporalLobe selected={selected} size={size} />
        case 'parietalLobe':
          return <ParietalLobe selected={selected} size={size} />
        case 'occipitalLobe':
          return <OccipitalLobe selected={selected} size={size} />
        case 'cerebellum':
          return <Cerebellum selected={selected} size={size} />
        case 'brainstem':
          return <Brainstem selected={selected} size={size} />
        default:
          return <FrontalLobe selected={selected} size={size} />
        }
      })()}
      <Footer />
    </div>
  )
}
Body.propTypes = {
  selectedComponent: PropTypes.string,
  size: PropTypes.string
}
