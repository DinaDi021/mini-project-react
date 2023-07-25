import {MoviesList} from "../../components/MoviesList/MoviesList";

const MoviesPage = () => {

    return (
        <div>
            <h1 style={{margin: '10px 25px'}}>See now:</h1>
                <MoviesList/>
        </div>
    );
};

export {
    MoviesPage,
};