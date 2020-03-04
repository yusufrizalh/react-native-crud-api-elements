import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput, Button, Alert, 
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack'; 
// import {createStackNavigator} from "@react-navigation/stack"; 

import PegawaiMain from './pegawai/PegawaiMain';
import PegawaiRead from './pegawai/PegawaiRead';
import PegawaiEdit from './pegawai/PegawaiEdit';

const rootStack = createStackNavigator(
  {
    PegawaiMain: { 
      screen: PegawaiMain, 
      navigationOptions: {}, 
    }, 
    PegawaiRead: {
      screen: PegawaiRead, 
      navigationOptions: {}, 
    }, 
    PegawaiEdit: {
      screen: PegawaiEdit, 
      navigationOptions: { title: 'Edit Pegawai PT. ABC' }, 
    }, 
  }, 
  {
    initialRouteName: 'PegawaiMain', // sebagai root 
  }, 
);

const AppContainer = createAppContainer(rootStack);
export default class App extends Component {
  render() {
    return <AppContainer />
  }
}