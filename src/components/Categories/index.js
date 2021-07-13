import React from "react";
import { categoriesMock } from "../../mock";
import { formatCategory } from "../../utils";
import CategoryItem from "./Category";
import { CategoriesContainer } from "./styles";

import styles from "./index.module.css";

export function isActive(activeCategory, categoryItem) {
  return formatCategory(activeCategory) === formatCategory(categoryItem);
}

function Categories() {
  const [categorySelected, setCategorySelected] = React.useState("");

  const onSelectCategory = React.useCallback((categoryItem) => {
    let scroll = 0;
    if (categoryItem) {
      const id = `public-apis-${categoryItem}`;
      const cardItem = document.getElementById(id);
      scroll = cardItem.offsetTop - 68;
    }

    scrollTo(scroll);

    setCategorySelected(categoryItem);
  }, []);

  React.useEffect(() => {
    // context this
    setCategorySelected(categoriesMock[0]);
  }, []);

  function scrollTo(y) {
    window.scroll({
      top: y,
      behavior: "smooth",
    });
  }

  return (
    <aside className={styles.categoriesContainer}>
      <ul>
        {categoriesMock.map((category, x) => (
          <CategoryItem key={formatCategory(category)} onSelectCategory={onSelectCategory} category={category} selected={categorySelected}>
            {category}
          </CategoryItem>
        ))}
      </ul>
    </aside>
  );
}

export default React.memo(Categories);
