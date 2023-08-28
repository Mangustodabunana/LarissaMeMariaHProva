import React from "react";
import {View, Text, TextInput, StyleSheet} from 'react-native';
const PercentageDimensionsBasics = () => {
    return (
        <View style={{height: '100%' }}>
        <View
            style={{
                height: '15%',
                backgroundColor: 'powderblue',
}}
    />

    <Text style={styles.heading}>Tela de Login</Text>
    <Text Input
    style={styles.input}
    placeholder="senha"

    />

    </View>
    );
};

const styles = StyleSheet.create({
    heading: {
    fontSize: 20,
    fontweight: 'bold',
    marginBotton: 20,
    },
    input:{
        width: '80%',
        paddin: 10,
        marginBotton: 10,
        borderwidth: 1,
        borderColor: 'gray', 
    },
});
export default PercentageDimensionsBasics;