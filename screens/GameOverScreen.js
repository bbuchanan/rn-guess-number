import React from "react";
import { View, Button, Text, StyleSheet } from "react-native";

const GameOverScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>The game is over!</Text>
      <Text>Number of rounds: {props.rounds}</Text>
      <Text>Number was: {props.userNumber}</Text>
      <Button title="NEW GAME" onPress={props.onRestart}></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default GameOverScreen;
