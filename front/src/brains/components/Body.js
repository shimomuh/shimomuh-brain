import { Component } from 'react'
import { SVGBrain } from '~/brains/components/SVG/Brain'
import { Header } from '~/brains/components/Header'
import { Footer } from '~/brains/components/Footer'
import { FrontalLobe } from '~/brains/components/sections/FrontalLobe'
import { TemporalLobe } from '~/brains/components/sections/TemporalLobe'
import { ParietalLobe } from '~/brains/components/sections/ParietalLobe'
import { OccipitalLobe } from '~/brains/components/sections/OccipitalLobe'
import { Cerebellum } from '~/brains/components/sections/Cerebellum'
import { Brainstem } from '~/brains/components/sections/Brainstem'
import { toCamelCase, toSingularSimply } from '~/brains/helpers/string'

export function Body (props) {
  const componentName = getComponentName(props)
  const selected = !!props.selected_component
  return (
    <div>
      <Header />
      <SVGBrain {...props} />
      {(() => {
        switch (componentName) {
          case 'frontalLobe':
            return <FrontalLobe selected={selected} />
          case 'temporalLobe':
            return <TemporalLobe selected={selected} />
          case 'parietalLobe':
            return <ParietalLobe selected={selected} />
          case 'occipitalLobe':
            return <OccipitalLobe selected={selected} />
          case 'cerebellum':
            return <Cerebellum selected={selected} />
          case 'brainstem':
            return <Brainstem selected={selected} />
          default:
            return <FrontalLobe selected={selected} />
        }
      })()}
      <Footer />
    </div>
  )
}

function getComponentName (props) {
  if (props.selected_component !== null) return props.selected_component
  const pathname = location.pathname
  if (pathname === '/') return ''
  return toSingularSimply(toCamelCase(pathname.slice(1)))
}
