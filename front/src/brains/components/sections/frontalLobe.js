import classNames from 'classnames'

export function FrontalLobe (props) {
  const { selected, size } = props
  const sectionClassName = classNames('section', { '_selected_': selected, '_compact_': size === 'compact' })
  return (
    <div className={sectionClassName}>
      <h2>Fundamental Thought and Motivation</h2>
      <ol className='section__policy'>
        <li>First, make attraction, it&#39;s funny not interested</li>
        <li>And then, just as imagined actions</li>
        <li>Finally, had better simply</li>
      </ol>
    </div>
  )
}
FrontalLobe.propTypes = {
  selected: PropTypes.bool,
  size: PropTypes.string
}
