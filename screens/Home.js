import {View, Text, StyleSheet, Dimensions, StatusBar} from 'react-native';
import React, {useState, useEffect} from 'react';
import Chart from '../components/Chart';
import Category from '../components/Category';
import ExpensesItem from '../components/ExpensesItem';
import {SafeAreaView} from 'react-native-safe-area-context';
import {icons} from '../utility';
import {useExpense} from '../context/expense';

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
  const {categoryExpense, totalExpense} = useExpense();
  console.log('categoryexpens', categoryExpense);
  console.log(totalExpense);
  // const [data, setData] = useState(Data);
  // const [categoryExpense, setCategoryExpense] = useState();
  // const [totalExpense, setTotalExpense] = useState();

  // const result = data.reduce((array, next) => {
  //   if (!array[next.category]) {
  //     array[next.category] = {category: next.category, total: 0};
  //   }
  //   array[next.category].total += next.total;
  //   return array;
  // }, {});

  // const calculateTotalExpense = Object.values(categoryExpense).reduce(
  //   (acc, obj) => {
  //     return (acc += parseFloat(obj.total));
  //   },
  //   0,
  // );

  // Object.values(categoryExpense).map(rr => {
  //   console.log(rr);
  // });
  // console.log(categoryExpense);

  // useEffect(() => {
  //   setCategoryExpense(result);
  //   setTotalExpense(calculateTotalExpense);
  // }, [data]);

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
            <Text style={styles.title}>Total Expense:</Text>
            <Text style={[styles.title, styles.bold]}> {totalExpense} sek</Text>
          </View>
        </SafeAreaView>

        <Chart result={Object.values(categoryExpense)} total={totalExpense} />
      </View>

      <View
        style={{
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          backgroundColor: 'white',
          padding: 15,
          flex: 1,
          marginBottom: 60,
        }}>
        <View style={{height: 100}}>
          <Category
            selectCategory={selectCategory}
            selectedCategory={selectedCategory}
          />
        </View>

        <Text style={{marginLeft: 20, marginBottom: 10}}>Expenses</Text>
        <ExpensesItem selectedCategory={selectedCategory} style={{flex: 1}} />
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
    fontSize: 18,
    fontWeight: '300',
    marginTop: 10,
  },
  bold: {
    fontWeight: 'bold',
  },
});

export default Home;
