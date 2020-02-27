import React, { Component } from 'react';
import { useSpring, animated } from 'react-spring'
import '../styles/ParallaxBack.css'

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
const trans1 = (x, y) => `translate3d(${x / 100}px,${y / 100 - 20}px,0)`
const trans2 = (x, y) => `translate3d(${x / 20 - 650}px,${y / 20}px,0) rotateZ(${x / 1000 - 12}deg) rotateY(${x / 100}deg)`
const trans3 = (x, y) => `translate3d(${x / 15 - 450}px,${y / 15}px,0) rotateZ(${x / 300 }deg) rotateY(${x / 80}deg)`
const trans4 = (x, y) => `translate3d(${x / 20 - 250}px,${y / 20}px,0) rotateZ(${x / 300 + 10}deg) rotateY(${x / 100}deg)`

function PBCard() {
    const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 550, friction: 140 } }))
    return (
        <div className="p-container" onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc((x + window.innerWidth / 8), y) })}>
            <animated.div className="card1" style={{ transform: props.xy.interpolate(trans1) }} />
            <animated.div className="card2" style={{ transform: props.xy.interpolate(trans2) }} />
            <animated.div className="card4" style={{ transform: props.xy.interpolate(trans4) }} />
            <animated.div className="card3" style={{ transform: props.xy.interpolate(trans3) }} />
        </div>
    )
}

class ParallaxBack extends Component {
    render() {
        return (<PBCard />)
    }
}

export default ParallaxBack;