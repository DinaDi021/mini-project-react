import {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import {useSearchParams} from "react-router-dom";

import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

import styles from './Sort.module.css'

import {moviesActions} from "../../redux";

const SortComponent = () => {
    const dispatch = useDispatch();
    const {selectedSortBy} = useSelector((state) => state.movies);
    const [query, setQuery] = useSearchParams();
    const selectedSort = query.get('sorted');

    useEffect(() => {
        if (selectedSort) {
            dispatch(moviesActions.setSortBy(selectedSort));
        }
    }, [dispatch, query]);

    const handleSortChange = (event) => {
        const selectedSortBy = event.target.value;
        setQuery({ ...query, sorted: selectedSortBy })
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
                    <MenuItem value="popularity.asc">Popularity <ArrowUpwardIcon></ArrowUpwardIcon> </MenuItem>
                    <MenuItem value="popularity.desc">Popularity <ArrowDownwardIcon></ArrowDownwardIcon></MenuItem>
                    <MenuItem value="vote_average.asc">Vote Average <ArrowUpwardIcon></ArrowUpwardIcon></MenuItem>
                    <MenuItem value="vote_average.desc">Vote Average <ArrowDownwardIcon></ArrowDownwardIcon></MenuItem>
                    <MenuItem value="release_date.asc">Release Date <ArrowUpwardIcon></ArrowUpwardIcon></MenuItem>
                    <MenuItem value="release_date.desc">Release Date <ArrowDownwardIcon></ArrowDownwardIcon></MenuItem>
                </Select>
            </FormControl>
        </div>
    );
};

export { SortComponent };
