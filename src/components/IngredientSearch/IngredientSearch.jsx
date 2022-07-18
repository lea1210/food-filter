import Styles from './IngredientSearch.module.css';
import { useIngredientsData } from '../../hooks/useIngredients';
import { useExcludedIngredients } from '../../contexts/ExcludedContext/ExcludedContext';
import { IngredientSuggestion } from '../IngredientSuggestion/IngredientSuggestion';
import { useIngredients } from '../../contexts/IngredientContext/IngredientContext';
import { useSearchValue } from '../../contexts/SearchValueContext/SearchValueContext';
import PropTypes from 'prop-types';

/**
 * displays the search for ingredients
 * @param loadRecipes
 * @returns {JSX.Element}
 * @constructor
 */
export const IngredientSearch = ({ loadRecipes }) => {
  const { searchValue, setSearchValue } = useSearchValue();
  const { addIngredient } = useIngredients();
  const { addExcluded } = useExcludedIngredients();
  const { data } = useIngredientsData(searchValue);

  /**
   * call loadRecipes to get Recipes from API
   */
  const onClickSearch = () => {
    loadRecipes();
  };

  /**
   * add value to list of ingredients and clear search input
   */
  const onClickAdd = () => {
    addIngredient(searchValue);
    setSearchValue('');
  };

  /**
   * add value to list of excluded ingredients and clear search input
   */
  const onClickExclude = () => {
    addExcluded(searchValue);
    setSearchValue('');
  };

  return (
    <div className={Styles.ingredientSearch}>
      <h2 className={Styles.headerText}>Welche Zutaten hast du zuhause?</h2>
      <div>
        <input
          type="text"
          onChange={(e) => setSearchValue(e.target.value)}
          value={searchValue}
          className={Styles.centerInput}
        />
        <br />
        <IngredientSuggestion ingredients={data} />
      </div>
      <div>
        <button className={Styles.input} onClick={onClickAdd}>
          Hinzufügen
        </button>
        <button className={Styles.input} onClick={onClickExclude}>
          Ausschließen
        </button>
      </div>
      <button className={Styles.search} onClick={onClickSearch}>
        Suchen
      </button>
    </div>
  );
};

IngredientSearch.defaultProps = {
  loadRecipes: undefined
};

IngredientSearch.propTypes = {
  loadRecipes: PropTypes.func
};
