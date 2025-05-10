import { View, Text, Pressable, Image, StyleSheet, Platform } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import MealDetails from './MealDetails';

const MealItem = ({ id, title, imageUrl, duration, complexity, affordability }) => {

    const navigation  = useNavigation();


    const selectMealItemHandler = () => {
        navigation.navigate("MealDetails", {
            mealId: id,
        })
    }

  return (
    <View style={styles.mealItem}>
        <Pressable 
            android_ripple={{color: '#ccc'}}
            style={({pressed}) => pressed ? styles.buttonPressed : null}
            onPress={selectMealItemHandler}
        >
            <View style={styles.innerContainer}>
                <View>
                    <Image source={{ uri: imageUrl }} style={styles.image} />
                    <Text style={styles.title}>{title}</Text>
                </View>
                <MealDetails duration={duration} complexity={complexity} affordability={affordability}/>
            </View>
        </Pressable>
    </View>
  )
}


export default MealItem


const styles = StyleSheet.create({ 
    innerContainer: {
        borderRadius: 8,
        overflow: 'hidden'
    },
    mealItem: {
        margin: 16,
        borderRadius: 8,
        overflow: 'hidden',
        backgroundColor: 'white',
        elevation: 4,
        shadowOpacity: .35,
        shadowRadius: 8,
        shadowOffset: {width: 0, height: 4},
        backgroundColor: 'white',
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    },
    image: {
        width: '100%',
        height: 200,
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
        margin: 8,
    },
    buttonPressed: {
        opacity: 0.5
    },

})