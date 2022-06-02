import React, {
  createContext,
  useReducer,
  useContext,
  useEffect,
  useState,
} from 'react';
import Data from '../data';
import uuid from 'react-native-uuid';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ExpenseContext = createContext();

const ExpenseProvider = ({children}) => {
  const [data, setData] = useState(Data);
  const [categoryExpense, setCategoryExpense] = useState({});
  const [totalExpense, setTotalExpense] = useState();

  const result = data?.reduce((array, next) => {
    if (!array[next.category]) {
      array[next.category] = {category: next.category, total: 0};
    }
    array[next.category].total += next.total;

    return array;
  }, {});

  useEffect(() => {
    setCategoryExpense(result);
  }, [data]);

  const calculateTotalExpense =
    categoryExpense &&
    Object?.values(categoryExpense)?.reduce((acc, obj) => {
      return (acc += parseFloat(obj.total));
    }, 0);

  const addExpense = (selectedCategoryName, icon, title, expense) => {
    setData(prevData => {
      return [
        ...prevData,
        {
          id: uuid.v4(),
          category: selectedCategoryName.toLowerCase(),
          icon: icon,
          title: title,
          total: parseFloat(expense),
        },
      ];
    });
  };

  useEffect(() => {
    setTotalExpense(calculateTotalExpense);
  }, [categoryExpense]);

  return (
    <ExpenseContext.Provider
      value={{data, categoryExpense, totalExpense, addExpense}}>
      {children}
    </ExpenseContext.Provider>
  );
};
export const useExpense = () => useContext(ExpenseContext);
export default ExpenseProvider;
