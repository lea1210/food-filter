import { IngredientSearch } from '../../components/IngredientSearch/IngredientSearch';
import Styles from './index.module.css';
import { IngredientTags } from '../../components/IngredientTags/IngredientTags';
import { Preferences } from '../../components/Preferences/Preferences';
import { useRecipesData } from '../../hooks/useRecipesData';
import { Result } from '../../components/Result/Result';
import { useIngredients } from '../../contexts/IngredientContext/IngredientContext';

const Page = () => {
  const { ingredientList } = useIngredients();

  const { loading, error, data, loadRecipes, firstSearch } = useRecipesData(ingredientList);

  return (
    <>
      <IngredientSearch loadRecipes={loadRecipes} className={Styles.flex} />
      <IngredientTags></IngredientTags>
      <Result error={error} loading={loading} data={data} firstSearch={firstSearch} />
      <Preferences></Preferences>
    </>
  );
};

export default Page;
