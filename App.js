import { StatusBar } from 'expo-status-bar'
import React from 'react'
import Settings from './components/Settings'

import Routes from './components/index'

export default function App() {
  return 
  <View>
    <Routes />
    <Settings/>
  </View>
}
