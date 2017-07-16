import classNames from 'classnames'

export function OccipitalLobe (props) {
  const { selected } = props
  const sectionClassName = classNames('section', { '_selected_': selected })
  return (
    <div className={sectionClassName}>
      <h2>Visiblization such as Product or Service</h2>
      <p>coming soon</p>
    </div>
  )
}
OccipitalLobe.propTypes = {
  selected: PropTypes.bool
}
