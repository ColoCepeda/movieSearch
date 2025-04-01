const MovieList = ({ movies }) => {
  return (
    <div>
      <h2>Películas</h2>
      <ul>
        {movies.map(({ id, title, genre }) => (
          <li key={id}>
            {title} - {genre}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
