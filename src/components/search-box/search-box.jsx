import './search-box.css';

const SearchBox = ({ className, placeholder, onChangeHandler }) =>
  <div>
    <input
      className={`search-box ${className}`}
      placeholder={placeholder}
      onChange={onChangeHandler}
    />
  </div>

export default SearchBox;