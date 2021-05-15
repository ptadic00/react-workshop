import './Search.css';

const Search = (props) => {
  return (
    <div className="search-container">
      <input
        className="search-input"
        type="text"
        placeholder="Pretraži..."
        onChange={(e) => props.onChange(e.target.value)}
      />
    </div>
  );
};
export default Search;
