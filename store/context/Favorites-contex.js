import { createContext, useState } from "react";


export const FavoritesContext = createContext({
    ids: [],
    addfavorite: (id) => {},
    removeFavorite: (id) => {},
});

const FavoritesContextProvider = ({children}) => {

    const [favoriteMealIds, setFavoriteMealIds] = useState([]);

    const addfavorite = (id) => {
        setFavoriteMealIds((currentFavIds) => [...currentFavIds, id] )
    }

    const removeFavorite = (id) => {
        setFavoriteMealIds((currentFavIds) => currentFavIds.filter(mealId => mealId !== id));
    }

    const value = {
        ids: favoriteMealIds,
        addfavorite,
        removeFavorite
    }

    return (
        <FavoritesContext.Provider value={value}>
            {children}
        </FavoritesContext.Provider>
    )
}

export default FavoritesContextProvider;