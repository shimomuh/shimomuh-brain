import classNames from 'classnames'

export function ParietalLobe (props) {
  const { selected } = props
  const sectionClassName = classNames('section', { '_selected_': selected })
  return (
    <div className={sectionClassName}>
      <h2>Concentrate Outside Information</h2>
      <p>contact<br />coming soon</p>
    </div>
  )
}
