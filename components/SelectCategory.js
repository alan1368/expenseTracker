import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {icons} from '../utility';

const SelectCategory = ({selectedCategory, setSelectedCategory}) => {
  const category = [
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
    <View
      style={{
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      {category.map(category => (
        <TouchableOpacity
          key={category.id}
          style={{
            marginHorizontal: 10,
            alignItems: 'center',
            width: 60,
            height: 60,
            marginBottom: 40,
          }}
          onPress={() => setSelectedCategory(category)}>
          <View
            style={{
              backgroundColor:
                selectedCategory?.name === category?.name
                  ? '#1D3B54'
                  : 'lavender',
              width: 65,
              height: 65,
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
    </View>
  );
};

export default SelectCategory;
