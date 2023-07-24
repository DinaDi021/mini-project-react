const Album = ({album}) => {
    const {id, title} = album;

    return (
        <div>
            <h2>id: {id}</h2>
            <h2>title: {title}</h2>
        </div>
    );
};

export {Album};