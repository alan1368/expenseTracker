import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import {icons} from '../utility';

const Category = ({selectCategory, selectedCategory}) => {
  const category = [
    {
      id: 1,
      name: 'All',
      icon: icons.all,
    },
    {
      id: 2,
      name: 'Housing',
      icon: icons.housing,
    },
    {
      id: 3,
      name: 'Education',
      icon: icons.education,
    },
    {
      id: 4,
      name: 'Food',
      icon: icons.food,
    },
    {
      id: 5,
      name: 'Health',
      icon: icons.health,
    },
    {
      id: 6,
      name: 'Kids',
      icon: icons.kids,
    },
    {
      id: 7,
      name: 'Personal',
      icon: icons.personal,
    },
    {
      id: 8,
      name: 'Shopping',
      icon: icons.shopping,
    },
  ];

  return (
    <ScrollView horizontal={true}>
      {category.map(category => (
        <TouchableOpacity
          key={category.id}
          style={{
            marginHorizontal: 10,
            alignItems: 'center',
            width: 50,
            height: 50,
          }}
          onPress={() =>
            selectedCategory === category
              ? selectCategory('')
              : selectCategory(category)
          }>
          <View
            style={{
              backgroundColor:
                selectedCategory?.name === category?.name
                  ? '#1D3B54'
                  : 'lavender',
              width: 55,
              height: 55,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 10,
            }}>
            <Image source={category.icon} style={{width: 30, height: 30}} />
          </View>
          <Text
            style={{
              fontSize: 10,
              color:
                selectedCategory?.name === category?.name
                  ? '#1D3B54'
                  : 'darkslateblue',
            }}>
            {category.name}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default Category;
