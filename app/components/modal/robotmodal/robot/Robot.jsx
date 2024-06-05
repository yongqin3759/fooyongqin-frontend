import React from 'react'
import{useSpring,animated} from'react-spring'


import classes from './robot.module.css'

export const Robot = (props) => {
  console.log(props.xPixels, props.yPixels)
    const {xyz} = useSpring({
        from: {xyz: [0, 0, 0]},
        xyz: [props.xPixels, -props.yPixels, 0],
        config: {mass:40, friction:50, tension:props.robotSpeed, clamp:true},
        onRest: ({value}) => {
            if (props.xPixels === value.xyz[0] && props.yPixels === -value.xyz[1]) {
                props.onRestCallback();
            }
        }
    });

    return (
        <div className={classes.Robot}>
          <animated.img 
            style={{
                transform:  xyz.to((x, y, z) => `translate3d(${x}px, ${y}px, ${z}px)`)
            }}
            className={classes.Robot} src='/images/robot.png' alt=""/>
        </div>
    )
}
