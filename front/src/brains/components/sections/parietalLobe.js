import classNames from 'classnames'

export function ParietalLobe (props) {
  const { selected, size } = props
  const sectionClassName = classNames('section', { '_selected_': selected, '_compact_': size === 'compact' })
  return (
    <div className={sectionClassName}>
      <h2>Concentrate Outside Information</h2>
      <p>contact<br />coming soon</p>
    </div>
  )
}
ParietalLobe.propTypes = {
  selected: PropTypes.bool,
  size: PropTypes.string
}
