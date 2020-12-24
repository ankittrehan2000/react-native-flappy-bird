import React from 'react';
import {View, Image} from 'react-native';
import {array, object, string} from 'prop-types';
import Matter from 'matter-js';

const airplane = require('../assets/bird.jpg');

const Plane = props => {
  const width = props.size[0];
  const height = props.size[1];
  const x = props.body.position.x - width/2;
  const y = props.body.position.y - height/2;
  return(
    <View style={{backgroundColor: 'red'}} >
    <Image style={{position: 'absolute', left: x, top: y, width: width, height: height}} resizeMode="stretch" source={airplane} /></View>
  )
}

export default (world, color, pos, size) => {
  const initialPlane = Matter.Bodies.rectangle(
    pos.x,
    pos.y,
    size.height,
    size.width
  )
  Matter.World.add(world, [initialPlane]);
  return {
    body: initialPlane,
    size: [size.width, size.height],
    color: color,
    renderer: <Plane />
  };
};

Plane.propTypes = {
  size: array,
  body: object,
  color: string
}
