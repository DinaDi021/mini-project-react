import React from 'react';
import {useSearchParams} from "react-router-dom";
import {Pagination} from "@mui/material";

const Paginations = ({totalPages}) => {
    const [query, setQuery] = useSearchParams()
    const currentPage = +query.get('page') || '1';
    const selectedGenre = query.get('genre') || '';



    const queryParams = {
        page: currentPage.toString(),
        ...(selectedGenre && { genre: selectedGenre }),
    };

    return (
        <div>
            <Pagination
                count={totalPages}
                page={+currentPage}
                variant="outlined"
                color="secondary"
                onChange={(e, page) => {
                    queryParams.page = page.toString();
                    setQuery(queryParams);
                }}/>
        </div>
    );
};

export {Paginations};