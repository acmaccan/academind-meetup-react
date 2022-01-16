import { useContext } from 'react';

import FavContext from '../store/fav-context';
import MeetupList from '../components/meetups/MeetupList';

function FavMeetupsPage(){
    const favCtx = useContext(FavContext);

    let content;
    if(favCtx.totalFavs === 0){
        content = <p>You got no Favs yet. Start adding some?</p>
    } else {
        content = <MeetupList meetups={favCtx.favs} />
    }

    return(
        <section>
            <h1>Fav Meetups</h1>
            {content}
        </section>
    )
}

export default FavMeetupsPage;