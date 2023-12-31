import { useIngredients } from '../../contexts/IngredientContext/IngredientContext';
import { useExcludedIngredients } from '../../contexts/ExcludedContext/ExcludedContext';
import IngredientList from '../IngredientList/IngredientList';
import Styles from './IngredientTags.module.css';

/**
 * displays all the given ingredienttags
 * @returns {JSX.Element}
 * @constructor
 */
export const IngredientTags = () => {
  const { ingredientList } = useIngredients();
  const { excludedList } = useExcludedIngredients();

  return (
    <>
      <div className={Styles.upperBox}>
        {ingredientList.length > 0 && <label className={Styles.headline}>Das hab ich</label>}
        <IngredientList ingredients={ingredientList} color={'dark'}></IngredientList>
      </div>
      <div className={Styles.lowerBox}>
        {excludedList.length > 0 && <label className={Styles.headline}>Das mag ich nicht</label>}
        <IngredientList ingredients={excludedList} color={'light'}></IngredientList>
      </div>
    </>
  );
};
