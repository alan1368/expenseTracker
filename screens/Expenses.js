import {View} from 'react-native';
import React from 'react';
import Data from '../data';
import ExpensesItem from '../components/ExpensesItem';
import Navbar from '../components/Navbar';
import {icons} from '../utility';
import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';

const Expenses = () => {
  const insets = useSafeAreaInsets();

  return (
    <View style={{backgroundColor: 'white', flex: 1, marginBottom: 60}}>
      <Navbar title={'Total Expenses'} />
      <ExpensesItem
        selectedCategory={{
          id: 1,
          name: 'All',
          icon: icons.all,
        }}
      />
    </View>
  );
};

export default Expenses;
