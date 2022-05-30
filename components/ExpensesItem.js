import React from 'react';
import {View, Text, FlatList, Image} from 'react-native';
import Data from '../data';

const ExpensesItem = ({selectedCategory}) => {
  const filtered = Data.filter(
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
      <Text>{item.total} SEK</Text>
    </View>
  );
  return (
    <FlatList
      data={selectedCategory?.name === 'All' ? Data : filtered}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
  );
};

export default ExpensesItem;
