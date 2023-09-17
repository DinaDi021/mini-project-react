import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";

import {Divider, IconButton, InputBase, Pagination, Paper} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

import styles from './Seach.module.css'

import {SearchMovies} from "./SearchMovies/SearchMovies";
import {searchMoviesActions} from "../../redux";
import {IsLoading} from "../IsLoading/IsLoading";

const Search = () => {
    const dispatch = useDispatch();
    const {isLoading} = useSelector(state => state.progress)
    const {searchMovies, titleMovie, totalPages} = useSelector(state => state.searchMovies);
    const [query, setQuery] = useSearchParams({page: '1', query: ''})
    const page = query.get('page');
    const name = query.get('query')

    useEffect(() => {
        if (page && name) {
            dispatch(searchMoviesActions.setTitleMovie(name));
            dispatch(searchMoviesActions.getSearchMovies({
                query: name,
                page
            }));
        }
    }, [dispatch, page, name]);


    const handleSearchInputChange = (e) => {
        dispatch(searchMoviesActions.setTitleMovie(e.target.value));
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        setQuery({page: '1', query: titleMovie});
        dispatch(searchMoviesActions.getSearchMovies({
            page: '1',
            query: titleMovie
        }));
    };

    const handlePageChange = (e, page) => {
        setQuery(prev => {
            prev.set('page', (page).toString())
            return prev
        })
    };

    return (
        <div className={styles.container}>
            {isLoading ? (
                <IsLoading/>
            ) : (
                <div>
                    <Paper
                        component="form"
                        sx={{p: '2px 4px', display: 'flex', alignItems: 'center', width: 400}}
                        onSubmit={handleSearchSubmit}
                    >
                        <InputBase
                            sx={{ml: 1, flex: 1}}
                            placeholder="Search movies"
                            inputProps={{'aria-label': 'search movie'}}
                            value={titleMovie || ''}
                            onChange={handleSearchInputChange}
                        />
                        <IconButton type="submit" sx={{p: '10px'}} aria-label="search">
                            <SearchIcon/>
                        </IconButton>
                        <Divider sx={{height: 28, m: 0.5}} orientation="vertical"/>
                    </Paper>
                </div>
            )}

            <div className={styles.searchMovies}>
                {searchMovies.map((searchMovie) => (
                    <SearchMovies key={searchMovie.id} searchMovie={searchMovie}/>
                ))}
            </div>
            <div>
                <Pagination
                    count={totalPages}
                    page={+page}
                    variant="outlined"
                    color="secondary"
                    onChange={handlePageChange}
                />
            </div>
        </div>
    );
}

export {Search};