/**
 * Component: Search Box
 * @props tbd
 */
import search from '../../assets/icons/search-24px.svg';
import './SearchBox.scss';

function SearchBox ({doSearch}) {
    return (
        <div className='search-box'>
            <input className='search-box__input' type="text" name="search" placeholder="Search..." onChange={(e) => doSearch(e)} />
            <img className='search-box__image' src={search} alt="search terms go here" />
        </div>
    );
};
  
 export default SearchBox;