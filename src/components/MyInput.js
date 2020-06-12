import React from 'react'
import { TextInput, View, StyleSheet,Dimensions } from 'react-native'


const MyInput = props => {
    return (
        <View style={styles.inputContainer}>
            <TextInput
                keyboardType={props.type}
                autoCapitalize="none"
                placeholder={props.myPlace}
                onChangeText={props.changeText}
             
            />
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        backgroundColor: '#eceff1',
        padding: 4,
        alignSelf:'center',
        width: Dimensions.get("window").width*0.9,
        margin: 15,
        borderWidth:2,
        borderColor:'#e0e0e0',
        borderRadius: 10,
    }
})

export { MyInput }