import React from 'react'
import { TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native'

const MyButton = props => {
    return (
        <TouchableOpacity
            style={styles.buttonContainer}
            onPress={props.myPress}
        >
            <Text style={styles.textStyle}>{props.myTitle}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        backgroundColor: '#aeaeae',
        width: Dimensions.get("window").width*0.3,
        alignSelf: 'center',
        padding: 10,
        alignItems: 'center',
        borderRadius: 5,
        margin: 5
    },
    textStyle: {
        color: '#eceff1',
        fontWeight: 'bold'
    }
})

export { MyButton }
