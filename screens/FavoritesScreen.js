import { View, Text, StyleSheet } from 'react-native'
import React, { useContext } from 'react'
import MealsList from '../components/MealsList/MealsList'
import { FavoritesContext } from '../store/context/Favorites-contex'
import { MEALS } from '../data/dummy-data'

const FavoritesScreen = () => {

  const favoriteMealsCtx = useContext(FavoritesContext);

  const favoritesMeals = MEALS.filter(meal => favoriteMealsCtx.ids.includes(meal.id))


  if (favoritesMeals.length === 0) {
    return(
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no Favourite Meal yet</Text>
      </View>
    )
  }

  return (
    <MealsList items={favoritesMeals} />
  )
}

export default FavoritesScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  }
})