import classNames from 'classnames'

export function Cerebellum (props) {
  const { selected, size } = props
  const sectionClassName = classNames('section', { '_selected_': selected, '_compact_': size === 'compact' })
  return (
    <div className={sectionClassName}>
      <h2>Habit</h2>
      <p>like a blog<br />coming soon</p>
    </div>
  )
}
Cerebellum.propTypes = {
  selected: PropTypes.bool,
  size: PropTypes.string
}
