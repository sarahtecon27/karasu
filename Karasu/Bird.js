import React, { useContext } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { GameContext } from './GameContext';

const Bird = () => {
  const { birdPosition, birdVelocity, setBirdVelocity, gameState } = useContext(GameContext);

  const handleJump = () => {
    if (gameState === 'playing') {
      setBirdVelocity(-FLAP_STRENGTH);
    }
  };

  const birdImageSource = birdVelocity < 0 ? require('./assets/images/bird1.png') : require('./assets/images/bird2.png');

  // Update bird's position based on velocity and gravity
  const newBirdVelocity = birdVelocity + GRAVITY;
  const newBirdPosition = { ...birdPosition };
  newBirdPosition.y += newBirdVelocity;

  if (newBirdPosition.y < 0) {
    newBirdPosition.y = 0;
  }

  return (
    <TouchableOpacity onPress={handleJump}>
      <View style={{ position: 'absolute', left: birdPosition.x, top: birdPosition.y }}>
        <Image source={birdImageSource} style={{ width: 34, height: 24 }} />
      </View>
    </TouchableOpacity>
  );
};

export default Bird;
