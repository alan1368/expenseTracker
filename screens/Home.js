import {View, Text, StyleSheet, Dimensions, StatusBar} from 'react-native';
import React, {useState} from 'react';
import Chart from '../components/Chart';
import Category from '../components/Category';
import ExpensesItem from '../components/ExpensesItem';
import {SafeAreaView} from 'react-native-safe-area-context';
import {icons} from '../utility';
import Data from '../data';

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState({
    id: 1,
    name: 'All',
    icon: icons.all,
  });

  const selectCategory = category => {
    console.log(category);
    setSelectedCategory(category);
  };
  const result = [];
  let total = 0;
  Data.reduce((res, value) => {
    if (!res[value.category]) {
      res[value.category] = {id: value.category, total: 0};
      result.push(res[value.category]);
    }
    res[value.category].total += value.total;
    return res;
  }, {});
  const totalExpense = result.map(res => (total += res.total));
  return (
    <View style={{backgroundColor: '#1D3B54', flex: 1}}>
      <View style={styles.header}>
        <SafeAreaView>
          <View
            style={{
              height: 45,
              width: Dimensions.get('window').width - 20,
              backgroundColor: 'rgba(0, 0, 0, 0.2)',
              borderRadius: 10,
              paddingHorizontal: 20,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text style={styles.title}>
              Income:<Text style={{fontWeight: 'bold'}}> 1,254 sek</Text>
            </Text>
            <View
              style={{
                width: 1,
                height: '80%',
                backgroundColor: 'white',
                opacity: 0.5,
                alignSelf: 'center',
              }}
            />
            <Text style={styles.title}>
              Expense:<Text style={{fontWeight: 'bold'}}> {total} sek</Text>
            </Text>
          </View>
        </SafeAreaView>

        <Chart result={result} />
      </View>

      <View
        style={{
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          backgroundColor: 'white',
          padding: 15,
          flex: 1,
        }}>
        <View style={{height: 100}}>
          <Category
            selectCategory={selectCategory}
            selectedCategory={selectedCategory}
          />
        </View>

        <Text style={{marginLeft: 20}}>Expenses</Text>
        <ExpensesItem selectedCategory={selectedCategory} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
  },
  title: {
    color: 'azure',
    fontSize: 16,
    fontWeight: '200',
    marginTop: 10,
  },
});

export default Home;
