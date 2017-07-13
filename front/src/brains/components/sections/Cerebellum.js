import classNames from 'classnames'

export function Cerebellum (props) {
  const { selected } = props
  const sectionClassName = classNames('section', { '_selected_': selected })
  return (
    <div className={sectionClassName}>
      <h2>Habit</h2>
      <p>like a blog<br />coming soon</p>
    </div>
  )
}
