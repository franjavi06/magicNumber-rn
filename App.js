import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import GameScreen from './screens/GameScreen';
import StartGameScreen from './screens/StartGameScreen';
import GameOverScreen from './screens/GameOverScreen';

export default function App() {

  const [userNumber, setUserNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0);

  const configureNewGame = () => {
    setGuessRounds(0);
    setUserNumber(null);
  }

  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
    setGuessRounds(0);
  }

  const gameOverHandler = numOfRound => {
    setGuessRounds(numOfRound);
  }

  let content = <StartGameScreen onStartGame={startGameHandler}/>

  if(userNumber && guessRounds <= 0){
    content =<GameScreen userChoise={userNumber} onGameOver={gameOverHandler}/>
  }else if(guessRounds > 0){
    content = <GameOverScreen roundsNumber={guessRounds} userNumber={userNumber} onRestartGame={configureNewGame}/>;
  }

  return (
    <View style={styles.screen}>
      <Header title="Encabezado de la App"></Header>
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});
