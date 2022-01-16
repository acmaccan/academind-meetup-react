import { useContext } from 'react';

import { Link } from 'react-router-dom';
import classes from './MainNavigation.module.css';
import FavContext from '../../store/fav-context';

function MainNavigation() {
    const favCtx = useContext(FavContext);

    return (
        <header className={classes.header}>
            <div className={classes.logo}>React Meetups</div>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>All Meetups</Link>
                    </li>
                    <li>
                        <Link to='/new-meetup'>New Meetup</Link>
                    </li>
                    <li>
                        <Link to='/fav-meetups'>
                            Fav Meetups
                            <span className={classes.badge}>{favCtx.totalFavs}</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default MainNavigation;