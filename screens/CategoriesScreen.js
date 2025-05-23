import { View, Text, FlatList } from 'react-native';
import React from 'react';
import { CATEGORIES } from '../data/dummy-data';
import CategoryGridTile from '../components/CategoryGridTile';


const CategoriesScreen = ({ navigation }) => {

    const rendercategoryItem = (itemData) => {

        const pressHandler = () => {
            navigation.navigate('MealsOverview', {
                categoryId: itemData.item.id,
            })
        }
        
        return (
            <CategoryGridTile 
                title={itemData.item.title} 
                color={itemData.item.color}
                onPress={pressHandler}
            />
        )
    }

  return (
    <FlatList 
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        renderItem={rendercategoryItem}
        numColumns={2}
    />
  )
}


export default CategoriesScreen