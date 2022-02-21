import { useState } from 'react';
import _ from 'lodash';
import './CheckboxGroup.css';

export const CheckboxGroup = ({
  categories,
  categoriesSelected,
  handleFiltering,
}) => {
  const [selected, setSelected] = useState(categoriesSelected);

  const handleSelected = (categoryId) => {
    const alreadySelected = selected.indexOf(categoryId);
    const newSelectedArray = [...selected];

    // Category exists
    if (alreadySelected !== -1) {
      // Delete previously selected item, 1 means that only delete one item
      newSelectedArray.splice(alreadySelected, 1);
    } else {
      // Insert new selected item
      newSelectedArray.push(categoryId);
    }

    setSelected(newSelectedArray);
    handleFiltering(newSelectedArray);
  };

  const renderMultipleSelect = () => (
    <div className="checkbox-group">
      <ul>
        {categories.map((category) => {
          return (
            <li key={category._id}>
              <div className="form-check">
                <label className="form-check-label" htmlFor={category.name}>
                  {category.name}
                </label>
                <input
                  className="form-check-input"
                  type="checkbox"
                  value={category._id}
                  id={category.name}
                  onChange={() => handleSelected(category._id)}
                  checked={_.includes(selected, category._id)}
                />
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );

  return <>{renderMultipleSelect()}</>;
};
