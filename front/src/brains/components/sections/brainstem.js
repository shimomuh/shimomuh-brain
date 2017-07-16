import classNames from 'classnames'

export function Brainstem (props) {
  const { selected } = props
  const sectionClassName = classNames('section', { '_selected_': selected })
  return (
    <div className={sectionClassName}>
      <h2>Send Information Outward</h2>
      <p>links<br />coming soon</p>
    </div>
  )
}
Brainstem.propTypes = {
  selected: PropTypes.bool
}
