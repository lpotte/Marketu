import React from 'react';
import {View, Text, StyleSheet } from 'react-native';

export default class Profilepage extends React.Component{

    render() {
        return(
            <View>
                <Text style={estilosdeprueba.textoresaltar}>Profile Page</Text>
            </View>

        );
    }
}

const estilosdeprueba = StyleSheet.create({

    textoresaltar: {
        textAlign: 'center',
        color: '#bed2d8',

    },
});