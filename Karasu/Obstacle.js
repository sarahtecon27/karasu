import React, { useContext } from 'react';
import { View, Image } from 'react-native';
import { GameContext } from './GameContext';

const Obstacle = () => {
  const { obstaclePosition, gameState, setObstaclePosition } = useContext(GameContext);

  if (gameState === 'playing') {
    // Update obstacle position
    const newObstaclePosition = { ...obstaclePosition };
    newObstaclePosition.x -= OBSTACLE_SPEED;

    if (newObstaclePosition.x < -50) {
      newObstaclePosition.x = SCREEN_WIDTH;
      newObstaclePosition.y = Math.random() * 300; // Adjust for obstacle height
    }

    setObstaclePosition(newObstaclePosition);
  }

  return (
    <View style={{ position: 'absolute', left: obstaclePosition.x, bottom: 0 }}>
      <Image source={require('./assets/images/tower.png')} style={{ width: 50, height: 160 }} />
    </View>
  );
};

export default Obstacle;
