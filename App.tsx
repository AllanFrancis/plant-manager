import React , {useCallback} from "react";
import { SafeAreaView,StyleSheet } from "react-native";

import { useFonts, Jost_100Thin, Jost_300Light , Jost_400Regular, Jost_600SemiBold } from "@expo-google-fonts/jost";
import * as SplashScreen from 'expo-splash-screen';

import Routes from "./src/routes";

export default function app(){

  let [ fontsLoaded ] = useFonts({
    Jost_100Thin,
    Jost_300Light,
    Jost_400Regular,
    Jost_600SemiBold,
  });

  const onLayoutRootView = useCallback(async () => {
    if (!fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  
  return (
    <SafeAreaView onLayout={onLayoutRootView} style={styles.container}>
      <Routes />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  }
})