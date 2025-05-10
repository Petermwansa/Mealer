import { View, Text, Pressable, StyleSheet, Platform } from 'react-native';
import React from 'react';

const CategoryGridTile = ({ title, color, onPress}) => {
  return (
    <View style={styles.gridItem}>
        <Pressable 
            android_ripple={{color: '#cccccc'}} 
            style={({pressed}) => [styles.buttonStyle, pressed ? styles.buttonPressed : null]}
            onPress={onPress}
        >
        <View style={[styles.innerContainer, {backgroundColor: color}]}>
            <Text>{title}</Text>
        </View>
      </Pressable>
    </View>
  )
}

export default CategoryGridTile


const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 16,
        height: 150,
        borderRadius: 8,
        elevation: 4,
        shadowColor: 'black',
        shadowOpacity: .25,
        shadowRadius: 8,
        shadowOffset: {width: 0, height: 4},
        backgroundColor: 'white',
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible'
    },
    buttonStyle: {
        flex: 1,
    },
    buttonPressed: {
        opacity: 0.5
    },
    innerContainer: {
        flex: 2,
        borderRadius: 8,
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
    }
})