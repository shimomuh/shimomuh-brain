import classNames from 'classnames'

export function TemporalLobe (props) {
  const { selected } = props
  const sectionClassName = classNames('section', { '_selected_': selected })
  return (
    <div className={sectionClassName}>
      <h2>Experience</h2>
      <p>such as blog<br />coming soon</p>
    </div>
  )
}
