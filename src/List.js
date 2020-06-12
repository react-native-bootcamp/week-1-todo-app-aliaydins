import React, {useState} from 'react';
import {SafeAreaView, View, Text, FlatList, Button} from 'react-native';

import {MyInput, MyButton, ListItem} from './components';

const INITIAL_STATE = [
  {myEntry: 'Çöpleri At', isDone: false},
  {myEntry: 'Çamaşırları Yıka', isDone: true},
  {myEntry: 'Markete Git', isDone: true},
];
const List = (props) => {
  const [entry, setEntry] = useState('');
  const [list, setList] = useState(INITIAL_STATE);

  getText = (text) => {
    setEntry(text);
  };
  addToList = () => {
    if (entry == null || entry == '') {
      console.warn('Empty List');
    } else {
      setList([...list,{myEntry:entry,isDone:false}])  
    }
  }
  const clearList=()=>{
     setList(list.filter(item=>item.isDone===false)) 
     console.log("basıldı")
  }
  
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1}}>
        <FlatList
          keyExtractor={(item, index) => index.toString()}
          data={list}
          renderItem={({item}) => <ListItem myData={item} />}
        />
        <MyInput changeText={getText} myPlace="Add new item"></MyInput>
        <MyButton myTitle="Add" myPress={addToList} />
        <MyButton myTitle="Delete" myPress={()=>clearList()} />
      </View>
    </SafeAreaView>
  );
};

export {List};
