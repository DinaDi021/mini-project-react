import {createContext, useState} from "react";

import {TopRated} from "../../components";


const RatedContext = createContext(null);
const TopRatedPages = () => {
    const [movieId, setMovieId] = useState(null);

    return (
        <div>
            <RatedContext.Provider value={{setMovieId}}>
            <TopRated/>
            </RatedContext.Provider>
        </div>
    );
};

export {TopRatedPages, RatedContext};