import "./MovieInfo.css"

const MovieInfo = ({ movieObj }) => {
  return movieObj && (
    <div className="flex-item">
      <h4>{movieObj.title}</h4>
      <div>
        <div className="data-Item">
          <span>Running Time</span>
          <span>{movieObj.runningtime}</span>
        </div>
        <div className="data-Item">
          <span>Genre </span>
          <span>{movieObj.genre}</span>
        </div>
      </div>
    </div>
  );
};

export default MovieInfo;
