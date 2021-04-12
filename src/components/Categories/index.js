import React from "react";
import { categoriesMock } from "../../mock";
import { formatCategory } from "../../utils";
import { CategoriesContainer } from "./styles";

function isActive(activeCategory, categoryItem) {
  return formatCategory(activeCategory) === formatCategory(categoryItem);
}

function Categories({ selectCategory, activeCategory = "" }) {
  return (
    <CategoriesContainer>
      <ul>
        <li>
          <span>All</span>
        </li>
        {categoriesMock.map((i, x) => (
          <li key={x}>
            <span
              onMouseDown={() => {
                selectCategory(i);
              }}
              data-href={`#public-apis-${formatCategory(i)}`}
              className={isActive(activeCategory, i) ? "active" : ""}
            >
              {i}
            </span>
          </li>
        ))}
      </ul>
    </CategoriesContainer>
  );
}

export default Categories;
