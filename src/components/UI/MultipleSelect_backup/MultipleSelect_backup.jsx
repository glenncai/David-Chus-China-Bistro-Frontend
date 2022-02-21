import { useState } from 'react';
import './MultipleSelect.css';

export const MultipleSelect = ({ categories, handleFiltering }) => {
  const [selected, setSelected] = useState([]);

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
    <div>
      <ul>
        {categories.map((category) => {
          return (
            <li key={category._id}>
              <div className="form-check">
                <label className="form-check-label">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    onChange={() => handleSelected(category._id)}
                  />
                  {category.name}
                </label>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );

  return <>{renderMultipleSelect()}</>;
};
