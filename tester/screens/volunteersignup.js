import React from 'react';
import {StyleSheet, View, Text, Button, TouchableOpacity, ImageBackground} from 'react-native';


export default function volunteersignup() {
    return (
        <ImageBackground
        blurRadius = {2}
        source={require("../assets/volunteerbg.png")}
        style={styles.ImageBackground}
        />
    );
}

const styles = StyleSheet.create({

    ImageBackground:{
        flex:1,
        width:null,
        height:null,
    }

});