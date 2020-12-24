import { View } from 'react-native';
import React from 'react';
import Matter from 'matter-js';

const Ceiling = (props) => {
  const width = props.size[0];
  const height = props.size[1];
  const x = props.body.position.x - width / 2;
  const y = props.body.position.y - height / 2;
  return(
    <View
      style={{
        position: 'absolute',
        left: x,
        top: y,
        width: width,
        height: height,
        backgroundColor: 'white'
      }}
    ></View>
  )
}

export default (world, color, pos, size) => {
  const initialCeil = Matter.Bodies.rectangle(
    pos.x, pos.y, size.width, size.height,
    {isStatic: true, friction: 1}
  );
  Matter.World.add(world, [initialCeil]);
  return {
    body: initialCeil,
    size: [size.width, size.height],
    color: color,
    renderer: <Ceiling />
  }
}
