import React from 'react';
import { View , StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function FlatButton({ text , onPress}) {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.button}>
               <Text style={styles.buttonText}>{ text }</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        height: 60,
        width:220,
        borderRadius: 35,
        paddingVertical: 14,
        paddingHorizontal: 10,
        backgroundColor: '#fff',
        justifyContent:'center'
    },
    buttonText: {
        color: 'black',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 16,
        textAlign: "center"
    }
})