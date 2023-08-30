import React, { createContext, useState, useEffect, useContext } from 'react';

export const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const GRAVITY = 0.5;
  const FLAP_STRENGTH = 10;
  const OBSTACLE_SPEED = 3;
  const SCREEN_WIDTH = 360;

  const [birdPosition, setBirdPosition] = useState({ x: 50, y: 200 });
  const [birdVelocity, setBirdVelocity] = useState(0);
  const [obstaclePosition, setObstaclePosition] = useState({ x: SCREEN_WIDTH, y: 0 });
  const [score, setScore] = useState(0);
  const [gameState, setGameState] = useState('playing');

  useEffect(() => {
    if (gameState === 'playing') {
      // Update bird position based on velocity and gravity
      const newBirdVelocity = birdVelocity + GRAVITY;
      const newBirdPosition = { ...birdPosition };
      newBirdPosition.y += newBirdVelocity;

      if (newBirdPosition.y < 0) {
        newBirdPosition.y = 0;
      }

      // Update obstacle position
      const newObstaclePosition = { ...obstaclePosition };
      newObstaclePosition.x -= OBSTACLE_SPEED;

      if (newObstaclePosition.x < -50) {
        newObstaclePosition.x = SCREEN_WIDTH;
        newObstaclePosition.y = Math.random() * 300; // Adjust for obstacle height
        setScore(score + 1);
      }

      // Check for collisions
      const isColliding =
        birdPosition.x + 34 > obstaclePosition.x &&
        birdPosition.x < obstaclePosition.x + 50 &&
        (birdPosition.y < obstaclePosition.y || birdPosition.y + 24 > obstaclePosition.y + 160);

      if (isColliding) {
        setGameState('gameOver');
      }

      // Update state with new positions and scores
      setBirdPosition(newBirdPosition);
      setBirdVelocity(newBirdVelocity);
      setObstaclePosition(newObstaclePosition);
    }
  }, [birdPosition, birdVelocity, obstaclePosition, gameState]);

  const value = {
    birdPosition,
    setBirdPosition,
    birdVelocity,
    setBirdVelocity,
    obstaclePosition,
    score,
    gameState,
    setGameState,
  };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};
