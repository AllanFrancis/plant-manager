import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

import colors from '../styles/colors';
import fonts from '../styles/fonts';
import userImg from '../assets/allan.png';

export function Header() {
  return (
    <View style={styles.container}>
        <View>
            <Text style={styles.hello}>Olá,</Text>
            <Text style={styles.userName}>Allan Francis</Text>
        </View>
        <Image source={userImg} style={styles.avatar}/>
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: 20,
        paddingTop: 50,
        marginTop: getStatusBarHeight(),
    },
    hello:{
      fontFamily: fonts.light,
      fontSize: 30,
      lineHeight: 36,
      color: colors.heading,
    },
    userName: {
      fontFamily: fonts.heading, 
      fontSize: 32,
      lineHeight: 36,  
      color: colors.heading,
    },
    avatar: {
       width: 56,
       height: 56,
       borderRadius: 28, 
    }
});