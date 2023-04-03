import React, { useState } from 'react';
import { SafeAreaView, View, StyleSheet, Text, TextInput, 
         KeyboardAvoidingView, TouchableWithoutFeedback, 
         Keyboard, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/core';

import { Button } from '../components/Button';
import colors from '../styles/colors';
import fonts from "../styles/fonts";  


export function UserIdentification(){
    const [isFocused,setIsFocused] = useState(false);
    const [isFilled,setIsFilled] = useState(false);
    const [name, setName] = useState<string>();


    const navigation = useNavigation();
    function handleStart() {
        navigation.navigate('Confirmation');
    }

    function handleInputBlur() {
        setIsFocused(false);
        setIsFilled(!! name);
    }

    function handleInputFocus() {
        setIsFocused(true);
    }

    function handleInputChange(value: string) {
        setIsFilled(!!value);
        setName(value);
    }

    return (
       <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView 
            style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.content}>
                <View style={styles.form}>
                    <View style={styles.header}>
                        <Text style={styles.emoji}>
                            {isFilled? '😁':'😎'}
                        </Text>
                        <Text style={styles.title}>
                        Como podemos {'\n'} chamar você?
                        </Text>
                        <TextInput 
                            style={[
                                styles.input,
                                (isFocused || isFilled) && { borderColor: colors.green } 
                            ]}
                            placeholder='Digite um nome'
                            onBlur={handleInputBlur}
                            onFocus={handleInputFocus}
                            onChangeText = { handleInputChange }
                        />
                        <View style={styles.footer}>
                            <Button title='Confirmar' onPress={handleStart} />
                        </View>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
       </SafeAreaView>
    )
}

const styles = StyleSheet.create({ 
    container: {
        flex: 1,
        width:'100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    content: {
        flex: 1,
        width:'100%',
    },
    form: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

        paddingHorizontal: 54,
    },
    header: {
        alignItems: 'center',
        width:'100%',
    },
    emoji: {
        fontSize: 60,
    },
    input: {
        borderBottomWidth: 1,
        borderColor: colors.gray,
        width: '100%',
        
        fontFamily: fonts.text,
        fontSize: 18,
        color: colors.heading,

        marginTop: 50,
        padding: 10,
        textAlign: 'center',
    },
    title: {
        fontSize: 24,
        lineHeight: 32,
        textAlign: 'center',
        color: colors.heading,
        fontFamily: fonts.heading,
        marginTop: 24,
    },
    footer: {
        width: '100%',
        marginTop: 40,
        paddingHorizontal:20,
    }
});