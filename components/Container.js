import { cloneElement } from 'react'

export default ({ element = <div />, children }) => {
  // console.log(element)
  const styles = element.props.style

  return cloneElement(element, {
    style: Object.assign({}, styles, {
      width: '100%',
      maxWidth: '1200px',
      paddingLeft: 20,
      paddingRight: 20,
      marginLeft: 'auto',
      marginRight: 'auto',
    }),
    children,
  })
}
