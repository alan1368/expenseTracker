import {View} from 'react-native';
import React from 'react';
import Data from '../data';
import ExpensesItem from '../components/ExpensesItem';
import Navbar from '../components/Navbar';
import {icons} from '../utility';
import {SafeAreaView} from 'react-native-safe-area-context';

const Expenses = () => {
  return (
    <View>
      <Navbar title={'Total Expenses'} />
      <View style={{backgroundColor: 'white'}}>
        <ExpensesItem
          selectedCategory={{
            id: 1,
            name: 'All',
            icon: icons.all,
          }}
        />
      </View>
    </View>
  );
};

export default Expenses;
