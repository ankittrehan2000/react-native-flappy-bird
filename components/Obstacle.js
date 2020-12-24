import React from 'react';
import {View, Image} from 'react-native';
import Matter from 'matter-js';

const poopers = require('../assets/brick.jpg');

const Obstacle = props => {
  const width = props.size[0];
  const height = props.size[1];
  const x = props.body.position.x - width/2;
  const y = props.body.position.y - height/2;

  return(
    <View style={{backgroundColor: 'white'}}
    ><Image style={{position: 'absolute', left: x, top: y, width: width, height: height, borderRadius: 20}} resizeMode="stretch" source={poopers} /></View>
  )
}

export default (world, type, pos, size) => {
  const initialObstacle = Matter.Bodies.rectangle(
    pos.x, pos.y, size.width, size.height, {isStatic: true, friction: 1}
  )
  Matter.World.add(world, [initialObstacle]);
  return {
    body: initialObstacle,
    size: [size.width, size.height],
    type: type,
    scored: false,
    renderer: <Obstacle />
  }
}
