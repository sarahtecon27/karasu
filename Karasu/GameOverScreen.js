import React, { useContext } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { GameContext } from './GameContext';

const GameOverScreen = () => {
  const { score, setGameState } = useContext(GameContext);

  const handleRestart = () => {
    setGameState('playing');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.gameOverText}>Game Over</Text>
      <Text style={styles.scoreText}>Score: {score}</Text>
      <Button title="Restart" onPress={handleRestart} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  gameOverText: {
    fontSize: 30,
    color: 'white',
  },
  scoreText: {
    fontSize: 20,
    color: 'white',
    marginBottom: 20,
  },
});

export default GameOverScreen;
