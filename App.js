import * as React from 'react';
import { Text, Button, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { useState } from 'react';

// You can import from local files

export default function App() {
  return (
    <View style={styles.container}>
      <KeyPadAndScreen></KeyPadAndScreen>
    </View>
  );
}

const KeyPadAndScreen = () => {
  const [button1Text, setButton1Text] = useState(' ');
  const [button2Text, setButton2Text] = useState(' ');
  const [button3Text, setButton3Text] = useState(' ');
  const [button4Text, setButton4Text] = useState(' ');
  const [button5Text, setButton5Text] = useState(' ');
  const [button6Text, setButton6Text] = useState(' ');
  const [button7Text, setButton7Text] = useState(' ');
  const [button8Text, setButton8Text] = useState(' ');
  const [button9Text, setButton9Text] = useState(' ');

  //   const [buttonText, setButtonText] = useState('Start');
  return (
    <View style={{ display: 'flex' }}>
      <View style={{ flex: 1, padding: 5 }}>
        <Text
          style={{
            fontSize: '100px',
            fontWeight: 'bold',
            textAlign: 'right',
          }}>
        </Text>
      </View>
      <View style={styles.buttons}>
        <CustomButton
          label={button1Text}
          onPress={() => {
            setButton1Text('X');
          }}></CustomButton>
        <CustomButton
          label={button2Text}
          onPress={() => {
            setButton2Text("X");
          }}></CustomButton>
        <CustomButton
          label={button3Text}
          onPress={() => {
            setButton3Text("O");
          }}></CustomButton>
      </View>
      <View style={styles.buttons}>
        <CustomButton
          label={button4Text}
          onPress={() => {
            setButton4Text("X");
          }}></CustomButton>
        <CustomButton
          label={button5Text}
          onPress={() => {
            setButton5Text("O");
          }}></CustomButton>
        <CustomButton
          label={button6Text}
          onPress={() => {
            setButton6Text("X");
          }}></CustomButton>
      </View>
      <View style={styles.buttons}>
        <CustomButton
          label={button7Text}
          onPress={() => {
            setButton7Text("O");
          }}></CustomButton>
        <CustomButton
          label={button8Text}
          onPress={() => {
            setButton8Text("O");
          }}></CustomButton>
        <CustomButton
          label={button9Text}
          onPress={() => {
            setButton9Text("O");
          }}></CustomButton>
      </View>
    </View>
  );
};

const CustomButton = (prop) => {
  return (
    <View style={{ flex: 1, padding: 5 }}>
      <Button onPress={prop.onPress} title={prop.label}></Button>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttons: {
    flexDirection: 'row',
    width: 500,
  },
});