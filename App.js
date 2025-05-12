import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealsOverview from './screens/MealsOverview';
import MealDetailsScreen from './screens/MealDetailsScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FavoritesScreen from './screens/FavoritesScreen';
import { Ionicons } from '@expo/vector-icons';
import FavoritesContextProvider from './store/context/Favorites-contex';
// import { Provider } from 'react-redux';
// import { store } from './store/redux/store';


const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator()

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator screenOptions={{
      headerStyle: { backgroundColor: '#351401', },
      headerTintColor: 'white',          
      sceneStyle: {backgroundColor: '#3f2f25'},
      drawerContentStyle: {
        backgroundColor: '#351401',
      },
      drawerInactiveTintColor: 'white',
      drawerActiveTintColor: "#351401",
      drawerActiveBackgroundColor: '#e4baa1'

    }}>
      <Drawer.Screen 
        name='Categories' 
        component={CategoriesScreen} 
        options={{
          title: "All Categories",
          drawerIcon: ({color, size}) => (
            <Ionicons name='list' color={color} size={size}/>
          )

        }}
      />

      <Drawer.Screen 
        name='Favorites' 
        component={FavoritesScreen} 
          options={{
            drawerIcon: ({color, size}) => (
            <Ionicons name='star' color={color} size={size}/>
          )
          }}
        />
    </Drawer.Navigator>
  )
}


export default function App() {
  return (
    <>
      <StatusBar style='light'/>
      <FavoritesContextProvider> 
      {/* <Provider store={store}> */}
        <NavigationContainer>
          <Stack.Navigator screenOptions={{
              headerStyle: { backgroundColor: '#351401', },
              headerTintColor: 'white',
              contentStyle: {backgroundColor: '#3f2f25'},
          }}>
            <Stack.Screen 
              name='Drawer' 
              component={DrawerNavigator}
              options={{
                headerShown: false
              }}
            />
            <Stack.Screen 
              name='MealsOverview' 
              component={MealsOverview} 
            />
            <Stack.Screen 
              name='MealDetails' 
              component={MealDetailsScreen}
              options={{
                title: "Meal Details" 
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      {/* </Provider> */}
      </FavoritesContextProvider>
    </>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

