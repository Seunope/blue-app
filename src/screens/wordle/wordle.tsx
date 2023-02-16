import React, {useEffect, useState} from 'react';
import {StyleSheet, View, SafeAreaView, ScrollView, Alert} from 'react-native';
import {Center, Box, Text} from 'native-base';
import {CLEAR, ENTER, colorsToEmoji, DELETE} from '../../config/utils/utils';
import Keyboard from '../../components/Keyboard';
// import * as Clipboard from 'expo-clipboard';
import {StatusBar} from 'react-native';
import WordleLogo from '../../assets/wordle';
import HeaderContainerr from '../../components/HeaderContainerr';
import colors from '../../config/utils/colors';
import fiveLetterWords from '../../config/data/words';

const NUMBER_OF_TRIES = 6;

const copyArray = (arr: any[]) => {
  return [...arr.map((rows: any) => [...rows])];
};

const getDayOfTheYear = () => {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  const diff = Number(now) - Number(start);
  const oneDay = 1000 * 60 * 60 * 24;
  const day = Math.floor(diff / oneDay);
  return day;
};
const dayOfTheYear = getDayOfTheYear();

export default () => {
  const wordUpperLimit = fiveLetterWords.length - 1;
  const word = fiveLetterWords[Math.floor(Math.random() * wordUpperLimit)];
  const letters = word.split(''); // ['h', 'e', 'l', 'l', 'o']

  const [rows, setRows] = useState(
    new Array(NUMBER_OF_TRIES).fill(new Array(letters.length).fill('')),
  );
  const [curRow, setCurRow] = useState(0);
  const [curCol, setCurCol] = useState(0);
  const [gameState, setGameState] = useState('playing'); // won, lost, playing

  useEffect(() => {
    if (curRow > 0) {
      checkGameState();
    }
  }, []);

  const checkGameState = () => {
    if (checkIfWon() && gameState !== 'won') {
      // Alert.alert('Huraaay', 'You won!', [
      // {text: 'Share', onPress: shareScore},
      // ]);
      setGameState('won');
    } else if (checkIfLost() && gameState !== 'lost') {
      Alert.alert('Meh', 'Try again tomorrow!');
      setGameState('lost');
    }
  };

  //   const shareScore = () => {
  //     const textMap = rows
  //       .map((row, i) =>
  //         row.map((cell, j) => colorsToEmoji[getCellBGColor(i, j)]).join(''),
  //       )
  //       .filter(row => row)
  //       .join('\n');
  //     const textToShare = `Wordle \n${textMap}`;
  //     // Clipboard.setString(textToShare);
  //     Alert.alert('Copied successfully', 'Share your score on you social media');
  //   };

  const checkIfWon = () => {
    const row = rows[curRow - 1];

    return row.every(
      (letter: string, i: string | number) => letter === letters[i],
    );
  };

  const checkIfLost = () => {
    return !checkIfWon() && curRow === rows.length;
  };

  const onKeyPressed = (key: string) => {
    if (gameState !== 'playing') {
      return;
    }

    const updatedRows = copyArray(rows);

    if (key === DELETE) {
      const prevCol = curCol - 1;
      if (prevCol >= 0) {
        updatedRows[curRow][prevCol] = '';
        setRows(updatedRows);
        setCurCol(prevCol);
      }
      return;
    }

    if (key === ENTER) {
      if (curCol === rows[0].length) {
        setCurRow(curRow + 1);
        setCurCol(0);
      }

      return;
    }

    if (curCol < rows[0].length) {
      updatedRows[curRow][curCol] = key;
      setRows(updatedRows);
      setCurCol(curCol + 1);
    }
  };

  const isCellActive = (row: number, col: number) => {
    return row === curRow && col === curCol;
  };

  const getCellBGColor = (row: number, col: any | number) => {
    const letter = rows[row][col];

    if (row >= curRow) {
      return colors.gray[100];
    }
    if (letter === letters[col]) {
      return 'purple';
    }
    if (letters.includes(letter)) {
      return 'green';
    }
    return colors.gray[70];
  };

  const getAllLettersWithColor = (color: string) => {
    return rows.flatMap((row, i) =>
      row.filter((cell: any, j: any) => getCellBGColor(i, j) === color),
    );
  };

  const greenCaps = getAllLettersWithColor(colors.green);
  const yellowCaps = getAllLettersWithColor(colors.orange);
  const greyCaps = getAllLettersWithColor(colors.gray[100]);

  return (
    <SafeAreaView style={styles.container}>
      <Box flex="1" bgColor="gray.90">
        <HeaderContainerr dark={true} />

        <Center flex="1" p="4">
          <WordleLogo />
          <ScrollView style={styles.map}>
            {rows.map((row, i) => (
              <View key={`row-${i}`} style={styles.row}>
                {row.map((letter: string, j: any) => (
                  <View
                    key={`cell-${i}-${j}`}
                    style={[
                      styles.cell,
                      {
                        backgroundColor: getCellBGColor(i, j),
                      },
                    ]}>
                    <Text style={styles.cellText}>{letter.toUpperCase()}</Text>
                  </View>
                ))}
              </View>
            ))}
          </ScrollView>
          <Text color="black.100">Answer: {word}</Text>
        </Center>
        <Keyboard
          onKeyPressed={onKeyPressed}
          greenCaps={greenCaps} // ['a', 'b']
          yellowCaps={yellowCaps}
          greyCaps={greyCaps}
        />
      </Box>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black[100],
    alignItems: 'center',
  },
  title: {
    color: colors.gray[100],
    fontSize: 32,
    fontWeight: 'bold',
    letterSpacing: 7,
  },

  map: {
    alignSelf: 'stretch',
    marginVertical: 20,
  },
  row: {
    alignSelf: 'stretch',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  cell: {
    flex: 1,
    margin: 3,
    maxWidth: 50,
    aspectRatio: 1,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    // borderColor: colors.black[100],
  },
  cellText: {
    padding: 10,
    color: colors.black[100],
    fontWeight: 'bold',
    fontSize: 28,
  },
});
