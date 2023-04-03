import React from 'react';
import { View, StyleSheet, Text, SafeAreaView, FlatList } from 'react-native';
import colors from '../styles/colors';
import { Header } from '../components/Header';
import fonts from '../styles/fonts';
import { EnviromentButton } from '../components/EnviromentButton';

export function PlantSelect() {
  const dados = ['Sala','Quarto','Cozinha','Banheiro','Sacada','Quintal']

  let listButtons:[string,boolean][] = [];
  listButtons.push(
    ['Sala',false],
    ['Quarto',true],
    ['Cozinha',false],
    ['Banheiro',false],
    ['Sacada',false],
  );


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header} >
        <Header />
        <Text style={styles.title}>Em qual ambiente</Text>
        <Text style={styles.subtitle}>você quer colocar sua planta</Text>
      </View>

      <View>
        <FlatList data={listButtons} 
          horizontal 
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.enviromentList}
          renderItem={({item})=>(
            <EnviromentButton title={item[0]} active={item[1]} />
         )}>


         </FlatList>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    enviromentList: {
      height: 40,
      justifyContent: 'center',
      paddingBottom: 5,
      paddingLeft: 32,
      marginVertical: 24,
    },
    container:{
      flex: 1,
      backgroundColor: colors.background,
    },
    title:{
      fontSize: 17,
      color: colors.heading,
      fontFamily: fonts.heading,
      lineHeight: 20,
      marginTop: 15,
    },
    subtitle:{
      fontSize: 17,
      fontFamily: fonts.text,
      lineHeight: 20,
      color: colors.heading
    },
    header:{
      paddingHorizontal: 32
    }
});