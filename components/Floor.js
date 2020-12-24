import React from 'react';
import {View} from 'react-native';
import Matter from 'matter-js';
import {array, object, string} from 'prop-types';

const Floor = props => {
  const width = props.size[0];
  const height = props.size[1];
  const x = props.body.position.x - width/2;
  const y = props.body.position.y - height/2;
  return(
    <View
      style={{
        position: 'absolute',
        left: x,
        top: y,
        width: width,
        height: height,
        backgroundColor: 'blue'
      }}
    ></View>
  )
}

export default (world, color, pos, size) => {
  const initialFloor = Matter.Bodies.rectangle(
    pos.x, pos.y, size.width, size.height,
    {isStatic: true, friction: 1}
  );
  Matter.World.add(world, [initialFloor])
  return {
    body: initialFloor,
    size: [size.width, size.height],
    color: color,
    renderer: <Floor />
  }
};

Floor.propTypes = {
  size: array,
  body: object,
  color: string
}
