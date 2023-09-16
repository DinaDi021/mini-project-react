import React from 'react';
import {useSearchParams} from "react-router-dom";
import {Pagination} from "@mui/material";

const Paginations = ({totalPages}) => {
    const [query, setQuery] = useSearchParams()
    const currentPage = +query.get('page') || '1';
    const selectedGenre = query.get('genreId') || '';
    const selectedSort = query.get('sorted') || '';

    const queryParams = {
        page: currentPage.toString(),
        ...(selectedGenre && { genreId: selectedGenre}),
        ...(selectedSort && {sorted: selectedSort})
    };

    const handlePageChange = (e, page) => {
        queryParams.page = page;
        setQuery(queryParams);
    };

    return (
        <div>
            <Pagination
                count={totalPages}
                page={+currentPage}
                variant="outlined"
                color="secondary"
                onChange={handlePageChange}/>
        </div>
    );
};

export {Paginations};