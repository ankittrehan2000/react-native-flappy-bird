import Plane from "./components/Plane";
import Matter from "matter-js";
import Floor from "./components/Floor";
import Ceiling from "./components/Ceiling";
import { Dimensions } from "react-native";
import Obstacle from "./components/Obstacle";
import {
  getRandom,
  topObstacleHeight,
  bottomObstacleHeight,
} from "./components/random";
import Constants from "./components/constants";

Matter.Common.isElement = () => false; //default is html so not default it

export default (restart) => {
  //clean up existing entities
  if (restart) {
    Matter.Engine.clear(restart.physics.engine);
  }

  let engine = Matter.Engine.create({ enableSleeping: false });
  let world = engine.world;
  world.gravity.y = 0.25;
  const boxSize = 50;
  let width = Dimensions.get("screen").width;
  let height = Dimensions.get("screen").height;

  return {
    physics: { engine: engine, world: world },
    Plane: Plane(
      world,
      "pink",
      { x: 220, y: 400 },
      { height: boxSize, width: boxSize }
    ),
    Floor: Floor(
      world,
      "white",
      { x: width / 2, y: height - 50 },
      { height: 100, width: width }
    ),
    Ceiling: Ceiling(
      world,
      "white",
      { x: width / 2, y: 0 },
      { height: 200, width: width }
    ),
    Obstacle1: Obstacle(
      world,
      "top",
      { x: width * 2 - Constants.TOP_PIPE_WIDTH / 2, y: getRandom(100, 400) },
      { height: topObstacleHeight, width: Constants.TOP_PIPE_WIDTH }
    ),
    Obstacle2: Obstacle(
      world,
      "bottom",
      { x: width - Constants.BOTTOM_PIPE_WIDTH / 2, y: getRandom(500, 700) },
      { height: bottomObstacleHeight, width: Constants.BOTTOM_PIPE_WIDTH }
    ),
  };
};
