import React from 'react';
import { Link } from 'react-router-dom';
import PageHeader from './PageHeader.jsx';
import { useSpring, animated } from '@react-spring/web'

const Headerize = ({ children }) => {
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    delay: 200,
  });

  let childView = <div></div>;

  React.Children.forEach(children, child => {
    if (React.isValidElement(child)) {
      childView = React.cloneElement(child);
    }
  });


  return (
    <animated.div style={props} className='header-view'>
      <Link to="/login">
        <PageHeader title="CTag"
          rightButtonText="Login"
          rightButtonCommand={() => { console.log("Logged In") }} />
      </Link>
      <div className='header-subview' style={{ paddingTop: "126px" }}>
        {childView}
      </div>
    </animated.div>
  )
}

export default Headerize;