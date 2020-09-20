import React, { useState } from 'react';
import { useSpring, animated as a } from 'react-spring';

function Card({acard, bcard}) {

  const [flipped, setFlipped] = useState(false)
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 }
  })
  return (
    <div className="relative flex justify-around pt-8  h-64" onClick={() => setFlipped(state => !state)}>
      <a.div className="c back" style={{ opacity: opacity.interpolate(o => 1 - o), transform, backgroundImage: `url(${acard})`,  }} />
      <a.div className="c front" style={{ opacity, transform: transform.interpolate(t => `${t} rotateX(180deg)`), backgroundImage: `url(${bcard})`, }} />
    </div>
  )
}

export default Card;
