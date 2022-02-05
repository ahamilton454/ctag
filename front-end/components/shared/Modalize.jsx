import React, { useState, useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web';
import './sharedCSS/modalize.css';

const Modalize = ({ children, photoURL, name, bio }) => {

  let childView = <div></div>;

  React.Children.forEach(children, child => {
    if (React.isValidElement(child)) {
      childView = React.cloneElement(child);
    }
  });

  const [open, toggle] = useState(false);

  const expandModal = useSpring({
    config: { friction: 20 },
    height: open ? `300px` : `100px`,
    width: open ? `365px` : `100px`,
    padding: open ? '2.5%' : '1.0%',
  });

  const animateModalHolder = useSpring({
    config: { friction: 20 },
    paddingTop: open ? `52vh` : `80vh`,
    paddingLeft: open ? `2.5%` : `5%`,
  });

  const animateModalText = useSpring({
    config: { friction: 20 },
    opacity: open ? 1 : 0,
    delay: 200,
  })

  const showText = () => {
    if (open) {
      return (
        [<animated.div key={1} className='textholder' style={animateModalText}>
          <h2>Buswami Alcanocavec</h2>
        </animated.div>,
        <animated.div key={2} style={animateModalText}>
          <h4>This is a basic bio I guess.  There are many
            words about myself I will type.  Who Knows what they will be.
            I Hope they are good
          </h4>
        </animated.div>]
      );
    } else {
      return <div></div>
    }
  }

  return (
    <div>
      <animated.div
        style={{
          zIndex: 1010,
          position: "absolute",
          ...animateModalHolder
        }}
        className="modalized-view">
        <animated.div
          className={"modal-div"}
          onClick={() => toggle(!open)}
          style={{
            boxShadow: "0px 0px 10px gray",
            ...expandModal
          }}>

          <div className='modal-content' style={{
            display: `grid`,
            gridTemplateRows: open ? `2fr 1fr` : `1fr`,
            gridTemplateColumns: open ? `2fr 1fr` : `1fr`,
            justifyContent: 'center',
          }} >
            <div className='modalize-image-cropper'>
              <img
                className='modal-image'
                src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                style={{ height: "90%" }}
              ></img>
            </div>
            {
              showText()
            }
          </div>
        </animated.div>
      </animated.div>
      {childView}
    </div>

  );
}

export default Modalize;