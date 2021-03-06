import Matter from 'matter-js';

const PlaneSystem = (entities, {touches, time}) => {
  const engine = entities.physics.engine;
  //console.log(touches); - type move for swipes
  touches
    .filter(t => t.type === 'press')
    .forEach(t => {
      Matter.Body.setVelocity(entities.Plane.body, {
        x: entities.Plane.body.velocity.x,
        y: -3
      })
    })
  Matter.Engine.update(engine, time.delta);
  return entities
}

export default PlaneSystem;
