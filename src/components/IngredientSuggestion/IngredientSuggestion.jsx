import Styles from './IngredientSuggestion.module.css';
import { useSearchValue } from '../../contexts/SearchValueContext/SearchValueContext';
import PropTypes from 'prop-types';

export const IngredientSuggestion = ({ ingredients }) => {
  const { setSearchValue } = useSearchValue();

  const capitalize = (name) => {
    let newName = '';

    const severalWords = name.split(' ');
    severalWords.map((word) => {
      newName += word[0].toUpperCase() + word.slice(1) + ' ';
    });
    return newName.slice(0, -1);
  };

  if (ingredients === undefined || ingredients.length < 1) {
    return <></>;
  } else {
    return (
      <>
        <div>
          {ingredients.map((ingredient) => (
            <div
              className={Styles.suggestion}
              key={ingredient.attributes.name}
              onClick={() => setSearchValue(capitalize(ingredient.attributes.name))}>
              {capitalize(ingredient.attributes.name)}
            </div>
          ))}
        </div>
      </>
    );
  }
};

IngredientSuggestion.defaultProps = {
  ingredients: undefined
};

IngredientSuggestion.propTypes = {
  ingredients: PropTypes.array
};
