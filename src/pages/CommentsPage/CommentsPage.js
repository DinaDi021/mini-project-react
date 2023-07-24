import {Outlet} from "react-router-dom";
import {createContext, useState} from "react";

import {Comments} from "../../components";

const Context = createContext(null);
const CommentsPage = () => {
    const [commentId, setCommentId] = useState(null);
    return (
        <div>
            <Context.Provider value={{setCommentId}}>
                <Comments/>
            </Context.Provider>
            <Outlet context={{commentId}}/>
        </div>
    );
};

export {
    CommentsPage,
    Context
};