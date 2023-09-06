function Movie(props) {
    const {
        Title: title,
        Year: year,
        imdbID: id,
        Type: type,
        Poster: poster,
    } = props;

    return (
        <div id={id} className="card movie">
            <div className="card-image waves-effect waves-block waves-light">
                {poster === 'N/A' ? (
                    <img
                        className="activator"
                        src="https://www.kleurplaat24.nl/wp-content/uploads/2017/12/cars-kleurplaat.jpg"
                    />
                ) : (
                    <img className="activator" src={poster} />
                )}
            </div>
            <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">
                    {title}
                </span>
                <p>
                    {year} <span className="right">{type}</span>
                </p>
            </div>
        </div>
    );
}

export { Movie };
