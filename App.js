/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Image,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import Home from './screens/Home';
import Add from './screens/Add';
import Expenses from './screens/Expenses';
import {icons} from './utility';
import ExpenseProvider from './context/expense';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <SafeAreaProvider>
      <ExpenseProvider>
        <NavigationContainer>
          <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{
              headerShown: false,
              tabBarShowLabel: false,
              tabBarStyle: {position: 'absolute'},
            }}>
            <Tab.Screen
              name="Home"
              component={Home}
              options={{
                tabBarIcon: ({focused}) => (
                  <View
                    style={{
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: 60,
                      height: 60,
                      marginTop: 20,
                    }}>
                    <Image
                      source={icons.home}
                      size="20"
                      resizeMode="contain"
                      style={{
                        width: 25,
                        height: 25,
                        tintColor: focused ? 'cornflowerblue' : 'grey',
                      }}
                    />
                  </View>
                ),
              }}
            />
            <Tab.Screen
              name="Add"
              component={Add}
              options={{
                tabBarIcon: ({focused}) => (
                  <View
                    style={{
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: '#1D3B54',
                      width: 60,
                      height: 60,
                      borderRadius: 50,
                    }}>
                    <Image
                      source={icons.add}
                      size="20"
                      resizeMode="contain"
                      style={{
                        width: 25,
                        height: 25,
                        tintColor: 'white',
                      }}
                    />
                  </View>
                ),
              }}
            />
            <Tab.Screen
              name="Expenses"
              component={Expenses}
              options={{
                tabBarIcon: ({focused}) => (
                  <View
                    style={{
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: 60,
                      height: 60,
                      marginTop: 20,
                    }}>
                    <Image
                      source={icons.expenses}
                      size="20"
                      resizeMode="contain"
                      style={{
                        width: 25,
                        height: 25,
                        tintColor: focused ? 'cornflowerblue' : 'grey',
                      }}
                    />
                  </View>
                ),
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </ExpenseProvider>
    </SafeAreaProvider>
  );
};

export default App;
