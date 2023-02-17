import {Center, Box, Text} from 'native-base';
import WordleLogo from '../../assets/wordle';
import colors from '../../config/utils/colors';
import React, {useEffect, useState} from 'react';
import Keyboard from '../../components/Keyboard';
import fiveLetterWords from '../../config/data/words';
import {useNavigation} from '@react-navigation/core';
import {ENTER, DELETE} from '../../config/utils/utils';
import HeaderContainerr from '../../components/HeaderContainerr';
import {getDayOfTheYear, copyArray} from '../../config/utils/utils';
import {StyleSheet, View, SafeAreaView, ScrollView, Alert} from 'react-native';

const NUMBER_OF_TRIES = 6;
const dayOfTheYear = getDayOfTheYear();

const WordleGame = () => {
  const word = fiveLetterWords[dayOfTheYear];
  const letters = word.split('');

  const navigation = useNavigation();
  const [rows, setRows] = useState(
    new Array(NUMBER_OF_TRIES).fill(new Array(letters.length).fill('')),
  );
  const [curRow, setCurRow] = useState(0);
  const [curCol, setCurCol] = useState(0);
  const [gameState, setGameState] = useState('playing');

  useEffect(() => {
    if (curRow > 0) {
      checkGameState();
    }
  }, [curRow]);

  const checkGameState = () => {
    if (checkIfWon() && gameState !== 'won') {
      Alert.alert(
        'Congratulation',
        'Congratulation! You won! $😊$',
        [
          {
            text: 'Okay',
            onPress: () => navigation.goBack(),
          },
        ],
        {cancelable: false},
      );
      setGameState('won');
    } else if (checkIfLost() && gameState !== 'lost') {
      Alert.alert('Whoops you lost!', "Don't worry, give it another shot!");
      setRows(
        new Array(NUMBER_OF_TRIES).fill(new Array(letters.length).fill('')),
      );
      setCurRow(0);
      setCurCol(0);
      setGameState('playing');
    }
  };

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

  const getCellBGColor = (row: number, col: any | number) => {
    const letter = rows[row][col];

    if (row >= curRow) {
      return colors.gray[100];
    }
    if (letter === letters[col]) {
      return colors.purple;
    }
    if (letters.includes(letter)) {
      return colors.green;
    }
    return colors.gray[70];
  };

  const getAllLettersWithColor = (color: string) => {
    return rows.flatMap((row, i) =>
      row.filter((cell: any, j: any) => getCellBGColor(i, j) === color),
    );
  };

  const greenCaps = getAllLettersWithColor(colors.green);
  const yellowCaps = getAllLettersWithColor(colors.purple);
  const greyCaps = getAllLettersWithColor(colors.gray[70]);

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
          greenCaps={greenCaps}
          yellowCaps={yellowCaps}
          greyCaps={greyCaps}
        />
      </Box>
    </SafeAreaView>
  );
};

export default WordleGame;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black[100],
    alignItems: 'center',
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
    borderColor: colors.black[100],
  },
  cellText: {
    padding: 10,
    color: colors.black[100],
    fontWeight: 'bold',
    fontSize: 28,
  },
});
