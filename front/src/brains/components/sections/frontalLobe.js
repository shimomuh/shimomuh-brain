import classNames from 'classnames'

export function FrontalLobe (props) {
  const { selected } = props
  const sectionClassName = classNames('section', { '_selected_': selected })
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
