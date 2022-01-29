import React, { useState, useEffect } from 'react';
import { useMeasure } from 'react-use';
import { useSpring, animated } from '@react-spring/web';
import './sharedCSS/modalize.css';

const Modalize = ({ view }) => {

  // Manages the open or cloased state of the accordion
  const [open, toggle] = useState(false);

  const expand = useSpring({
    config: { friction: 10 },
    height: open ? `200px` : `50px`,
    width: open ? `200px` : `50px`,
    padding: open ? '5%' : '0.5%',
    paddingBottom: open ? '15%' : '0.5%',
  });

  const spin = useSpring({
    config: { friction: 10 },
    transform: open ? "rotate(180deg)" : "rotate(0deg)"
  });

  return (
    <div>
      <animated.div
        className={"modalized-view"}
        onClick={() => toggle(!open)}
        style={{
          boxShadow: "0px 0px 10px gray",
          ...expand
        }}>
        <div
          className='modalize-image-cropper'>
          <img
            className='modal-image'
            src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            style={{ height: "90%" }}
          ></img>
        </div>
      </animated.div>
    </div>
  );
}

export default Modalize;