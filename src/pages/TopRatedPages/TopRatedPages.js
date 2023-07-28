import {TopRated} from "../../components/TopRated/TopRated";
import {createContext, useState} from "react";
import {Outlet} from "react-router-dom";


const RatedContext = createContext(null);
const TopRatedPages = () => {
    const [movieId, setMovieId] = useState(null);

    return (
        <div>
            <RatedContext.Provider value={{setMovieId}}>
            <TopRated/>
            </RatedContext.Provider>
            <Outlet context={{movieId}}/>
        </div>
    );
};

export {TopRatedPages, RatedContext};