import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { GameProvider } from './src/GameContext';
import GameScreen from './src/screens/GameScreen';

const AppNavigator = createStackNavigator(
  {
    Game: GameScreen,
  },
  {
    initialRouteName: 'Game',
    headerMode: 'none',
  }
);

const AppContainer = createAppContainer(AppNavigator);

const App = () => {
  return (
    <GameProvider>
      <AppContainer />
    </GameProvider>
  );
};

export default App;
