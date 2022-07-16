import { IngredientSearch } from '../../components/IngredientSearch/IngredientSearch';
import Styles from './index.module.css';
import { IngredientTags } from '../../components/IngredientTags/IngredientTags';
import { Preferences } from '../../components/Preferences/Preferences';
import { useRecipesData } from '../../hooks/useRecipesData';
import { Result } from '../../components/Result/Result';
import { useIngredients } from '../../contexts/IngredientContext/IngredientContext';

const Page = () => {
  const { ingredientList } = useIngredients();

  const { loading, error, data, loadRecipes } = useRecipesData(ingredientList);

  return (
    <>
      <IngredientSearch loadRecipes={loadRecipes} className={Styles.flex} />
      <Preferences className={Styles.rightPart}></Preferences>
      <IngredientTags className={Styles.leftPart}></IngredientTags>
      <Result error={error} loading={loading} data={data} />
    </>
  );
};

export default Page;
