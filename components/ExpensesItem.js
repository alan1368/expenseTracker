import React from 'react';
import {View, Text, FlatList, Image} from 'react-native';
import Data from '../data';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useExpense} from '../context/expense';

const ExpensesItem = ({selectedCategory}) => {
  const {data} = useExpense();

  const filtered = data?.filter(
    item => item?.category === selectedCategory?.name?.toLowerCase(),
  );

  const renderItem = ({item}) => (
    <View
      style={{
        flexDirection: 'row',
        height: 50,
        marginHorizontal: 10,
        marginBottom: 10,
        borderRadius: 10,
        padding: 5,
        paddingHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'whitesmoke',
      }}>
      <View style={{flexDirection: 'row'}}>
        <Image
          source={item.icon}
          style={{width: 20, height: 20, marginRight: 20}}
        />
        <Text>{item.title}</Text>
      </View>
      <Text style={{fontWeight: '600'}}>{item.total} SEK</Text>
    </View>
  );
  return (
    <FlatList
      data={selectedCategory?.name === 'All' ? data : filtered}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
  );
};

export default ExpensesItem;
