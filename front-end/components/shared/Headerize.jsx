import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageHeader from './PageHeader.jsx';
import { useSpring, animated } from '@react-spring/web'

const Headerize = ({ view }) => {
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    delay: 200,
  });

  return (
    <animated.div style={props} className='header-view'>
      <Link to="/login">
        <PageHeader title="CTag"
          rightButtonText="Login"
          rightButtonCommand={() => { console.log("Logged In") }} />
      </Link>
      <div className='header-subview' style={{ paddingTop: "126px" }}>
        {view}
      </div>
    </animated.div>
  )
}

export default Headerize;