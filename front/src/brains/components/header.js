import classNames from 'classnames'

export function Header (props) {
  const { size } = props
  const headerClassName = classNames('header__title', { '_compact_': size === 'compact' })
  return (
    <h1 className={headerClassName}>Shimomuh&#39;s Brain</h1>
  )
}
Header.propTypes = {
  size: PropTypes.string
}
