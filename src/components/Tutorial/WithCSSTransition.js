import React from 'react'
import { CSSTransition } from 'react-transition-group'

const WithCSSTransition = ({ component: Component, ...props }) => {
  return (
    <CSSTransition in={true} key={Math.floor(props.step)} timeout={400} classNames='slide'>
      <div>
        <Component {...props} />
      </div>
    </CSSTransition>
  )
}

export default WithCSSTransition
