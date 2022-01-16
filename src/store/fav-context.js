import { createContext, useState } from "react";

const FavContext = createContext({
    favs: [],
    totalFavs: 0,
    addFav: (favMeetup) => {},
    removeFav: (meetupId) => {},
    itemIsFav: (meetupId) => {}
});

export function FavContextProvider(props){
    const [userFav, setUserFav] = useState([]);

    function addFavHandler(favMeetup){
        setUserFav((prevUserFav) => {
            return prevUserFav.concat(favMeetup);
        });
    }

    function removeFavHandler(meetupId){
        setUserFav((prevUserFav) => {
            return prevUserFav.filter((meetup) => meetup.id !== meetupId);
        });
    }

    function itemIsFavHandler(meetupId){
        return userFav.some((meetup) => meetup.id === meetupId);
    }

    const context = {
        favs: userFav,
        totalFavs: userFav.length,
        addFav: addFavHandler,
        removeFav: removeFavHandler,
        itemIsFav: itemIsFavHandler
    };

    return(
        <FavContext.Provider value={context}>
            {props.children}
        </FavContext.Provider>
    )
}

export default FavContext;