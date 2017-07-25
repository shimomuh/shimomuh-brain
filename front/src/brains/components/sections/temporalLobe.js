import classNames from 'classnames'

export function TemporalLobe (props) {
  const { selected, size } = props
  const sectionClassName = classNames('section', { '_selected_': selected, '_compact_': size === 'compact' })
  return (
    <div className={sectionClassName}>
      <h2>Experience</h2>
      <p>such as blog<br />coming soon</p>
    </div>
  )
}
TemporalLobe.propTypes = {
  selected: PropTypes.bool,
  size: PropTypes.string
}
