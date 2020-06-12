import React, {useState} from 'react';
import {View, Text, StyleSheet,TouchableOpacity,} from 'react-native';

const ListItem = (props) => {
  const [done, setDone] = useState(props.myData.isDone);
  const styles = done ? doneStyles : undoneStyles;

  return (
    <TouchableOpacity style={styles.container} onPress={() => setDone(!done)}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View style={styles.dot}></View>
        <Text style={styles.textStyle}>{props.myData.myEntry}</Text>
        {done && <Text style={styles.textStyle}>Done</Text>}
      </View>
    </TouchableOpacity>
  );
};

const doneStyles = StyleSheet.create({
  container: {
    backgroundColor: '#e57373',
    margin: 5,
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textStyle: {
    fontSize: 15,
    marginLeft: 10,
    textDecorationLine: 'line-through',
  },
  dot: {
    backgroundColor: '#e0e0e0',
    width: 10,
    height: 10,
    borderRadius: 10,
  },
});

const undoneStyles = StyleSheet.create({
  container: {
    backgroundColor: '#a5d6a7',
    margin: 5,
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textStyle: {
    fontSize: 15,
    marginLeft: 10,
  },
  dot: {
    backgroundColor: '#e0e0e0',
    width: 10,
    height: 10,
    borderRadius: 10,
  },
});

export {ListItem};
