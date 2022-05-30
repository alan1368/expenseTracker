import {icons} from '../utility';
import uuid from 'react-native-uuid';

const makeIcon = icon => {
  switch (icon) {
    case 'housing':
      return icons.housing;
    case 'education':
      return icons.education;
    case 'food':
      return icons.food;
    case 'health':
      return icons.health;
    case 'kids':
      return icons.kids;
    case 'personal':
      return icons.personal;
    case 'shopping':
      return icons.shopping;
  }
};

const Data = [
  {
    id: uuid.v4(),
    category: 'housing',
    icon: makeIcon('housing'),
    title: 'Hyra',
    total: 100,
  },
  {
    id: uuid.v4(),
    category: 'housing',
    icon: makeIcon('housing'),
    title: 'El',
    total: 200,
  },

  {
    id: uuid.v4(),
    category: 'education',
    icon: makeIcon('education'),
    title: 'KTH',
    total: 500,
  },
  {
    id: uuid.v4(),
    category: 'education',
    icon: makeIcon('education'),
    title: 'Programmering kurs',
    total: 300,
  },

  {
    id: uuid.v4(),
    category: 'food',
    icon: makeIcon('food'),
    title: 'Max',
    total: 120,
  },
  {
    id: uuid.v4(),
    category: 'food',
    icon: makeIcon('food'),
    title: 'Maxi Ica',
    total: 300,
  },

  {
    id: uuid.v4(),
    category: 'health',
    icon: makeIcon('health'),
    title: 'SATS',
    total: 500,
  },

  {
    id: uuid.v4(),
    category: 'kids',
    icon: makeIcon('kids'),
    title: 'kläder',
    total: 500,
  },

  {
    id: uuid.v4(),
    category: 'personal',
    icon: makeIcon('personal'),
    title: 'Frisör',
    total: 400,
  },

  {
    id: uuid.v4(),
    category: 'shopping',
    icon: makeIcon('shopping'),
    title: 'skjorta',
    total: 500,
  },
  {
    id: uuid.v4(),
    category: 'shopping',
    icon: makeIcon('shopping'),
    title: 'Jeans',
    total: 300,
  },
];

export default Data;
