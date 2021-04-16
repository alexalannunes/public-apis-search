import React from "react";
import { categoriesMock } from "../../mock";
import { formatCategory } from "../../utils";
import CategoryItem from "./CategoryItem";
import { CategoriesContainer } from "./styles";

function isActive(activeCategory, categoryItem) {
  return formatCategory(activeCategory) === formatCategory(categoryItem);
}

function scrollTo(y) {
  window.scroll({
    top: y,
    behavior: "smooth",
  });
}

function Categories() {
  const [category, setCategory] = React.useState("");

  const onSelectCategory = React.useCallback((categoryItem) => {
    let scroll = 0;
    if (categoryItem) {
      const id = `public-apis-${categoryItem}`;
      const cardItem = document.getElementById(id);
      scroll = cardItem.offsetTop - 68;
    }

    scrollTo(scroll);

    setCategory(categoryItem);
  }, []);

  return (
    <CategoriesContainer>
      <ul>
        <CategoryItem>
          <span
            onClick={() => {
              onSelectCategory("");
            }}
            className={!category ? `active` : ""}
          >
            All
          </span>
        </CategoryItem>
        {categoriesMock.map((i, x) => (
          <CategoryItem key={formatCategory(i)}>
            <span
              onClick={() => {
                onSelectCategory(formatCategory(i));
              }}
              className={isActive(category, i) ? "active" : ""}
            >
              {i}
            </span>
          </CategoryItem>
        ))}
      </ul>
    </CategoriesContainer>
  );
}

export default React.memo(Categories);
