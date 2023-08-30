import React, { useContext } from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import { GameContext } from './GameContext';
import Bird from './Bird';
import Obstacle from './Obstacle';
import GameOverScreen from './GameOverScreen';

const GameScreen = () => {
  const { gameState } = useContext(GameContext);

  return (
    <ImageBackground source={require('./assets/images/background.png')} style={styles.background}>
      <View style={styles.container}>
        {gameState === 'playing' ? (
          <>
            <Bird />
            <Obstacle />
          </>
        ) : (
          <GameOverScreen />
        )}
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    resizeMode: 'repeat', // This makes the background image repeat horizontally
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default GameScreen;
