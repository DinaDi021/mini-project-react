import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {moviesActions} from "../../redux";


const SortComponent = () => {
    const dispatch = useDispatch();
    const {selectedSortBy} = useSelector((state) => state.movies);

    const handleSortChange = (event) => {
        const selectedSortBy = event.target.value;
        dispatch(moviesActions.setSortBy(selectedSortBy));
    };

    return (
        <div>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Sort by</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Sort by"
                    onChange={handleSortChange}
                    value={selectedSortBy || ""}
                >
                    <MenuItem value="">None</MenuItem>
                    <MenuItem value="popularity">Popularity</MenuItem>
                    <MenuItem value="vote_average">Vote average</MenuItem>
                    <MenuItem value="release_date">Release date</MenuItem>
                </Select>
            </FormControl>
        </div>
    );
};

export { SortComponent };
