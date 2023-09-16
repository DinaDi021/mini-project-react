import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import {useSearchParams} from "react-router-dom";

import styles from './Sort.module.css'

import {moviesActions} from "../../redux";

const SortComponent = () => {
    const dispatch = useDispatch();
    const {selectedSortBy} = useSelector((state) => state.movies);
    const {selectedGenreName} = useSelector(state => state.genres);
    const [query, setQuery] = useSearchParams();
    const selectedSort = query.get('sorted');

    useEffect(() => {
        if (selectedSort) {
            dispatch(moviesActions.setSortBy(selectedSort));
        }
    }, [dispatch, query]);

    const handleSortChange = (event) => {
        const selectedSortBy = event.target.value;
        setQuery({ ...query, sorted: selectedSortBy,genreId:selectedGenreName })
        dispatch(moviesActions.setSortBy(selectedSortBy));
    };

    return (
        <div className={styles.sortDiv}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Sort by</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Sort by"
                    onChange={handleSortChange}
                    value={selectedSortBy || ""}
                >
                    <MenuItem value="None">None</MenuItem>
                    <MenuItem value="popularity.asc">Popularity (Asc)</MenuItem>
                    <MenuItem value="popularity.desc">Popularity (Desc)</MenuItem>
                    <MenuItem value="vote_average.asc">Vote Average (Asc)</MenuItem>
                    <MenuItem value="vote_average.desc">Vote Average (Desc)</MenuItem>
                    <MenuItem value="release_date.asc">Release Date (Asc)</MenuItem>
                    <MenuItem value="release_date.desc">Release Date (Desc)</MenuItem>
                </Select>
            </FormControl>
        </div>
    );
};

export { SortComponent };
