import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import React, { useContext, useLayoutEffect } from 'react';
import { MEALS } from '../data/dummy-data';
import MealDetails from '../components/MealDetails';
import Subtitle from '../components/MealDetail/Subtitle';
import List from '../components/MealDetail/List';
import IconButton from '../components/IconButton';
// import { useDispatch, useSelector } from 'react-redux';
import { FavoritesContext } from '../store/context/Favorites-contex';
// import { addFavorite, removeFavorite } from '../store/redux/favorites';

const MealDetailsScreen = ({route, navigation}) => {

  const favoriteMealsCtx = useContext(FavoritesContext);
  // const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);
  // const dispatch = useDispatch();


  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  const mealIsFavorite = favoriteMealsCtx.ids.includes(mealId);



  const changefavoritesStatusHandler = () => {
    if (mealIsFavorite) {
      favoriteMealsCtx.removeFavorite(mealId)
      // dispatch(removeFavorite({ id: mealId}));
    } else {
      favoriteMealsCtx.addfavorite(mealId)
      // dispatch(addFavorite({ id: mealId}));
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
        headerRight: () => {
          return (
            <IconButton 
              icon={mealIsFavorite ? 'star' : 'star-outline'} 
              color='white' 
              onPress={changefavoritesStatusHandler}

            />
          )
        }
    });
  }, [navigation, changefavoritesStatusHandler]);


  return (
    <ScrollView style={styles.rootContainer}>
      <Image
        source={{ uri: selectedMeal.imageUrl}}
        style={styles.image}
      />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetails 
        duration={selectedMeal.duration} 
        complexity={selectedMeal.complexity} 
        affordability={selectedMeal.affordability}
        textStyle={styles.detailText}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredienta</Subtitle>
          <List data={selectedMeal.ingredients}/>
          <Subtitle>Steps</Subtitle>
          <List data={selectedMeal.steps}/>
        </View>
      </View>

    </ScrollView>
  )
}



export default MealDetailsScreen


const styles = StyleSheet.create({ 
    rootContainer: {
      marginBottom: 32,
    },
    image: {
        width: '100%',
        height: 300,
    },
    title: {
      fontWeight: 'bold',
      fontSize: 24,
      margin: 8,
      textAlign: 'center',
      color: 'white',
    },
    detailText: {
      color: 'white',
    },
    listOuterContainer: {
      alignItems: 'center',
    },
    listContainer: {
      width: '80%',
    }
})



