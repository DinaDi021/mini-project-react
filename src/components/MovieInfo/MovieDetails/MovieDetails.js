
const MovieDetails = ({movie}) => {
    const {title, original_language, overview, release_date, vote_average, poster_path} = movie;
    const baseURL = 'https://image.tmdb.org/t/p/';
    const imageSize = 'w500';
    const imageURL = baseURL + imageSize + poster_path;

    return (
        <div>
            <h2>{title}</h2>
            <h2>{vote_average}</h2>
            <p>{original_language}</p>
            <p>{overview}</p>
            <p>{release_date}</p>
            <img src={imageURL} alt={title}/>
        </div>
    );
};

export {MovieDetails};